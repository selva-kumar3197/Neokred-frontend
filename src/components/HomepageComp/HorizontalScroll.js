import React, { useState } from 'react';

const HorizontalScroll = () => {
    const [scrollImage, setScrollImage] = useState(1);



    return (
        <>
            {scrollImage === 1 && (
                <div onClick={() => setScrollImage(2)} className="bg_section_right8">
                    <div className="title_facts_right">FACTS & NUMBERS</div>
                    <div>
                        <p className="one_billion_desc">1 Billion+</p>
                        <p className="transaction_after_section">Transactions</p>
                    </div>
                    <div className='border_lines_sectionAgain'>
                        <div className={scrollImage === 1 ? "active" : "border_lines"}></div>
                        <div className={scrollImage === 2 ? "active" : "border_lines"}></div>
                        <div className={scrollImage === 3 ? "active" : "border_lines"}></div>
                    </div>
                </div>
            )}
            {
                scrollImage === 2 && (
                    <div onClick={() => setScrollImage(3)} className="bg_section_right8">
                        <div className="title_facts_right">FACTS & NUMBERS</div>
                        <div>
                            <p className="one_billion_desc">350+</p>
                            <p className="transaction_after_section">Clients</p>
                        </div>
                        <div className='border_lines_sectionAgain'>
                            <div className={scrollImage === 1 ? "active" : "border_lines"}></div>
                            <div className={scrollImage === 2 ? "active" : "border_lines"}></div>
                            <div className={scrollImage === 3 ? "active" : "border_lines"}></div>
                        </div>
                    </div>
                )
            }
            {
                scrollImage === 3 && (
                    <div onClick={() => setScrollImage(1)} className="bg_section_right8">
                        <div className="title_facts_right">FACTS & NUMBERS</div>
                        <div>
                            <p className="one_billion_desc">6</p>
                            <p className="transaction_after_section">Bank Partners</p>
                        </div>
                        <div className='border_lines_sectionAgain'>
                            <div className={scrollImage === 1 ? "active" : "border_lines"}></div>
                            <div className={scrollImage === 2 ? "active" : "border_lines"}></div>
                            <div className={scrollImage === 3 ? "active" : "border_lines"}></div>
                        </div>
                    </div>
                )
            }

        </>

    );
};

export default HorizontalScroll;
