import AboutV1 from "@/components/about/AboutV1";
import WhyChooseUs from "@/components/about/WhyChooseUs";
import ContactV1 from "@/components/contact/ContactV1";
import FeatureV1 from "@/components/feature/FeatureV1";
import HeroV1 from "@/components/hero/HeroV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PartnerV1 from "@/components/partner/PartnerV1";
import ServicesV1 from "@/components/services/ServicesV1";
import TestimonialV1 from "@/components/testimonial/TestimonialV1";

const Home = () => {
    return (
        <>
            <div className="aixor-main">
                <LayoutV1>
                    <HeroV1 />
                    <AboutV1 />
                    <ServicesV1 />
                    <FeatureV1 />
                    <WhyChooseUs />
                    <TestimonialV1 limit={10} />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV1>
            </div>
        </>
    );
};

export default Home;