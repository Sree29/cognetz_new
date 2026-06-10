import Union from "@/assets/images/Union.svg"
import Image from "next/image"

const WhyChooseUs = () => {
    const reasons = [
        {
            icon: "las la-certificate",
            title: "Certified Professionals",
            desc: "Our team of certified experts brings years of experience and expertise to every project, ensuring exceptional results."
        },
        {
            icon: "las la-chart-line",
            title: "Assured Results",
            desc: "We employ targeted strategies to deliver tangible results, driving growth and success for your business."
        },
        {
            icon: "las la-eye",
            title: "Transparency",
            desc: "We maintain 100% transparency in all our dealings, fostering trust and reliability with our clients."
        },
        {
            icon: "las la-cubes",
            title: "Comprehensive Solutions",
            desc: "From web development to digital marketing, we offer comprehensive solutions to meet all your digital needs under one roof."
        },
        {
            icon: "las la-clock",
            title: "On-Time Delivery",
            desc: "We prioritize timely delivery, ensuring you can achieve your goals without delay."
        },
        {
            icon: "las la-heart",
            title: "Passionate Team",
            desc: "Our passionate professionals are dedicated to your success, providing round-the-clock support to ensure your brand's success."
        }
    ];

    return (
        <>
            <div className="why-choose-sec" id="why-choose">
                <div className="custom-container">
                    <div className="section-header section-header2" style={{ marginBottom: "60px", textAlign: "center" }}>
                        <span className="section-subtitle" style={{ justifyContent: "center" }}>
                            <Image src={Union} alt="icon" />
                            Why Cognetz
                        </span>
                        <h2 className="section-title section-title2">
                            Why <span>Choose Us?</span>
                        </h2>
                    </div>

                    <div className="reasons-grid">
                        <style dangerouslySetInnerHTML={{ __html: `
                            .why-choose-sec {
                                padding: 90px 72px;
                                background: #050505;
                            }
                            .reasons-grid {
                                display: grid;
                                grid-template-columns: repeat(3, 1fr);
                                gap: 30px;
                                padding: 10px 0;
                            }
                            .reason-card {
                                background: linear-gradient(180deg, #141414 0%, #0a0a0a 100%);
                                border: 1px solid #222222;
                                border-radius: 16px;
                                padding: 40px 30px;
                                transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
                                cursor: pointer;
                                display: flex;
                                flex-direction: column;
                                gap: 20px;
                                height: 100%;
                            }
                            .reason-card:hover {
                                transform: translateY(-8px);
                                border-color: rgba(255, 255, 255, 0.3);
                                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.6);
                            }
                            /* Light Theme Overrides */
                            [data-theme="light"] .why-choose-sec {
                                background: #ffffff;
                            }
                            [data-theme="light"] .reason-card {
                                background: linear-gradient(180deg, #ffffff 0%, #f7f9fa 100%);
                                border: 1px solid rgba(0, 0, 0, 0.1);
                            }
                            [data-theme="light"] .reason-card:hover {
                                border-color: rgba(0, 0, 0, 0.2);
                                box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
                            }
                            [data-theme="light"] .reason-card .icon-wrap {
                                background: rgba(0, 0, 0, 0.03) !important;
                                border: 1px solid rgba(0, 0, 0, 0.1) !important;
                            }
                            @media (max-width: 1199px) {
                                .why-choose-sec {
                                    padding: 80px 42px;
                                }
                                .reasons-grid {
                                    grid-template-columns: repeat(2, 1fr);
                                }
                            }
                            @media (max-width: 767px) {
                                .why-choose-sec {
                                    padding: 60px 22px;
                                }
                                .why-choose-sec .section-title2 {
                                    font-size: 36px !important;
                                    line-height: 44px !important;
                                }
                                .reasons-grid {
                                    grid-template-columns: 1fr;
                                    gap: 20px;
                                }
                                .reason-card {
                                    padding: 30px 24px;
                                }
                            }
                        `}} />
                        {reasons.map((reason, index) => (
                            <div key={index} className="reason-card">
                                <div className="icon-wrap" style={{
                                    width: "60px",
                                    height: "60px",
                                    borderRadius: "50%",
                                    background: "rgba(255, 255, 255, 0.03)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--primary)",
                                    fontSize: "30px"
                                }}>
                                    <i className={reason.icon}></i>
                                </div>
                                <div className="reason-content" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                                    <h4 style={{
                                        fontSize: "20px",
                                        fontWeight: "600",
                                        color: "var(--primary)",
                                        fontFamily: "var(--font_urbanist)",
                                        margin: 0
                                    }}>{reason.title}</h4>
                                    <p style={{
                                        fontSize: "14px",
                                        lineHeight: "22px",
                                        color: "var(--secondary)",
                                        fontFamily: "var(--font_urbanist)",
                                        margin: 0
                                    }}>{reason.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUs;
