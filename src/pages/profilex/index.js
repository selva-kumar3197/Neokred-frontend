import Chatbot from '@/components/Chatbot'
import Button from '@/components/HomepageComp/Button'
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage'
import AccordianCollectBot from '@/components/ProfileXComp/AccordianCollectBot'
import AccordianProdilex from '@/components/ProfileXComp/AccordianProdilex'
import OnboardCustomers from '@/components/ProfileXComp/OnboardCustomers'
import imageUrl from '@/imageUrl'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const ProfileXPage = () => {
    return (
        <>
            <Head>
                <title>Customer Onboarding Software - Smooth Profiling & KYC</title>
                <meta name="description" content='Onboard a customer with a tap with our customer onboarding software. KYC for high/medium risk customers made easy with ProflieX.' />
            </Head>
            <div className="homepage_container">
                <div className='profilex_section1'>
                    <div className='profilex_section1_container'>
                        <div className='logo_banner_section1'>
                            <ResponsiveImage src={imageUrl?.profilexPage?.one} />
                        </div>
                        <div className='content_section1'>
                            <div className='content_section1_title'>
                                {`Improve consumers' experiences with smooth profiling and onboarding`}
                            </div>
                            <div className='content_section1_desc'>Make fraudulent activities a thing of the past with compliances that fit the regulatory standards in fintech and other financial sectors.</div>
                        </div>
                    </div>
                    <div className='image_mobile_section1'>
                        <Image alt="" height="200" width="200" src={imageUrl?.profilexPage?.one} />
                    </div>
                </div>
            </div>
            <div className='profilex_section2'>
                <p className='section2_title_profilex'>Onboard a customer with a tap</p>
                <p className='section2_desc'>Secured Identities. Ensured Compliances.</p>
                <div className='profilex_onbords_section2'>
                    <OnboardCustomers />
                </div>
            </div>
            <div className='profilex_section3'>
                <div className='image_abs_right_side'>
                    <ResponsiveImage src={imageUrl?.profilexPage?.section3?.one} />
                </div>
                <div className='perfection_title_section3'> Perfection in profiling on a <br /><span className='perfection_span_section3'>single go</span> </div>
                <div className='container_box_profilex3'>
                    <p className='profilex_container_box3_desc'>With a single sign-on, we aggregate and analyse both transactional and non-transactional data and provide banks and brands with a holistic view of their consumer profiles.</p>
                </div>
                <div className='profilex_section_innerbox3'>
                    <div className='image_abs_left_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
                    </div>
                    <div className='image_ipad_center_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
                    </div>
                    <div className='perfection_title_section3'> KYC Customised with  <br /><span className='perfection_span_section3'>Precision</span> </div>
                </div>
                <div className='tab_profilex_inner_answers'>
                    <div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Industry First Innovation</p>
                            <p className='desc_profilex_inner_tab'>Captures quality information intelligently and provides reports through linked SMS.</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Businesses Verified</p>
                            <p className='desc_profilex_inner_tab'>Make informed business decisions that follow industry compliances.</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Verify Employees</p>
                            <p className='desc_profilex_inner_tab'>Create a credible workforce with our employment APIs.</p>
                        </div>
                    </div>
                    <div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Ease of Data Extraction</p>
                            <p className='desc_profilex_inner_tab'>The Document OCR helps to extract data.</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Bank Account Verified</p>
                            <p className='desc_profilex_inner_tab'>Get accurate banking information for seamless processes.</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Quality Assured every time</p>
                            <p className='desc_profilex_inner_tab'>Onboard with high accuracy sans any latency in the process.</p>
                        </div>
                    </div>

                </div>
            </div>
            {/* mobile section */}
            <div className='profilex_section3_mobile'>
                <div className='perfection_title_section3'> Perfection in profiling on a <br /><span className='perfection_span_section3'>single go</span> </div>
                <div className='profilex_section_innerbox3_mobile'>
                    <div className='image_abs_right_side_mobile'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.mobileOne} />
                    </div>
                    <div className='image_abs_left_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
                    </div>
                    <div className='image_ipad_center_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
                    </div>
                </div>
                <AccordianCollectBot />

            </div>
            <div className="homepage_container">
                <div className='profilex_section5'>
                    <div className='profilex_left_section'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section5?.one} />
                    </div>
                    <div className='profilex_right_section'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section5?.two} />
                        <div className='internal_profilex_section'>
                            <p className='internal_profilex_section_title'>350+</p>
                            <p className='internal_profilex_section_desc'>Clients</p>
                        </div>
                    </div>
                </div>
                <AccordianProdilex />
            </div>

            <div className="homepage_section10">

                <div className="left_container_section10">
                    <div className="titile_section10">Just drop us a line. See how we make business finances easy for you!</div>
                    <Link href='/contact-us'>
                        <Button className="section2_explore_button">Know More</Button>
                    </Link>

                </div>
                <div className="right_container_section10">
                    <ResponsiveImage src={imageUrl?.homePage?.section10?.one} />
                </div>

                {/* MOBILE VERSION */}
                <div className="version_mobile_section10">
                    <div className="ceneter_cycle_image">
                        <ResponsiveImage src={imageUrl?.homePage?.section10?.one} />
                    </div>
                    <div className="titile_section10_mobile">Just drop us a line. See how we make business finances easy for you!</div>
                    <Link href='/contact-us'>
                        <Button className="section2_explore_button_mobile_version">Know More</Button>
                    </Link>
                </div>
            </div>

            <div className="homepage_section11">
                <Chatbot />
            </div>
        </>
    )
}

export default ProfileXPage