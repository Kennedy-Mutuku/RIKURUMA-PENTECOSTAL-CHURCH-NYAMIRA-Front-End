import React from 'react';
import { Link } from 'react-router-dom';

const Donate = () => {
    return (
        <main className="donate-page">
            {/* Header section */}
            <section className="page-header donate-header">
                <div className="container">
                    <h1>Support Rikuruma Pentecostal Church</h1>
                    <p>Your generosity fuels our mission to reach the lost and serve our community.</p>
                </div>
            </section>

            {/* Encouragement Section */}
            <section className="section bg-light">
                <div className="container">
                    <div className="donate-intro">
                        <h2>Why We Give</h2>
                        <p>Giving is an act of worship and an expression of our gratitude to God. When you partner with Rikuruma Pentecostal Church Nyamira, you are directly contributing to the transformation of lives through the Gospel, the empowerment of our youth, and the support of our community outreach programs.</p>
                    </div>

                    <div className="scripture-grid">
                        <div className="scripture-card">
                            <p>"Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."</p>
                            <span className="reference">2 Corinthians 9:7</span>
                        </div>
                        <div className="scripture-card">
                            <p>"Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap."</p>
                            <span className="reference">Luke 6:38</span>
                        </div>
                        <div className="scripture-card">
                            <p>"Bring the whole tithe into the storehouse... and see if I will not throw open the floodgates of heaven and pour out so much blessing..."</p>
                            <span className="reference">Malachi 3:10</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Giving Methods Section */}
            <section className="section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">Methods of Giving</h2>
                        <p className="section-description">We have made it simple and secure for you to support the ministry through M-Pesa.</p>
                    </div>

                    <div className="donation-methods">
                        <div className="mpesa-donate-card">
                            <div className="mpesa-branding">
                                <span className="lipa-na">LIPA NA</span>
                                <span className="mpesa-text">M-PESA</span>
                            </div>
                            <div className="buy-goods-label">BUY GOODS AND SERVICES</div>
                            <div className="till-display">
                                <span className="label">Till Number:</span>
                                <span className="number">5173289</span>
                            </div>
                            <div className="instruction">
                                <p><strong>How to give:</strong></p>
                                <ol>
                                    <li>Go to M-Pesa menu</li>
                                    <li>Select Lipa na M-Pesa</li>
                                    <li>Select Buy Goods and Services</li>
                                    <li>Enter Till Number: <strong>5173289</strong></li>
                                    <li>Enter Amount & Pin</li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className="donate-footer">
                        <p>For any inquiries regarding your donations, please contact us at:</p>
                        <p><strong>+254 762 053 876</strong> | <strong>communityofbelieversinjesus@gmail.com</strong></p>
                        <Link to="/contact" className="btn btn-primary mt-4">Contact Support</Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Donate;
