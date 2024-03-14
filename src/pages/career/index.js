import Button from '@/components/HomepageComp/Button'
import ResponsiveImage from '@/components/HomepageComp/ResponsiveImage'
import imageUrl from '@/imageUrl'
import Head from 'next/head'
import Image from 'next/image'
import React, { useRef,useEffect, useState } from 'react'
import ApiService from "@/services/ApiService";
import baseUrl from '@/services/baseurl'
import { ToastContainer, toast } from 'react-toastify'
// import { Form, Modal, Spinner } from "react-bootstrap";
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import Modal from 'react-modal';
import close from '../../../public/close.png'

const CareerPage = () => {
    const router = useRouter();
    const carrerRef = useRef(null)
    const handleSendData = (ele) => {
        router.push({
            pathname: '/career-single',
            query: { eleId: ele._id, state: JSON.stringify(ele) },
        });
    };
    // const jobRoles = ['Software Engineer', 'Data Scientist', 'Product Manager', 'UX Designer', 'Business Analyst'];
    const [loader, setLoader] = useState(false);
    const [file1, setFile1] = useState({
        image: "",
    });
    const [fileErrors1, setFileErrors1] = useState({
        image: "",
    });
    const handleAnyoneClear = () => {
        setAnyoneForm({
            ...anyoneForm,
            name: "",
            email: "",
            mobile_no: "",
            description: "",
            image: "",
        });
    };

    const [anyoneForm, setAnyoneForm] = useState({
        name: "",
        email: "",
        mobile_no: "",
        description: "",
        image: "",
    });

    const [anyoneFormErrors, setAnyoneFormErrors] = useState({
        name: "",
        email: "",
        mobile_no: "",
        description: "",
        image: "",
    });
    const handleChangeAnyone = (event) => {
        if (event.target.name == "image") {
            setFile1({
                ...file1,
                [event.target.name]: event?.target?.files[0],
            });
            setFileErrors1({
                ...file1,
                image: "",
            });
        } else {
            setAnyoneForm({
                ...anyoneForm,
                [event.target.name]: event.target.value,
            });
        }
        setAnyoneForm({
            ...anyoneForm,
            [event.target.name]: event.target.value,
        });
        setAnyoneFormErrors({
            ...anyoneFormErrors,
            [event.target.name]: null,
        });
    };
    const handleAnyoneValidation = () => {
        const { name, email, mobile_no, description, image } = anyoneForm;
        const newErrors = {};
        const regText = /[A-Za-z]/;
        const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!name) {
            newErrors.name = "please enter name";
        } else if (name && !regText.test(name)) {
            newErrors.name = "name should be text";
        } else if (name && name.length > 50) {
            newErrors.name = "name should be below 50 charecters";
        }

        if (!email) {
            newErrors.email = "please enter email";
        } else if (email && !regEmail.test(email)) {
            newErrors.email = "please enter proper email";
        }

        if (!mobile_no) {
            newErrors.mobile_no = "please enter mobile number";
        } else if (mobile_no && mobile_no.length != 10) {
            newErrors.mobile_no = "Mobile Number should be 10 digits";
        }

        if (!description) {
            newErrors.description = "please enter Message";
        }

        if (!image) {
            newErrors.image = "please select file";
        }
        return newErrors;
    };

    const handleAnyoneSubmit = () => {
        const handleAnyoneValidationObject = handleAnyoneValidation();
        if (Object.keys(handleAnyoneValidationObject).length > 0) {
            setAnyoneFormErrors(handleAnyoneValidationObject);
        } else {
            setLoader(true);
            let formData = new FormData();
            formData.append("job_id", selectedId);
            formData.append("name", anyoneForm.name);
            formData.append("email", anyoneForm.email);
            formData.append("contact_no", anyoneForm.mobile_no);
            formData.append("description", anyoneForm.description);
            formData.append("image", file1.image);
            axios({
                url: `${baseUrl}api/neo/applyjobs`,
                method: "POST",
                data: formData,
            })
                .then((res) => {
                    if (res.status == 200) {
                        handleAnyoneClose()
                        toast.success("Successfully Submitted");
                        setActionModal({});
                        setLoader(false);
                        setAnyoneForm({
                            ...anyoneForm,
                            name: "",
                            email: "",
                            mobile_no: "",
                            description: "",
                            image: "",
                        });
                        setFile1({
                            ...file1,
                            image: "",
                        });
                        setAnyoneFormErrors({
                            ...anyoneFormErrors,
                            name: "",
                            email: "",
                            mobile_no: "",
                            description: "",
                            image: "",
                        });
                    }
                })
                .catch((err) => {
                    if (err.response.status == 401) {
                        toast.error("Token is Expaired");
                        setLoader(false);
                        setAnyoneForm({
                            ...anyoneForm,
                            name: "",
                            email: "",
                            mobile_no: "",
                            description: "",
                            image: "",
                        });
                        setAnyoneFormErrors({
                            ...anyoneFormErrors,
                            name: "",
                            email: "",
                            mobile_no: "",
                            description: "",
                            image: "",
                        });
                        setFile1({
                            ...file1,
                            image: "",
                        });
                    }
                });
        }
    };
    const [data, dataSet] = useState([]);
    const [jobRoles, setJobRoles] = useState([]);
    const [jobLocation, setJobLocation] = useState([]);
    const [jobExp, setJobExp] = useState([]);
    const [showAnyone, setShowAnyone] = useState(false);
    const [selectedId, setSelectedId] = useState()
    const handleAnyoneShow = (id) => {
        setSelectedId(id)
        setShowAnyone(true);
    };
    const handleAnyoneClose = () => {
        setShowAnyone(false);
    };

    const [selectedOptions, setSelectedOptions] = useState({
        exp: '',
        title: '',
        job_location: ''
    });
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                let response = await ApiService.getData("api/neo/career");

                if (!response.error) {
                    dataSet(response.data);
                    const data = response.data.map(item => item.title);
                    const location = response.data.map(item => item.job_location);
                    const exp = response.data.map(item => item.exp);
                    setJobRoles(data);
                    setJobLocation(location);
                    setJobExp(exp);
                } else {
                    console.log(" Blog API Not Working");
                    toast.error("Blog API Not Working");
                }
            } catch (err) {
                console.error(err.message);
                toast.error(err.message);
            }
        }

        fetchMyAPI();
    }, []);
    const handleFilterChange = async (filter, value) => {
        try {
            setSelectedOptions(prevState => ({
                ...prevState,
                [filter]: value
            }));

            // Construct the query string
            let queryParams = { ...selectedOptions };
            queryParams[filter] = value;
            const queryString = new URLSearchParams(queryParams).toString();

            // Fetch data with the updated filters
            let response = await ApiService.getData(`api/neo/career?${queryString}`);
            dataSet(response.data)
        } catch (err) {
            console.error(err.message);
            toast.error(err.message);
        }
    };

    const [actionModal, setActionModal] = useState({
        loader: false,
        show: false,
        type: "",
        data: {},
    });
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        if (window.innerWidth <= 600) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    }, []);

    const desktopStyle = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "30vw",
            height: "70vh",
            padding: "14px 16px",
            transform: "translate(-50%, -50%)",
            overflowY: "scroll",
            overflowX: "hidden",
        },
        overlay: {
            background: "rgba(0,0,0,0.2)",
            zIndex: "9",
            background: "rgba(12, 12, 12, 0.68)",
        },
    };
    const mobileStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            width: "80vw",
            padding: "14px 16px",
            transform: "translate(-50%, -50%)",
            overflow: "hidden",
        },
        overlay: {
            background: "rgba(0,0,0,0.2)",
            zIndex: "9",
            background: "rgba(12, 12, 12, 0.68)",
        },
    };
    return (
        <>
            <Head>
                <title>Join the Future of Fintech: Explore Careers at NeoKred</title>
                <meta name="description" content="Discover exciting career opportunities at NeoKred. Explore our Careers page for exciting opportunities that align with your skills and aspirations." />
            </Head>
            <ToastContainer />
            <div className='career_us_page'>
                <div className="career_section1">
                    <div className="career_section1_bg">
                        <div className='career_section_title_button'>
                            <h1 className="banner_heading_career">Beyond everything,<br />people first.</h1>
                            <Link href='/contact-us'>
                                <div className="explore_button_contactus">
                                    <Button className="about_us_explore_button">Explore</Button>
                                </div>
                            </Link>
                            
                        </div>
                    </div>
                    <Image alt="" height="430" width="255" src={imageUrl?.aboutUs?.bgCircle} className='about_us_vector_circle' />
                </div>
            </div>
            <div className='career_sections'>
                <div className='life_title_career'>Life at Neokred</div>
                <div className='sliders_section1'>
                    <div className='alider_section1_one'>
                        <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Rectangle+6391.svg" />
                    </div>
                    <div className='alider_section1_two'>
                        <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Rectangle+6389+(2).svg" />
                        {/* <div className='arrows_click_next_slider'>
                            <div>
                                <ResponsiveImage src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004538.svg" />
                            </div>
                            <div>
                                <ResponsiveImage src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004539.svg" />
                            </div>
                        </div> */}
                    </div>
                </div>
                <div className='sliders_section2'>
                    <div className='alider_section2_one'>
                        <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Rectangle+6392.svg" />
                        {/* <div className='arrows_click_next_slider'>
                            <div>
                                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004538.svg" />
                            </div>
                            <div>
                                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004539.svg" />
                            </div>
                        </div> */}
                    </div>
                    <div className='alider_section2_two'>
                        <p className='we_are_bold_title'>We are Bold</p>
                        <p className='we_are_bold_desc'>Exploring wild ideas and trying out new approaches is what drives our innovations.</p>
                    </div>
                </div>
                <div className='life_title_career'>Explore Our Work Culture</div>
                <div className='sliders_section3'>
                    <div className='alider_section3_one'>
                        <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Rectangle+6368.svg" />
                    </div>
                    <div className='alider_section3_two' onClick={() => carrerRef?.current?.scrollIntoView({block:"start", behavior:"smooth"})}>
                        <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004749.svg" />
                    </div>
                </div>
                <div className='we_are_title_career'>We are hiring!</div>
                <div className='we_are_hiring_desc'>Our team is readily available to assist you. Reach out to us through this message box on your dashboard for real-time assistance.</div>



            </div>
            <div className='hiring_process_box'>
                <select className='inner_wrap_hiring_process_box' onChange={e => handleFilterChange('title', e.target.value)}>
                    <option>Select Job Roles</option>
                    {jobRoles.map((role, index) => (
                        <option key={index} value={role}> {role}</option>
                    ))}
                </select>
                <select className='inner_wrap_hiring_process_box' onChange={e => handleFilterChange('job_location', e.target.value)}>
                    <option>Location</option>
                    {jobLocation.map((role, index) => (
                        <option key={index} value={role}> {role}</option>
                    ))}
                </select>
                <select className='inner_wrap_hiring_process_box' onChange={e => handleFilterChange('exp', e.target.value)}>
                    <option>Select Experience</option>
                    {jobExp.map((role, index) => (
                        <option key={index} value={role}> {role}</option>
                    ))}
                </select>
                {/* <div className='filter_remove'>
                    <Image alt="" height="10" width="10" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Vector+(2).svg" /><span>clear filters</span>
                </div> */}
                <div className='bg_abs_image_filters'>
                    <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/career/Group+1000004523+(3).svg" />
                </div>

            </div>


            <div className='career_sections' ref={carrerRef}>
                <div className='last_section_jobs_filter'>
                    {
                        data?.map((items, ind) => {
                            return <div key={ind} className='jobs_aresa_section'  >
                                <div className='title_items_jobs_areas' onClick={() => handleSendData(items)}> {items.title}</div>
                                <Button className="explore_button_career" onClick={() => {
                                    handleAnyoneShow(items._id);
                                    setActionModal({ show: true });
                                }}>
                                    Apply Now
                                </Button>
                            </div>
                        })
                    }
                </div>
            </div>
            {/* <Modal show={showAnyone} onHide={handleAnyoneClose}>
                <Modal.Header closeButton>
                    <Modal.Title> Apply Now For Job </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Full Name"
                            name="name"
                            autoComplete="off"
                            value={anyoneForm.name}
                            onChange={handleChangeAnyone}
                        />
                        <span className="text-danger">{anyoneFormErrors.name}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="name@example.com"
                            name="email"
                            autoComplete="off"
                            value={anyoneForm.email}
                            onChange={handleChangeAnyone}
                        />
                        <span className="text-danger">{anyoneFormErrors.email}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Mobile Number</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="mobile number"
                            name="mobile_no"
                            autoComplete="off"
                            value={anyoneForm.mobile_no}
                            onChange={handleChangeAnyone}
                            onWheelCapture={(e) => e.target.blur()}
                            id="numbers-input"
                            maxLength={10}
                            onInput={(e) => {
                                if (e.target.value.length > e.target.maxLength) {
                                    e.target.value = e.target.value.slice(0, e.target.maxLength)
                                }
                            }}
                        />
                        <span className="text-danger">{anyoneFormErrors.mobile_no}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="message"
                            name="description"
                            autoComplete="off"
                            value={anyoneForm.description}
                            onChange={handleChangeAnyone}
                        />
                        <span className="text-danger">{anyoneFormErrors.description}</span>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Upload Resume</Form.Label>
                        <Form.Control
                            type="file"
                            placeholder="Upload Resume"
                            className="w-50"
                            name="image"
                            value={anyoneForm.image}
                            onChange={handleChangeAnyone}
                            autoComplete="off"
                        />
                        <span className="text-danger">{anyoneFormErrors.image}</span>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="job-apply" variant="secondary" onClick={handleAnyoneClear}>
                        clear
                    </Button>
                    {loader == false && (
                        <Button className="job-apply" variant="primary" onClick={handleAnyoneSubmit}>
                            Submit
                        </Button>
                    )}
                    {loader == true && <Spinner animation="border" variant="Primary" />}
                </Modal.Footer>
            </Modal> */}
            <Modal
                isOpen={actionModal.show}
                onRequestClose={() => setActionModal({ show: false })}
                style={isMobile ? mobileStyles : desktopStyle}
                contentLabel="Action Modal"
                ariaHideApp={false}
            >
                <div>
                    <div className='modal-head'>
                        <p>Apply Now For Job </p>
                        <Image src={close} alt='close' onClick={() => setActionModal({ show: false })} />
                    </div>
                    <div className='modal-body'>
                        <div>
                            <p className='modal-field-name'>Full Name</p>
                            <input type="text"
                                className='modal-input'
                                placeholder="Full Name"
                                name="name"
                                autoComplete="off"
                                value={anyoneForm.name}
                                onChange={handleChangeAnyone}
                            />
                            <p className="text-danger">{anyoneFormErrors.name}</p>
                        </div>
                        <div>
                            <p className='modal-field-name'>Email address</p>
                            <input type="text"
                                className='modal-input'
                                placeholder="Email address"
                                name="email"
                                autoComplete="off"
                                value={anyoneForm.email}
                                onChange={handleChangeAnyone}
                            />
                            <p className="text-danger">{anyoneFormErrors.email}</p>
                        </div>
                        <div>
                            <p className='modal-field-name'>Phone Number</p>
                            <input
                                type="number"
                                className='modal-input'
                                placeholder="Phone number"
                                name="mobile_no"
                                autoComplete="off"
                                value={anyoneForm.mobile_no}
                                onChange={handleChangeAnyone}
                                onWheelCapture={(e) => e.target.blur()}
                                id="numbers-input"
                                maxLength={10}
                                onInput={(e) => {
                                    if (e.target.value.length > e.target.maxLength) {
                                        e.target.value = e.target.value.slice(0, e.target.maxLength)
                                    }
                                }}
                            />
                            <p className="text-danger">{anyoneFormErrors.mobile_no}</p>
                        </div>
                        <div>
                            <p className='modal-field-name'>Message</p>
                            <textarea
                                className='modal-input2'
                                placeholder="Message"
                                name="description"
                                autoComplete="off"
                                value={anyoneForm.description}
                                onChange={handleChangeAnyone}
                            />
                            <p className="text-danger">{anyoneFormErrors.description}</p>
                        </div>
                        <div>
                            <p className='modal-field-name'>Upload Resume</p>
                            <input
                                type="file"
                                placeholder="Upload Resume"
                                className="w-50"
                                name="image"
                                value={anyoneForm.image}
                                onChange={handleChangeAnyone}
                                autoComplete="off"
                            />
                            <p className="text-danger">{anyoneFormErrors.image}</p>
                        </div>
                        <div className='modal-button'>
                            <Button className="clear-button" onClick={handleAnyoneClear}>clear</Button>
                            <Button className="submit-button" onClick={handleAnyoneSubmit}> Submit </Button>
                            {/* {loader == false && (
                                <Button className="submit-button" variant="primary" onClick={handleAnyoneSubmit}> Submit </Button>
                            )}
                            {loader == true && <Spinner animation="border" variant="Primary" />} */}
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default CareerPage