const express = require('express');
const router = express.Router();
const passport = require('passport');
const { UserModel } = require('../model/UserModel');

// ============================================
// Register New User
// ============================================
router.post('/register', async (req, res) => {
    try {
        const { email, password, fullName, phone } = req.body;

        // Validation
        if (!email || !password || !fullName || !phone) {
            return res.status(400).json({
                status: 'error',
                message: 'All fields are required'
            });
        }

        // Check password strength
        if (password.length < 8) {
            return res.status(400).json({
                status: 'error',
                message: 'Password must be at least 8 characters long'
            });
        }

        // Create new user
        const newUser = new UserModel({
            email: email.toLowerCase().trim(),
            fullName: fullName.trim(),
            phone: phone.trim()
        });

        // Register user with passport-local-mongoose
        const registeredUser = await UserModel.register(newUser, password);

        // Auto-login after registration
        req.login(registeredUser, (err) => {
            if (err) {
                console.error('Auto-login error:', err);
                return res.status(200).json({
                    status: 'success',
                    message: 'Registration successful! Please login.',
                    user: {
                        id: registeredUser._id,
                        email: registeredUser.email,
                        fullName: registeredUser.fullName
                    }
                });
            }

            return res.status(201).json({
                status: 'success',
                message: 'Registration successful!',
                user: {
                    id: registeredUser._id,
                    email: registeredUser.email,
                    fullName: registeredUser.fullName,
                    phone: registeredUser.phone,
                    balance: registeredUser.balance
                }
            });
        });

    } catch (error) {
        console.error('Registration error:', error);

        if (error.name === 'UserExistsError') {
            return res.status(409).json({
                status: 'error',
                message: 'An account with this email already exists'
            });
        }

        res.status(500).json({
            status: 'error',
            message: 'Registration failed',
            error: error.message
        });
    }
});

// ============================================
// Login User
// ============================================
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'An error occurred during login',
                error: err.message
            });
        }

        if (!user) {
            return res.status(401).json({
                status: 'error',
                message: info?.message || 'Invalid email or password'
            });
        }

        req.login(user, (loginErr) => {
            if (loginErr) {
                return res.status(500).json({
                    status: 'error',
                    message: 'Login failed',
                    error: loginErr.message
                });
            }

            return res.json({
                status: 'success',
                message: 'Login successful!',
                user: {
                    id: user._id,
                    email: user.email,
                    fullName: user.fullName,
                    phone: user.phone,
                    balance: user.balance
                }
            });
        });
    })(req, res, next);
});

// ============================================
// Logout User
// ============================================
router.post('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.status(500).json({
                status: 'error',
                message: 'Logout failed'
            });
        }
        res.json({
            status: 'success',
            message: 'Logged out successfully'
        });
    });
});

// ============================================
// Get Current User
// ============================================
router.get('/user', (req, res) => {
    if (req.isAuthenticated()) {
        return res.json({
            status: 'success',
            isAuthenticated: true,
            user: {
                id: req.user._id,
                email: req.user.email,
                fullName: req.user.fullName,
                phone: req.user.phone,
                balance: req.user.balance
            }
        });
    }

    res.json({
        status: 'success',
        isAuthenticated: false,
        user: null
    });
});

// ============================================
// Check if Email Exists
// ============================================
router.get('/check-email/:email', async (req, res) => {
    try {
        const user = await UserModel.findOne({ email: req.params.email.toLowerCase() });
        res.json({
            exists: !!user
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to check email'
        });
    }
});

module.exports = router;
