import unionIcon from "@/assets/images/Union.svg"
import Image from "next/image"
import AnimatedText from "../animated/AnimatedText"
import SingleFactV2 from "./SingleFactV2"
import FactData from "@/assets/jsonData/fact/FactData.json"

const AboutV2 = () => {
    return (
        <>
            <div className="about-sec" id="about">
                <div className="custom-container">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={unionIcon} alt="About Us" /> About Us
                        </span>
                        <div className="right">
                            <AnimatedText>
                                Pioneering Digital Evolution through Innovation. At Cognetz, we shape the future of business by blending visionary thinking with state-of-the-art technological strategies. Focused on scaling milestones and building resilient brands, our team delivers relentless execution to elevate your enterprise in an ever-evolving digital world.
                            </AnimatedText>
                            <AnimatedText>
                                We champion absolute precision, engineering top-tier quality that is strictly bound to your timeline and budget parameters. Through open transparency and strategically optimized service solutions, we foster trust and forge long-term partnerships that drive high-impact results.
                            </AnimatedText>
                        </div>
                    </div>
                    <div className="funfacts-wrap">
                        {FactData.map(fact =>
                            <SingleFactV2 fact={fact} key={fact.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV2;