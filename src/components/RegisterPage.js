import React from 'react';
import './Auth.css';

const RegisterPage = () => {
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
                <p className="auth-subtitle-daftar">Daftar</p>
                <p className="auth-subtitle">Selamat datang!</p>
                <form>
                    <div className="auth-input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" id="username" placeholder="Masukkan username" />
                    </div>
                    <div className="auth-input-group">
                        <label htmlFor="password">Kata Sandi</label>
                        <input type="password" id="password" placeholder="Masukkan kata sandi" />
                    </div>
                    <div className="auth-input-group">
                        <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
                        <input type="password" id="confirm-password" placeholder="Masukkan kata sandi" />
                    </div>
                    <div className="auth-links">
                        <a href="/login">Sudah punya akun? Masuk</a>
                    </div>
                    <button type="submit" className="auth-btn">Daftar</button>
                    <div className="auth-or">Atau</div>
                    <button type="button" className="auth-btn-google">
                        <i className="fab fa-google"></i> Daftar dengan Google
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
