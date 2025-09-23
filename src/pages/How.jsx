import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import "./How.css";

export default function How() {
    const [showVideo, setShowVideo] = useState(false);
    const stepsRef = useRef([]);
    const capabilitiesRef = useRef([]);
    const particlesCreated = useRef(false);

    const openVideo = () => setShowVideo(true);
    const closeVideo = () => setShowVideo(false);

    // Enhanced GSAP animations
    useEffect(() => {
        // Initial page load animation
        gsap.from(".how-container", {
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });

        gsap.from("header", {
            y: -50,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: "power3.out"
        });

        gsap.from("h2", {
            x: -30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 0.5,
            ease: "power3.out"
        });

    }, []);

    // Scroll animations and particles
    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const stepsObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "power3.out"
                    });
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        const capabilitiesObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        delay: index * 0.1,
                        ease: "power3.out"
                    });
                    entry.target.classList.add('in-view');
                }
            });
        }, observerOptions);

        // Observe steps
        stepsRef.current.forEach(step => {
            if (step) stepsObserver.observe(step);
        });

        // Observe capabilities
        capabilitiesRef.current.forEach(capability => {
            if (capability) capabilitiesObserver.observe(capability);
        });

        // Create floating particles
        if (!particlesCreated.current) {
            createParticles();
            particlesCreated.current = true;
        }

        return () => {
            stepsObserver.disconnect();
            capabilitiesObserver.disconnect();
        };
    }, []);

    const createParticles = () => {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';

        for (let i = 0; i < 25; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            const size = Math.random() * 3 + 1;
            const colorValue = Math.random() * 100 + 155;

            particle.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                top: ${Math.random() * 100}%;
                left: ${Math.random() * 100}%;
                background: rgba(255, 255, 255, ${Math.random() * 0.4 + 0.1});
                animation-delay: ${Math.random() * 6}s;
                animation-duration: ${Math.random() * 4 + 4}s;
            `;

            particlesContainer.appendChild(particle);
        }

        const container = document.querySelector('.how-container');
        if (container) {
            container.appendChild(particlesContainer);
        }
    };

    // Enhanced step data with icons
    const stepsData = [
        {
            title: "Before Sleep",
            desc: "Astronaut selects a training scenario via neural headset.",
            icon: "🌙"
        },
        {
            title: "Sleep Monitoring",
            desc: "System detects REM sleep using EEG signals.",
            icon: "📊"
        },
        {
            title: "Dream Nudging",
            desc: "Audio, light, or haptic cues steer the dream toward the mission.",
            icon: "🎯"
        },
        {
            title: "Inside the Dream",
            desc: "Lucid-trained astronauts practice tasks; others gain subconscious conditioning.",
            icon: "🚀"
        },
        {
            title: "Wake-Up Review",
            desc: "EEG + self-reports analyzed for insights.",
            icon: "📈"
        }
    ];

    const capabilitiesData = [
        "Lucid Dream Training – conscious dream practice",
        "Cognitive Reinforcement – task repetition in sleep",
        "Stress Inoculation – safe exposure to emergencies",
        "Memory Boost – strengthened skill recall",
        "Mental Well-being – relaxation and stress reduction",
        "Neural Pathway Optimization – enhanced learning efficiency",
        "Mission Simulation – realistic scenario training",
        "Performance Analytics – detailed progress tracking"
    ];

    // Enhanced video modal handler with keyboard support
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') closeVideo();
        };

        if (showVideo) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [showVideo]);

    return (
        <div className="how-container">
            {/* Floating Particles will be injected here */}

            <header>
                <h1 className="glow-text">Astronaut Sleep-Integrated Training System</h1>
                <button
                    className="demo-btn"
                    onClick={openVideo}
                    aria-label="Watch demonstration video"
                >
                    🎬 Watch Demo
                </button>
            </header>

            <main>
                <section aria-labelledby="how-it-works">
                    <h2 id="how-it-works">How It Works</h2>
                    <div className="steps">
                        {stepsData.map((step, idx) => (
                            <article
                                key={idx}
                                ref={(el) => (stepsRef.current[idx] = el)}
                                className="step-card"
                                tabIndex={0}
                                aria-label={`Step ${idx + 1}: ${step.title}`}
                            >
                                <h3>
                                    <span style={{ marginRight: '10px' }}>{step.icon}</span>
                                    {idx + 1}. {step.title}
                                </h3>
                                <p>{step.desc}</p>
                            </article>
                        ))}
                    </div>
                </section>

                <section aria-labelledby="capabilities">
                    <h2 id="capabilities">System Capabilities</h2>
                    <ul className="capabilities">
                        {capabilitiesData.map((capability, idx) => (
                            <li
                                key={idx}
                                ref={(el) => (capabilitiesRef.current[idx] = el)}
                                tabIndex={0}
                                aria-label={capability}
                            >
                                <span className="capability-icon">⚡</span>
                                {capability}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Additional Features Section */}
                <section aria-labelledby="features">
                    <h2 id="features">Advanced Features</h2>
                    <div className="features-grid">
                        <div className="feature-card">
                            <div className="feature-icon">🧠</div>
                            <h3>Neural Adaptation</h3>
                            <p>AI-powered personalization based on individual sleep patterns and cognitive responses</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">📱</div>
                            <h3>Real-time Monitoring</h3>
                            <p>Live EEG data streaming with predictive analytics for optimal training windows</p>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">🔒</div>
                            <h3>Safety Protocols</h3>
                            <p>Automated sleep stage detection with fail-safe mechanisms for uninterrupted rest</p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Enhanced Video Modal */}
            {showVideo && (
                <div
                    className="video-modal"
                    onClick={closeVideo}
                    role="dialog"
                    aria-labelledby="video-title"
                    aria-modal="true"
                >
                    <div
                        className="video-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="close-btn"
                            onClick={closeVideo}
                            aria-label="Close video"
                        >
                            &times;
                        </button>
                        <iframe
                            width="800"
                            height="450"
                            src="https://www.youtube.com/embed/f2Gf_kTYmr8?si=p4fr2mqSXwywQ6YK"
                            title="Astronaut Sleep Training System Demo"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </div>
    );
}