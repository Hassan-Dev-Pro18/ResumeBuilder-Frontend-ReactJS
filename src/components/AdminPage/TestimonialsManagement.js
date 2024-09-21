import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AdminPage.css";
import Navbar1 from '../Navbar/Navbar1';

const TestimonialsManagement = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch contact messages from backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:4000/testimonials/getAllTestimonials'); // Replace with actual API endpoint
            setMessages(response.data.Testimonials);
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    

    // Handle deleting a message
    const handleDeleteMessage = async (messageId) => {
        try {
            await axios.delete(`http://localhost:4000/testimonials/${messageId}`); // Replace with actual API
            await fetchMessages();
        } catch (error) {
            console.error('Error deleting message:', error);
        }
    };

    return (
        <div>
            {/* Navbar is always at the top */}
            <Navbar1 />
            
            {/* Content below the navbar */}
            <div className="contact-messages-management">
                <h2 className="contactManagement-h2">Testimonials Management</h2>
                
                {/* Show loading spinner or text while messages are being fetched */}
                {loading ? (
                    <div>Loading Testimonials...</div>
                ) : (
                    <div className='table-align'>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Rate Us</th>
                                <th>Message/Feedback</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td>{message.Name}</td>
                                    <td>{message.RateUs}</td>
                                    <td>{message.SaySomething}</td>
                                    
                                    <td>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDeleteMessage(message.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TestimonialsManagement;
