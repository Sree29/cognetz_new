"use client";
import btnArrowIcon from "@/assets/images/btn-arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from "react";

const HeroV1 = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="hero-sec" id="hero">
                <div className="custom-container">
                    <div className="hero-inner">

                        {/* Video Section */}
                        <div className="hero-video">
                            {isClient && (
                                <video loop muted autoPlay>
                                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                                </video>
                            )}
                        </div>

                        <div className="hero-top">

                            {/* Hero Description */}
                            <div className="hero-top-desc">
                                <span style={{ display: "block", color: "var(--primary)", fontSize: "16px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>
                                    Welcome to Cognetz
                                </span>
                                <p>“ Experts in digital transformation, we specialize in bringing your ideas to online, turning your concepts into successful digital ventures.</p>
                                <p>Choose us to establish your identity in the digital arena and accomplish your goals in the shortest possible time. We offer you trustworthy services and wholehearted support in all your ventures. “</p>
                            </div>

                            {/* Author Information */}
                            <div className="author-info">
                                <h4>Cognetz</h4>
                                <span>Digital Ventures</span>
                            </div>
                        </div>

                        {/* Hero Bottom Section */}
                        <div className="hero-bottom">
                            <div className="left">
                                <h2>Transforming Ideas</h2>
                                <h2>Into Digital Success</h2>
                            </div>

                            {/* Button Section */}
                            <Link href="/contact" className="theme-btn">
                                Get Started
                                <Image src={btnArrowIcon} alt="icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroV1;