import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';

const DataIAccordianDataI = () => {
    const [showAnswers, setShowAnswers] = useState({})

    const Faqs = [
        {
            id: 1,
            questios: "Promote Open Banking",
            answers: "Create a secure system and level the financial industry with easy, innovative solutions."
        },
        {
            id: 2,
            questios: "Consent-Driven Data",
            answers: "Adhere to data policies for a more secure and transparent analysis of data."
        },
        {
            id: 3,
            questios: "Tailored Customer Experience",
            answers: "Craft offers built to your consumers' traits and preferences."
        },
        {
            id: 4,
            questios: "Budget-friendly",
            answers: "Helps in keeping a cap against overspending in different categories with customised alerts."
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
        <div className='accordian_profilex_collectbot'>
            <div className='collect_boT-profilex'>See the Hidden Facts</div>
            {Faqs.map((item) => (
                <div key={item.id}>
                    <div onClick={() => toggleAnswer(item.id)} className='questions_answers_box_mobile'>
                        <div className='question_box_mobile'>
                            {item?.questios}
                        </div>
                        <div className='image_up_down_mobile'>
                            <ResponsiveImage src={"https://neokred.s3.ap-south-1.amazonaws.com/ProfileX/Group+1000004680.svg"} />
                        </div>
                    </div>
                    {showAnswers[item.id] && (
                        <div className='answers_show_mobile'>{item?.answers}</div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default DataIAccordianDataI