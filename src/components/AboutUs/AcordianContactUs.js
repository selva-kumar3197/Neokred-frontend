import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';

const AcordianContactUs = () => {
    const [showAnswers, setShowAnswers] = useState({})

    const Faqs = [
        {
            id: 1,
            questios: "What is ProfileX?",
            answers: "ProfileX offers services that enable businesses to verify their users' identities, detect fraudulent activities, and ensure compliance with regulatory requirements, especially in the financial and fintech sectors."
        },
        {
            id: 2,
            questios: "Who can use ProfileX services?",
            answers: "ProfileX services are typically designed for businesses across various industries that require robust identity verification and fraud prevention solutions. The primary sectors and entities that can benefit from ProfileX  services include: Financial Institutions, Government and Regulated Industries, Startups, and SMEs"
        },
        {
            id: 3,
            questios: "What services does ProfileX provide?",
            answers: "ProfileX offers a range of identity verification and fraud prevention services aimed at assisting businesses in ensuring secure customer onboarding and compliance with regulatory requirements. "
        },
        {
            id: 4,
            questios: "How can I integrate ProfileX APIs into my application? ",
            answers: "Integration involves accessing ProfileX developer portal, obtaining API keys, and following the provided documentation and code samples for seamless integration."
        },
        {
            id: 5,
            questios: "How secure is the data processed through ProfileX APIs?  ",
            answers: "ProfileX employs robust security measures, including encryption and compliance with industry-standard security protocols, to safeguard user data and transactions."
        },
        {
            id: 6,
            questios: "Is ProfileX compliant with banking regulations? ",
            answers: "Yes, ProfileX adheres to regulatory requirements and maintains compliance with banking and data protection regulations."
        }
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
        <div className='accordian_contact_us'>
            <div className='have_more_details_title'>Have More Questions?</div>
            {Faqs.map((item) => (
                <div key={item.id}>
                    <div onClick={() => toggleAnswer(item.id)} className='questipns_container_accordian'>
                        <div className='question_container_titles'>
                            {item?.questios}
                        </div>
                        <div className='image_up_down_contact_us'>
                            <ResponsiveImage src={showAnswers[item.id] ? imageUrl?.profilexPage?.upArrow : imageUrl?.profilexPage?.downArrow} />
                        </div>
                    </div>
                    {showAnswers[item.id] && (
                        <div className='question_container_descc'>{item?.answers}</div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default AcordianContactUs