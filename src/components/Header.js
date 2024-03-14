import React, { useState } from 'react'
import imageUrl from "../imageUrl"
import ResponsiveImage from './HomepageComp/ResponsiveImage'
import Button from './HomepageComp/Button'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Header = () => {

    const [showSections, setShowSections] = useState(false)
    const handleOpenBurger = () => {
        setShowSections(!showSections)
    }
    const [selectedMobileTabs, setSelectedMObileTabs] = useState("")
    const [activePage, setActivePage] = useState("")
    let router = useRouter()
    return (
        <nav className="header">

            <Link href="/" className="header_logo">
                <ResponsiveImage onClick={() => setActivePage("")} src={imageUrl?.header?.logo} alt={"main_logo"} />
            </Link>

            <div className="header_nav">
                <span className={activePage === "homepage" ? "active_header_nav_item" : "header_nav_item"} onClick={() => setActivePage("homepage")}>
                    Products
                    <ul className='header_nav_inner_item'>
                        <li >
                            <Link className="header_nav_item_inner" href="/collectbot" >
                                Collectbot
                            </Link>
                        </li>
                        <li >
                            <Link className="header_nav_item_inner" href="/profilex" >
                                ProfileX
                            </Link>
                        </li>
                        <li >
                            <Link className="header_nav_item_inner" href="/data-i" >
                                DATAi
                            </Link>
                        </li>
                    </ul>
                </span>
                <span className={activePage === "insights" ? "active_header_nav_item" : "header_nav_item"} onClick={() => setActivePage("insights")}>
                    Insights
                    <ul className='header_nav_inner_item'>
                        <li>
                            <Link href="/insight" className="header_nav_item_inner"> Awareness </Link>
                        </li>
                        <li onClick={()=>{
                            router.push("/insight#insight")
                        }}>
                            <span className="header_nav_item_inner" > Updates </span>
                        </li>
                    </ul>
                </span>
                <Link href="/about-us" className={activePage === "about" ? "active_header_nav_item" : "header_nav_item"} onClick={() => setActivePage("about")}> About  </Link>
                <Link href="/contact-us" className={activePage === "contact" ? "active_header_nav_item" : "header_nav_item"} onClick={() => setActivePage("contact")}>Contact</Link>
                <Link href='https://auth.neokred.tech/login' target='_blank'>
                    <Button className="header_nav_button">Login</Button>
                </Link> 
            </div>


            <div className="header_nav_mobile_version">
                {/* <ResponsiveImage src={imageUrl?.header?.search} alt={"search_logo"} /> */}
                {/* <ResponsiveImage src={imageUrl?.header?.language} alt={"language_logo"} /> */}
                <ResponsiveImage onClick={handleOpenBurger} src={imageUrl?.header?.hamburger} alt={"hamburger_logo"} />
                {
                    showSections
                        ?
                        <div className='options_tab_hemburger'>
                            <div>
                                <div className='remove_button_hemburger'>
                                    <Image alt="" height="42" width="42" onClick={() => { setShowSections(!showSections); setSelectedMObileTabs("") }} src={imageUrl?.header?.removeButton} />
                                </div>
                                <div className='mobile_tabs_hemburger'>
                                    <div>
                                        <div onClick={() => setSelectedMObileTabs("products")} className='inner_hemburger_options'>Products<span><Image alt="" height="5" width="10" src={imageUrl?.header?.openTabs} /></span></div>
                                        <div onClick={() => setSelectedMObileTabs("insights")} className='inner_hemburger_options'>Insights<span><Image alt="" height="5" width="10" src={imageUrl?.header?.openTabs} /></span></div>
                                        <Link href="/about-us" className="inner_hemburger_options" onClick={()=>setShowSections(!showSections)}>About</Link>
                                        <Link href="/contact-us" className="inner_hemburger_options" onClick={()=>setShowSections(!showSections)}>Contact</Link>
                                    </div>
                                    <div>
                                        {
                                            selectedMobileTabs == "products"
                                                ?
                                                <ul className='header_nav_inner_item_mobile'>
                                                    <Link href="/collectbot" className="header_nav_item_inner_mobile" onClick={()=>setShowSections(!showSections)}> Collectbot </Link>
                                                    <Link href="/profilex" className="header_nav_item_inner_mobile" onClick={()=>setShowSections(!showSections)}> ProfileX</Link>
                                                    <Link href="/data-i" className="header_nav_item_inner_mobile" onClick={()=>setShowSections(!showSections)}>  DATAi</Link>
                                                </ul>
                                                :
                                                null
                                        }
                                        {
                                            selectedMobileTabs == "insights"
                                                ?
                                                <ul className='header_nav_inner_item_mobile'>
                                                    <Link href="/insight" className="header_nav_item_inner_mobile" onClick={()=>setShowSections(!showSections)}> Awareness </Link>
                                                    <Link href="/" className="header_nav_item_inner_mobile" onClick={()=>setShowSections(!showSections)}> Updates </Link>
                                                </ul>
                                                :
                                                null
                                        }
                                    </div>
                                </div>

                            </div>

                        </div>
                        :
                        null
                }

            </div>
        </nav>
    )
}

export default Header