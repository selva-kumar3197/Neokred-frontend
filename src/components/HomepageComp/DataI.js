import imageUrl from '@/imageUrl'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ResponsiveImage from './ResponsiveImage'
import Link from 'next/link'


const DataI = () => {
    return (
        <div className="section4_contanierOne">
            <div className='section4_inner_div'>
                <p className="section4_contanierOne_title">Strategise better with AI-backed insights</p>
                <p className="section4_contanierOne_desc">Get a quick insight into your transactional details with just a click.</p>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.seven} />
                    <p className="inner_desc_containerimaes">Complete control over finance.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.eight} />
                    <p className="inner_desc_containerimaes">Reduced credit risk and minimised fraudulent activities.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.nine} />
                    <p className="inner_desc_containerimaes">Better decision-making.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.ten} />
                    <p className="inner_desc_containerimaes">Streamline the consumer approval process.</p>
                </div>
                <Link className="header_nav_item_inner" href="/data-i">
                    <Button className="section2_explore_button_inside">Explore</Button>
                </Link>
            </div>
            <div className='section4_inner_div'>
                <ResponsiveImage height="0" width="0" src={imageUrl?.homePage?.section4?.six} />
            </div>
            <Link className="header_nav_item_inner" href="/data-i">
                <Button className="section2_explore_button_mobile">Explore</Button>
            </Link>
        </div>
    )
}

export default DataI