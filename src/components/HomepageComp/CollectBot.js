import imageUrl from '@/imageUrl'
import Image from 'next/image'
import React from 'react'
import Button from './Button'
import ResponsiveImage from './ResponsiveImage'
import Link from 'next/link'

const CollectBot = () => {
    return (
        <div className="section4_contanierOne">
            <div className='section4_inner_div'>
                <p className="section4_contanierOne_title">Streamline financial transactions with a unified platform.</p>
                <p className="section4_contanierOne_desc">Payment processing switch that integrates seamlessly with the CBS System. Operate, onboard, track, and manage merchants better with a user-friendly Merchant Management Framework.</p>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.two} />
                    <p className="inner_desc_containerimaes">Connected embedded finance and integrated solutions.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.three} />
                    <p className="inner_desc_containerimaes">Single-platform integration for multiple pay-ins and payouts.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.four} />
                    <p className="inner_desc_containerimaes">Fully automated financial transactions and expense management.</p>
                </div>
                <div className="inner_section_cintainerOne">
                    <Image alt="" height="52" width="52" src={imageUrl?.homePage?.section4?.five} />
                    <p className="inner_desc_containerimaes">Suitable for every business.</p>
                </div>
                <Link className="header_nav_item_inner" href="/collectbot">
                    <Button className="section2_explore_button_inside">Explore</Button>
                </Link>
            </div>
            <div className='section4_inner_div'>
                <ResponsiveImage height="0" width="0" src={imageUrl?.homePage?.section4?.one} />
            </div>
            <Link className="header_nav_item_inner" href="/collectbot">
                <Button className="section2_explore_button_mobile">Explore</Button>
            </Link>

        </div>
    )
}

export default CollectBot