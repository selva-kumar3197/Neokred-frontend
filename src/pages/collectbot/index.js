import Head from "next/head";
import React, { useState, useRef } from 'react';
import imageUrl from "@/imageUrl";
import Image from "next/image";
import Link from "next/link";
import OnboardCustomers from '@/components/CollectBot/ManagesMoney'
import ResponsiveImage from "@/components/HomepageComp/ResponsiveImage";
import AccordianCollectBot from '@/components/ProfileXComp/AccordianCollectBot'
import Chatbot from "@/components/Chatbot";


const CollectBotPage = () => {
  const containerRef = useRef(null);
  const [selectedOnboards, setSelectedOnbaords] = useState(1)

  const handleClick = (index) => {
    setActiveIndex(index);

    // Get the DOM element of the clicked item
    const element = document.getElementById(`item-${index}`);

    // Check if the element and container exist before attempting to scroll
    if (element && containerRef.current) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
        container: containerRef.current,
      });
    }
  };

  const data = [
    {
      title: "Educational Institutions",
      description: [
        "The students' roll number is converted to an account number",
        "Track the inflow of funds from students.",
        "Automatic reconciliation of the fund.",
        "Centralised receivables for students."
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708156686966_educational.png.webp",
    },
    {
      title: "Gaming Industry",
      description: [
        "Instant payment for in-app payments.",
        " No need to load Google Wallets or any account.",
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165094926_gaming.png.webp",
    },
    {
      title: "NBFC/ Lending Companies",
      description: [
        "Reduced-cost operations with streamlined payables and receivables.",
        "Automated and easy tracking of repayment.",
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165244180_nbfc.png.webp",
    },
    {
      title: "Crypto Wallet",
      description: [
        "Create crypto wallet (Virtual Account) to buy crypto instantly. Instantly",
        " Instantly load/withdraw from your crypto wallet.",
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165350382_crypto.png.webp",
    },
    {
      title: "Gig Worker Virtual Account",
      description: [
        "No need to set up a bank account for contract-based workers.",
        "No KYCs for Virtual account.",
        " Use IMPS/RTGS to disburse bulk funds.",
        "Manage corporate liquidity better.",
        "Reduce transaction fees by using virtual accounts to pay gig workers.",
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708346424964_worker.png.webp",
    },
    {
      title: "Retailer Virtual Account",
      description: [
        "Create virtual accounts based on the company’s hierarchy.",
        "Set up a business virtual account for payables and receivables for each branch.",
        "Make payments to the company’s virtual account.",
      ],
      background: "https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165350382_crypto.png.webp",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);

  // const handleClick = (index) => {
  //   setActiveIndex(index);
  // };


  return (
    <>
      <Head>
        <title>Expense Management & Business Expense Tracker</title>
        <meta name="description" content='Single Platform for Seamless Payment Processing & Expense Management. A platform that uses VANs with minimal use of KYCs to simplify account management.' />
      </Head>
      {/* <div className="collectbot_container">
        <div className="banner_container">
          <Image
            className="imgbanner"
            height={265}
            width={265}
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708079899600_1000004734.png.webp"
          />
          <div className="banner_part_header">
            <p className="banner_part_title">
              Single Platform for Seamless Payment Processing
            </p>
            <p className="banner_part_desc">
              A unified platform that uses Virtual Account Numbers (VANs) with
              minimal use of KYCs to streamline fund reconciliation and
              integrate with the bank's CBS to ensure simplified account
              management.
            </p>
          </div>
          <Image
            className="imgbannermob"
            height={103}
            width={103}
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708084847474_1000004695.png.webp"
          />
        </div>
        
        <div className='collectbot_section2'>
          <p className='collectbot_section2_title'>Manages Money Better</p>
          <div className='profilex_onbords_section2'>
          <OnboardCustomers />
          </div>
        </div>
        <div className='rightside_arrows'>
          <img src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708339328760_1000004523.png.webp" />
        </div>
  </div>*/}
      <div className="homepage_container">
        <div className='profilex_section1'>
          <div className='profilex_section1_container'>
            <div className='logo_banner_section1'>
              <ResponsiveImage src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708079899600_1000004734.png.webp" />
            </div>
            <div className='content_section1'>
              <div className='content_section1_title'>
                {`Single Platform for Seamless Payment Processing`}
              </div>
              <div className='content_section1_desc'> {`A unified platform that uses Virtual Account Numbers (VANs) with
                minimal use of KYCs to streamline fund reconciliation and
                integrate with the bank's CBS to ensure simplified account
                management.`}</div>
            </div>
          </div>
          <div className='image_mobile_section1'>
            <Image alt="" height="200" width="200" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708084847474_1000004695.png.webp" />
          </div>
        </div>
      </div>

      <div className='profilex_section2'>
        <p className='section2_title_profilex'>Manages Money<br /> Better</p>
        <p className='section2_desc'></p>
        <div className='profilex_onbords_section2'>
          <OnboardCustomers />
        </div>
      </div>

      <div className='profilex_section3_mobile'>
        <div className='perfection_title_section3'> Dynamic dashboard for<br /><span className='perfection_span_section3'>seamless transactions</span> </div>
        <div className='profilex_section_innerbox3_mobile'>
          <div className='image_abs_right_side_mobile'>
            <ResponsiveImage src={imageUrl?.profilexPage?.section3?.mobileOne} />
          </div>
          <div className='image_abs_left_side'>
            <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
          </div>
          <div className='image_ipad_center_side'>
            <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
          </div>
        </div>
      </div>

      <div className="mobile_payin_section">
        <div className="payin_section_mob">
          <h1>Pay-In</h1>
          <p>
            Collections are as easy as <br />receiving a call.
            <br />
            {` Here's how.`}
          </p>
        </div>



        <div className="card_group_title_mob">

          <ResponsiveImage alt=""
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708435997461_%281%29.svg.webp"
          />

          <div className='step_section'>
            <h1>STEP 1</h1>
            <p>
              Use unique mapping to create a virtual account and Virtual Bank
              Address (VBAs) for every individual.
            </p>
          </div>
        </div>


        <div className="card_group_title_mob">
          <ResponsiveImage alt=""
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708435997461_%281%29.svg.webp"

          />
          <div className='step_section'>
            <h1>STEP 2</h1>
            <p>
              Share account information by SMS, app notification, or email.
            </p>
          </div>
        </div>


        <div className="card_group_title_mob">

          <ResponsiveImage alt=""
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708435997461_%281%29.svg.webp"

          />
          <div className='step_section'>

            <h1>STEP 3</h1>
            <p>
              {` The end users make the transfer to clients' receivable accounts
            using UPI.`}
            </p>
          </div>
        </div>


        <div className="card_group_title_mob">
          <ResponsiveImage alt=""
            src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708435997461_%281%29.svg.webp"

          />
          <div className='step_section'>
            <h1>STEP 4</h1>
            <p>
              {` The transferred amount is reflected in the client's balance
            pool.`}
            </p>
          </div>
        </div>
      </div>
      {/*dynamic dashboard*/}
      <div className='main_dashboard'>
        <div className='rightside_arrows'>
          <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708339328760_1000004523.png.webp" />
        </div>
        <div className="dynamic_dashboard">
          <h1>Dynamic dashboard for</h1>
          <h2>seamless transactions</h2>
          <p>
            The processing switch, with its intuitive interface, onboards
            merchants with ease while keeping tabs on every transaction.
          </p>
        </div>
        <div className='leftside_arrows'>
          <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708343580500_1000004595.png.webp" />
        </div>
      </div>



      {/*pay in section*/}


      <div className='main'>
        <div className="main_payin_section">
          <div className="tv_section">
            <Image alt="" height="700" width="1000" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708088107411_1.png.webp" />
          </div>
          <div className="payin_section">
            <h1>Pay-In</h1>
            <p>
              Collections are as easy as receiving a call.
              <br />
              {` Here's how.`}
            </p>

            <div className="card_group">
              <div className="card_group_title">
                <ResponsiveImage alt=""
                  src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092378869_1000004745.png.webp"
                  className="image_collecrbot"
                />
                <h2>STEP 1</h2>
                <h3>
                  Use unique mapping to create a virtual account and Virtual Bank
                  Address (VBAs) for every individual.
                </h3>
              </div>
              <div className="arrow">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092416082_Arrow_Forward.png.webp" />
              </div>
              <div className="card_group_title">
                <ResponsiveImage alt=""
                  src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092378869_1000004745.png.webp"
                  className="image_collecrbot"
                />
                <h2>STEP 2</h2>
                <h3>
                  Share account information by SMS, app notification, or email.
                </h3>
              </div>
              <div className="arrow">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092416082_Arrow_Forward.png.webp" />
              </div>
              <div className="card_group_title">
                <ResponsiveImage alt=""
                  src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092378869_1000004745.png.webp"
                  className="image_collecrbot"
                />
                <h2>STEP 3</h2>
                <h3>
                  {`The end users make the transfer to clients' receivable accounts
                  using UPI.`}
                </h3>
              </div>
              <div className="arrow">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092416082_Arrow_Forward.png.webp" />
              </div>
              <div className="card_group_title">
                <ResponsiveImage alt=""
                  src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092378869_1000004745.png.webp"
                  className="image_collecrbot"
                />
                <h2>STEP 4</h2>
                <h3>
                  {` The transferred amount is reflected in the client's balance
                  pool.`}
                </h3>
              </div>
            </div>
          </div>
          {/*use pay case in section*/}
          <div className='usecases_title'>
            <h1>Use Cases Pay-Ins</h1>
          </div>

          <div className="main_usecases">
            {
              <div
                className="background_image"
                style={{
                  backgroundImage: `url("${data[activeIndex].background}")`,
                }}

              >
                <div className='background_image_title' >
                  <h1>{data[activeIndex].title}</h1>
                  <ul>
                    {data[activeIndex].description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            }

            <div className='rightside_maindiv' ref={containerRef}>
              {data.map((item, index) => (
                <div
                  key={index}
                  className={index === activeIndex ? 'rightside_maindiv_title_active' : 'rightside_maindiv_title_inactive'}
                  onClick={() => {
                    handleClick(index)

                  }}>
                  <h1>{item.title}</h1>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>


      {/* Mobile version */}



      <div className='onbaords_left_sections_mobile'>
        <div className='payin_text'>Use Cases Pay-Ins</div>
        <div>
          <div className={selectedOnboards === 1 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(1)}>
            Educational Institutions
          </div>
          {
            selectedOnboards === 1
              ?


              <div className="img_section">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708156686966_educational.png.webp" />
                <div className='img_section_text'>
                  <h1>Educational <br />Institutions </h1>
                  <ul>
                    <li>{`The students' roll number is converted to an account number.`}</li>
                    <li>Track the inflow of funds from students.</li>
                    <li>Automatic reconciliation of the fund.</li>
                    <li>Centralised receivables for students. </li>
                  </ul>
                </div>
              </div>


              :
              null
          }
        </div>
        <div>
          <div className={selectedOnboards === 2 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(2)}>
            Gaming Industry
          </div>
          {
            selectedOnboards === 2
              ?
              <div className="img_section">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165094926_gaming.png.webp" />
                <div className='img_section_text'>
                  <h1>Gaming<br />Industry </h1>
                  <ul>
                    <li>Instant payment for in-app payments.</li>
                    <li>need to load Google Wallets or any account.</li>
                  </ul>
                </div>
              </div>

              :
              null
          }
        </div>
        <div>
          <div className={selectedOnboards === 3 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(3)}>
            NBFC/ Lending Companies
          </div>
          {
            selectedOnboards === 3
              ?
              <div className="img_section">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165244180_nbfc.png.webp" />
                <div className='img_section_text'>
                  <h1>NBFC/ Lending <br />Companies </h1>
                  <ul>
                    <li>Reduced-cost operations with streamlined payables and receivables.</li>
                    <li> Automated and easy tracking of repayment.</li>
                  </ul>
                </div>
              </div>

              :
              null
          }
        </div>
        <div>
          <div className={selectedOnboards === 4 ? "active_onbaords_mobile" : "custome_onbaords_mobile"} onClick={() => setSelectedOnbaords(4)}>
            Crypto Wallet
          </div>
          {
            selectedOnboards === 4
              ?
              <div className="img_section">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708165350382_crypto.png.webp" />
                <div className='img_section_text'>
                  <h1>Crypto<br />Wallet </h1>
                  <ul>
                    <li>Create crypto wallet (Virtual Account) to buy crypto instantly.</li>
                    <li>Instantly load/withdraw from your crypto wallet.</li>
                  </ul>
                </div>
              </div>

              :
              null
          }
        </div>


      </div>


      {/*Settle payment*/}
      <div className='settle_payment'>
        <div className='settle_payment_title'>
          <h1>Settle payments in a snap</h1>
          <p>Choose your settlement plan.</p>
        </div>
        <div className='settle_payment_maindiv'>
          <div className='settle_payment_image'>
            <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708176901101_Instant.svg.webp" />
            <div className='settle_payment_image_text'><h1>{`Don't wait get`}<br />your account<br />settled now.</h1></div>
          </div>
          <div className='settle_payment_rightside'>
            <h1>Instant<br /> Settlement</h1>
          </div>
        </div>
        {/*second image section*/}
        <div className='settle_payment_maindiv'>
          <div className='settle_payment_rightside'>
            <h1>T+1 Days<br />Settlement</h1>
          </div>
          <div className='settle_payment_image'>
            <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708177078600_T%252B1.svg.webp" />
            <div className='settle_payment_image_text2'><h1>Get your account settled<br />in T+1 days with any other<br />Neokred plan.</h1></div>
          </div>

        </div>

      </div>
      {/*pay-out section duplicate*/}



      {/*pay-out section*/}
      <div>
        <div className="payin_section">
          <h1>Pay-out</h1>
          <p>
            Let us worry about your payments.
            Here is how.
          </p>

          <div className="card_group">
            <div className="card_group_title">
              <ResponsiveImage alt=""
                src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708435997461_%281%29.svg.webp"
                className="image_collecrbot"
              />
              <div>
                <h2>STEP 1</h2>
                <h3>
                  Use unique mapping to create a virtual account and Virtual Bank
                  Address (VBAs) for every individual.
                </h3>
              </div>
            </div>
            <div className="arrow">
              <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092416082_Arrow_Forward.png.webp" />
            </div>
            <div className="card_group_title">
              <ResponsiveImage alt=""
                src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708436062431_%281%29.svg.webp"
                className="image_collecrbot"
              />
              <div>
                <h2>STEP 2</h2>
                <h3>
                  Manage multiple accounts by uploading in bulk and operating them automatically.
                </h3>
              </div>
            </div>
            <div className="arrow">
              <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708092416082_Arrow_Forward.png.webp" />
            </div>
            <div className="card_group_title">
              <ResponsiveImage alt=""
                src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708436410712_%281%29.svg.webp"
                className="image_collecrbot"
              />
              <div>
                <h2>STEP 3</h2>
                <h3>
                  Use Pay Now or Pay Later.
                </h3>
              </div>
            </div>



          </div>
        </div>
      </div>

      {/*Use cases pay-outs*/}
      <div className='main_payout'>
        <h1>Use Cases Pay-Outs</h1>
        <div className='parent_payout_card'>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708327681477_retail-virtual.png.webp" />
                <div className='payouts_payment_image_text'><h1>Retailer Virtual<br /> Account</h1>
                  <button className="payouts_payment_image_button">View More</button>
                </div>
              </div>
              <div class="flip-box-back">
                <ul>
                  <li>Create virtual accounts based on the {`company’`}s hierarchy.</li>
                  <li>Set up a business virtual account for payables and receivables for each branch.</li>
                  <li>Make payments to the {`company’s`} virtual account.</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="flip-box">
            <div class="flip-box-inner">
              <div class="flip-box-front">
                <ResponsiveImage alt="" src="https://neokred.s3.ap-south-1.amazonaws.com/collectbot/1708327681477_retail-virtual.png.webp" />
                <div className='payouts_payment_image_text'><h1>Gig Worker<br /> Virtual Account</h1>
                  <button className="payouts_payment_image_button">View More</button>
                </div>
              </div>
              <div class="flip-box-back">
                <ul>
                  <li>Set up virtual accounts without any fuss for contract-based workers.</li>
                  <li>Use IMPS/RTGS to disburse bulk funds.</li>
                  <li>Manage corporate liquidity better.</li>
                  <li>Reduce transaction fees by using virtual accounts to pay gig workers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*accordian section*/}
      <div className='collectbot_accordian'>
        <div className='collectbot_title_section3'> KYC Customised with  <br /><span className='collectbot_span_section3'>Precision</span> </div>

        <div className='tab_profilex_inner_answers'>
          <div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Industry First Innovation</p>
              <p className='desc_profilex_inner_tab'>Captures quality information intelligently and provides reports through linked SMS.</p>
            </div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Businesses Verified</p>
              <p className='desc_profilex_inner_tab'>Make informed business decisions that follow industry compliances.</p>
            </div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Verify Employees</p>
              <p className='desc_profilex_inner_tab'>Create a credible workforce with our employment APIs.</p>
            </div>
          </div>
          <div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Ease of Data Extraction</p>
              <p className='desc_profilex_inner_tab'>The Document OCR helps to extract data.</p>
            </div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Bank Account Verified</p>
              <p className='desc_profilex_inner_tab'>Get accurate banking information for seamless processes.</p>
            </div>
            <div className='inner_tab_profilex_inside'>
              <p className='title_profilex_inner_tab'>Quality Assured every time</p>
              <p className='desc_profilex_inner_tab'>Onboard with high accuracy sans any latency in the process.</p>
            </div>
          </div>

        </div>
      </div>
      <div className='profilex_section3_mobile'>
        {/*   <div className='perfection_title_section3'> Perfection in profiling on a <br /><span className='perfection_span_section3'>single go</span> </div>
              <div className='profilex_section_innerbox3_mobile'>
                    <div className='image_abs_right_side_mobile'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.mobileOne} />
                    </div>
                    <div className='image_abs_left_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.four} />
                    </div>
                    <div className='image_ipad_center_side'>
                        <ResponsiveImage src={imageUrl?.profilexPage?.section3?.five} />
                    </div>
                </div>*/}
        <AccordianCollectBot />

      </div>

      {/*rating yellow card section*/}
      <div className='parent_yellow_card'>
        <div className='yellow_card'>
          <h1>1 Billion+</h1>
          <p>Transactions</p>
        </div>

        <div className='yellow_card'>
          <h1>350+</h1>
          <p>Clients</p>
        </div>
      </div>

      {/*cycle section*/}
      <div className="homepage_section_margin">
        <div className="homepage_section10">
          <div className="left_container_section10">
            <div className="titile_section10">
              Just drop us a line. See how we make business finances easy for
              you!
            </div>
            <Link href='/contact-us'>
              <button className="section2_explore_button">Know More</button>
            </Link>
          </div>
          <div className="right_container_section10">
            <ResponsiveImage alt="" src={imageUrl?.homePage?.section10?.one} />
          </div>

          {/* MOBILE VERSION */}
          <div className="version_mobile_section10">
            <div className="ceneter_cycle_image">
              <ResponsiveImage alt="" src={imageUrl?.homePage?.section10?.one} />
            </div>
            <div className="titile_section10_mobile">
              Just drop us a line. See how we make business finances easy for
              you!
            </div>
            <Link href='/contact-us'>
              <button className="section2_explore_button_mobile_version">
                Know More
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*bottom chat section*/}
      <div className="homepage_section11">
        <Chatbot />
      </div>

    </>
  );
};

export default CollectBotPage;
