import PartnerData from "@/assets/jsonData/partner/PartnerData.json";
import unionIcon from "@/assets/images/Union.svg";
import Image from "next/image";

// Forced reload comment for brand logos
const PartnerV1 = () => {
    return (
        <>
            <div className="our-partner-sec">
                <div className="partner-title-wrap">
                    <span className="section-subtitle">
                        <Image src={unionIcon} alt="union" /> Our Clients
                    </span>
                </div>
                <ul>
                    {PartnerData.map(data =>
                        <li key={data.id}><Image src={`/assets/images/${data.thumb}`} alt="client" width={270} height={60} /></li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default PartnerV1;