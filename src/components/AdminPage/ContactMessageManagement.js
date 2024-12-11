import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./AdminPage.css";
import Navbar1 from '../Navbar/Navbar1';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMessagesManagement = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [replyMessage, setReplyMessage] = useState('');
    const [selectedMessageId, setSelectedMessageId] = useState(null);
    const [selectedMessageEmail, setSelectedMessageEmail] = useState('');
    const [selectedMessageUsername, setSelectedMessageUsername] = useState('');

    // Fetch contact messages from backend
    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:4000/messageContact/'); // Replace with actual API endpoint
            setMessages(response.data.ContactMessage);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching messages:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    // Handle replying to a message
    const handleReply = async () => {
        if (!selectedMessageId || !replyMessage || !selectedMessageEmail || !selectedMessageUsername) return;
        try {
            await axios.post(
                `http://localhost:4000/messageContact/sendReply/${selectedMessageEmail}/${selectedMessageUsername}/${replyMessage}`
            );
            // Clear reply and refetch messages
            setReplyMessage('');
            setSelectedMessageId(null);
            setSelectedMessageEmail('');
            setSelectedMessageUsername('');
            await fetchMessages();
            toast.success("Message sent successfully!");
        } catch (error) {
            console.error('Error replying to message:', error);
        }
    };

    // Handle deleting a message
    const handleDeleteMessage = async (messageId) => {
        try {
            await axios.delete(`http://localhost:4000/messageContact/${messageId}`); // Replace with actual API
            await fetchMessages();
            toast.success("Message Delete successfully!");
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
                <h2 className="contactManagement-h2">Contact Messages Management</h2>
                
                {/* Show loading spinner or text while messages are being fetched */}
                {loading ? (
                    <div>Loading messages...</div>
                ) : (
                    <div className='table-align'>
                    <table className="user-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Reply</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((message) => (
                                <tr key={message.id}>
                                    <td>{message.Name}</td>
                                    <td>{message.Email}</td>
                                    <td>{message.Message}</td>
                                    <td>
                                        {selectedMessageId === message.id ? (
                                            <>
                                                <textarea
                                                    value={replyMessage}
                                                    onChange={(e) => setReplyMessage(e.target.value)}
                                                    placeholder="Type your reply here"
                                                />
                                                <button
                                                    className="reply-btn"
                                                    onClick={handleReply}
                                                >
                                                    Send Reply
                                                </button>
                                            </>
                                        ) : (
                                            <button
                                                className="reply-btn"
                                                onClick={() => {
                                                    setSelectedMessageId(message.id);
                                                    setSelectedMessageEmail(message.Email);
                                                    setSelectedMessageUsername(message.Name);
                                                    setReplyMessage('');
                                                }}
                                            >
                                                Reply
                                            </button>
                                        )}
                                    </td>
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
                <ToastContainer />
            </div>
        </div>
    );
};

export default ContactMessagesManagement;
