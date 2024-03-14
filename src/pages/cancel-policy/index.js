import React from "react";
import Head from "next/head";
import Image from "next/image";
import ResponsiveImage from "@/components/HomepageComp/ResponsiveImage";

const index = () => {
  return (
    <>
      <Head>
        <title>Cancel policy - Neokred</title>
      </Head>
      <div className="parent_privacy_div">

        <div className='privacy_mob_banner'><h1 className="privacy_policy_mob_text">Cancellation & <br />Refund Policy</h1></div>

        <div className="privacy_policy_div">
          <h1 className="privacy_policy_text">Cancellation & Refund Policy</h1>
        </div>
        <div className="privacy-policy-desc">
          <p>
            NEOKRED TECHNOLOGIES PRIVATE LIMITED believes in helping its
            customers as far as possible, and has therefore a liberal
            cancellation policy. Under this policy:
          </p>
          <ul className="cancel-bullet">
            <li>
              Cancellations will be considered only if the request is made
              immediately after placing the order. However, the cancellation
              request may not be entertained if the orders have been
              communicated to the vendors/merchants and they have initiated
              the process of shipping them.
            </li>
            <li>

              NEOKRED TECHNOLOGIES PRIVATE LIMITED does not accept
              cancellation requests for perishable items like flowers,
              eatables etc. However, refund/replacement can be made if the
              customer establishes that the quality of product delivered is
              not good.

            </li>
            <li>

              In case of receipt of damaged or defective items please report
              the same to our Customer Service team. The request will,
              however, be entertained once the merchant has checked and
              determined the same at his own end. This should be reported
              within same day of receipt of the products.

            </li>
            <li>

              In case you feel that the product received is not as shown on
              the site or as per your expectations, you must bring it to the
              notice of our customer service within same day of receiving the
              product. The Customer Service Team after looking into your
              complaint will take an appropriate decision.{" "}

            </li>
            <li>

              In case of complaints regarding products that come with a
              warranty from manufacturers, please refer the issue to them.

            </li>
            <li>

              {`In case of any Refunds approved by the NEOKRED TECHNOLOGIES
              PRIVATE LIMITED, it’ll take 6-8 days for the refund to be
              processed to the end customer.`}

            </li>
          </ul>
        </div>
        <div className='bottom_arrow_cancelpolicy'>
          <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/image/1708599683608_1000004525.png.webp" />
        </div>
        <div className='bottom_arrow_cancelpolicy_desktop'>
          <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/image/1708600424334_%282%29.png.webp" />
        </div>

      </div>
    </>
  );
};

export default index;
