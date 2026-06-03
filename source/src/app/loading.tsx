import logo from "@/assets/images/cognetz_logo.png";
import Image from "next/image";

const Preloader = () => {
    return (
        <>
            <div className="preloader-wrap">
                <video loop muted autoPlay>
                    <source src="/assets/video/hero-video.mp4" type="video/mp4" />
                </video>
                <Image src={logo} alt="Logo" width={220} height={60} style={{ objectFit: "contain" }} />
            </div>
        </>
    );
};

export default Preloader;