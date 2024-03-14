import React, { useEffect, useRef } from 'react';
// import Swiper from 'swiper';
const BrandValuesComp = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        swiperRef.current = new Swiper('.swiper-container', {
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            effect: 'coverflow',
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 0,
                stretch: 80,
                depth: 200,
                modifier: 1,
                slideShadows: false,
            },
            on: {
                init: function () {
                    setActiveSlide(this.realIndex);
                },
                slideChange: function () {
                    setActiveSlide(this.realIndex);
                },
            },
        });
    }, []);

    const setActiveSlide = (index) => {
        const slides = document.querySelectorAll('.swiper-slide');
        if (slides.length === 0) return; // Ensure slides are present before accessing classList
        slides.forEach((slide) => {
            slide.classList.remove('active-slide');
        });
        const centerSlide = slides[Math.floor(slides.length / 2)];
        centerSlide.classList.add('active-slide');
    };

    return (
        <div className='brand_values_carousels_section'>
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Novelty</p>
                            <p className='desc_inner_div_slider'>Neokred, as a brand, values an out-of-the-box solution to business problems. The brand stands for novelty and innovation that help it solve problems beyond the ordinary.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Expertise</p>
                            <p className='desc_inner_div_slider'>The brand does not just offer solutions but also brings its expertise in solving problems to the forefront, establishing itself as a thought leader.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Openness</p>
                            <p className='desc_inner_div_slider'>Neokred, as a brand, values the importance of trust. The emphasis is always on being transparent in the operation, which adds to the credibility of the brand and helps build trust.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Knowledgeable</p>
                            <p className='desc_inner_div_slider'>The core team comes with a strong pedigree in their respective fields and is hence knowledgeable enough to drive the success of others.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Resourceful</p>
                            <p className='desc_inner_div_slider'>Neokred values its ability to use creativity to find a solution to complex problems, underlying its resourcefulness.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Empathy</p>
                            <p className='desc_inner_div_slider'>{`Neokred and its ability to empathise with the client's problems make it stand out from its competitors. It understands and values the pain points in the clients' journey and musters solutions suited to their needs`}.</p>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div className='swiper_inner_div'>
                            <p className='title_slider_inner_div'>Dependability</p>
                            <p className='desc_inner_div_slider'>{`Dependability as a value is embedded within the ethos of Neokred. It helps to create trust about how the client's data is being handled and is safe from tampering and leaks.`}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BrandValuesComp;
