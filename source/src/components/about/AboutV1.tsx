"use client"
import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV1 from "./SingleFactV1";
import FactData from "@/assets/jsonData/fact/FactData.json"
import { useState } from "react";

const AboutV1 = () => {

    const [activeServiceId, setActiveServiceId] = useState(FactData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <AnimatedText>
                            Redefining Growth with Innovation. At Cognetz, we redefine growth through unwavering dedication and innovative strategies. With a focus on exponential progress, our team is committed to propelling your business forward with tireless commitment. We deliver with Reliability, stay Committed to Quality, and ensure every project is Time-bound and Within Budget. With Transparent Dealings and Cost-effective Packages, we build trust and lasting value.
                        </AnimatedText>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <div
                                className={`funfact-box ${activeServiceId === fact.id ? 'active' : ''}`}
                                key={fact.id}
                                onMouseEnter={() => handleMouseEnter(fact.id)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <SingleFactV1 fact={fact} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV1;