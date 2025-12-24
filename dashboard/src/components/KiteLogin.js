import React, { useState } from "react";
import axios from "axios";
import { API_URL, LANDING_PAGE_URL } from "../constants";
import "./KiteLogin.css";

const KiteLogin = ({ onLoginSuccess }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (!formData.email || !formData.password) {
            setError("Please enter both email and password");
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

            if (response.data.status === "success") {
                // Store user info in localStorage
                localStorage.setItem("zerodhaUser", JSON.stringify(response.data.user));

                // Call the success callback to update parent state
                if (onLoginSuccess) {
                    onLoginSuccess(response.data.user);
                }
            }
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.message || "Login failed. Please check your credentials.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="kite-login-container">
            <div className="kite-login-left">
                <img
                    src="https://zerodha.com/static/images/kite-logo.svg"
                    alt="Kite"
                    className="kite-logo"
                />
                <h1>Kite</h1>
                <p>Sign in to Kite. Don't have an account?</p>
                <a
                    href={`${LANDING_PAGE_URL}/signup`}
                    className="signup-link"
                >
                    Open an account
                </a>
            </div>

            <div className="kite-login-right">
                <div className="login-card">
                    <h2>Login to Kite</h2>

                    {error && (
                        <div className="error-message">
                            <span className="error-icon">⚠️</span>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>
                                Password
                                <a href={`${LANDING_PAGE_URL}/support`} className="forgot-link">
                                    Forgot?
                                </a>
                            </label>
                            <div className="password-input">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Enter your password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <button
                                    type="button"
                                    className="toggle-password"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="login-btn"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span>
                                    Logging in...
                                </>
                            ) : (
                                "Login"
                            )}
                        </button>
                    </form>

                    <div className="login-footer">
                        <p>
                            <span className="lock-icon">🔒</span>
                            Protected by industry-leading security
                        </p>
                    </div>
                </div>

                <div className="help-links">
                    <a href={`${LANDING_PAGE_URL}/support`}>Help</a>
                    <span>•</span>
                    <a href={`${LANDING_PAGE_URL}/about`}>About Zerodha</a>
                    <span>•</span>
                    <a href={`${LANDING_PAGE_URL}/pricing`}>Pricing</a>
                </div>
            </div>
        </div>
    );
};

export default KiteLogin;
