import Head from "next/head";
import Button from "@/components/HomepageComp/Button";
import imageUrl from "@/imageUrl";
import Image from "next/image";
import HomepageSlider from "@/components/HomepageComp/HomepageSlider";
import { useState } from "react";
import CollectBot from "@/components/HomepageComp/CollectBot";
import DataI from "@/components/HomepageComp/DataI";
import Profilex from "@/components/HomepageComp/Profilex";
import ReactSelectComp from "@/components/HomepageComp/ReactSelect";
import ResponsiveImage from "@/components/HomepageComp/ResponsiveImage";
import ResponsiveSliderHomePage from "@/components/HomepageComp/ResponsiveSliderHomePage";
import HorizontalScroll from "@/components/HomepageComp/HorizontalScroll";
import Link from "next/link";
import Chatbot from "@/components/Chatbot";

export default function Home() {

  const [activeCards, setActiveCards] = useState("CollectBot")
  const data = [
    { title: '“Swift response in operational bottlenecks”', description: 'The Neokred team has always been swift with their responses in case we faced any kind of bottleneck during the operation.', name: 'Sagar Menon, CEO, Giverly', icon: imageUrl?.testimonial?.six },
    { title: '“A trustworthy partner for financial solutions”', description: 'Neokred, in our short association, has always been a trustworthy partner, with each product bringing strong credibility.', name: 'Saurabh Agarwal, Co-founder, PICE', icon: imageUrl?.testimonial?.one },
    { title: '“Great products; competitive pricing”', description: 'The competitive pricing and top-notch quality have been the point of difference for us to opt for Neokred over other brands.', name: 'Mrityunjay Hiremath, CEO, LogiPe', icon: imageUrl?.testimonial?.four },
    { title: '“Clear and collaborative response every time”', description: 'Neokred, in their communication, has always maintained a warm personal relationship that has helped us collaborate even better.', name: 'Jags Raghavan, Founder, Multipl', icon: imageUrl?.testimonial?.two },
    { title: '“Trust them with round-the-clock support”', description: 'Round-the-clock support from team Neokred has been one of the building blocks of our long association with the brand.', name: 'Murugesh, Head-Bangalore Branch, Equitas Bank', icon: imageUrl?.testimonial?.three },
    { title: '“Products integrate seamlessly into the system”', description: 'The best thing about Neokred is the ease with which the products have been integrated into our system to elevate our day-to-day activities.', name: 'Aatul Ahluwalia, Head of Strategy, Coinswitch', icon: imageUrl?.testimonial?.five },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    } else if (direction === 'right') {
      setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    }
  };


  return (
    <>
      <Head>
        <title>Neokred</title>
      </Head>
      <div className="homepage_container">

        <div className="homepage_section1">
          <h1 className="banner_heading">Unlocking Opportunities</h1>
          <p className="banner_heading2">Beyond Conventional Finance</p>
          <p className="banner_description">We power financial institutions, regulated entities, fintech and D2C brands with frictionless transactions powered by embedded finance for end users. Our products give consumers in the BFSI domain the best-in-class experience with innovation in embedded finance for profiling, data enrichment, payment processing and more.</p>
          <Link href="/#collectbot">
            <div className="explore_button">
              <Button className="homepage_explore_button">Explore</Button>
            </div>
          </Link>
        </div>

        <div className="homepage_section2">
          <div id="collectbot" className="homepage_section2_inner">
            <Image width="194" height="194" alt="section2_image1" src={imageUrl?.homePage?.section2One} />
            <p className="section2_title">CollectBot</p>
            <p className="section2_desc">Streamlined payment processing on a single platform</p>
            <Link href="/collectbot">
              <Button className="section2_explore_button">Explore</Button>
            </Link>
          </div>
          <div id="profilex" className="homepage_section2_inner">
            <Image width="194" height="194" alt="section2_image1" src={imageUrl?.homePage?.section2Two} />
            <p className="section2_title">ProfileX</p>
            <p className="section2_desc">Get consumer profiling and detailing with a single tap</p>
            <Link href="/profilex">
              <Button className="section2_explore_button">Explore</Button>
            </Link>
          </div>
          <div id="data-i" className="homepage_section2_inner">
            <Image width="194" height="194" alt="section2_image1" src={imageUrl?.homePage?.section2Three} />
            <p className="section2_title">DATAi</p>
            <p className="section2_desc">Make better decisions with enriched data and error-free reports</p>
            <Link href="/data-i">
              <Button className="section2_explore_button">Explore</Button>
            </Link>
          </div>
        </div>

        <HomepageSlider />

        <div>
          <div id="product" className="homepage_section4">
            <div onClick={() => setActiveCards("CollectBot")} className={activeCards === "CollectBot" ? "active_section4_box" : "section4_box"}>
              <Image width="70" height="70" alt="section2_image1" src={imageUrl?.homePage?.section4?.collectBot} />
              <p className={activeCards === "CollectBot" ? "active_section4_box_title" : "section4_box_title"} >CollectBot</p>
            </div>
            <div onClick={() => setActiveCards("ProfileX")} className={activeCards === "ProfileX" ? "active_section4_box" : "section4_box"}>
              <Image width="70" height="70" alt="section2_image1" src={imageUrl?.homePage?.section4?.profileX} />
              <p className={activeCards === "ProfileX" ? "active_section4_box_title" : "section4_box_title"} >Profile X</p>
            </div>
            <div onClick={() => setActiveCards("DATAi")} className={activeCards === "DATAi" ? "active_section4_box" : "section4_box"}>
              <Image width="70" height="70" alt="section2_image1" src={imageUrl?.homePage?.section4?.DataI} />
              <p className={activeCards === "DATAi" ? "active_section4_box_title" : "section4_box_title"} >DATAi</p>
            </div>
          </div>
          <div className="homepage_section4_mobie_version">
            <ReactSelectComp setActiveCards={setActiveCards} />
          </div>
          <div className="border_line_section"></div>
          {activeCards === "CollectBot" ? <CollectBot /> : null}
          {activeCards === "ProfileX" ? <Profilex /> : null}
          {activeCards === "DATAi" ? <DataI /> : null}
        </div>
      </div>

      <div className="border_radius_circle">
        <div className="sidebar_image_circle"></div>
      </div>

      <div className="homepage_container">

        <div className="homepage_section5">
          <div className="homepage_section5_driven_title">Driven by Excellence</div>
          <div className="driven_class_logos">
            <div className="driven_section_inner">
              <ResponsiveImage src={imageUrl?.homePage?.section5?.one} height="264" width="264" />
              <p className="driven_class_titles">Top Startup to Watch 2023- Sutra HR</p>
            </div>
            <div className="driven_section_inner">
              <ResponsiveImage src={imageUrl?.homePage?.section5?.two} height="264" width="264" />
              <p className="driven_class_titles">Great Place to Work</p>
            </div>
            <div className="driven_section_inner">
              <ResponsiveImage src={imageUrl?.homePage?.section5?.three} height="264" width="264" />
              <p className="driven_class_titles">Company of the Year 2022-CEO Story</p>
            </div>
            <div className="driven_section_inner">
              <ResponsiveImage src={imageUrl?.homePage?.section5?.four} height="264" width="264" />
              <p className="driven_class_titles">Best Payment Startup of the Year</p>
            </div>

          </div>
        </div>

        <div className="homepage_section6">
          <div className="homepage_section5_driven_title">See What We Have Been Up to</div>
          <ResponsiveSliderHomePage />
        </div>

        <div className="homepage_section7">
          <div className="homepage_section5_driven_title">Empowering the Real MVPs</div>
          <div className="empowers_logo_imagesOne">
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.one} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.two} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.three} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.four} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.five} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.six} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.seven} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section7?.eight} /></span>
          </div>
        </div>

        <div className="homepage_section8">
          <div className="homepage_section5_driven_title">Banks We Worked With</div>
          <div className="partners_logo_imagesOne">
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.one} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.two} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.three} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.four} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.five} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.six} /></span>
            <span><ResponsiveImage src={imageUrl?.homePage?.section8?.seven} /></span>
          </div>
        </div>
        <div className="homepage_section_two_slider">
          <div className="sectionAfter8_left">
            <div className="button_container_sectionAgain">
              <button className='award-button' onClick={() => handleArrowClick('left')}>
                <ResponsiveImage alt="" className='arrow-img' src={imageUrl?.homePage?.section7?.arrowLeft} />
              </button>
              <button className='award-button' onClick={() => handleArrowClick('right')}>
                <ResponsiveImage alt="" className='arrow-img' src={imageUrl?.homePage?.section7?.arrowRight} />
              </button>
            </div>
            <div className="testimonial-content">
              <div className="title_sectionAFter8">{data[currentIndex].title}</div>
              <div className="desc_sectionAFter8">{data[currentIndex].description}</div>
              <div className="name_section_title_again">{data[currentIndex].name}</div>
            </div>
            <div className="testimonial-img">
              <ResponsiveImage src={data[currentIndex].icon} />
            </div>
          </div>
          <div className="sectionAfter8_right">
            <HorizontalScroll />
          </div>
        </div>
        <div className="homepage_section9">
          <p className="optimize_title_section9">Optimise</p>
          <p className="optimize_desc_section9">Power to Personalise </p>
          <p className="optimize_title_section9">Strategise</p>
        </div>
      </div >

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
          <Button className="section2_explore_button_mobile_version">Know More</Button>
        </div>
      </div>

      <div className="homepage_section11">
        <Chatbot />
      </div>
    </>
  );
}
