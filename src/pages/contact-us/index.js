import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Button from '@/components/HomepageComp/Button';
import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';
import AcordianContactUs from '@/components/AboutUs/AcordianContactUs';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import baseUrl from '@/services/baseurl';
import { contactFrom } from '@/services/apis';

const AboutUs = () => {
    const [isActive, setIsActive] = useState(false);
    const [selected, setIsSelected] = useState("Choose one");
    function handleBlur(e) {
        console.log(e);
    }
    const [formLooking, setFormLooking] = useState(false)
    const [submitFormData, setSubmitFormdata] = useState({})
    const [error, setErrors] = useState({});

    const ValidateContactUsForm = () => {
        const { name, email, phoneNumber, company_name } = submitFormData
        const errObj = {};
        if (!name) {
            errObj.name = "Name is required";
        }
        if (!email) {
            errObj.email = "Email is required";
        }
        if (!phoneNumber) {
            errObj.phoneNumber = "Phone Number is required";
        }
        if (!company_name) {
            errObj.company_name = "Company Name is required";
        }
        if (Object?.keys(errObj)?.length > 0) {
            setErrors(errObj)
            return true
        } else {
            setErrors({})
            return false
        }
    }

    const handleSubmit = async () => {
        try {
            if (ValidateContactUsForm()) {
                return
            }
            const payload = {
                name: submitFormData?.name,
                email: submitFormData?.email,
                phoneNumber: submitFormData?.phoneNumber,
                company_name: submitFormData?.company_name,
                job: submitFormData?.job
            }
            const headers = {
                headers: {
                    "Content-Type": "application/json",
                }
            }
            const responce = await axios.post
                (baseUrl + contactFrom, payload, headers)
            console.log(responce.status)
            if (responce.status == 200) {
                toast.success('Thank You', { position: "top-center", autoClose: 2000 });
                setFormData({
                    name: '',
                    email: '',
                    phoneNumber: '',
                    company_name: '',
                    job: '',
                });
            }

        } catch (err) {
            console.log("ERR:", err)
        }

    };



    return (
        <>
            <Head>
                <title>Get in Touch with Us - Neokred</title>
                <meta name="description" content="Have questions or need assistance? Visit our Contact Us page and reach out to NeoKred's dedicated support team." />
            </Head>
            <ToastContainer />
            <div className='contact_us_page'>
                <div className="about_us_section1">
                    <div className="contact_us_section1_bg">
                        <ResponsiveImage src={imageUrl?.contactUs?.banner} alt='banner' className='banner-desktop' />
                        <ResponsiveImage src={imageUrl?.contactUs?.banner_mobile} alt='banner' className='banner-mobile' />
                        <div className='contact_section_title_button'>
                            <h1 className="banner_heading_contactus">Liked what you saw?</h1>
                        </div>
                    </div>
                    <Image alt="" height="430" width="255" src={imageUrl?.aboutUs?.bgCircle} className='about_us_vector_circle' />
                </div>
                <div className='contact_us_section2'>
                    <div className='contact_us_form_container1'>
                        <p className='form_title' >Get In Touch With Us Today!</p>
                        <p className='form_desc' >Liked our products? Wait until you love it once you use it.</p>
                    </div>
                    <div id='contactdetails' className='contact_us_form_container2'>
                        <input onChange={(e) => setSubmitFormdata({ ...submitFormData, name: e.target.value })} placeholder='Name' type='text' className='contact_us_form_inputcontainer' />
                        <div className='error_msg'>{error?.name}</div>
                        <input onChange={(e) => setSubmitFormdata({ ...submitFormData, email: e.target.value })} placeholder='Email ID' type='email' className='contact_us_form_inputcontainer' />
                        <div className='error_msg'>{error?.email}</div>
                        <input onChange={(e) => setSubmitFormdata({ ...submitFormData, phoneNumber: e.target.value })} placeholder='Phone Number' type='number' className='contact_us_form_inputcontainer' />
                        <div className='error_msg'>{error?.phoneNumber}</div>
                        <input onChange={(e) => setSubmitFormdata({ ...submitFormData, company_name: e.target.value })} placeholder='Company Name' type='text' className='contact_us_form_inputcontainer' />
                        <div className='error_msg'>{error?.company_name}</div>
                        <div onClick={() => setFormLooking(!formLooking)} className='contact_us_form_looking_for'>
                            {submitFormData.job ?
                                <p className='contact_us_form_title_font'>{submitFormData.job}</p> 
                                :
                                <p className='contact_us_form_title_font'>What are you looking for?</p>
                            }


                            <div>
                                <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/contact+us/Vector+235.svg"} />
                            </div>
                        </div>
                        {
                            formLooking
                                ?
                                <div className='form_looking_container'>
                                    <div
                                        onClick={(e) => {
                                            setSubmitFormdata({ ...submitFormData, job: "CollectBot" });
                                            setFormLooking(false); // Close the options after selecting
                                        }}
                                        className={`contact_us_form_title_font ${submitFormData.job === "collectbot" ? 'selected' : ''}`}
                                    >
                                        CollectBot
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            setSubmitFormdata({ ...submitFormData, job: "ProfileX" });
                                            setFormLooking(false); // Close the options after selecting
                                        }}
                                        className={`contact_us_form_title_font ${submitFormData.job === "profilex" ? 'selected' : ''}`}
                                    >
                                        ProfileX
                                    </div>
                                    <div
                                        onClick={(e) => {
                                            setSubmitFormdata({ ...submitFormData, job: "DATAi" });
                                            setFormLooking(false); // Close the options after selecting
                                        }}
                                        className={`contact_us_form_title_font ${submitFormData.job === "data-i" ? 'selected' : ''}`}
                                    >
                                        DATAi
                                    </div>
                                </div>
                                :
                                null
                        }
                        <Button className="about_us_explore_button2" onClick={handleSubmit}>Submit</Button>
                    </div>
                    {/* <div className="image_left_abs_contactus"> */}
                    {/* <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/contact+us/Group+1000004469.svg"} /> */}
                    {/* </div> */}
                    {/* <div className="image_right_abs_contactus" > */}
                    {/* <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/contact+us/Group+1000004523+(2).svg"} /> */}
                    {/* </div> */}
                </div>
                <div className="contact_us_container">
                    <div className='about_us_section2'>
                        <p className='aboutus_title_section2'>Get In Touch With Us</p>
                        <p className='aboutus_desc_section2'>Today!</p>
                        <p className='contactus_desc2_section2'>Whether you have inquiries about our cutting-edge financial solutions, need assistance, or wish to explore collaboration opportunities, our dedicated team is here to assist you. Connect with us to embark on a seamless journey of financial empowerment. Feel free to reach out to us.</p>
                    </div>
                </div>
                <AcordianContactUs />
                <div className='banner_bottom_section'>
                    <div className='banner_section_areas_left'>
                        <p className='left_side_font_desc'> Have Queries outside of these ?  </p>
                    </div>
                    <div className='banner_section_areas_left'>
                        <p className='right_side_font_desc'>Our Team Is Readily Available To Assist You. Reach Out To Us Trough This Message Box On Your Dashboard For Real-Time Assistance.</p>
                        <Button className="homepage_explore_button">{`Let's Go`}</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs