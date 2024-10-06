import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css'; 

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();


        const userData = JSON.parse(localStorage.getItem('user'));


        if (userData && userData.username === username && userData.password === password) {
            navigate('/');
        } else {
            alert("Username atau kata sandi salah.");
        }
    };

    return (
        <div className="auth-container" style={{ backgroundImage: 'url(/img/background.jpeg)' }}>
            <div className="auth-form">
                <div className='design-logo'>
                    <div className="logos">
                        <img src="./img/Vector.svg" alt='logo'></img>
                    </div>
                    <div className="chills">
                        <img src="./img/CHILL.svg" alt='CHILL'></img>
                    </div>
                </div>
                <p className="auth-subtitle-masuk">Masuk</p>
                <p className="auth-subtitle">Selamat datang kembali!</p>
                <form onSubmit={handleLogin}>
                    <div className="auth-input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Masukkan username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="auth-input-group">
                        <label htmlFor="password">Kata Sandi</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Masukkan kata sandi"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="auth-links">
                        <a href="/register">Belum punya akun? Daftar</a>
                        <a href="/forgot-password">Lupa kata sandi?</a>
                    </div>
                    <button type="submit" className="auth-btn">Masuk</button>
                    <div className="auth-or">Atau</div>
                    <button type="button" className="auth-btn-google">
                        <i className="fab fa-google"></i> Masuk dengan Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
