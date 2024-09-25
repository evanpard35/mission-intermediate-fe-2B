import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaUser, FaStar, FaSignOutAlt } from 'react-icons/fa';

function Header() {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const toggleMobileMenu = () => {
        setMobileMenuVisible(!mobileMenuVisible);
    };

    // Efek untuk menutup dropdown ketika klik di luar area dropdown
    useEffect(() => {
        // Fungsi untuk mendeteksi klik di luar area dropdown
        const handleClickOutside = (event) => {
            if (!event.target.closest('.profile-menu') && !event.target.closest('.mobile-menu')) {
                setDropdownVisible(false);
                setMobileMenuVisible(false);
            }
        };

        // Menambahkan event listener pada dokumen
        document.addEventListener('mousedown', handleClickOutside);

        // Membersihkan event listener saat komponen unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img src="./img/Vector.svg" alt="Logo" className="logo" />
                <span className="brand-name">CHILL</span>
                <a href="#" className="nav-link">Series</a>
                <a href="#" className="nav-link">Film</a>
                <a href="#" className="nav-link">Daftar Saya</a>
            </div>
            <div className="navbar-right">
                <div className="profile-menu" onClick={toggleDropdown}>
                    <img src="./img/avtar.png" alt="Profile" className="profile-icon" />
                    {dropdownVisible && (
                        <div className="dropdown-menu">
                            <a href="#" className="dropdown-item">
                                <FaUser /> Profil Saya
                            </a>
                            <a href="#" className="dropdown-item">
                                <FaStar /> Ubah Premium
                            </a>
                            <a href="#" className="dropdown-item">
                                <FaSignOutAlt /> Keluar
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Header;
