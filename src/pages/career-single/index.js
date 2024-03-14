import { useRouter } from 'next/router';
import React from 'react'
import image1 from "../../../public/icon-1.png";
import location from "../../../public/location.png";
import image2 from "../../../public/icon-2.png";
import Image from 'next/image';


const CarrerSingle = () =>{
    
    const router = useRouter();  
    let ele = {}
    if(router?.query?.state){
        try{
            ele = JSON.parse(router.query.state)
            console.log(ele)
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div
            className="container bg-light my-4"
            data-aos="fade-up"
            data-aos-duration="3000"
        >
            <div className="row mx-3">
                <div className="col-md-8 my-5">
                    <h3 className="text-primary fs-2 font2">{ele?.title || ""}</h3>

                    <div>
                        <p dangerouslySetInnerHTML={{ __html: ele?.description || "" }}></p>
                    </div>
                </div>
                <div className="col-md-4 my-5">
                    {/* <button
                        className="bg-secondary text-white border-0 w-100 p-2 fs-4 "
                        onClick={handleAnyoneShow}
                    >
                        Apply Now
                    </button> */}
                    <div className="bg-white my-5 p-4">
                        <div>
                            <p>
                                {" "}
                                <Image src={image1} alt='image' className="mx-2 img-fluid" />
                                {ele?.exp || ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                <Image src={image2} alt='image' className="mx-2 img-fluid" />
                                {ele?.qualification || ""}
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                <Image src={location} alt='image' className="mx-2 img-fluid" />
                                {ele?.job_location}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarrerSingle