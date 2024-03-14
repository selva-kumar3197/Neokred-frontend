import imageUrl from '@/imageUrl';
import Image from 'next/image';
import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage';

const AccordianProdilex = () => {
    const [showAnswers, setShowAnswers] = useState({})

    const Faqs = [
        {
            id: 1,
            questios: "What is ProfileX?",
            answers: `${`ProfileX offer services that enable businesses to verify their users' identities, detect fraudulent activities, and ensure compliance with regulatory requirements, especially in the financial and fintech sectors.`}`
        },
        {
            id: 2,
            questios: "Who can use ProfileX services?",
            answers: "ProfileX services are typically designed for businesses across various industries that require robust identity verification and fraud prevention solutions. The primary sectors and entities that can benefit from ProfileX services include: Financial Institutions, Government and Regulated Industries, Startups and SMEs"
        },
        {
            id: 3,
            questios: "What services does ProfileX provide?",
            answers: "ProfileX offers a range of identity verification and fraud prevention services aimed at assisting businesses in ensuring secure customer onboarding and compliance with regulatory requirements."
        },
        {
            id: 4,
            questios: "How can I integrate ProfileX APIs into my application?",
            answers: "Integration involves accessing ProfileX developer portal, obtaining API keys, and following the provided documentation and code samples for seamless integration."
        },
        {
            id: 5,
            questios: "What programming languages are supported for integration?",
            answers: "No Content"
        },
        {
            id: 6,
            questios: "How secure is the data processed through ProfileX APIs?",
            answers: "ProfileX employs robust security measures, including encryption and compliance with industry-standard security protocols, to safeguard user data and transactions."
        },
        {
            id: 7,
            questios: "Is ProfileX compliant with banking regulations?",
            answers: "Yes, ProfileX adheres to regulatory requirements and maintains compliance with banking and data protection regulations."
        },
        {
            id: 8,
            questios: "What support options are available for developers integrating ProfileX APIs?",
            answers: "ProfileX provides developer support through documentation, FAQs, and developer forums. Additionally, there may be premium support options available based on service plans."
        },
        {
            id: 9,
            questios: "Where can I find documentation for ProfileX APIs?",
            answers: "Comprehensive documentation, including API references, integration guides, and code samples, is available on ProfileX developer portal."
        },
        {
            id: 10,
            questios: "What are the pricing models offered by ProfileX?",
            answers: "ProfileX may offer different pricing tiers or custom plans based on usage, features required, and the scale of integration. Contact our sales team for detailed pricing information."
        },
        {
            id: 11,
            questios: "Is there a free trial available?",
            answers: "ProfileX might provide a free trial or demo access to their services. Contact our sales or support team to inquire about trial options."
        },
    ]

    const toggleAnswer = (id) => {
        setShowAnswers((prev) => {
            const updatedShowAnswers = Object.fromEntries(
                Object.keys(prev).map((key) => [key, key === id ? !prev[key] : false])
            );
            return { ...updatedShowAnswers, [id]: !prev[id] };
        });
    };



    return (
        <div className='accordian_profilex_section'>
            <div className='title_accordian_profilex'>Have more questions?<br />
                We have the answers.</div>
            {Faqs.map((item) => (
                <div key={item.id}>
                    <div onClick={() => toggleAnswer(item.id)} className='questions_answers_box'>
                        <div className='question_box'>
                            {item?.questios}
                        </div>
                        <div className='image_up_down'>
                            <ResponsiveImage src={showAnswers[item.id] ? imageUrl?.profilexPage?.upArrow : imageUrl?.profilexPage?.downArrow} />
                        </div>
                    </div>
                    {showAnswers[item.id] && (
                        <div className='answers_show'>{item?.answers}</div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default AccordianProdilex