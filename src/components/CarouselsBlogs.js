import imageUrl from '@/imageUrl';
import React, { useState } from 'react';
import ResponsiveImage from './HomepageComp/ResponsiveImage';

const CarouselsBlogs = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        {
            src: imageUrl?.blogs?.nine,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.ten,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.eleven,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.nine,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.ten,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.eleven,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        },
        {
            src: imageUrl?.blogs?.nine,
            title: 'Blog Name Here',
            description: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === images.length - 3 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? images.length - 3 : currentSlide - 1);
    };

    return (
        <div className="carousel-container">
            <div className="button-container">
                <div className='leave_comment'>Our suggested blogs</div>
                <div className='button_container_section'>
                    <div className="prev" onClick={prevSlide}>
                        <ResponsiveImage alt="" src={imageUrl?.blogs?.seven} />
                    </div>
                    <div className="dots">
                        {images.map((_, index) => (
                            <span
                                key={index}
                                className={index === currentSlide ? 'dot active' : 'dot'}
                                onClick={() => setCurrentSlide(index)}
                            >
                            </span>
                        ))}
                    </div>
                    <div className="next" onClick={nextSlide}>
                        <ResponsiveImage alt="" src={imageUrl?.blogs?.eight} />
                    </div>
                </div>
            </div>

            <div className="carousel">
                <div className="carousel-images">
                    {images.slice(currentSlide, currentSlide + 3).map((image, index) => (
                        <div key={index} className="slide">
                            <ResponsiveImage src={image.src} alt={`Slide ${index + currentSlide + 1}`} />
                            <p className='slide-title'>{image.title}</p>
                            <p className='slide-desc'>{image.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselsBlogs;
