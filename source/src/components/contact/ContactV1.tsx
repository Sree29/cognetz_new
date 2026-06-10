"use client";
import dynamic from "next/dynamic";
import btnArrow from '@/assets/images/btn-arrow.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';

const ContactV1 = () => {

    const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.currentTarget.reset();
        toast.success("Thanks For Your Message");
    }

    return (
        <>
            <div className="contact-sec" id="contact">
                <div className="custom-row">
                    {/* Left Column: Form */}
                    <div className="left">
                        <div className="contact-content">
                            <h3 data-aos="fade-up" data-aos-delay={200} style={{ fontSize: "56px", lineHeight: "64px", marginBottom: "40px" }}>
                                Ready to <span>Get Started?</span>
                            </h3>
                            <form id="contact-form" className="contact-form" onSubmit={handleForm}>
                                <div className="input-group">
                                    <input type="text" name="name" placeholder="Your Name*" autoComplete="off" required />
                                </div>
                                <div className="col-2">
                                    <div className="input-group">
                                        <input type="email" name="email" placeholder="Your Email*" autoComplete="off" required />
                                    </div>
                                    <div className="input-group">
                                        <input type="text" name="phone" autoComplete="off" placeholder="Your Number*" required />
                                    </div>
                                </div>
                                <div className="input-group">
                                    <input type="text" name="subject" placeholder="Subject*" autoComplete="off" required />
                                </div>
                                <div className="input-group">
                                    <textarea name="message" id="message" placeholder="Write Message*" autoComplete="off" required style={{ height: "180px" }} />
                                </div>
                                <div className="input-group">
                                    <button type="submit" className="theme-btn" style={{ width: "100%", justifyContent: "center" }}>
                                        Send Message
                                        <Image src={btnArrow} alt="icon" />
                                    </button>
                                </div>
                            </form>
                            <div id="result" />
                        </div>
                    </div>

                    {/* Right Column: Contact details */}
                    <div className="right d-flex flex-column gap-5 justify-content-center" style={{ paddingLeft: "40px" }}>
                        <div className="d-flex flex-column gap-4">
                            <div className="d-flex flex-column gap-2">
                                <h4 style={{ color: "var(--primary)", fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                    Our Address
                                </h4>
                                <p style={{ color: "var(--secondary)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                                    Nakshatra IT Park, Adoor, Pathanamthitta, Kerala, 691523
                                </p>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <h4 style={{ color: "var(--primary)", fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                    Our Address
                                </h4>
                                <p style={{ color: "var(--secondary)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                                    Muwaileh Commercial - Industrial Area - Sharjah - United Arab Emirates
                                </p>
                            </div>

                            <div className="d-flex flex-column gap-2">
                                <h4 style={{ color: "var(--primary)", fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                    Our Address
                                </h4>
                                <p style={{ color: "var(--secondary)", fontSize: "15px", lineHeight: "1.6", margin: 0 }}>
                                    Cognetz ds 4 fourth floor, Heavenly Plaza, Vazhakala, Kochi
                                </p>
                            </div>
                        </div>

                        <div className="row g-4">
                            <div className="col-md-6 d-flex flex-column gap-2">
                                <h4 style={{ color: "var(--primary)", fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                    Email Us
                                </h4>
                                <a href="mailto:info@cognetz.com" style={{ color: "var(--secondary)", fontSize: "15px", textDecoration: "none" }}>
                                    info@cognetz.com
                                </a>
                            </div>

                            <div className="col-md-6 d-flex flex-column gap-2">
                                <h4 style={{ color: "var(--primary)", fontSize: "18px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px", margin: 0 }}>
                                    Call Us
                                </h4>
                                <div className="d-flex flex-column gap-1">
                                    <a href="tel:+971562343376" style={{ color: "var(--secondary)", fontSize: "15px", textDecoration: "none" }}>
                                        Dubai: +971 562343376
                                    </a>
                                    <a href="tel:+917907249553" style={{ color: "var(--secondary)", fontSize: "15px", textDecoration: "none" }}>
                                        Kerala: +91 7907249553
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default dynamic(() => Promise.resolve(ContactV1), { ssr: false });