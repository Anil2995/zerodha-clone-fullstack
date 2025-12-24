import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";
import { API_URL } from "../constants";
import "./TopBar.css";

const TopBar = () => {
    const [marketData, setMarketData] = useState({
        nifty50: { value: 19674.25, change: 0.58 },
        sensex: { value: 65721.25, change: 0.42 }
    });
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const fetchMarketData = async () => {
            try {
                const response = await axios.get(`${API_URL}/market-data`);
                if (response.data) {
                    setMarketData(response.data);
                }
            } catch (error) {
                console.log("Using default market data");
            }
        };

        fetchMarketData();
        const marketInterval = setInterval(fetchMarketData, 10000);
        const timeInterval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => {
            clearInterval(marketInterval);
            clearInterval(timeInterval);
        };
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const isMarketOpen = () => {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const day = now.getDay();
        if (day === 0 || day === 6) return false;
        const currentMinutes = hours * 60 + minutes;
        return currentMinutes >= 555 && currentMinutes <= 930;
    };

    return (
        <div className="topbar">
            <div className="indices-container">
                <div className="index-item">
                    <span className="index-name">NIFTY 50</span>
                    <span className="index-value">{marketData.nifty50?.value?.toLocaleString('en-IN')}</span>
                    <span className={`index-change ${marketData.nifty50?.change >= 0 ? 'positive' : 'negative'}`}>
                        {marketData.nifty50?.change >= 0 ? '+' : ''}{marketData.nifty50?.change?.toFixed(2)}%
                    </span>
                </div>
                <div className="index-item">
                    <span className="index-name">SENSEX</span>
                    <span className="index-value">{marketData.sensex?.value?.toLocaleString('en-IN')}</span>
                    <span className={`index-change ${marketData.sensex?.change >= 0 ? 'positive' : 'negative'}`}>
                        {marketData.sensex?.change >= 0 ? '+' : ''}{marketData.sensex?.change?.toFixed(2)}%
                    </span>
                </div>
                <div className="time-container">
                    <span className="current-time">{formatTime(currentTime)}</span>
                    <span className={`market-status ${isMarketOpen() ? 'open' : 'closed'}`}>
                        {isMarketOpen() ? '● Market Open' : '● Market Closed'}
                    </span>
                </div>
            </div>
            <Menu />
        </div>
    );
};

export default TopBar;
