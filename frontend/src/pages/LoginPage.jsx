import React, { useState } from 'react';
import '../pages/LoginPage.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../api/auth'; 
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize the navigate function

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await loginUser(email, password);
            console.log('Login successful:', userData);
            
            // Redirect to home page
            navigate('/home'); // Replace '/home' with your home route
        } catch (err) {
            setError(err);
        }
    };

    return (
        <div className="page-container">
            <div className="content-wrap">
                <div className="container">
                    <div className="login-section">
                        <img src="/logo.png" alt="Logo" className="logo" />
                        <h1>Welcome Back</h1>
                        <p>Today is a new day. It’s your day. You shape it. Sign in to start ordering.</p>
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="btn">Sign In</button>
                        </form>
                        <p><a href="#">Forgot Password?</a></p>
                        <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                    <div className="right-section">
                        <img src="/Rectangle.png" alt="Decorative Background" className="right-section-image" />
                    </div>
                </div>
            </div>
            <footer className="footer">
                {/* Footer content */}
            </footer>
        </div>
    );
};

export default LoginPage;
