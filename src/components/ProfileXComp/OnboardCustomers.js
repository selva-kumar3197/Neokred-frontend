import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage'
import imageUrl from '@/imageUrl'
import Image from 'next/image'

const OnboardCustomers = () => {
    const [selectedOnboards, setSelectedOnbaords] = useState(1)
    return (
        <div className='onboards_customer_section2'>
            <div className='image_abs_right_section2_side'>
                <ResponsiveImage src={imageUrl?.profilexPage?.rightBR} />
            </div>
            <div className='onboards_sections_left_right'>
                <div className='onbaords_left_sections'>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 1 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(1)}>
                            Encrypted and Secured
                        </div>
                        {selectedOnboards === 1 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 2 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(2)}>
                            Onboard in a flash
                        </div>
                        {selectedOnboards === 2 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 3 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(3)}>
                            Verified Users
                        </div>
                        {selectedOnboards === 3 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 4 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(4)}>
                            Data-Driven Decision
                        </div>
                        {selectedOnboards === 4 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 5 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(5)}>
                            Custom Made Strategy
                        </div>
                        {selectedOnboards === 5 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 6 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(6)}>
                            Seamless Integration
                        </div>
                        {selectedOnboards === 6 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>

                </div>

                <div className='onbaords_right_sections'>
                    {
                        selectedOnboards === 1
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    Manage every profile safely and securely, even on your mobile.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.three} />
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        selectedOnboards === 2
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    KYC+RegTech Solutions allows Neokred to effortlessly onboard clients with just their name and mobile number.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.four} />
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        selectedOnboards === 3
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    Secure the best possible insights into your customers’ behaviour, preferences, and creditworthiness.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.five} />
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        selectedOnboards === 4
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    Make sound decisions on customer eligibility and risk assessments using alternative data and behaviors.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.six} />
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        selectedOnboards === 5
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    Apart from seamless integration, excel in decision-making with data insights made for specific cases.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.seven} />
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        selectedOnboards === 6
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    A single API integration for quick and painless implementation.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.profilexPage?.eight} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
            </div>

            {/* Mobile version */}
            <div className='onbaords_left_sections_mobile'>
                <div>
                    <div className={selectedOnboards === 1 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(1)}>
                        Encrypted and Secured
                    </div>
                    {
                        selectedOnboards === 1
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Manage every profile safely and securely, even on your mobile.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.three} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 2 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(2)}>
                        Onboard in a flash
                    </div>
                    {
                        selectedOnboards === 2
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    KYC+RegTech Solutions allows Neokred to effortlessly onboard clients with just their name and mobile number.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.four} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 3 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(3)}>
                        Verified Users
                    </div>
                    {
                        selectedOnboards === 3
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Secure the best possible insights into your customers’ behaviour, preferences, and creditworthiness.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.five} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 4 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(4)}>
                        Data-Driven Decision
                    </div>
                    {
                        selectedOnboards === 4
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Make sound decisions on customer eligibility and risk assessments using alternative data and behaviors.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.six} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 5 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(5)}>
                        Custom Made Strategy
                    </div>
                    {
                        selectedOnboards === 5
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Apart from seamless integration, excel in decision-making with data insights made for specific cases.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.seven} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 6 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(6)}>
                        Seamless Integration
                    </div>
                    {
                        selectedOnboards === 6
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    A single API integration for quick and painless implementation.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.profilexPage?.eight} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>

            </div>

        </div>
    )
}

export default OnboardCustomers