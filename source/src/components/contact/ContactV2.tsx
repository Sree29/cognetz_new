"use client";
import btnArrow from "@/assets/images/btn-arrow.svg";
import Image from "next/image";
import { toast } from "react-toastify";

const ContactV2 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    return (
        <>
            <div className="contact-sec-2">
                <div className="custom-container">
                    <div className="row g-5">
                        {/* Left Column: Contact Infos */}
                        <div className="col-lg-6 d-flex flex-column gap-5">
                            <div className="d-flex flex-column gap-4">
                                <div className="d-flex flex-column gap-3">
                                    <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                        Our Address
                                    </h4>
                                    <p style={{ color: "var(--secondary)", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                                        Nakshatra IT Park, Adoor, Pathanamthitta, Kerala, 691523
                                    </p>
                                </div>

                                <div className="d-flex flex-column gap-3">
                                    <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                        Our Address
                                    </h4>
                                    <p style={{ color: "var(--secondary)", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                                        Muwaileh Commercial - Industrial<br />Area - Sharjah - United Arab Emirates
                                    </p>
                                </div>

                                <div className="d-flex flex-column gap-3">
                                    <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                        Our Address
                                    </h4>
                                    <p style={{ color: "var(--secondary)", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
                                        Cognetz ds 4 fourth floor, Heavenly Plaza, Vazhakala, Kochi
                                    </p>
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-md-6 d-flex flex-column gap-3">
                                    <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                        Email Us
                                    </h4>
                                    <a href="mailto:info@cognetz.com" style={{ color: "var(--secondary)", fontSize: "16px", textDecoration: "none", transition: "color 0.3s" }} className="with-border">
                                        info@cognetz.com
                                    </a>
                                </div>

                                <div className="col-md-6 d-flex flex-column gap-3">
                                    <h4 style={{ color: "#ffffff", fontSize: "20px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                        Call Us
                                    </h4>
                                    <div className="d-flex flex-column gap-1">
                                        <a href="tel:+971562343376" style={{ color: "var(--secondary)", fontSize: "16px", textDecoration: "none" }}>
                                            Dubai: +971 562343376
                                        </a>
                                        <a href="tel:+917907249553" style={{ color: "var(--secondary)", fontSize: "16px", textDecoration: "none" }}>
                                            Kerala: +91 7907249553
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className="col-lg-6">
                            <form id="contactForm" className="contact-form" onSubmit={handleForm}>
                                <h3 style={{ color: "#ffffff", fontSize: "36px", fontWeight: "500", marginBottom: "40px" }}>
                                    Ready to Get Started?
                                </h3>

                                <div className="input-group">
                                    <label htmlFor="name">Your Name*</label>
                                    <input type="text" name="name" id="name" placeholder="John Carter" autoComplete="off" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="email">Your Email*</label>
                                    <input type="email" name="email" id="email" placeholder="johncarter@gmail.com" autoComplete="off" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="phone">Your Number*</label>
                                    <input type="text" name="phone" id="phone" placeholder="+91 9876543210" autoComplete="off" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="subject">Subject*</label>
                                    <input type="text" name="subject" id="subject" placeholder="Project Discussion" autoComplete="off" required />
                                </div>

                                <div className="input-group">
                                    <label htmlFor="message">Write Message*</label>
                                    <textarea name="message" id="message" placeholder="Describe your project..." required defaultValue={""} style={{ height: "200px" }} />
                                </div>

                                <div className="input-group">
                                    <button type="submit" className="theme-btn" style={{ width: "100%", justifyContent: "center", borderRadius: "12px", padding: "18px" }}>
                                        Send Message
                                        <Image src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;