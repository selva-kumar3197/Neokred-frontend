import React, { useEffect, useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage'
import Link from 'next/link';

function Insightcard() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  const insightData = [
    {
      title: "Digital KYC Simplified: A Deep Dive into Neokred's Innovation",
      desc: "In an era where the digital landscape is rapidly expanding, the financial industry is witnessing a profound transformation",
      icon: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card1.svg",
      icon2: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card1_mobile.svg",
      date: "JUN 5, 2023",
      duration: "2 min read",
      link: "/blog_digital_kyc"
    },
    {
      title: "Financial Evolution - Top B2B Fintech Companies in India",
      desc: "In India, B2B fintech companies have played a very important role in shaping the country's financial evolution.",
      icon: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card2.svg",
      icon2: "https://neokred.s3.ap-south-1.amazonaws.com/insight/card2_mobile.svg",
      date: "JUN 5, 2023",
      duration: "2 min read",
      link: "/blog_financial_evolution"
    }
  ]
  return (
    <div className='insight-card'>
      {insightData.map((card, index) => (
        <Link className='link_tag_next' href={card.link} key={index} >
          <div className='insight-card-div'>
            <ResponsiveImage src={isMobile ? card.icon2 : card.icon} alt="icon" className='insight-card-icon' />
            <div className='insight-card-details'>
              <p className='insight-title'>{card.title}</p>
              <p className='insight-desc'>{card.desc}</p>
              <p className='insight-date'>{card.date} | {card.duration}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Insightcard