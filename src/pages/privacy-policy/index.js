import React from "react";
import Head from "next/head";
import ResponsiveImage from "@/components/HomepageComp/ResponsiveImage";

const index = () => {
    return (
        <>
            <Head>
                <title>Privacy policy - Neokred</title>
            </Head>
            <div className="parent_privacy_div">
                {/*mobile*/}
                <div className='privacy_mob_banner'><h1 className="privacy_policy_mob_text">Privacy<br />Policy</h1></div>
                <div className="privacy_policy_div"><h1 className="privacy_policy_text">Privacy Policy</h1></div>
                <div className="privacy-policy-desc">
                    <p>This privacy policy sets out how NEOKRED TECHNOLOGIES PRIVATE LIMITED uses and protects any information that you give NEOKRED TECHNOLOGIES PRIVATE LIMITED when you use this website.</p>
                    <p>
                        NEOKRED TECHNOLOGIES PRIVATE LIMITED is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, and then you can be assured that it will only be used in accordance with this privacy statement.</p>
                    <p>
                        NEOKRED TECHNOLOGIES PRIVATE LIMITED may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.</p>

                    <span className="privacy-policy-desc2">We may collect the following information:</span>
                    <ul>
                        <li>Name and job title</li>
                        <li>Contact information including email address</li>
                        <li>Demographic information such as postcode, preferences and interests</li>
                        <li>Other information relevant to customer surveys and/or offers</li>
                    </ul>


                    <span className="privacy-policy-desc2">What we do with the information we gather</span>

                    <p>We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:</p>
                    <ul>
                        <li>Internal record keeping.</li>
                        <li>We may use the information to improve our products and services.</li>
                        <li>We may periodically send promotional emails about new products, special offers or other information which we think you may find interesting using the email address which you have provided.</li>
                        <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, fax or mail. We may use the information to customise the website according to your interests.</li>
                    </ul>

                    <p>We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure we have put in suitable measures.</p>

                    <p> How we use cookies</p>
                    <p>We are not storing any cookies in our website.</p>
                    <ul>
                        <li>
                            whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                        <li>
                            if you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us at <span className="privacy-policy-desc3">support@neokred.tech</span>
                        </li>
                    </ul>



                    <p>We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
                        If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible, at the above address. We will promptly correct any information found to be incorrect.</p>
                </div>
                <div className='bottom_arrow_cancelpolicy'><ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/image/1708599683608_1000004525.png.webp" /></div>
                <div className='bottom_arrow_cancelpolicy_desktop'><ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/image/1708600424334_%282%29.png.webp" /></div>
            </div>
        </>
    );
};

export default index;
