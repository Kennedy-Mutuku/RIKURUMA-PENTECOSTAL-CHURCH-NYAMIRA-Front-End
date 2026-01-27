import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        setActiveDropdown(null);
    };

    const toggleDropdown = (e, index) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            setActiveDropdown(activeDropdown === index ? null : index);
        }
    };

    return (
        <>
            {/* Top Bar */}
            <div className="top-bar">
                <div className="container">
                    <div className="top-bar-content">
                        <div className="top-bar-left">
                            <span><i className="fas fa-envelope"></i> communityofbelieversinjesus@gmail.com</span>
                            <span><i className="fas fa-phone"></i> +254 762 053 876</span>
                        </div>
                        <div className="top-bar-right">
                            <a href="https://www.facebook.com/profile.php?id=61579399991219" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.youtube.com/@savedbychriststainedbylove" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                            <a href="https://www.tiktok.com/@rikurumapentecostal" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                            <a href="#"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header */}
            <header className={`header ${mobileMenuOpen ? 'nav-open' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <Link to="/" className="logo-link">
                                <img src="/images/logo.png" alt="Rikuruma Pentecostal Church Nyamira" className="logo-img" />
                                <div className="logo-text">
                                    <h1>RIKURUMA</h1>
                                    <span>PENTECOSTAL CHURCH</span>
                                </div>
                            </Link>
                        </div>
                        <nav className="main-nav">
                            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                                <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
                                <li className={`dropdown ${activeDropdown === 1 ? 'active' : ''}`}>
                                    <NavLink to="/about" onClick={(e) => toggleDropdown(e, 1)}>About Us <i className="fas fa-chevron-down"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/about#who-we-are" onClick={() => setMobileMenuOpen(false)}>Who We Are</Link></li>
                                        <li><Link to="/about#our-history" onClick={() => setMobileMenuOpen(false)}>Our History</Link></li>
                                        <li><Link to="/about#vision-mission" onClick={() => setMobileMenuOpen(false)}>Vision & Mission</Link></li>
                                        <li><Link to="/about#leadership" onClick={() => setMobileMenuOpen(false)}>Leadership Team</Link></li>
                                        <li><Link to="/about#statement-of-faith" onClick={() => setMobileMenuOpen(false)}>Statement of Faith</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${activeDropdown === 2 ? 'active' : ''}`}>
                                    <NavLink to="/ministries" onClick={(e) => toggleDropdown(e, 2)}>Ministries <i className="fas fa-chevron-down"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/ministries#evangelism" onClick={() => setMobileMenuOpen(false)}>Evangelism</Link></li>
                                        <li><Link to="/ministries#discipleship" onClick={() => setMobileMenuOpen(false)}>Discipleship</Link></li>
                                        <li><Link to="/ministries#youth-ministry" onClick={() => setMobileMenuOpen(false)}>Youth Ministry</Link></li>
                                        <li><Link to="/ministries#women-ministry" onClick={() => setMobileMenuOpen(false)}>Women Ministry</Link></li>
                                        <li><Link to="/ministries#men-ministry" onClick={() => setMobileMenuOpen(false)}>Men Ministry</Link></li>
                                        <li><Link to="/ministries#children-ministry" onClick={() => setMobileMenuOpen(false)}>Children Ministry</Link></li>
                                        <li><Link to="/ministries#community-outreach" onClick={() => setMobileMenuOpen(false)}>Community Outreach</Link></li>
                                    </ul>
                                </li>
                                <li className={`dropdown ${activeDropdown === 3 ? 'active' : ''}`}>
                                    <NavLink to="/programs" onClick={(e) => toggleDropdown(e, 3)}>Programs <i className="fas fa-chevron-down"></i></NavLink>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/programs#missions" onClick={() => setMobileMenuOpen(false)}>Mission Trips</Link></li>
                                        <li><Link to="/programs#bible-study" onClick={() => setMobileMenuOpen(false)}>Bible Study</Link></li>
                                        <li><Link to="/programs#prayer" onClick={() => setMobileMenuOpen(false)}>Prayer Programs</Link></li>
                                        <li><Link to="/programs#training" onClick={() => setMobileMenuOpen(false)}>Leadership Training</Link></li>
                                    </ul>
                                </li>
                                <li><NavLink to="/events" onClick={() => setMobileMenuOpen(false)}>Events</NavLink></li>
                                <li><NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)}>Gallery</NavLink></li>
                                <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
                                <li className="mobile-only"><Link to="/donate" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Donate Now</Link></li>
                            </ul>
                            <div className="nav-buttons">
                                <Link to="/donate" className="btn btn-primary">Donate</Link>
                            </div>
                            <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
