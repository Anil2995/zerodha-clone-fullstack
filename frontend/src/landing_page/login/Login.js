import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'https://zerodha-clone-backend-green.vercel.app';
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || 'https://dashboard-woad-delta-86.vercel.app';

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!formData.email || !formData.password) {
            setError('Please enter both email and password');
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await axios.post(`${API_URL}/auth/login`, {
                email: formData.email.toLowerCase().trim(),
                password: formData.password
            }, {
                withCredentials: true
            });

            if (response.data.status === 'success') {
                // Store user info in localStorage for dashboard
                localStorage.setItem('zerodhaUser', JSON.stringify(response.data.user));

                // Redirect to dashboard
                window.location.href = DASHBOARD_URL;
            }
        } catch (err) {
            console.error('Login error:', err);
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="section-padding" style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            minHeight: 'calc(100vh - 200px)',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-5">
                        <div className="text-center mb-4">
                            <img
                                src="media/images/logo.svg"
                                alt="Zerodha"
                                style={{ width: '180px', filter: 'brightness(0) invert(1)' }}
                            />
                            <h2 className="mt-4" style={{ color: 'white', fontWeight: '600' }}>
                                Welcome back!
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.8)' }}>
                                Login to access your trading dashboard
                            </p>
                        </div>

                        <div className="feature-card" style={{
                            padding: '2.5rem',
                            borderRadius: '20px',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                        }}>
                            <h3 className="text-center mb-4">Login to Kite</h3>

                            {error && (
                                <div className="alert alert-danger d-flex align-items-center" role="alert">
                                    <i className="fas fa-exclamation-circle me-2"></i>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
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
                                            style={{ padding: '14px' }}
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label d-flex justify-content-between" style={{ fontWeight: '500' }}>
                                        Password
                                        <a href="#" className="text-primary small">Forgot password?</a>
                                    </label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white">
                                            <i className="fas fa-lock text-muted"></i>
                                        </span>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            className="form-control"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            style={{ padding: '14px' }}
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
                                </div>

                                <button
                                    type="submit"
                                    className="btn-primary-custom w-100 mb-4"
                                    disabled={isSubmitting}
                                    style={{ padding: '16px', fontSize: '1.1rem' }}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                            Logging in...
                                        </>
                                    ) : (
                                        <>
                                            <i className="fas fa-sign-in-alt me-2"></i>
                                            Login
                                        </>
                                    )}
                                </button>

                                <div className="text-center">
                                    <p className="text-muted mb-3">
                                        Don't have an account?{' '}
                                        <Link to="/signup" style={{ fontWeight: '600' }}>
                                            Sign up for free
                                        </Link>
                                    </p>

                                    <div className="d-flex align-items-center my-3">
                                        <hr className="flex-grow-1" />
                                        <span className="px-3 text-muted small">OR</span>
                                        <hr className="flex-grow-1" />
                                    </div>

                                    <p className="text-muted small mb-0">
                                        <i className="fas fa-shield-alt me-1"></i>
                                        Protected by industry-leading security
                                    </p>
                                </div>
                            </form>
                        </div>

                        <div className="text-center mt-4">
                            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem' }}>
                                By logging in, you agree to our{' '}
                                <a href="#" style={{ color: 'white' }}>Terms of Service</a>
                                {' '}and{' '}
                                <a href="#" style={{ color: 'white' }}>Privacy Policy</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Login;
