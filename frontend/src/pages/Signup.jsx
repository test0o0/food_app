import React, { useState } from 'react';
import '../pages/Signup.css';
import { Link } from 'react-router-dom';
import { registerUser } from '../api/auth'; // Adjust the path as needed

const SignUpPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(name, email, password);
            alert('Registration successful! Please log in.');
            // Redirect to the login page if necessary
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="container">
                    <div className="signup-section">
                        <img src="/logo.png" alt="Logo" className="logo" />
                        <h1>Create an Account</h1>
                        <p>Sign up to start your journey with us. It's quick and easy!</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="email" 
                                    placeholder="Email" 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className="form-group">
                                <input 
                                    type="password" 
                                    placeholder="Password (at least 8 characters)" 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            {error && <p className="error">{error}</p>}
                            <button type="submit" className="btn">Sign Up</button>
                        </form>
                        <p>Already have an account? <Link to="/">Log In</Link></p>
                    </div>
                    <div className="right-section">
                        <img src="/Rectangle.png" alt="Decorative Background" className="right-section-image" />
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default SignUpPage;
