import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage'
import imageUrl from '@/imageUrl'
import Image from 'next/image'

const DataIOnboardCustomers = () => {
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
                            Smooth Integration
                        </div>
                        {selectedOnboards === 1 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 2 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(2)}>
                            Avoid financial fraud
                        </div>
                        {selectedOnboards === 2 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 3 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(3)}>
                            Make better credit decisions
                        </div>
                        {selectedOnboards === 3 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 4 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(4)}>
                            Robust financial Tools
                        </div>
                        {selectedOnboards === 4 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 5 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(5)}>
                            Streamlined Customer approval process
                        </div>
                        {selectedOnboards === 5 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 6 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(6)}>
                            Full Control over finances
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
                                    The seamless SDK-based solution used by the customer data platform allows you to collect consumer data with just the mobile app.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.one} />
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
                                   {` Get insights on customers' financial activities with timely error alerts and red flags for potentially fraudulent activities.`}
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.two} />
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
                                    This data enrichment software helps achieve perfection in loan information with a robust confidence scoring model that averts risk in lending
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.three} />
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
                                    The solutions by the data analytics platform are tailored to suit the banks and brands to address their specific needs and challenges.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.four} />
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
                                    A deeper understanding of consumer spending and finances to optimise credit strategies.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.five} />
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
                                    Use complete control over numbers with AI-enabled algorithms to gain actionable insight into consumer financial behaviours.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src={imageUrl?.dataI?.six} />
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
                        Smooth Integration
                    </div>
                    {
                        selectedOnboards === 1
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    The seamless SDK-based solution used by the customer data platform allows you to collect consumer data with just the mobile app
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.one} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 2 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(2)}>
                        Avoid financial fraud
                    </div>
                    {
                        selectedOnboards === 2
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    {`Get insights on customers' financial activities with timely error alerts and red flags for potentially fraudulent activities.`}
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.two} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 3 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(3)}>
                        Make better credit decisions
                    </div>
                    {
                        selectedOnboards === 3
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    This data enrichment software helps achieve perfection in loan information with a robust confidence scoring model that averts risk in lending.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.three} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 4 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(4)}>
                        Robust financial Tools
                    </div>
                    {
                        selectedOnboards === 4
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    The solutions by the data analytics platform are tailored to suit the banks and brands to address their specific needs and challenges
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.four} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 5 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(5)}>
                        Streamlined Customer approval process
                    </div>
                    {
                        selectedOnboards === 5
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    A deeper understanding of consumer spending and finances to optimise credit strategies.
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.five} />
                                </div>
                            </div>
                            :
                            null
                    }
                </div>
                <div>
                    <div className={selectedOnboards === 6 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(6)}>
                        Full Control over finances
                    </div>
                    {
                        selectedOnboards === 6
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Use complete control over numbers with AI-enabled algorithms to gain actionable insight into consumer financial behaviours
                                </div>
                                <div className='answer_section_profilex_selected_mobile'>
                                    <Image alt="" height="129" width="121" src={imageUrl?.dataI?.six} />
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

export default DataIOnboardCustomers