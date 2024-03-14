import Head from 'next/head';
import React, { useState } from 'react'
import AwardSlider from '@/components/AboutUs/AwardSlider';
import BrandValues from '@/components/AboutUs/BrandValues';
import Button from '@/components/HomepageComp/Button';
import Image from 'next/image';
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';
import BrandValuesComp from '@/components/AboutUs/BrandValuesComp';
import Link from 'next/link';

const AboutUs = () => {

    const [brandvalue, setBrandvalue] = useState(0)
    const teamMembers = [
        {
            name: 'Rohith Reji',
            position: 'Co-Founder',
            image: 'https://neokred.s3.ap-south-1.amazonaws.com/About-us/co-f.png',
            link: 'https://www.linkedin.com/in/rohithreji/',
        },
        {
            name: 'Vivek Sridhar',
            position: 'CBO',
            image: 'https://neokred.s3.ap-south-1.amazonaws.com/About-us/cbo.png',
            link: 'https://www.linkedin.com/in/viveksridhar/',
        },
        {
            name: 'Tarun Nazare',
            position: 'CEO | Co-Founder',
            image: 'https://neokred.s3.ap-south-1.amazonaws.com/About-us/ceo.png',
            link: 'https://www.linkedin.com/in/tarunnazare/',
        },
        {
            name: 'Hariharashudhan V K',
            position: 'COO',
            image: 'https://neokred.s3.ap-south-1.amazonaws.com/About-us/coo.png',
            link: 'https://www.linkedin.com/in/hariharashudhan/',
        },
        {
            name: 'Dipali Padia',
            position: 'President - Banking Alliance and Partnership ',
            image: 'https://neokred.s3.ap-south-1.amazonaws.com/About-us/testimonial.svg',
            link: 'https://www.linkedin.com/in/dipali-padia/',
        },
    ]
    const brandData = ['N', 'E', 'O', 'K', 'R', 'E', 'D']


    return (
        <>
            <Head>
                <title>About Us - Neokred</title>
            </Head>

            <div className="about_us_section1">
                <div className="about_us_section1_bg">
                    <ResponsiveImage src='https://neokred.s3.ap-south-1.amazonaws.com/About-us/Mask+group+(5).svg' className="banner-desktop" alt="" />
                    <ResponsiveImage src='https://neokred.s3.ap-south-1.amazonaws.com/About-us/Mask+group+(6).svg' className="banner-mobile" alt="" />
                    <div className='about_section_title_button'>
                        <h1 className="banner_heading">Enriching experience that<br />goes beyond just banking</h1>
                        {/* <Link href="/#collectbot">
                            <div className="explore_button">
                                <Button className="about_us_explore_button">Explore</Button>
                            </div>
                        </Link> */}
                    </div>
                </div>
                <Image alt="" height="430" width="255" src={imageUrl?.aboutUs?.bgCircle} className='about_us_vector_circle' />
            </div>
            <div className="about_us_container">
                <div className='about_us_section2'>
                    <p className='aboutus_title_section2'>Redefining financial possibilities: </p>
                    <p className='aboutus_desc_section2'>The Neokred Story</p>
                    <p className='aboutus_desc2_section2'>At the heart of{` Neokred's`} ethos lies the belief that experiences related to any business should be more than just transactions. It should be a journey enriched with experience. It is these experiences that turn transactions into relationships and relationships into memories. So, the idea behind Neokred remains simple: to be the cornerstone of insight-driven financial excellence that transcends industries.</p>
                </div>
                <div className='aboutus_vision_section3'>
                    <div className='vision_container'>
                        <ResponsiveImage src={imageUrl?.aboutUs?.section3?.mission} />
                        <div className='vision_text_section'>
                            <p className='aboutus_headertext_vision'>Vision</p>
                            <p className='aboutus_desc2_section2_vision'>Be the guiding light in defining consumer journeys and creating more rewarding, personalised experiences.</p>
                        </div>
                    </div>
                    <div className='mission_container' >
                        <div className='vision_text_section' >
                            <p className='aboutus_headertext_vision'>Mission</p>
                            <p className='aboutus_desc2_section2_vision'>Crafting a seamless BFSI ecosystem by facilitating diverse industries with integrated intuitive solutions powered by superior embedded financial and profiling technologies.</p>
                        </div>
                        <ResponsiveImage src={imageUrl?.aboutUs?.section3?.vision} />
                    </div>
                </div>
                <div className='aboutus_section4'>
                    <p className='aboutus_title_section2'>Meet the team</p>
                    <div className='team_member_container'>
                        {teamMembers?.map((mem, i) => {
                            return (
                                <div key={i} className='team_inner_container' style={{ backgroundImage: `url(${mem?.image})`, marginTop: i % 2 === 0 ? 0 : 100, marginRight: i + 1 === teamMembers?.length ? 0 : 15 }}>
                                    <a className='team_img_container' href={mem?.link} target="_blank" rel="noopener noreferrer" >
                                        <ResponsiveImage alt="" src={imageUrl?.aboutUs?.section3?.linkedIn} className='team_img' />
                                    </a>
                                    <div className='team_text_container'>
                                        <p className='aboutus_text1'>{mem?.position}</p>
                                        <p className='team_text'>{mem?.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className='team_member_container_mobile'>
                        <Link href='https://www.linkedin.com/in/rohithreji/' target='_blank'>
                            <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/About-us/Group+1000004717+(1).svg"} alt="" />
                        </Link>
                        <Link href='https://www.linkedin.com/in/viveksridhar/' target='_blank'>
                            <div className='team-main'>
                                <ResponsiveImage className="second_image_mobile" src={"https://neokred.s3.ap-south-1.amazonaws.com/About-us/testimonial_mobile2.png"} alt="" />
                                <div className='team-div3'>
                                    <ResponsiveImage src={'https://neokred.s3.ap-south-1.amazonaws.com/About-us/Group+1000004523.png'} alt="" />
                                </div>
                                <div className='team-div'>
                                    <p className='team-name'>CBO </p>
                                    <p className='team-desig'>Vivek Sridhar</p>
                                </div>
                            </div>
                        </Link>
                        <Link href='https://www.linkedin.com/in/hariharashudhan/' target='_blank'>
                            <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/About-us/Group+1000004720+(1).svg"} alt="" />
                        </Link>
                        <Link href='https://www.linkedin.com/in/tarunnazare/' target='_blank'>
                            <div className='team-main'>
                                <ResponsiveImage className="second_image_mobile" src={"https://neokred.s3.ap-south-1.amazonaws.com/About-us/testimonial_mobile3.png"} alt="" />

                                <div className='team-div3'>
                                    <ResponsiveImage src={'https://neokred.s3.ap-south-1.amazonaws.com/About-us/Group+1000004523.png'} alt="" />
                                </div>
                                <div className='team-div'>
                                    <p className='team-name'>CEO | Co Founder</p>
                                    <p className='team-desig'>Tarun Nazare</p>
                                </div>
                            </div>
                        </Link>
                        <Link href='https://www.linkedin.com/in/dipali-padia/' target='_blank'>
                            <div className='team-main'>
                                <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/About-us/testimonial_mobile.svg"} alt="" />
                                <div className='team-div2'>
                                    <ResponsiveImage src={'https://neokred.s3.ap-south-1.amazonaws.com/About-us/Group+1000004523.png'} alt="" />
                                </div>
                                <div className='team-div'>
                                    <p className='team-name'>President - Banking Alliance and Partnership </p>
                                    <p className='team-desig'>Dipali Padia</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className='aboutus_section5'>
                    <div className='awards_container1'>
                        <div className='awards-innercontainer'>
                            <p className='aboutus_text1_section5'>Recognition</p>
                            {/* <div className="button_container_sectionAbout">
                                <Button className='award-button'>
                                    <ResponsiveImage alt="" className='arrow_img' src={imageUrl?.homePage?.section7?.arrowLeft} />
                                </Button>
                                <Button className='award-button'>
                                    <ResponsiveImage alt="" className='arrow_img' src={imageUrl?.homePage?.section7?.arrowRight} />
                                </Button>
                            </div> */}
                        </div>
                        <p className='award_header'>Awards & Honours</p>
                        <p className='team_text'>{`Here's some of them:`}</p>
                    </div>
                    <div className='awards_container2'>
                        <AwardSlider />
                    </div>
                </div>
                <div className='aboutus_section6'>
                    <p className='aboutus_title_section2'>Brand Values</p>
                    <div className='values_header_maincontainer'>
                        {brandData.map((lett, i) => {
                            return (
                                <button onClick={() => setBrandvalue(i)} key={i} className='values_header_container' style={{ backgroundColor: brandvalue === i ? '#F29100' : '#EFEFEF' }}>
                                    <p className='values_header' style={{ color: brandvalue === i ? '#fff' : '#F29100' }}>{lett}</p>
                                </button>
                            )
                        })}
                    </div>
                    <BrandValuesComp />
                </div>
            </div>
            <div className='aboutus_section7'>
                <div className='contactform_container1'>
                    <p className='form_title' >Get In Touch With Us Today!</p>
                    <p className='form_desc' >Liked our products? Wait until you love it once you use it.</p>
                </div>
                <form className='contactform_container2'>
                    <input placeholder='Name' type='text' className='contactform_inputcontainer' />
                    <input placeholder='Email ID' type='email' className='contactform_inputcontainer' />
                    <input placeholder='Phone Number' type='number' className='contactform_inputcontainer' />
                    <input placeholder='Company Name' type='text' className='contactform_inputcontainer' />
                    <input placeholder='What are you looking for?' type='text' className='contactform_inputcontainer' />
                    <div className='contactform_line' />
                    <Button className="homepage_explore_button">Submit</Button>
                </form>
            </div>

        </>
    );
}

export default AboutUs