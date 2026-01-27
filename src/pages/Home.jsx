import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // Hero Slider State
    const [currentSlide, setCurrentSlide] = useState(0);
    const segments = [
        { image: '/images/hero-1.jpg', title: 'Welcome to Rikuruma Pentecostal Church', text: 'A Spirit-filled community transforming lives through the power of God in Nyamira', btn1: { text: 'Learn More', link: '/about' }, btn2: { text: 'Join Us', link: '/contact' } },
        { image: '/images/hero-2.jpg', title: 'Our Sanctuary', text: 'A place of refuge, prayer, and divine encounters for all people', btn1: { text: 'Our History', link: '/about#our-history' }, btn2: { text: 'Visit Us', link: '/contact' } },
        { image: '/images/hero-3.jpg', title: 'Growing Together in Faith', text: 'Building a strong foundation in Christ through fellowship and discipleship', btn1: { text: 'Our Programs', link: '/programs' }, btn2: { text: 'Upcoming Events', link: '/events' } },
        { image: '/images/hero-4.jpg', title: 'The Word of God', text: 'Preaching the unadulterated truth of the Gospel to transform generations', btn1: { text: 'Sermons', link: '/gallery' }, btn2: { text: 'Ministries', link: '/ministries' } },
        { image: '/images/hero-5.jpg', title: 'Unity in Prayer', text: 'Fervent prayer and intercession for our community and the world', btn1: { text: 'Prayer Requests', link: '/contact' }, btn2: { text: 'Giving', link: '/donate' } }
    ];

    // Using the original variable name 'slides' found in the code
    const slides = segments;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
    const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

    // Testimonials Slider State
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const testimonials = [
        { quote: "Rikuruma Pentecostal Church has been a blessing to my family. The teachings are biblical, the worship is powerful, and the fellowship is genuine. God is truly in this place!", author: "John Bosire", location: "Nyamira Town" },
        { quote: "I found Christ at Rikuruma and my life was transformed. The youth ministry helped me grow in faith and discover my purpose. I am forever grateful to this church family.", author: "Grace Kemunto", location: "Nyamira County" },
        { quote: "The prayers and support from this church carried me through difficult times. Rikuruma Pentecostal Church is more than a church - it's a family where God's love is demonstrated daily.", author: "David Ombati", location: "Nyamira" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
        }, 6000);
        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Stats Counter logic (simplified for React)
    const [stats, setStats] = useState({ churches: 0, lives: 0, counties: 0, leaders: 0 });
    const statsRef = useRef(null);
    const [statsVisible, setStatsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setStatsVisible(true);
                observer.disconnect();
            }
        });
        if (statsRef.current) observer.observe(statsRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (statsVisible) {
            // Animate stats
            const duration = 2000;
            const steps = 50;
            const stepTime = duration / steps;

            const targets = { churches: 50, lives: 5000, counties: 20, leaders: 200 };
            let currentStep = 0;

            const timer = setInterval(() => {
                currentStep++;
                const progress = currentStep / steps;

                setStats({
                    churches: Math.floor(targets.churches * progress),
                    lives: Math.floor(targets.lives * progress),
                    counties: Math.floor(targets.counties * progress),
                    leaders: Math.floor(targets.leaders * progress)
                });

                if (currentStep >= steps) clearInterval(timer);
            }, stepTime);
        }
    }, [statsVisible]);


    return (
        <main>
            {/* Hero Slider */}
            <section className="hero-slider">
                <div className="slider-container">
                    {slides.map((slide, index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`} style={{ backgroundImage: `url(${slide.image})` }}>
                            <div className="slide-overlay"></div>
                            <div className="slide-content">
                                <h2>{slide.title}</h2>
                                <p>{slide.text}</p>
                                <div className="slide-buttons">
                                    <Link to={slide.btn1.link} className="btn btn-primary">{slide.btn1.text}</Link>
                                    <Link to={slide.btn2.link} className="btn btn-secondary">{slide.btn2.text}</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="slider-nav">
                    <button className="slider-prev" onClick={prevSlide}><i className="fas fa-chevron-left"></i></button>
                    <button className="slider-next" onClick={nextSlide}><i className="fas fa-chevron-right"></i></button>
                </div>
                <div className="slider-dots">
                    {slides.map((_, index) => (
                        <div key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></div>
                    ))}
                </div>
            </section>

            {/* Wave Divider */}
            <div className="wave-divider">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,googl172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>

            {/* About Section */}
            <section className="about-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Who We Are</span>
                        <h2 className="section-title">About Rikuruma Pentecostal Church Nyamira</h2>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p className="lead">
                                Rikuruma Pentecostal Church is a Christ-centered, Bible-believing ministry dedicated to preaching the Gospel of Jesus Christ and raising disciples through the power of the Holy Spirit. Guided by the Word of God, we believe in the sovereignty and eternal existence of God.
                            </p>
                            <p>
                                <strong>Located in Magwagwa, Nyamira County, Kenya</strong>
                            </p>
                            <p>
                                Join us as we worship in spirit and in truth and grow together in faith. Our community is built on the foundation of God's Word and empowered by the Holy Spirit.
                            </p>
                            <p>
                                Through dynamic worship services, powerful prayer meetings, and passionate community outreach, we are committed to being a beacon of hope and light in Nyamira and beyond.
                            </p>
                            <div className="about-features">
                                <div className="feature">
                                    <i className="fas fa-bible"></i>
                                    <span>Bible-Based Teaching</span>
                                </div>
                                <div className="feature">
                                    <i className="fas fa-hands-praying"></i>
                                    <span>Prayer Focused</span>
                                </div>
                                <div className="feature">
                                    <i className="fas fa-users"></i>
                                    <span>Community Driven</span>
                                </div>
                            </div>
                            <Link to="/about" className="btn btn-primary">Read More About Us</Link>
                        </div>
                        <div className="about-image">
                            <img src="/images/about-church.jpg" alt="Rikuruma Pentecostal Church Nyamira Building" className="about-img" style={{ borderRadius: '15px', width: '100%', height: '400px', objectFit: 'cover', boxShadow: 'var(--shadow-lg)' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision Mission Section */}
            <section className="vision-mission-section">
                <div className="container">
                    <div className="vm-cards">
                        <div className="vm-card vision-card">
                            <div className="vm-icon">
                                <i className="fas fa-eye"></i>
                            </div>
                            <h3>Our Vision</h3>
                            <p>To be a Spirit-empowered church that transforms Nyamira and beyond through the Gospel, raising up disciples who impact their generation for Christ.</p>
                        </div>
                        <div className="vm-card mission-card">
                            <div className="vm-icon">
                                <i className="fas fa-bullseye"></i>
                            </div>
                            <h3>Our Mission</h3>
                            <p>To worship God passionately, preach the Gospel boldly, disciple believers faithfully, and serve our community compassionately in the power of the Holy Spirit.</p>
                        </div>
                        <div className="vm-card values-card">
                            <div className="vm-icon">
                                <i className="fas fa-heart"></i>
                            </div>
                            <h3>Our Values</h3>
                            <p>Spirit-led Worship, Biblical Truth, Fervent Prayer, Genuine Love, Community Service, and Christ-centered Living guide everything we do.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ministries Section */}
            <section className="ministries-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">What We Do</span>
                        <h2 className="section-title">Our Ministries</h2>
                        <p className="section-description">We serve through various ministries designed to meet the spiritual and physical needs of people at every stage of life.</p>
                    </div>
                    <div className="ministries-grid">
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-globe-africa"></i>
                            </div>
                            <h3>Evangelism & Missions</h3>
                            <p>Reaching the unreached with the Gospel through crusades, door-to-door evangelism, and mission trips to remote areas.</p>
                            <Link to="/ministries#evangelism" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-book-open"></i>
                            </div>
                            <h3>Discipleship</h3>
                            <p>Building mature believers through systematic Bible study, mentorship programs, and spiritual growth initiatives.</p>
                            <Link to="/ministries#discipleship" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-child"></i>
                            </div>
                            <h3>Youth Ministry</h3>
                            <p>Empowering young people to know Christ and live purposefully through youth camps, conferences, and mentorship.</p>
                            <Link to="/ministries#youth-ministry" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-female"></i>
                            </div>
                            <h3>Women Ministry</h3>
                            <p>Equipping women to fulfill their God-given potential through fellowship, teaching, and empowerment programs.</p>
                            <Link to="/ministries#women-ministry" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-male"></i>
                            </div>
                            <h3>Men Ministry</h3>
                            <p>Building godly men who lead with integrity in their families, churches, and communities.</p>
                            <Link to="/ministries#men-ministry" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                        <div className="ministry-card">
                            <div className="ministry-icon">
                                <i className="fas fa-hand-holding-heart"></i>
                            </div>
                            <h3>Community Outreach</h3>
                            <p>Demonstrating Christ's love through feeding programs, medical camps, education support, and community development.</p>
                            <Link to="/ministries#community-outreach" className="ministry-link">Learn More <i className="fas fa-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="stats-section" ref={statsRef}>
                <div className="stats-overlay"></div>
                <div className="container">
                    <div className="section-header light">
                        <span className="section-subtitle">Our Impact</span>
                        <h2 className="section-title">The Numbers Speak</h2>
                    </div>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <div className="stat-icon">
                                <i className="fas fa-church"></i>
                            </div>
                            <div className="stat-number">{statsVisible ? stats.churches : 0}</div>
                            <div className="stat-label">Churches Planted</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="stat-number">{statsVisible ? stats.lives : 0}</div>
                            <div className="stat-label">Lives Transformed</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <i className="fas fa-map-marked-alt"></i>
                            </div>
                            <div className="stat-number">{statsVisible ? stats.counties : 0}</div>
                            <div className="stat-label">Counties Reached</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-icon">
                                <i className="fas fa-graduation-cap"></i>
                            </div>
                            <div className="stat-number">{statsVisible ? stats.leaders : 0}</div>
                            <div className="stat-label">Leaders Trained</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Events Section */}
            <section className="events-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Upcoming</span>
                        <h2 className="section-title">Events & Programs</h2>
                        <p className="section-description">Join us for our upcoming events and be part of what God is doing.</p>
                    </div>
                    <div className="events-grid">
                        <div className="event-card">
                            <div className="event-date">
                                <span className="day">15</span>
                                <span className="month">JAN</span>
                            </div>
                            <div className="event-content">
                                <h3>Annual Prayer Conference</h3>
                                <div className="event-meta">
                                    <span><i className="fas fa-clock"></i> 9:00 AM - 5:00 PM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> Main Auditorium</span>
                                </div>
                                <p>A day of intense prayer and intercession for the nation and our ministries.</p>
                                <Link to="/events" className="event-link">Learn More</Link>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-date">
                                <span className="day">22</span>
                                <span className="month">JAN</span>
                            </div>
                            <div className="event-content">
                                <h3>Youth Revival Weekend</h3>
                                <div className="event-meta">
                                    <span><i className="fas fa-clock"></i> Friday - Sunday</span>
                                    <span><i className="fas fa-map-marker-alt"></i> Youth Center</span>
                                </div>
                                <p>A powerful weekend of worship, word, and fellowship for young people.</p>
                                <Link to="/events" className="event-link">Learn More</Link>
                            </div>
                        </div>
                        <div className="event-card">
                            <div className="event-date">
                                <span className="day">05</span>
                                <span className="month">FEB</span>
                            </div>
                            <div className="event-content">
                                <h3>Community Outreach Day</h3>
                                <div className="event-meta">
                                    <span><i className="fas fa-clock"></i> 8:00 AM - 4:00 PM</span>
                                    <span><i className="fas fa-map-marker-alt"></i> Various Locations</span>
                                </div>
                                <p>Join us as we serve our community with food, medical care, and the Gospel.</p>
                                <Link to="/events" className="event-link">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="events-cta">
                        <Link to="/events" className="btn btn-primary">View All Events</Link>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="testimonials-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Testimonies</span>
                        <h2 className="section-title">Lives Transformed</h2>
                    </div>
                    <div className="testimonials-slider">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className={`testimonial-card ${index === currentTestimonial ? 'active' : ''}`}>
                                <div className="testimonial-content">
                                    <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
                                    <p>"{testimonial.quote}"</p>
                                </div>
                                <div className="testimonial-author">
                                    <div className="author-image">
                                        <i className="fas fa-user"></i>
                                    </div>
                                    <div className="author-info">
                                        <h4>{testimonial.author}</h4>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="testimonial-dots">
                        {testimonials.map((_, index) => (
                            <div key={index} className={`dot ${index === currentTestimonial ? 'active' : ''}`} onClick={() => setCurrentTestimonial(index)}></div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Partner With Us In Reaching The Lost</h2>
                        <p>Your prayers and generous giving enable us to continue spreading the Gospel and transforming lives.</p>
                        <div className="cta-buttons">
                            <Link to="/donate" className="btn btn-primary">Give Now</Link>
                            <Link to="/contact" className="btn btn-secondary">Get Involved</Link>
                        </div>
                    </div>
                </div>
            </section>
            {/* Latest News Section - simplified structure */}
            <section className="news-section section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">News & Updates</span>
                        <h2 className="section-title">Latest From The Field</h2>
                    </div>
                    <div className="news-grid">
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-placeholder"><i className="fas fa-image"></i></div>
                                <div className="news-category">Missions</div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">January 15, 2026</div>
                                <h3>New Year Miracle Service Testimonies</h3>
                                <p>Our New Year service was marked by powerful testimonies of healing, deliverance, and breakthrough. God is moving mightily in Rikuruma...</p>
                                <a href="#" className="news-link">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-placeholder"><i className="fas fa-image"></i></div>
                                <div className="news-category">Training</div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">January 8, 2026</div>
                                <h3>Youth Revival Weekend Impact</h3>
                                <p>Our first youth revival of the year saw over 100 young people encounter God's presence. Many rededicated their lives to Christ...</p>
                                <a href="#" className="news-link">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                        <div className="news-card">
                            <div className="news-image">
                                <div className="image-placeholder"><i className="fas fa-image"></i></div>
                                <div className="news-category">Outreach</div>
                            </div>
                            <div className="news-content">
                                <div className="news-date">December 28, 2025</div>
                                <h3>Christmas Outreach Blesses Community</h3>
                                <p>Our Christmas outreach program brought joy to hundreds of families in Nyamira with food donations and the message of hope...</p>
                                <a href="#" className="news-link">Read More <i className="fas fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Home;
