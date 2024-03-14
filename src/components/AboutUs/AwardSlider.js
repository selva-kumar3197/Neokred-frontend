import React,{useEffect, useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import ResponsiveImage from '../HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';


function AwardSlider() {

    const CustomPrevArrow = (props) => (
        <button {...props} className="custom-prev-arrow" style={{ position: 'absolute', left: -150, top: 184 }} >
            <Image src='/assets/arrow1.png' alt='<' width={80} height={0} />
        </button>
    );

    const CustomNextArrow = (props) => (
        <button {...props} className="custom-next-arrow" style={{ position: 'absolute', right: -147, fontSize: '40px' }}>
            <Image src='/assets/arrow2.png' alt='>' width={80} height={0} style={{ marginTop: "80px" }} />
        </button>
    );

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        //autoplay: true,
        centerMode: false,
        responsive: [{ breakpoint: 480, settings: { slidesToShow: 2.2} }]
    };
    const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

    const heightImage ={
        height: isMobile ? "30vh" : "520px",
        width: isMobile ? "110px" : ""  
    }
    return (
        <Slider className='aboutus_section5_slider' {...settings}>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.one} />
                    </div>
                    <p className='heading_section5_aboutus'>Top Startup to watch 2023</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus2" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.two} />
                    </div>
                    <p className='heading_section5_aboutus'>Young Entrepreneur of the Year</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus3" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.three} />
                    </div>
                    <p className='heading_section5_aboutus'>Dipali Padia - Women Leadership in Banking & Insurance - 2023</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus4" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.four} />
                    </div>
                    <p className='heading_section5_aboutus'>Top 30 Under 30</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus5" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.five} />
                    </div>
                    <p className='heading_section5_aboutus'>Top 10 Revolutionary Entrepreneur 2020</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus6" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.six} />
                    </div>
                    <p className='heading_section5_aboutus'>Company of the Year 2022</p>
                </div>
            </div>
            <div className='slider_part_content_aboutus'>
                <div className="containerDiv_aboutus7" style={heightImage}>
                    <div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.slider?.seven} />
                    </div>
                    <p className='heading_section5_aboutus'>Best payment Startup of the Year</p>
                </div>
            </div>
        </Slider>
    )
}

export default AwardSlider