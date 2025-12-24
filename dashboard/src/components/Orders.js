import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../constants";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get(`${API_URL}/allOrders`);
      setOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`${API_URL}/deleteOrder/${id}`);
      fetchOrders(); // Refresh orders list
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (loading) {
    return (
      <div className="orders">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading orders...</p>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <div className="no-orders-icon">📋</div>
          <h3>No orders yet</h3>
          <p>You haven't placed any orders today</p>
          <Link to="/" className="btn-primary">
            Start Trading
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-header">
        <h3 className="title">Orders ({orders.length})</h3>
        <div className="order-filters">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Pending</button>
          <button className="filter-btn">Executed</button>
        </div>
      </div>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Type</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Value</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td className="order-time">
                  {order.createdAt ? formatDate(order.createdAt) : 'N/A'}
                </td>
                <td>
                  <span className={`order-type ${order.mode?.toLowerCase()}`}>
                    {order.mode}
                  </span>
                </td>
                <td className="order-name">{order.name}</td>
                <td>{order.qty}</td>
                <td>₹{order.price?.toFixed(2)}</td>
                <td>₹{(order.qty * order.price)?.toFixed(2)}</td>
                <td>
                  <span className="status-badge executed">Executed</span>
                </td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteOrder(order._id)}
                    title="Delete order"
                  >
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;