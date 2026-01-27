import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <div className="footer-logo">
                                <img src="/images/logo.png" alt="Rikuruma Pentecostal Church Nyamira" className="footer-logo-img" />
                            </div>
                            <p>A Spirit-filled church spreading the Gospel, transforming lives, and building God's Kingdom in Nyamira and beyond.</p>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/profile.php?id=61579399991219" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                <a href="#"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.youtube.com/@savedbychriststainedbylove" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a href="https://www.tiktok.com/@rikurumapentecostal" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
                                <a href="#"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h4>Quick Links</h4>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/ministries">Ministries</Link></li>
                                <li><Link to="/programs">Programs</Link></li>
                                <li><Link to="/events">Events</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Our Ministries</h4>
                            <ul>
                                <li><Link to="/ministries#evangelism">Evangelism & Missions</Link></li>
                                <li><Link to="/ministries#discipleship">Discipleship</Link></li>
                                <li><Link to="/ministries#youth-ministry">Youth Ministry</Link></li>
                                <li><Link to="/ministries#women-ministry">Women Ministry</Link></li>
                                <li><Link to="/ministries#men-ministry">Men Ministry</Link></li>
                                <li><Link to="/ministries#community-outreach">Community Outreach</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Contact Info</h4>
                            <ul className="contact-info">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                    <span>Nyamira Town<br />Nyamira County, Kenya</span>
                                </li>
                                <li>
                                    <i className="fas fa-phone"></i>
                                    <span>+254 762 053 876</span>
                                </li>
                                <li>
                                    <i className="fas fa-envelope"></i>
                                    <span>communityofbelieversinjesus@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-content">
                        <p>&copy; 2024 Rikuruma Pentecostal Church Nyamira. All Rights Reserved.</p>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
