import HeroV2 from "@/components/hero/AboutHero";
import LayoutV3 from "@/components/layouts/LayoutV3";
import CareersContent from "@/components/careers/CareersContent";

export const metadata = {
    title: "Cognetz - Careers"
};

const CareersPage = () => {
    return (
        <>
            <div className="aixor-main careers-page">
                <LayoutV3>
                    <HeroV2 title="Join Our Team" />
                    <CareersContent />
                </LayoutV3>
            </div>
        </>
    );
};

export default CareersPage;
