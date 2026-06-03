import Union from "@/assets/images/Union.svg"
import pricingShape1 from "@/assets/images/pricing-shape1.png"
import pricingShape2 from "@/assets/images/pricing-shape2.png"
import Image from "next/image";

const FaqV1 = () => {
    return (
        <>
            <div className="faq-sec">
                <div className="section-header section-header2">
                    <span className="section-subtitle">
                        <Image src={Union} alt="icon" />
                        FAQ's
                    </span>
                    <h2 className="section-title section-title2">
                        Frequently Asked <span>Questions</span>
                    </h2>
                    <p className="section-desc">
                        We’re here to help! Whether it’s web development, SEO, mobile apps, or digital marketing, our FAQ section answers everything you need to know about how we build, market, and grow your digital success.
                    </p>
                </div>

                {/* Faq lists */}
                <div className="accordion faq-lists" id="accordionExample">
                    <div className="shape_img shape_img1">
                        <Image src={pricingShape1} alt="shape" />
                    </div>
                    <div className="shape_img shape_img2">
                        <Image src={pricingShape2} alt="shape" />
                    </div>

                    {/* Faq 1 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <span className="number">I.</span> How Long Has Cognetz Been In The Digital Marketing Business? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cognetz has been in the digital marketing business for 2 years, establishing itself as a growing player in the industry. Over these two years, they have developed expertise in various aspects of digital marketing, including SEO, social media marketing, content creation, and online advertising. Their commitment to delivering effective marketing strategies and measurable results has helped them build a solid reputation among their clients. As they continue to evolve and expand their services, Cognetz aims to stay at the forefront of digital marketing trends and technologies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 2 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <span className="number">II.</span> What Makes Cognetz Different From Other IT Service Companies In Kerala? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Cognetz stands out due to our personalized approach, extensive industry experience, and commitment to delivering measurable results. Our team of experts leverages the latest tools and strategies to create customized solutions tailored to each client's unique needs. We focus on building long-term relationships with our clients, ensuring ongoing support and continuous improvement.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 3 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="number">III.</span> How Much Do You Charge For Your Services? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our pricing model is flexible and depends on the specific needs and goals of each client. We offer competitive rates and customizable packages to fit different budgets. For a detailed quote, please contact our sales team with your project requirements.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 4 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                <span className="number">IV.</span> Do You Have Experience Working With Businesses In Different Industries? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Yes, we have extensive experience working with businesses across various industries, including healthcare, education, e-commerce, real estate, hospitality, and more. Our diverse portfolio demonstrates our ability to adapt and deliver results in different market sectors.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 5 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                <span className="number">V.</span> How Long Will It Take To See Results? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>The timeline for seeing results can vary depending on the nature of the campaign and the goals set. Generally, SEO and content marketing efforts may take 3-6 months to show significant results, while PPC and social media campaigns can yield quicker outcomes, often within a few weeks. We provide realistic timelines and set clear expectations from the start.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 6 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                <span className="number">VI.</span> Can You Help With Digital Transformation? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Yes, we specialize in helping businesses transition to digital-first operations. Our digital transformation services include process automation, digital strategy development, IT infrastructure modernization, and adoption of emerging technologies such as Artificial Intelligence. We work closely with you to create a customized roadmap for success.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 7 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingSeven">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                <span className="number">VII.</span> What Is Your Approach to Project Management? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our project management approach is centered around transparency, collaboration, and agility. We use proven methodologies such as Agile and Scrum to ensure timely delivery and adaptability to changes. Our project managers maintain clear communication with clients, providing regular updates and progress reports.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 8 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingEight">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                <span className="number">VIII.</span> How Do You Customize Your Solutions for Different Clients? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>We begin by conducting a thorough assessment of your business needs, goals, and existing IT infrastructure. Based on this assessment, we design tailored solutions that align with your specific requirements. Our team works closely with you throughout the implementation process to ensure the solutions are effectively integrated and optimized for your business.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 9 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingNine">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                <span className="number">IX.</span> What Kind of Training Do You Offer for Our Staff? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>We provide comprehensive training programs to ensure your staff is proficient with the new systems and technologies we implement. Our training sessions can be conducted onsite or remotely and cover a wide range of topics including software usage, cybersecurity best practices, and IT management. We also offer ongoing support and resources for continuous learning.</p>
                            </div>
                        </div>
                    </div>

                    {/* Faq 10 */}
                    <div className="accordion-item faq-item">
                        <h2 className="accordion-header" id="headingTen">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                <span className="number">X.</span> How Do You Stay Current With Emerging Technologies? <span className="plus-icon"><span /><span /></span>
                            </button>
                        </h2>
                        <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>Our team stays current with emerging technologies through continuous learning, industry certifications, and participation in professional development programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FaqV1;