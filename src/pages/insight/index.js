import React, { useEffect, useState } from 'react'
import imageUrl from '@/imageUrl';
import Card from '@/components/Insight/Card';
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage';
import Link from 'next/link';
import Head from 'next/head';

const Insight = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);
    const updateCard = [
        {
            title: "Digital KYC Simplified: A Deep Dive into Neokred's Innovation",
            desc: "In an era where the digital landscape is rapidly expanding, the financial industry is witnessing a profound transformation",
            icon: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card4.svg",
            icon2: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card4_mobile.svg",
            date: "JUN 5, 2023",
            duration: "2 min read",
            link: "/blog_digital_kyc"
        },
        {
            title: "Financial Evolution - Top B2B Fintech Companies in India",
            desc: "In India, B2B fintech companies have played a very important role in shaping the country's financial evolution.",
            icon: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card5.svg",
            icon2: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card4_mobile.svg",
            date: "JUN 5, 2023",
            duration: "2 min read",
            link: "/blog_financial_evolution"
        }
    ]
    return (
        <>
            <Head>
                <title>Dive into Fintech Insights at {`NeoKred's`} Awareness Hub</title>
                <meta name="description" content="Discover the latest trends in the fintech industry, explore embedded finance, and delve into insightful articles at NeoKred's Awareness Hub." />
            </Head>
            <div className='insight-main'>
                <div className='insight_section1'>
                    <div>
                        <ResponsiveImage src={imageUrl?.insight?.banner} alt='banner' className='banner-desktop' />
                        <ResponsiveImage src={imageUrl?.insight?.banner_mobile} alt='banner' className='banner-mobile' />
                    </div>
                    <div className='insight_section_title'>
                        <h1 className="banner_heading_insight">Featured Blogs</h1>
                    </div>
                </div>
                <Card />
                <div id="insight" className='insight-updates' >
                    <p className='insight-head'>Updates</p>
                    <p className='insight-subhead'>{`Interested in finding out what the brillant minds behind Neokred have been up to? Then this is the section. Get a glimpse of our latest offering, which will change the way financial institutions function.`}</p>
                </div>
                <div className='insight-update-main'>
                    <div className='insight-update-div'>
                        {/* <div className='insight-update-left'>
                            <div>
                                <ResponsiveImage src='https://neokred.s3.ap-south-1.amazonaws.com/insight/card3.svg' alt='image' />
                            </div>
                            <div className='insight-update-left-content'>
                                <p className='insight-title2'>How a Revenue-Based Accounting Plan Can Help You Grow</p>
                                <p className='insight-date2'>JUN 5, 2023   |   2 min read</p>
                            </div>
                        </div> */}
                        {updateCard.map((card, index) => (
                            <div className='insight-update-right' key={index}>
                                <Link className='link_tag_next' href={card?.link}  >
                                    <div className='insight-updatecard-div'>
                                        <div className='insight-cardimg'>
                                            <ResponsiveImage src={isMobile ? card.icon2 : card.icon} alt="" />
                                        </div>
                                        <div className='insight-update-card-div-right'>
                                            <p className='insight-update-title'>{card.title}</p>
                                            <p className='insight-update-desc'>{card.desc}</p>
                                            <p className='insight-update-date'>{card.date} | {card.duration}</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className='insight-curve'>
                        <ResponsiveImage src='https://neokred.s3.ap-south-1.amazonaws.com/insight/insight-curve.svg' alt='curve' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Insight