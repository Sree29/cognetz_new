import Union from "@/assets/images/Union.svg"
import Image from 'next/image';
import Link from "next/link";
import FeatureV1Data from "@/assets/jsonData/feature/FeatureV1Data.json"
import SingleFeatureV1 from "./SingleFeatureV1";

const FeatureV1 = () => {
    return (
        <>
            <div className="feature-sec" id="projects">
                <div className="custom-container">
                    <div className="section-header section-header2">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            Our Projects
                        </span>
                        <h2 className="section-title section-title2">
                            Take a look at <span>Some of our Works.</span>
                        </h2>
                        <p className="section-desc" style={{ maxWidth: "800px", margin: "0 auto" }}>
                            Explore our web development, ecommerce, digital marketing, video production, seo and mobile app development works to see how we turn ideas into powerful, pixel-perfect digital experiences.
                        </p>
                    </div>
                    <div className="feature-project-lists">
                        {FeatureV1Data.map(feature =>
                            <SingleFeatureV1 feature={feature} key={feature.id} />
                        )}
                    </div>
                    <div className="feature-more-btn-wrap">
                        <Link href="/projects" className="theme-btn">
                            View More
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV1;