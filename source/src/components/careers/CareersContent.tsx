"use client";
import { useState } from "react";
import Image from "next/image";
import teamMeeting from "@/assets/images/real_team_meeting.png";
import Union from "@/assets/images/Union.svg";
import btnArrow from "@/assets/images/btn-arrow.svg";
import AnimatedText from "../animated/AnimatedText";

const CareersContent = () => {
    const [expandedJobIndex, setExpandedJobIndex] = useState<number | null>(null);

    const toggleJobDetails = (index: number) => {
        if (expandedJobIndex === index) {
            setExpandedJobIndex(null);
        } else {
            setExpandedJobIndex(index);
        }
    };

    const benefits = [
        {
            title: "Innovative Projects",
            desc: "Work on cutting-edge projects that push the boundaries of technology and creativity.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V15H13V17ZM13 13H11V7H13V13Z" fill="var(--primary)"/></svg>`
        },
        {
            title: "Professional Growth",
            desc: "We invest in your growth with ongoing training, mentorship, and career development opportunities.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1 21H23L12 2ZM12 6L18.8 18H5.2L12 6ZM13 16H11V14H13V16ZM13 12H11V8H13V12Z" fill="var(--primary)"/></svg>`
        },
        {
            title: "Collaborative Environment",
            desc: "Join a team that values collaboration, open communication, and mutual respect.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 11C17.66 11 19 9.66 19 8C19 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 11 9.66 11 8C11 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.2 13.89 17 15.06 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="var(--primary)"/></svg>`
        },
        {
            title: "Impactful Work",
            desc: "Make a difference by contributing to solutions that empower businesses worldwide.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15 11H13V7H11V11H9L12 15L15 11Z" fill="var(--primary)"/></svg>`
        },
        {
            title: "Work-Life Balance",
            desc: "We believe in work-life balance, ensuring our team members have the flexibility they need to excel both professionally and personally.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="var(--primary)"/></svg>`
        },
        {
            title: "Flexible Working Arrangements",
            desc: "Enjoy the flexibility of remote work options and adaptable schedules to fit your lifestyle.",
            icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" fill="var(--primary)"/></svg>`
        }
    ];

    const openings = [
        {
            title: "Operations Manager",
            resp: [
                "Act as the primary point of contact for clients, ensuring their needs are met",
                "Oversee daily operations and ensure the smooth execution of projects",
                "Coordinate with internal teams to resolve issues promptly",
                "Prepare and present performance reports to management"
            ],
            reqs: [
                "Excellent interpersonal and communication skills",
                "Strong organizational and multitasking abilities",
                "Basic understanding of project management tools and techniques",
                "Problem-solving mindset with attention to detail"
            ]
        },
        {
            title: "Business Development Executive",
            resp: [
                "Identify new business opportunities and partnerships to drive company growth",
                "Develop and maintain strong client relationships",
                "Conduct market research to identify trends and customer needs",
                "Prepare and deliver effective sales presentations and proposals"
            ],
            reqs: [
                "Excellent communication skills",
                "Strong analytical and problem-solving abilities",
                "Ability to work both independently and collaboratively",
                "Basic knowledge of CRM tools and sales processes is a plus"
            ]
        }
    ];

    return (
        <>
            <style dangerouslySetInnerHTML={{ __html: `
                .careers-wrap {
                    padding: 120px 0;
                    background: #0a0a0a;
                    color: #ffffff;
                }
                .careers-header {
                    margin-bottom: 80px;
                }
                .culture-block {
                    display: flex;
                    align-items: center;
                    gap: 60px;
                    margin-bottom: 120px;
                }
                @media (max-width: 991px) {
                    .culture-block {
                        flex-direction: column;
                        gap: 40px;
                    }
                }
                .culture-left {
                    flex: 1;
                }
                .culture-right {
                    flex: 1;
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .culture-right img {
                    width: 100%;
                    height: auto;
                    object-fit: cover;
                    display: block;
                    transition: transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .culture-right:hover img {
                    transform: scale(1.05);
                }
                .benefits-title-wrap {
                    margin-bottom: 60px;
                    text-align: center;
                }
                .benefits-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    margin-bottom: 120px;
                }
                @media (max-width: 991px) {
                    .benefits-grid {
                        grid-template-columns: repeat(2, 1fr);
                        gap: 24px;
                    }
                }
                @media (max-width: 767px) {
                    .benefits-grid {
                        grid-template-columns: 1fr;
                        gap: 20px;
                    }
                }
                .benefit-card {
                    background: rgba(255, 255, 255, 0.02);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 16px;
                    padding: 32px;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                }
                .benefit-card:hover {
                    transform: translateY(-5px);
                    background: rgba(255, 255, 255, 0.04);
                    border-color: rgba(255, 255, 255, 0.15);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                }
                .benefit-card-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 12px;
                    background: rgba(255, 255, 255, 0.04);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                }
                .benefit-card-title {
                    font-size: 20px;
                    font-weight: 600;
                    color: #ffffff;
                }
                .benefit-card-desc {
                    font-size: 15px;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.7);
                    margin: 0;
                }
                .openings-wrap {
                    margin-bottom: 120px;
                }
                .openings-header {
                    margin-bottom: 60px;
                }
                .accordion-container {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                }
                .job-item {
                    background: rgba(255, 255, 255, 0.01);
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .job-item:hover {
                    border-color: rgba(255, 255, 255, 0.12);
                    background: rgba(255, 255, 255, 0.02);
                }
                .job-item.expanded {
                    border-color: var(--primary);
                    background: rgba(255, 255, 255, 0.03);
                }
                .job-header {
                    padding: 30px 40px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    cursor: pointer;
                    user-select: none;
                }
                @media (max-width: 575px) {
                    .job-header {
                        padding: 20px 24px;
                    }
                }
                .job-header-left {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }
                .job-header-left img {
                    width: 14px;
                    height: 14px;
                }
                .job-header-title {
                    font-size: 22px;
                    font-weight: 600;
                    color: #ffffff;
                    margin: 0;
                }
                @media (max-width: 575px) {
                    .job-header-title {
                        font-size: 18px;
                    }
                }
                .job-toggle-btn {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                    background: transparent;
                }
                .job-item.expanded .job-toggle-btn {
                    transform: rotate(45deg);
                    border-color: var(--primary);
                    background: var(--primary);
                }
                .job-toggle-btn i {
                    font-size: 18px;
                    color: #ffffff;
                }
                .job-body {
                    max-height: 0;
                    overflow: hidden;
                    transition: max-height 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
                }
                .job-item.expanded .job-body {
                    max-height: 1000px;
                }
                .job-body-inner {
                    padding: 10px 40px 40px 40px;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    display: flex;
                    flex-direction: column;
                    gap: 30px;
                }
                @media (max-width: 575px) {
                    .job-body-inner {
                        padding: 10px 24px 30px 24px;
                    }
                }
                .job-section {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .job-section-title {
                    font-size: 18px;
                    font-weight: 600;
                    color: var(--primary);
                    margin: 0;
                }
                .job-list {
                    margin: 0;
                    padding-left: 20px;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }
                .job-list li {
                    font-size: 15px;
                    line-height: 1.6;
                    color: rgba(255, 255, 255, 0.7);
                    list-style-type: square;
                }
                .apply-box {
                    background: radial-gradient(circle at 10% 20%, rgba(255, 114, 0, 0.08) 0%, rgba(0, 0, 0, 0) 90%), rgba(255, 255, 255, 0.01);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-radius: 24px;
                    padding: 60px 80px;
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 24px;
                    position: relative;
                    overflow: hidden;
                }
                @media (max-width: 767px) {
                    .apply-box {
                        padding: 40px 30px;
                    }
                }
                .apply-box-title {
                    font-size: 36px;
                    font-weight: 700;
                    color: #ffffff;
                    margin: 0;
                }
                @media (max-width: 575px) {
                    .apply-box-title {
                        font-size: 28px;
                    }
                }
                .apply-box-desc {
                    font-size: 16px;
                    line-height: 1.7;
                    color: rgba(255, 255, 255, 0.7);
                    max-width: 600px;
                    margin: 0;
                }
                .apply-email-highlight {
                    font-size: 24px;
                    font-weight: 600;
                    color: var(--primary);
                    text-decoration: underline;
                    letter-spacing: 0.5px;
                }
                @media (max-width: 575px) {
                    .apply-email-highlight {
                        font-size: 18px;
                    }
                }
                /* Light Theme Overrides */
                [data-theme="light"] .careers-wrap {
                    background: #ffffff;
                    color: var(--primary);
                }
                [data-theme="light"] .culture-right {
                    border-color: rgba(0, 0, 0, 0.08);
                }
                [data-theme="light"] .benefit-card {
                    background: rgba(0, 0, 0, 0.02);
                    border-color: rgba(0, 0, 0, 0.06);
                }
                [data-theme="light"] .benefit-card:hover {
                    background: rgba(0, 0, 0, 0.04);
                    border-color: rgba(0, 0, 0, 0.15);
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
                }
                [data-theme="light"] .benefit-card-icon {
                    background: rgba(0, 0, 0, 0.04);
                    border-color: rgba(0, 0, 0, 0.08);
                }
                [data-theme="light"] .benefit-card-icon svg path {
                    fill: var(--primary) !important;
                }
                [data-theme="light"] .benefit-card-title {
                    color: var(--primary);
                }
                [data-theme="light"] .benefit-card-desc {
                    color: var(--secondary);
                }
                [data-theme="light"] .job-item {
                    background: rgba(0, 0, 0, 0.01);
                    border-color: rgba(0, 0, 0, 0.05);
                }
                [data-theme="light"] .job-item:hover {
                    border-color: rgba(0, 0, 0, 0.12);
                    background: rgba(0, 0, 0, 0.02);
                }
                [data-theme="light"] .job-item.expanded {
                    border-color: var(--primary);
                    background: rgba(0, 0, 0, 0.03);
                }
                [data-theme="light"] .job-header-title {
                    color: var(--primary);
                }
                [data-theme="light"] .job-toggle-btn {
                    border-color: rgba(0, 0, 0, 0.1);
                }
                [data-theme="light"] .job-toggle-btn i {
                    color: var(--primary);
                }
                [data-theme="light"] .job-item.expanded .job-toggle-btn i {
                    color: #ffffff;
                }
                [data-theme="light"] .job-body-inner {
                    border-top-color: rgba(0, 0, 0, 0.05);
                }
                [data-theme="light"] .job-list li {
                    color: var(--secondary);
                }
                [data-theme="light"] .apply-box {
                    background: radial-gradient(circle at 10% 20%, rgba(255, 114, 0, 0.04) 0%, rgba(255, 255, 255, 0) 90%), rgba(0, 0, 0, 0.01);
                    border-color: rgba(0, 0, 0, 0.06);
                }
                [data-theme="light"] .apply-box-title {
                    color: var(--primary);
                }
                [data-theme="light"] .apply-box-desc {
                    color: var(--secondary);
                }
            `}} />

            <div className="careers-wrap">
                <div className="custom-container">
                    
                    {/* Culture Block */}
                    <div className="culture-block">
                        <div className="culture-left">
                            <div className="section-header" style={{ marginBottom: "24px" }}>
                                <span className="section-subtitle">
                                    <Image src={Union} alt="icon" />
                                    Our Culture
                                </span>
                                <AnimatedText>
                                    At Cognetz, we are more than just an IT company; we are a team of dedicated professionals committed to redefining growth through innovation.
                                </AnimatedText>
                            </div>
                            <p style={{ color: "var(--secondary)", fontSize: "16px", lineHeight: "1.7", margin: 0 }}>
                                At the heart of Cognetz is a culture of creativity, collaboration, and continuous learning. We foster an environment where every team member's voice is valued, ideas are encouraged, and excellence is the standard. Our team embodies a passion for innovation and a drive to deliver exceptional results for our clients.
                            </p>
                        </div>
                        <div className="culture-right">
                            <Image src={teamMeeting} alt="Our Culture" />
                        </div>
                    </div>

                    {/* Why Cognetz Section */}
                    <div className="benefits-title-wrap">
                        <div className="section-header" style={{ display: "inline-flex", flexDirection: "column", alignItems: "center" }}>
                            <span className="section-subtitle" style={{ margin: "0 auto 16px auto" }}>
                                <Image src={Union} alt="icon" />
                                WHY COGNETZ?
                            </span>
                            <AnimatedText>
                                Where Innovation Meets Opportunity
                            </AnimatedText>
                        </div>
                    </div>

                    <div className="benefits-grid">
                        {benefits.map((b, index) => (
                            <div className="benefit-card" key={index}>
                                <div className="benefit-card-icon" dangerouslySetInnerHTML={{ __html: b.icon }} />
                                <h3 className="benefit-card-title">{b.title}</h3>
                                <p className="benefit-card-desc">{b.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Openings Section */}
                    <div className="openings-wrap" id="openings">
                        <div className="openings-header">
                            <div className="section-header">
                                <span className="section-subtitle">
                                    <Image src={Union} alt="icon" />
                                    Openings
                                </span>
                                <AnimatedText>
                                    Current Openings
                                </AnimatedText>
                                <p style={{ color: "var(--secondary)", fontSize: "16px", lineHeight: "1.7", marginTop: "16px", maxWidth: "800px" }}>
                                    Explore our current career opportunities below. If you're passionate about innovation and ready to make an impact, we invite you to join us on our journey to redefine growth through technology.
                                </p>
                            </div>
                        </div>

                        <div className="accordion-container">
                            {openings.map((job, idx) => (
                                <div className={`job-item ${expandedJobIndex === idx ? 'expanded' : ''}`} key={idx}>
                                    <div className="job-header" onClick={() => toggleJobDetails(idx)}>
                                        <div className="job-header-left">
                                            <Image src={Union} alt="icon" />
                                            <h3 className="job-header-title">{job.title}</h3>
                                        </div>
                                        <button className="job-toggle-btn">
                                            <i className="las la-plus" />
                                        </button>
                                    </div>
                                    <div className="job-body" style={{ maxHeight: expandedJobIndex === idx ? "1000px" : "0px" }}>
                                        <div className="job-body-inner">
                                            <div className="job-section">
                                                <h4 className="job-section-title">Responsibilities</h4>
                                                <ul className="job-list">
                                                    {job.resp.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="job-section">
                                                <h4 className="job-section-title">Requirements</h4>
                                                <ul className="job-list">
                                                    {job.reqs.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* How to Apply Box */}
                    <div className="apply-box">
                        <h2 className="apply-box-title">How to Apply</h2>
                        <p className="apply-box-desc">
                            To apply for any of our open positions or to express your interest in joining our team, please send your resume and cover letter directly to our careers mailbox:
                        </p>
                        <a href="mailto:career@cognetz.com?subject=Application%20for%20Job%20Position" className="apply-email-highlight">
                            career@cognetz.com
                        </a>
                        <p className="apply-box-desc" style={{ fontSize: "14px", opacity: 0.8 }}>
                            Be sure to include the target position title in the subject line of your email.
                        </p>
                        <a href="mailto:career@cognetz.com?subject=Application%20for%20Job%20Position" className="theme-btn" style={{ marginTop: "10px" }}>
                            Contact Now
                            <Image src={btnArrow} alt="icon" />
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
};

export default CareersContent;
