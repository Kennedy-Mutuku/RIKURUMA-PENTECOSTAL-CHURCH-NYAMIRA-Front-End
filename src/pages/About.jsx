import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-page">
            {/* Page Header */}
            <div className="page-header about-header">
                <div className="container">
                    <h1>About Us</h1>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link> / <span>About Us</span>
                    </div>
                </div>
            </div>

            {/* Who We Are Section */}
            <section id="who-we-are" className="section about-section">
                <div className="container">
                    <div className="about-row">
                        <div className="about-text">
                            <span className="section-subtitle">Who We Are</span>
                            <h2 className="section-title">Our Identity in Christ</h2>
                            <p className="lead">
                                Rikuruma Pentecostal Church is a Christ-centered, Bible-believing ministry dedicated to preaching the Gospel of Jesus Christ and raising disciples through the power of the Holy Spirit. Guided by the Word of God, we believe in the sovereignty and eternal existence of God.
                            </p>
                            <p className="location-info">
                                <i className="fas fa-map-marker-alt"></i> <strong>Located in Magwagwa, Nyamira County, Kenya</strong>
                            </p>
                            <div className="about-description">
                                <p>
                                    Join us as we worship in spirit and in truth and grow together in faith. Our community is built on the foundation of God's Word and empowered by the Holy Spirit.
                                </p>
                                <p>
                                    Through dynamic worship services, powerful prayer meetings, and passionate community outreach, we are committed to being a beacon of hope and light in Nyamira and beyond.
                                </p>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src="/images/about-church.jpg" alt="Rikuruma Pentecostal Church" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission Section */}
            <section id="vision-mission" className="section vision-mission-section">
                <div className="container">
                    <div className="vm-grid">
                        <div className="vm-box">
                            <div className="vm-icon"><i className="fas fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To be a Spirit-empowered church that transforms Nyamira and beyond through the Gospel, raising up disciples who impact their generation for Christ.</p>
                        </div>
                        <div className="vm-box">
                            <div className="vm-icon"><i className="fas fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To worship God passionately, preach the Gospel boldly, disciple believers faithfully, and serve our community compassionately in the power of the Holy Spirit.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statement of Faith */}
            <section id="statement-of-faith" className="section faith-section">
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">What We Believe</h2>
                        <p className="section-intro">Fundamental Truths of Rikuruma Pentecostal Church</p>
                    </div>
                    <div className="faith-grid">
                        <div className="faith-item">
                            <h4>The Word of God</h4>
                            <p>We believe the Bible is the inspired and only infallible and authoritative Word of God.</p>
                        </div>
                        <div className="faith-item">
                            <h4>The Holy Trinity</h4>
                            <p>We believe that there is one God, eternally existent in three persons: Father, Son and Holy Spirit.</p>
                        </div>
                        <div className="faith-item">
                            <h4>Salvation</h4>
                            <p>We believe that for the salvation of lost and sinful people, regeneration by the Holy Spirit is absolutely essential.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
