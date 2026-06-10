"use client";
import sidebarbg from "@/assets/images/sidebarbg.png";
import Image from "next/image";
import SocialShareV1 from "../social/SocialShareV1";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo1 from "@/assets/images/cognetz_logo.png";
import useNotchScrollLink from "@/hooks/useNotchScrollLink";
import ThemeToggle from './ThemeToggle';

const HeaderV3 = () => {

    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isHamburgActive, setIsHamburgActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsHamburgActive(window.scrollY >= 100);
        };

        // Attach event listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup function
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleHamburgClick = () => {
        setIsSidebarActive(true);
        document.body.style.overflow = "hidden";
    };

    const handleCloseClick = () => {
        setIsSidebarActive(false);
        document.body.style.overflow = "auto";
    };

    useNotchScrollLink(".notch-bar-menu-wrap", "a[href^='#']");

    return (
        <>
            {/* hamburg-menu */}
            <div className="scroll-to-show-menu">
                <span className={`hamburg-menu ${isHamburgActive ? "active" : ""}`} onClick={handleHamburgClick}>
                    <span />
                    <span />
                    <span />
                </span>
            </div>

            {/* Sidebar */}
            <div className={`header-sidebar-wrap ${isSidebarActive ? "active" : ""}`}>
                <div className="header-sidebar-content">
                    <div className="sidebar-theme-toggle">
                        <ThemeToggle />
                    </div>

                    <span className="close-header-sidebar" onClick={handleCloseClick}>
                        <i className="las la-times" />
                    </span>

                    {/* Sidebar image */}
                    <Image src={sidebarbg} alt="sidebar" className="sidebar-shape" />

                    {/* Sidebar top: Contact Info */}
                    <div className="header-sidebar-top" style={{ padding: "36px 64px 0 64px" }}>
                        <h4 style={{ color: "var(--primary)", fontSize: "16px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "20px" }}>
                            Contact Info
                        </h4>
                        <ul style={{ display: "flex", flexDirection: "column", gap: "16px", padding: 0 }}>
                            <li style={{ color: "var(--secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                                Nakshatra IT Park, Adoor, Pathanamthitta, Kerala, 691523
                            </li>
                            <li style={{ color: "var(--secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                                Muwaileh Commercial - Industrial Area - Sharjah - United Arab Emirates
                            </li>
                            <li style={{ color: "var(--secondary)", fontSize: "14px", lineHeight: "1.5" }}>
                                Cognetz ds 4 fourth floor, Heavenly Plaza, Vazhakala, Kochi
                            </li>
                            <li>
                                <a href="mailto:info@cognetz.com" style={{ color: "var(--primary)", fontWeight: "500", textDecoration: "none" }}>
                                    info@cognetz.com
                                </a>
                            </li>
                            <li style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                                <a href="tel:+971562343376" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                                    Dubai: +971 562343376
                                </a>
                                <a href="tel:+917907249553" style={{ color: "var(--secondary)", textDecoration: "none" }}>
                                    Kerala: +91 7907249553
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Sidebar menu */}
                    <nav className="sidebar-menu">
                        <ul className="menu" id="sidebar-menu-id">
                            <li>
                                <a href="/" onClick={handleCloseClick}>Home</a>
                            </li>
                            <li>
                                <a href="/about" onClick={handleCloseClick}>About Us</a>
                            </li>
                            <li>
                                <a href="/#services" onClick={handleCloseClick}>Service</a>
                            </li>
                            <li>
                                <a href="/projects" onClick={handleCloseClick}>Our Works</a>
                            </li>
                            <li>
                                <a href="/faq" onClick={handleCloseClick}>FAQ</a>
                            </li>
                            <li>
                                <a href="/careers" onClick={handleCloseClick}>Carrier</a>
                            </li>
                            <li>
                                <a href="/contact" onClick={handleCloseClick}>Contact</a>
                            </li>
                        </ul>
                    </nav>

                    {/* Sidebar bottom */}
                    <div className="header-sidebar-bottom d-flex flex-column gap-4" style={{ padding: "0 0 50px 64px" }}>
                        <ul>
                            <SocialShareV1 />
                        </ul>
                    </div>
                </div>
            </div>

            {/* Notch Bar Menu Wrap */}
            <div className="notch-bar-menu-wrap">
                <ul>
                    <li><a className="anchor active" href="#hero">Hero</a></li>
                    <li><a className="anchor" href="#about">About</a></li>
                    <li><a className="anchor" href="#services">Services</a></li>
                    <li><a className="anchor" href="#projects">Projects</a></li>
                    <li><a className="anchor" href="#contact">Contact</a></li>
                </ul>
            </div>

            {/* header-menu-wrap */}
            <header className="header-menu-wrap">
                <div className="custom-container">
                    <div className="custom-row">

                        <Link href="/" className="logo">
                            <Image src={logo1} alt="logo" />
                        </Link>

                        {/* Navigation menu */}
                        <nav className="navbar">
                            <ul className="menu">
                                <li>
                                    <Link href="/">Home <span /></Link>
                                </li>
                                <li>
                                    <Link href="/about">About Us <span /></Link>
                                </li>
                                <li>
                                    <Link href="/#services">Services <span /></Link>
                                </li>
                                <li>
                                    <Link href="/projects">Projects <span /></Link>
                                </li>
                                <li>
                                    <Link href="/blog">Blog <span /></Link>
                                </li>
                                <li>
                                    <Link href="/faq">FAQ <span /></Link>
                                </li>
                                <li>
                                    <Link href="/careers">Careers <span /></Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact <span /></Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Header right info */}
                        <div className="header-right-info">
                            <div className="header-phones">
                                <a href="tel:+971562343376" className="header-phone">
                                    Dubai: +971 562343376
                                </a>
                                <a href="tel:+917907249553" className="header-phone">
                                    Kerala: +91 7907249553
                                </a>
                            </div>
                            <ThemeToggle />
                            <button className="three-dots-btn" onClick={handleHamburgClick} aria-label="Toggle Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default HeaderV3;