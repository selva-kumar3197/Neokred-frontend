import imageUrl from '@/imageUrl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Slider from 'react-slick';
import ResponsiveImage from './ResponsiveImage';

const ResponsiveSliderHomePage = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        centerMode: false,
        responsive: [{ breakpoint: 800, settings: { slidesToShow: 1.2 } }]
    };
    return (

        <Slider className="homepage_section6_slider" {...settings}>
            <div className='slider_part_content_section6'>
                <div className="containerDiv">
                    <div className='title_desc_containerDiv'>
                        <p className='slider7_title'>Digital KYC Simplified: A Deep Dive into {`Neokred's`} Innovation</p>
                        <p className='slider7_desc'>In an era where the digital landscape is rapidly expanding, the financial industry is witnessing a profound transformation in the way it verifies customer identities.</p>
                    </div>
                    <Link href='/blog_digital_kyc'>
                        <div className="learn_more_arrow">
                            <p className='learn_more_p'>Learn More</p>
                            <ResponsiveImage className="image_arrow" src={imageUrl?.homePage?.section6?.arrow} />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='slider_part_content_section6'>
                <div className="containerDiv">
                    <div className='title_desc_containerDiv'>
                        <p className='slider7_title'>Financial Evolution - Top B2B Fintech Companies in India</p>
                        <p className='slider7_desc'>In recent years, the financial landscape in India has undergone a remarkable transformation, with technology playing a pivotal role in reshaping the way businesses manage their finances.</p>
                    </div>
                    <Link href='/blog_financial_evolution'>
                        <div className="learn_more_arrow">
                            <p className='learn_more_p'>Learn More</p>
                            <ResponsiveImage className="image_arrow" src={imageUrl?.homePage?.section6?.arrow} />
                        </div>
                    </Link>
                </div>
            </div>
            {/* <div className='slider_part_content_section6'>
                <div className="containerDiv">
                    <div className='title_desc_containerDiv'>
                        <p className='slider7_title'>How will AI define finance in 2024?</p>
                        <p className='slider7_desc'>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    </div>
                    <div className="learn_more_arrow">
                        <p className='learn_more_p'>Learn More</p>
                        <ResponsiveImage className="image_arrow" src={imageUrl?.homePage?.section6?.arrow} />
                    </div>
                </div>
            </div>
            <div className='slider_part_content_section6'>
                <div className="containerDiv">
                    <div className='title_desc_containerDiv'>
                        <p className='slider7_title'>What is consent-driven data, and why should businesses use it?</p>
                        <p className='slider7_desc'>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                    </div>
                    <div className="learn_more_arrow">
                        <p className='learn_more_p'>Learn More</p>
                        <ResponsiveImage className="image_arrow" src={imageUrl?.homePage?.section6?.arrow} />
                    </div>
                </div>
            </div> */}
        </Slider>

    )
}

export default ResponsiveSliderHomePage;
