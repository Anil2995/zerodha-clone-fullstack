import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://zerodha-clone-backend-green.vercel.app';
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'https://dashboard-woad-delta-86.vercel.app';

function Signup() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        agreeTerms: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        setError(''); // Clear error on input change
    };

    const validateForm = () => {
        if (!formData.fullName.trim()) {
            setError('Please enter your full name');
            return false;
        }
        if (!formData.email.trim()) {
            setError('Please enter your email');
            return false;
        }
        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            setError('Please enter a valid email address');
            return false;
        }
        if (!formData.phone.trim()) {
            setError('Please enter your phone number');
            return false;
        }
        if (!/^[0-9]{10}$/.test(formData.phone)) {
            setError('Please enter a valid 10-digit phone number');
            return false;
        }
        if (formData.password.length < 8) {
            setError('Password must be at least 8 characters long');
            return false;
        }
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        if (!formData.agreeTerms) {
            setError('Please agree to the terms and conditions');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(`${API_URL}/auth/register`, {
                fullName: formData.fullName.trim(),
                email: formData.email.toLowerCase().trim(),
                phone: formData.phone.trim(),
                password: formData.password
            }, {
                withCredentials: true
            });

            if (response.data.status === 'success') {
                setSuccess('Account created successfully! Redirecting to dashboard...');

                // Store user info in localStorage for dashboard
                localStorage.setItem('zerodhaUser', JSON.stringify(response.data.user));

                setTimeout(() => {
                    window.location.href = DASHBOARD_URL;
                }, 2000);
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-padding" style={{
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            minHeight: 'calc(100vh - 200px)'
        }}>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 mb-4 mb-lg-0">
                        <div className="pe-lg-4">
                            <h1 className="mb-4" style={{ fontWeight: '700' }}>
                                Open a free
                                <span style={{ color: '#387ED1' }}> Zerodha </span>
                                account
                            </h1>

                            <div className="d-flex align-items-center mb-3">
                                <div className="feature-icon me-3" style={{
                                    width: '45px',
                                    height: '45px',
                                    fontSize: '1rem'
                                }}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <h5 className="mb-0">Free equity investments</h5>
                                    <small className="text-muted">Zero brokerage on delivery trades</small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <div className="feature-icon me-3" style={{
                                    width: '45px',
                                    height: '45px',
                                    fontSize: '1rem'
                                }}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <h5 className="mb-0">Flat ₹20 per trade</h5>
                                    <small className="text-muted">For intraday and F&O orders</small>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-3">
                                <div className="feature-icon me-3" style={{
                                    width: '45px',
                                    height: '45px',
                                    fontSize: '1rem'
                                }}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <div>
                                    <h5 className="mb-0">₹1,00,000 virtual balance</h5>
                                    <small className="text-muted">Practice trading risk-free</small>
                                </div>
                            </div>

                            <img
                                src="media/images/signup.png"
                                alt="Signup illustration"
                                className="img-fluid mt-4"
                                style={{
                                    maxWidth: '90%',
                                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.1))'
                                }}
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="feature-card" style={{
                            maxWidth: '500px',
                            margin: '0 auto',
                            padding: '2.5rem'
                        }}>
                            <h3 className="text-center mb-4">Create your account</h3>

                            {error && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <i className="fas fa-exclamation-circle me-2"></i>
                                    {error}
                                </div>
                            )}

                            {success && (
                                <div className="alert alert-success d-flex align-items-center" role="alert">
                                    <i className="fas fa-check-circle me-2"></i>
                                    {success}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>
                                        Full Name
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-user text-muted"></i>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="fullName"
                                            placeholder="Enter your full name"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            required
                                            style={{ padding: '12px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>
                                        Email Address
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-envelope text-muted"></i>
                                        </span>
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            placeholder="Enter your email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ padding: '12px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>
                                        Phone Number
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-phone text-muted"></i>
                                        </span>
                                        <span className="input-group-text bg-white">+91</span>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            placeholder="Enter 10-digit mobile number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            pattern="[0-9]{10}"
                                            required
                                            style={{ padding: '12px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>
                                        Password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-lock text-muted"></i>
                                        </span>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            name="password"
                                            placeholder="Create a password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            minLength="8"
                                            required
                                            style={{ padding: '12px' }}
                                        />
                                        <button
                                            type="button"
                                            className="input-group-text bg-white"
                                            onClick={() => setShowPassword(!showPassword)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} text-muted`}></i>
                                        </button>
                                    </div>
                                    <small className="text-muted">Minimum 8 characters</small>
                                </div>

                                <div className="mb-3">
                                    <label className="form-label" style={{ fontWeight: '500' }}>
                                        Confirm Password
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-lock text-muted"></i>
                                        </span>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            name="confirmPassword"
                                            placeholder="Confirm your password"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            minLength="8"
                                            required
                                            style={{ padding: '12px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="agreeTerms"
                                            name="agreeTerms"
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                            required
                                        />
                                        <label className="form-check-label text-muted" htmlFor="agreeTerms">
                                            I agree to the <a href="#">Terms & Conditions</a> and <a href="#">Privacy Policy</a>
                                        </label>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary-custom w-100 mb-3"
                                    disabled={isSubmitting}
                                    style={{ padding: '16px' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Creating account...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-rocket me-2"></i>
                                            Sign up for free
                                        </>
                                    )}
                                </button>

                                <p className="text-center text-muted mb-0">
                                    Already have an account?{' '}
                                    <Link
                                        to="/login"
                                        style={{ fontWeight: '600' }}
                                    >
                                        Login
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;