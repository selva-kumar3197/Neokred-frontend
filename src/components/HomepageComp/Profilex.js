import imageUrl from '@/imageUrl'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ResponsiveImage from './ResponsiveImage'
import Link from 'next/link'


const Profilex = () => {
    return (
        <div className="section4_contanierOne">
            <div className='section4_inner_div'>
                <p className="section4_contanierOne_title">Profile faster with precision</p>
                <p className="section4_contanierOne_desc">Revolutionise the analysis and aggregation of both transactional and non-transactional data with the KYC+RegTech solution, which provides financial institutions and brands with a holistic view of consumers.</p>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.twelve} />
                    <p className="inner_desc_containerimaes">Verify anything and everything (finances, documents, and personal information).</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.thirteen} />
                    <p className="inner_desc_containerimaes">Easy data extraction with document OCR APIs.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.fourteen} />
                    <p className="inner_desc_containerimaes">Cover every data point on a single platform.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.fifteen} />
                    <p className="inner_desc_containerimaes">Get credible insights in the BFSI domain.</p>
                </div>
                <Link className="header_nav_item_inner" href="/profilex">
                    <Button className="section2_explore_button_inside">Explore</Button>
                </Link>
            </div>
            <div className='section4_inner_div'>
                <ResponsiveImage height="0" width="0" src={imageUrl?.homePage?.section4?.eleven} />
            </div>
            <Link className="header_nav_item_inner" href="/profilex">
                <Button className="section2_explore_button_mobile">Explore</Button>
            </Link>
        </div>
    )
}

export default Profilex