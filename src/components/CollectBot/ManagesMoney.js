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
                            Easy Integration and fully automated
                        </div>
                        {selectedOnboards === 1 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 2 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(2)}>
                            Connected Banking Solutions
                        </div>
                        {selectedOnboards === 2 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 3 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(3)}>
                            An extra layer of protection
                        </div>
                        {selectedOnboards === 3 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 4 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(4)}>
                            Single-node Collections and Payouts
                        </div>
                        {selectedOnboards === 4 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>
                    <div className='arrow_line_titles'>
                        <div className={selectedOnboards === 5 ? "active_onbaords" : "custome_onbaords"} onClick={() => setSelectedOnbaords(5)}>
                            Settlement in a snap
                        </div>
                        {selectedOnboards === 5 ? <Image alt="" height="15" width="80" src={imageUrl?.profilexPage?.arrow} /> : null}
                    </div>


                </div>

                <div className='onbaords_right_sections'>
                    {
                        selectedOnboards === 1
                            ?
                            <div className='onbaords_result_selcted'>
                                <div className='onbaords_result_selcted_title'>
                                    VANs help to integrate seamlessly with the existing system and
                                    are completely automated to track individual payments
                                    in real-time.                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708323988379_VANs.png.webp" />
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
                                    Get empowered by innovative solutions like TSPs and connected banking models to have the flexibility to choose from multiple partners
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708324115390_banking.png.webp" />
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
                                    The unique VAN adds added security as it masks the original account number.                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708324200287_protection.png.webp" />
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
                                    A unified platform with connected banking and  VANs helps manage business and individual finances better with automated pay-ins
                                    and pay-outs.                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708324261375_single-node.png.webp" />
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
                                    Deliver results for a wide range of clients, like banks, brands, and individuals, with instant settlement.
                                </div>
                                <div className='answer_section_profilex_selected'>
                                    <Image alt="" height="208" width="210" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708324308860_snap-settlement.png.webp" />
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
                        Easy Integration and fully automated
                    </div>
                    {
                        selectedOnboards === 1
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    VANs help to integrate seamlessly with the existing system and
                                    are completely automated to track individual payments
                                    in real-time.                                </div>
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
                        Connected Banking Solutions
                    </div>
                    {
                        selectedOnboards === 2
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    Get empowered by innovative solutions like TSPs and connected banking models to have the flexibility to choose from multiple partners
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
                        An extra layer of protection
                    </div>
                    {
                        selectedOnboards === 3
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    The unique VAN adds added security as it masks the original account number.                                </div>
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
                        Single-node Collections and Payouts
                    </div>
                    {
                        selectedOnboards === 4
                            ?
                            <div className='onbaords_result_selcted_mobile'>
                                <div className='onbaords_result_selcted_title_mobile'>
                                    A unified platform with connected banking and VANs helps manage business and individual finances better with automated pay-ins
                                    and pay-outs                                </div>
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
                        Settlement in a snap
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
                                    Deliver results for a wide range of clients, like banks, brands, and individuals, with instant settlement.
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