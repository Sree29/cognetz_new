"use client";
import dynamic from "next/dynamic";
import btnArrow from "@/assets/images/btn-arrow.svg"
import footerBigLogo from "@/assets/images/footer-big-logo.png"
import Image from "next/image";
import Link from "next/link";

const FooterV1 = () => {
    return (
        <>
            <footer className="footer-area">
                <div className="footer-top">
                    <div className="row">

                        {/* Company Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>COMPANY</h4>
                                    <ul>
                                        <li>
                                            <Link className="with-border" href="/">
                                                <Image src={btnArrow} alt="icon" /> Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/about">
                                                <Image src={btnArrow} alt="icon" /> About Us
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/#services">
                                                <Image src={btnArrow} alt="icon" /> Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/faq">
                                                <Image src={btnArrow} alt="icon" /> FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/careers">
                                                <Image src={btnArrow} alt="icon" /> Carrier
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="with-border" href="/contact">
                                                <Image src={btnArrow} alt="icon" /> Contact
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        {/* Contact Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-contact-infos">
                                    <div className="footer-widget-top">
                                        <h4>REACH OUT TO US</h4>
                                        <div className="links" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            <div className="split-text-anim" style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+971562343376" className="with-border">Dubai: +971 562343376</a>
                                                <a data-aos="slide-up" data-aos-duration={700} href="tel:+917907249553" className="with-border">Kerala: +91 7907249553</a>
                                            </div>
                                            <div className="split-text-anim">
                                                <a data-aos="slide-up" data-aos-duration={700} href="mailto:info@cognetz.com" className="with-border">info@cognetz.com</a>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="/contact" className="theme-btn">
                                        {`Let's Connect`}
                                        <Image src={btnArrow} alt="icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Social Section */}
                        <div className="col-md-3">
                            <div className="footer-widget footer-link">
                                <div className="footer-widget-top">
                                    <h4>Social</h4>
                                    <ul>
                                        <li>
                                            <a className="with-border" href="https://instagram.com/" target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Instagram
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://facebook.com/" target="_blank">
                                                <Image src={btnArrow} alt="icon" /> Facebook
                                            </a>
                                        </li>
                                        <li>
                                            <a className="with-border" href="https://linkedin.com/" target="_blank">
                                                <Image src={btnArrow} alt="icon" /> LinkedIn
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="footer-bottom">
                    <div className="split-text-anim">
                        <Image data-aos="slide-up" data-aos-duration={700} src={footerBigLogo} alt="logo" />
                    </div>
                </div> */}
            </footer>
        </>
    );
};

export default dynamic(() => Promise.resolve(FooterV1), { ssr: false });