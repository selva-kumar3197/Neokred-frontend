import imageUrl from "@/imageUrl";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const HomepageSlider = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false
    };

    return (
        <div className="homepage_section3">
            <Slider {...settings}>
                <div className="hompeage_slider_container">
                    <div className="content_part_slider">
                        <p className="content_part_title">Enhanced consumer engagement with the best financial experience.</p>
                        <p className="content_part_desc">Transform your customers into brand advocates with hassle-free financial interactions fit for the digital age.</p>
                    </div>
                    <Image alt="" className="image_slider_homepage" height={480} width={380} src={imageUrl?.homePage?.contentOne} />
                </div>
                <div className="hompeage_slider_container">
                    <div className="content_part_slider">
                        <p className="content_part_title">Experience diversified revenue with the ease of embedded finance.</p>
                        <p className="content_part_desc">Say goodbye to the complexities of financial transactions, fintech technology, and transactional interactions with streamlined payment processing.</p>
                    </div>
                    <Image alt="" className="image_slider_homepage" height={370} width={500} src={imageUrl?.homePage?.contentTwo} />
                </div>
                <div className="hompeage_slider_container">
                    <div className="content_part_slider">
                        <p className="content_part_title">Gain a competitive edge in profiling.</p>
                        <p className="content_part_desc">Get comprehensive individual insight in the BFSI domain with an expanded product offering, coupled with credible financial verification, and reach out to newer markets.</p>
                    </div>
                    <Image alt="" className="image_slider_homepage" height={360} width={460} src={imageUrl?.homePage?.contentThree} />
                </div>
                <div className="hompeage_slider_container">
                    <div className="content_part_slider">
                        <p className="content_part_title">Manage data better with insightful transactions.</p>
                        <p className="content_part_desc"> Categorise financial data and transaction details with cutting-edge Fintech technology and services to gain important insight into consumers preferences with optimal analytical solutions.</p>
                    </div>
                    <Image alt="" className="image_slider_homepage" height={360} width={400} src={imageUrl?.homePage?.contentFour} />
                </div>
            </Slider>
        </div>
    );
}

export default HomepageSlider