import React, { useState, useEffect } from "react";
import "./WelcomeModal.css";

const WelcomeModal = ({ user, onClose }) => {
    const [step, setStep] = useState(1);
    const totalSteps = 4;

    const features = [
        {
            icon: "📊",
            title: "Track Your Portfolio",
            description: "Monitor your holdings, positions, and overall portfolio performance in real-time.",
            image: "📈"
        },
        {
            icon: "⚡",
            title: "Quick Trading",
            description: "Buy and sell stocks instantly with our intuitive trading interface.",
            image: "💹"
        },
        {
            icon: "📱",
            title: "Market Indices",
            description: "Stay updated with live NIFTY 50 and SENSEX data refreshing every 10 seconds.",
            image: "📰"
        },
        {
            icon: "💰",
            title: "Manage Funds",
            description: "Add or withdraw funds seamlessly with UPI and net banking support.",
            image: "🏦"
        }
    ];

    const handleNext = () => {
        if (step < totalSteps) {
            setStep(step + 1);
        } else {
            localStorage.setItem("zerodhaWelcomeSeen", "true");
            onClose();
        }
    };

    const handleSkip = () => {
        localStorage.setItem("zerodhaWelcomeSeen", "true");
        onClose();
    };

    const currentFeature = features[step - 1];

    return (
        <div className="welcome-overlay">
            <div className="welcome-modal">
                {/* Progress Bar */}
                <div className="welcome-progress">
                    {features.map((_, index) => (
                        <div
                            key={index}
                            className={`progress-dot ${index < step ? 'active' : ''}`}
                        />
                    ))}
                </div>

                {/* Header */}
                <div className="welcome-header">
                    <span className="welcome-emoji">{currentFeature.image}</span>
                </div>

                {/* Content */}
                <div className="welcome-content">
                    <div className="feature-icon">{currentFeature.icon}</div>
                    <h2>{currentFeature.title}</h2>
                    <p>{currentFeature.description}</p>
                </div>

                {/* User Welcome (on first step) */}
                {step === 1 && user && (
                    <div className="user-welcome">
                        <div className="user-avatar">
                            {user.fullName?.charAt(0) || 'U'}
                        </div>
                        <p>Welcome, <strong>{user.fullName || 'Trader'}!</strong></p>
                        <span className="balance-badge">
                            Starting Balance: ₹{(user.balance || 100000).toLocaleString("en-IN")}
                        </span>
                    </div>
                )}

                {/* Actions */}
                <div className="welcome-actions">
                    <button className="btn-skip" onClick={handleSkip}>
                        Skip
                    </button>
                    <button className="btn-next" onClick={handleNext}>
                        {step === totalSteps ? "Get Started" : "Next"}
                        <span className="btn-arrow">→</span>
                    </button>
                </div>

                {/* Step Counter */}
                <div className="step-counter">
                    {step} of {totalSteps}
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
