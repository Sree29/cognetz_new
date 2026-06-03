"use client"
import Union from "@/assets/images/Union.svg"
import arrowDown from "@/assets/images/arrow-down.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import SingleServicesV1 from "./SingleServicesV1"
import { useState } from "react"

const ServicesV1 = () => {

    const [activeServiceId, setActiveServiceId] = useState(ServicesV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="service-sec" id="services">
                <div className="custom-container">
                    <div className="section-header" style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "flex-start", marginBottom: "60px" }}>
                        <span className="section-subtitle" style={{ width: "auto" }}>
                            <Image src={Union} alt="icon" />
                            Our Services
                        </span>
                        <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "100%" }}>
                            <AnimatedText>
                                Empowering your vision through digital brilliance.
                            </AnimatedText>
                            <p style={{ color: "var(--secondary)", fontSize: "18px", lineHeight: "1.6", margin: 0 }}>
                                "Empowering your brand with expert solutions in Web Development, Digital Marketing, Video Production, SEO, E-Commerce, and Mobile App Development."
                            </p>
                        </div>
                    </div>
                </div>
                <div className="service-lists-wrap">
                    <div className="service-lists-header">
                        <div className="custom-container">
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Service
                            </div>
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                Description
                            </div>
                            <div className="service-header-th">
                                <Image src={arrowDown} alt="icon" />
                                3D Illustration
                            </div>
                        </div>
                    </div>

                    {/* Service Lists */}
                    <div className="service-lists">
                        {ServicesV1Data.map(services =>
                            <div
                                className={`service-box ${activeServiceId === services.id ? 'active' : ''}`}
                                key={services.id}
                                onMouseEnter={() => handleMouseEnter(services.id)}
                                onMouseLeave={handleMouseLeave}
                                onClick={() => handleMouseEnter(services.id)}
                                style={{ cursor: "pointer" }}
                            >
                                <SingleServicesV1 services={services} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesV1;