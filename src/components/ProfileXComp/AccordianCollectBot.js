import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage';
import imageUrl from '@/imageUrl';

const AccordianCollectBot = () => {
    const [showAnswers, setShowAnswers] = useState({})

    const Faqs = [
        {
            id: 1,
            questios: "Industry First Innovation",
            answers: "Captures quality information intelligently and provides reports through linked SMS."
        },
        {
            id: 2,
            questios: "Businesses Verified",
            answers: "Make informed business decisions that follow industry compliances."
        },
        {
            id: 3,
            questios: "Verify Employees",
            answers: "Create a credible workforce with our employment APIs."
        },
        {
            id: 4,
            questios: "Ease of Data Extraction",
            answers: "The Document OCR helps to extract data."
        },
        {
            id: 5,
            questios: "Bank Account Verified",
            answers: "Get accurate banking information for seamless processes."
        },
        {
            id: 6,
            questios: "Quality Assured every time",
            answers: "Onboard with high accuracy sans any latency in the process."
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
            <div className='collect_boT-profilex'>CollectBot <br /> <span className='collect_boT_span'>Cut above the rest.</span></div>
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

export default AccordianCollectBot