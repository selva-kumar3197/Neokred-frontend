import imageUrl from '@/imageUrl'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import ResponsiveImage from './HomepageComp/ResponsiveImage'

const Footer = () => {

    const handleTopArrow = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <>
            <div className='footer-maincontainer'>
                <div className='footer-container'>
                    <div>
                        <Link className='link_tag_next' href='/#product'>
                            <div className='footer-text'> Products </div>
                        </Link>
                        <Link className='link_tag_next' href='/insight'>
                            <div className='footer-text'> Insights </div>
                        </Link>
                        <Link className='link_tag_next' href="/about-us">
                            <div className='footer-text'> About </div>
                        </Link>
                        <Link href="/career" className='link_tag_next'>
                            <div className='footer-text'> Careers </div>
                        </Link>
                        <Link className='link_tag_next' href="https://auth.neokred.tech/login">
                            <div className='footer-text'> Log In </div>
                        </Link>
                    </div>
                    <div>
                        <Link className='link_tag_next' href="/privacy-policy">
                            <div className='footer-text'> Privacy Policy </div>
                        </Link>
                        <Link className='link_tag_next' href="/terms">
                            <div className='footer-text'> Terms & Conditions </div>
                        </Link>
                    </div>
                    <div>
                        <Link className='link_tag_next' href="/contact-us">
                            <div className='footer-text'> Contact </div>
                        </Link>
                        <p className='footer-text2'>Neokred Office,<br /> 307, 9th Main Rd, 5th Block, Jayanagar,<br /> Bengaluru, Karnataka - 560041<br /> +91 95384 95000</p>
                    </div>
                    <div>
                        <Image alt="" height="171" width="113" src={imageUrl?.footer?.two} />
                    </div>

                </div>
                <div className='footer-container'>
                    <div className='footer_container_part2'>
                        <Image alt="" height="58" width="230" src={imageUrl?.footer?.footerLogoOne} />
                        <div className='footer-container_inner_part2'>
                            <p className='footer_text_container2'>Supported Card Networks</p>
                            <div className='img-container'>
                                <Image alt="" height="37" width="75" className='logo1' src={imageUrl?.footer?.rupay} />
                                <Image alt="" height="16" width="50" className='logo2' src={imageUrl?.footer?.three} />
                            </div>
                            <Image alt="" height="60" width="253" src={imageUrl?.footer?.brands} />
                        </div>
                    </div>
                </div>
                <div className='footer-container'>
                    <div className='logos_container_copy'>
                        <p className='footer-text-copyright'>© 2024, NEOKRED. All rights reserved.</p>
                        <div className='icon-container'>
                            <Link href='https://www.facebook.com/neokredtech?mibextid=eQY6cl' target='_blank'>
                                <Image alt="" height="27" width="28" className='icon' src={imageUrl?.footer?.fb} />
                            </Link>
                            <Link href='https://www.linkedin.com/company/neokred/?originalSubdomain=in' target='_blank'>
                                <Image alt="" height="31" width="30" className='icon' src={imageUrl?.footer?.linkedIn} />
                            </Link>
                            <Link href='https://www.youtube.com/channel/UCM3Mhah7zEO5L0gaGrRGu4Q' target='_blank'>
                                <Image alt="" height="37" width="37" src={imageUrl?.footer?.youtube} />
                            </Link>
                            <Link href='https://twitter.com/neokredtech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eaut' target='_blank'>
                                <Image alt="" height="21" width="23" src={imageUrl?.footer?.twitter} />
                            </Link>
                            <Link href='https://www.instagram.com/neokredtech' target='_blank'>
                                <Image alt="" height="27" width="27" className='icon' src={imageUrl?.footer?.insta} />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>


            {/* MOBILE FOOTER */}
            <div className='footer-maincontainer_mobile'>
                <div className='footer-container_mobile'>
                    <Image alt="" height="36" width="142" src={imageUrl?.footer?.footerLogoOne} />
                    <Image alt="" onClick={handleTopArrow} height="32" width="32" src={imageUrl?.footer?.topButton} />
                </div>
                <div className='sections_mobile_footer'>
                    <div className='footer-text'> Products </div>
                    <Link href='/insight' className='link_tag_next'>
                        <div className='footer-text'> Insights </div>
                    </Link>
                    <Link className='link_tag_next' href="/about-us">
                        <div className='footer-text'> About </div>
                    </Link>
                    <Link href="/career" className='link_tag_next'>
                        <div className='footer-text'> Careers </div>
                    </Link>
                    <Link href='https://auth.neokred.tech/login' className='link_tag_next' target='_blank'>
                        <div className='footer-text'> Log In </div>
                    </Link>
                    <Link className='link_tag_next' href="/privacy-policy">
                        <div className='footer-text'> Privacy Policy </div>
                    </Link>
                    <Link className='link_tag_next' href="/terms">
                        <div className='footer-text'> Terms & Conditions </div>
                    </Link>
                </div>
                
                <div className='address-mobile'>
                    <p className='footer-text2'>Neokred Office, 307, 9th Main Rd, 5th Block, Jayanagar, Bengaluru, Karnataka - 560041<br /> +91 95384 95000</p>
                </div>
                <div className='social_media_icons'>
                    <div className='footer-container_inner_mobile'>
                        <div className='img-container'>
                            <Image alt="" height="37" width="75" className='logo1' src={imageUrl?.footer?.rupay} />
                            <Image alt="" height="16" width="50" className='logo2' src={imageUrl?.footer?.three} />
                        </div>
                        <Image alt="" height="50" width="153" src={imageUrl?.footer?.brands} />
                    </div>
                    <div className='icon-container_mobile'>
                        <Link href='https://www.facebook.com/neokredtech?mibextid=eQY6cl' target='_blank'>
                            <ResponsiveImage alt="" height="27" width="28" className='icon' src={imageUrl?.footer?.fb} />
                        </Link>
                        <Link href='https://www.linkedin.com/company/neokred/?originalSubdomain=in' target='_blank'>
                            <ResponsiveImage alt="" height="31" width="30" className='icon' src={imageUrl?.footer?.linkedIn} />
                        </Link>
                        <Link href='https://www.youtube.com/channel/UCM3Mhah7zEO5L0gaGrRGu4Q' target='_blank'>
                            <ResponsiveImage alt="" height="37" width="37" src={imageUrl?.footer?.youtube} />
                        </Link>
                        <Link href='https://twitter.com/neokredtech?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eaut' target='_blank'>
                            <ResponsiveImage alt="" height="21" width="23" src={imageUrl?.footer?.twitter} />
                        </Link>
                        <Link href='https://www.instagram.com/neokredtech' target='_blank'>
                            <ResponsiveImage alt="" height="27" width="27" className='icon' src={imageUrl?.footer?.insta} />
                        </Link>
                    </div>
                </div>
                <div className='footer_mobile_copyright'>
                    <p className='footer-text-copyright'>© 2023, NEOKRED. All rights reserved.</p>
                    <Image alt="" height="140" width="113" src={imageUrl?.footer?.two} />
                </div>

            </div>
        </>
    )
}

export default Footer