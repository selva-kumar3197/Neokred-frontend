import React, { useState } from 'react'
import ResponsiveImage from "@/components/HomepageComp/ResponsiveImage";
import Head from 'next/head'
import CarouselsBlogs from '@/components/CarouselsBlogs'
import { authorFrom } from '@/services/apis';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import baseUrl from '@/services/baseurl';
import Link from 'next/link';


const Author = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [error, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '',
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};
        if (formData.name === "") {
            newErrors.name = "Name is required";
        }
        if (formData.email === "") {
            newErrors.email = "Email is required";
        }

        if (formData.message === "") {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);


        const payload = {
            name: formData?.name,
            email: formData?.email,
            message: formData?.message,
        }
        const headers = {
            headers: {
                "Content-Type": "application/json",
            }
        }
        const responce = await axios.post
            (baseUrl + authorFrom, payload, headers)
        if (responce.status == 200) {
            toast.success('Thank You', { position: "top-center", autoClose: 2000 });
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }

    };
    return (
        <>
        <Head>
            <title>Author - Neokred</title>
        </Head>
            <ToastContainer />
            <div className='authormain_div'>
                <div className='maincontentdiv'>
                    <div className='authorimg_mob'>
                        <img src="https://neokred.s3.ap-south-1.amazonaws.com/About-us/Rectangle+6061.png" alt='image' />
                    </div>
                    <div className='authorimg'>
                        <img src="https://neokred.s3.ap-south-1.amazonaws.com/About-us/Rectangle+6061.png" alt='image' />
                    </div>
                    <div className='authorheading'>
                        <h1 className='authorheading_text'>Rohith Reji </h1>
                        <div className='authorsecondheading'>
                            <h2 className='authorsecondheading_text'>Co-Founder</h2>
                            <Link href='https://www.linkedin.com/in/rohithreji/' target='_blank'>
                                <img src='https://test-bkt-ab.s3.ap-south-1.amazonaws.com/rnr/1709012588535-link.png' alt='image' />
                            </Link>
                        </div>
                        <p className='authorsecondheading_subtext'>{`As Neokred's Co-founder and Chief Strategy Officer, I'm deeply passionate about driving the company's strategic vision. I leverage my expertise to lead and execute strategic initiatives, shaping Neokred's direction and contributing significantly to our growth trajectory. Witnessing the positive impact of our efforts on Neokred's journey within the dynamic industry landscape is incredibly rewarding.`}</p>
                    </div>
                </div>
                {/* <div className='blogs_section6'>
                    <CarouselsBlogs />
                </div> */}
            </div>
            
            {/*form section*/}
            {/* <div className='contact_us_section2'>
                <div className='contact_us_form_container1'>
                    <p className='form_title1' >Connect with the author</p>
                    <p className='form_desc' >Liked our products? Wait until you love it once you use it.</p>
                </div>
                <div className='contact_us_form_container2'>
                    <input placeholder='Name' type='text' className='contact_us_form_inputcontainer'
                        name='name'
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {error.name && <p className="text-danger">{error.name}</p>}
                    <input placeholder='Email ID' type='email' className='contact_us_form_inputcontainer'
                        name='email'
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    {error.email && <p className="text-danger">{error.email}</p>}


                    <input placeholder='Type your message' type='text' className='contact_us_form_inputcontainer'
                        name='message'
                        value={formData.message}
                        onChange={handleInputChange}
                    />
                    {error.message && <p className="text-danger">{error.message}</p>}



                    <button className="author_explore_button2" onClick={handleSubmit}>Submit</button>
                </div>

            </div> */}
            <div className='author_bottomimg'>
                <ResponsiveImage alt="" src="https://test-bkt-ab.s3.ap-south-1.amazonaws.com/rnr/1709021413606-Group%201000004523.png" />
            </div>
        </>

    )
}

export default Author