"use client";
import TestimonialData from '@/assets/jsonData/testimonial/TestimonialData.json'
import SingleTestimonialV1 from './SingleTestimonialV1';
import Union from "@/assets/images/Union.svg"
import Image from 'next/image';


interface TestimonialV1Props {
    limit?: number;
}

const TestimonialV1 = ({ limit }: TestimonialV1Props) => {
    const displayedTestimonials = limit ? TestimonialData.slice(0, limit) : TestimonialData;
    const duration = `${displayedTestimonials.length * 1.2}s`;

    return (
        <>
            <div className="testimonial-sec">
                <div className="section-header d-flex flex-column gap-3">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        TESTIMONIALS
                    </span>
                    <h2 className="section-title testimonial-title">
                        What our awesome <span>customers say</span>
                    </h2>
                    <p className="section-desc" style={{ color: "var(--secondary)", fontSize: "16px" }}>
                        Hear directly from clients about how our services have boosted their business.
                    </p>
                </div>
                <div className="testimonial-lists-wrap">
                    <div className="hover_mouse">
                        <span>Showing Down...</span>
                    </div>
                    <div className="testimonial-lists" style={{ animationDuration: duration }}>
                        {[...displayedTestimonials, ...displayedTestimonials].map((testimonial, index) =>
                            <SingleTestimonialV1 testimonial={testimonial} key={`${testimonial.id}-${index}`} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV1;