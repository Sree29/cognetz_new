import ContactV1 from '@/components/contact/ContactV1';
import FaqV1 from '@/components/faq/FaqV1';
import PartnerV1 from '@/components/partner/PartnerV1';
import ServiceDetailsContent from '@/components/services/ServiceDetailsContent';
import TestimonialV1 from '@/components/testimonial/TestimonialV1';
import LayoutV3 from '@/components/layouts/LayoutV3';

export const metadata = {
    title: "Cognetz - Service Details"
};

const ServiceDetailsPage = () => {
    return (
        <>
            <div className="aixor-main service-single-page single-project">
                <LayoutV3>
                    <ServiceDetailsContent />
                    <FaqV1 />
                    <TestimonialV1 limit={5} />
                    <ContactV1 />
                    <PartnerV1 />
                </LayoutV3>
            </div>
        </>
    );
};

export default ServiceDetailsPage