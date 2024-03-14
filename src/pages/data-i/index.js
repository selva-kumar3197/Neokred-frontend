import Chatbot from '@/components/Chatbot'
import Button from '@/components/HomepageComp/Button'
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage'
import AccordianCollectBot from '@/components/ProfileXComp/AccordianCollectBot'
import AccordianProdilex from '@/components/ProfileXComp/AccordianProdilex'
import DataIAccordianCollectBot from '@/components/ProfileXComp/DataIAccordianCollectBot'
import DataIAccordianDataI from '@/components/ProfileXComp/DataIAccordianDataI'
import DataIOnboardCustomers from '@/components/ProfileXComp/DataIOnboardCustomers'
import imageUrl from '@/imageUrl'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";

const DataIPage = () => {
    return (
        <>
            <Head>
                <title>AI Enabled Customer Data Platform - Data.i</title>
                <meta name="description" content='Collect consumer data with just a tap. Our comprehensive dashboard that allows you to see beyond the transactional details to gain insights on customer preferences.' />
            </Head>
            <div className="homepage_container">
                <div className='profilex_section1'>
                    <div className='profilex_section1_container'>
                        <div className='logo_banner_section1'>
                            <ResponsiveImage src={imageUrl?.dataI?.logo} />
                        </div>
                        <div className='content_section1'>
                            <div className='content_section1_title'>
                                Unlock the full potential of data with actionable insights.
                            </div>
                            <div className='content_section1_desc'>Help your team of data scientists and marketing mavericks with a customer data platform that helps find the underlying insights derived by our machine learning analytics platform, DATAi. This data analytics platform helps find secure and standardised access to financial information for open data sharing and collaboration.</div>
                        </div>
                    </div>
                    <div className='image_mobile_section1'>
                        <Image alt="" height="200" width="200" src={imageUrl?.dataI?.logo} />
                    </div>
                </div>
            </div>
            <div className='profilex_section2'>
                <p className='section2_title_profilex'>DATAi USPs</p>
                <p className='section2_desc'>Optimise and analyse financial data.</p>
                <div className='profilex_onbords_section2'>
                    <DataIOnboardCustomers />
                </div>
            </div>
            <div className='profilex_section3'>
                <div className='image_abs_right_side'>
                    <ResponsiveImage src={imageUrl?.profilexPage?.section3?.one} />
                </div>
                <div className='perfection_title_section3'>A dashboard that sees all </div>
                <div className='container_box_profilex3'>
                    <p className='profilex_container_box3_desc'>A comprehensive dashboard that allows you to see beyond the transactional details to gain a better idea of customer preferences.</p>
                </div>
                <div className='profilex_section_innerbox3'>
                    <div className='image_abs_left_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
                    </div>
                    <div className='image_ipad_center_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
                    </div>
                    <div className='perfection_title_section3'>See the Hidden Facts   </div>
                </div>
                <div className='tab_profilex_inner_answers'>
                    <div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Promote Financial Connectivity</p>
                            <p className='desc_profilex_inner_tab'>Create a secure system and level the financial industry with easy, innovative solutions.</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Consent-Driven Data</p>
                            <p className='desc_profilex_inner_tab'>Adhere to data policies for a more secure and transparent analysis of data.</p>
                        </div>

                    </div>
                    <div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Tailored Customer Experience</p>
                            <p className='desc_profilex_inner_tab'>{`This customer data platform helps craft offers tailored to your consumers' traits and preferences.`}</p>
                        </div>
                        <div className='inner_tab_profilex_inside'>
                            <p className='title_profilex_inner_tab'>Budget-friendly</p>
                            <p className='desc_profilex_inner_tab'>Helps in keeping a cap against overspending in different categories with customised alerts.</p>
                        </div>

                    </div>

                </div>
            </div>
            {/* mobile section */}
            <div className='profilex_section3_mobile'>
                <div className='perfection_datai_clss'>
                    <div className='perfection_title_section3'>A dashboard that sees all</div>
                    <div className='perfection_desc_section3'>A comprehensive dashboard that allows you to see beyond the transactional details to gain a better idea of customer preferences.</div>
                </div>

                <div className='data_i_section_innerbox3_mobile'>
                    <div className='image_abs_right_side_mobile'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.mobileOne} />
                    </div>
                    <div className='image_abs_left_side_mobile'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
                    </div>
                    <div className='image_ipad_center_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
                    </div>
                </div>
                <DataIAccordianDataI />

            </div>
            <div className="homepage_container">
                <DataIAccordianCollectBot />
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

export default DataIPage