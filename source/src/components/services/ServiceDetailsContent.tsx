"use client";
import Image from "next/image";
import Union from '@/assets/images/Union.svg';
import AnimatedText from "../animated/AnimatedText";
import Link from "next/link";
import btnArrow from '@/assets/images/btn-arrow.svg';
import serviceMain from '@/assets/images/real_office_hero.png';
import service1 from '@/assets/images/real_office_hero.png';
import service2 from '@/assets/images/real_code_screen.png';
import service3 from '@/assets/images/real_laptop_typing.png';
import service4 from '@/assets/images/real_responsive_website.png';
import service5 from '@/assets/images/real_office_workspace.png';
import service6 from '@/assets/images/real_designer_wireframe.png';

const ServiceDetailsContent = () => {

    const subServices = [
        {
            title: "E-commerce Solutions",
            text: "We believe that web development is an art form, blending technology with creativity to create captivating digital experiences. Let us design a website for you that engages your audience and sets you apart from the competition.",
            img: service1
        },
        {
            title: "PHP Development",
            text: "Our team of experienced professionals specializes in PHP development, with expertise in Ajax, jQuery, MySQL, JavaScript, CSS, and HTML. We'll bring your web-based projects to life with outstanding professionalism and attention to detail.",
            img: service2
        },
        {
            title: "Shopify Development",
            text: "Transform your online retail presence with our Shopify expertise. We specialize in crafting captivating e-commerce stores that drive sales and engage customers. From sleek storefront design to seamless payment integration, we ensure a hassle-free shopping experience.",
            img: service3
        },
        {
            title: "React Development",
            text: "Leverage React's power for dynamic web apps. We craft highly interactive user interfaces with its component-based architecture. Whether it's a single-page app or a complex solution, we deliver scalable React development tailored to you.",
            img: service4
        },
        {
            title: "Laravel Development",
            text: "Harness the power of one of the most popular PHP-based open-source frameworks with our Laravel development services. From design to deployment, we'll build your website with precision and efficiency.",
            img: service5
        },
        {
            title: "WordPress Development",
            text: "Create a stunning website with WordPress, the perfect interface between your brand and your audience. Our WordPress development services are designed to help you promote your business and achieve optimal results.",
            img: service6
        }
    ];

    return (
        <>
            <div className="project-single-wrap service-single-wrap">
                <div className="project-single-header">
                    <div className="section-header">
                        <span className="section-subtitle">
                            <Image src={Union} alt="icon" />
                            Web Development Services
                        </span>
                        <AnimatedText>
                            Elevate your online presence with bespoke websites that seamlessly blend creativity and functionality, designed to amplify your brand’s impact.
                        </AnimatedText>
                    </div>
                </div>
                <div className="project-single-body">
                    <div className="feature-project">
                        <div className="img-box">
                            <Image src={serviceMain} alt="project-single" width={1900} height={925} />
                        </div>
                        <div className="feature-project-infos">
                            <div className="feature-project-info-box project-name">
                                <span className="title">Service :</span>
                                <span className="subtitle">Web Development</span>
                            </div>
                            <div className="feature-project-info-box project-description">
                                <span className="title">Description:</span>
                                <span className="subtitle">Elevate your online presence with bespoke websites.</span>
                            </div>
                            <div className="feature-project-info-box">
                                <span className="title">Pricing:</span>
                                <span className="subtitle">$ 3000</span>
                            </div>
                            <div className="feature-project-info-box">
                                <Link href="/contact" className="theme-btn">
                                    GET STARTED
                                    <Image src={btnArrow} alt="icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <style dangerouslySetInnerHTML={{ __html: `
                        .sub-services-grid {
                            display: grid;
                            grid-template-columns: repeat(3, 1fr);
                            gap: 30px;
                            margin-top: 60px;
                            margin-bottom: 60px;
                        }
                        @media (max-width: 991px) {
                            .sub-services-grid {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 24px;
                            }
                        }
                        @media (max-width: 767px) {
                            .sub-services-grid {
                                grid-template-columns: 1fr;
                                gap: 20px;
                            }
                        }
                        .service-card {
                            background: rgba(255, 255, 255, 0.02);
                            border: 1px solid rgba(255, 255, 255, 0.06);
                            border-radius: 16px;
                            padding: 24px;
                            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            position: relative;
                            overflow: hidden;
                        }
                        .service-card:hover {
                            transform: translateY(-6px);
                            background: rgba(255, 255, 255, 0.04);
                            border-color: rgba(255, 255, 255, 0.15);
                            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
                        }
                        .service-card-img-wrap {
                            position: relative;
                            width: 100%;
                            height: 200px;
                            border-radius: 12px;
                            overflow: hidden;
                            margin-bottom: 24px;
                            background: #141414;
                        }
                        .service-card-img-wrap img {
                            transition: transform 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), filter 0.5s cubic-bezier(0.25, 0.8, 0.25, 1), opacity 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
                            object-fit: cover;
                            width: 100%;
                            height: 100%;
                            filter: grayscale(100%) opacity(0.85);
                        }
                        .service-card:hover .service-card-img-wrap img {
                            transform: scale(1.06);
                            filter: grayscale(0%) opacity(1);
                        }
                        .service-card-title {
                            font-size: 22px;
                            font-weight: 600;
                            color: #ffffff;
                            margin-bottom: 12px;
                            display: flex;
                            align-items: center;
                            gap: 8px;
                        }
                        .service-card-title img {
                            width: 14px;
                            height: 14px;
                        }
                        .service-card-desc {
                            font-size: 15px;
                            line-height: 1.6;
                            color: rgba(255, 255, 255, 0.7);
                            margin: 0;
                            flex-grow: 1;
                        }
                    `}} />
                    <div className="sub-services-grid">
                        {subServices.map((sub, index) => (
                            <div className="service-card" key={index}>
                                <div className="service-card-img-wrap">
                                    <Image src={sub.img} alt={sub.title} width={600} height={400} />
                                </div>
                                <h3 className="service-card-title">
                                    <Image src={Union} alt="icon" />
                                    {sub.title}
                                </h3>
                                <p className="service-card-desc">
                                    {sub.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;