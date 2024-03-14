import imageUrl from '@/imageUrl';
import Image from 'next/image';
import React, { useState } from 'react'
import ResponsiveImage from '../HomepageComp/ResponsiveImage';

const AccordianProdilex = () => {
  const [showAnswers, setShowAnswers] = useState({})
  const [selectedTab, setSelectedTab] = useState(1)

  // console.log(selectedTab)

  const Faqs = [
    {
      id: 1,
      questios: "What is the DATAi Expense Management System (SDK)?",
      answers: "The Expense Management System (SDK) is a powerful software development kit designed to assist developers in seamlessly integrating financial data into their applications. It encompasses features such as balance fetch, income and spend analysis, transaction history, bill reminders, offers and discounts, and budgeting."
    },
    {
      id: 2,
      questios: "What are the benefits of using the DATAi Expense Management System (SDK)?",
      answers: "The Expense Management System (SDK) offers numerous advantages to developers, including simplified development processes, heightened user engagement, enhanced data security, and an improved overall user experience."
    },
    {
      id: 3,
      questios: "What are the different features of the DATAi Expense Management System (SDK)?",
      answers: "The Expense Management System (SDK) provides a comprehensive suite of features, including: Balance Fetch: Retrieves user's bank balance from various financial institutions. Income and Spend Analysis: Analyze user's income and expenses for valuable spending insights. Location Tracking: Track user's location to offer insights into spending patterns. Transaction History: Present a detailed history of user transactions. Bill Reminders: Send timely reminders for upcoming bills and payments. Offers and Discounts: Track and showcase offers, discounts, and promotions from various brands.   Budgeting: Empower users to set spending limits and monitor their financial progress."

    },
    {
      id: 4,
      questios: "How does the DATAi Expense Management System (SDK) work?",
      answers: "Developers seamlessly integrate the SDK into their applications. Users grant consent for data sharing, and the SDK securely fetches and processes the information to provide valuable financial insights."
    },
    {
      id: 5,
      questios: "How can I get started with the DATAi Expense Management System (SDK)?",
      answers: "Developers can access documentation and tutorials on Neokred's website, providing step-by-step guidance on integrating the SDK into their applications."
    }
  ]
  const Faqs2 = [
    {
      id: 1,
      questios: "How can I use the DATAi Expense Management System (SDK) to manage my finances?",
      answers: "The Expense Management System (SDK) enables developers to create applications that offer users a comprehensive overview of their finances. Users can track income and expenses, set budgets, receive bill reminders, and discover relevant offers."
    },
    {
      id: 2,
      questios: "What data does the DATAi Expense Management System (SDK) collect from me?",
      answers: "The SDK collects user data, such as SMS messages, emails, and location information, with user consent. This information is used to provide personalized financial insights and offers."

    },
    {
      id: 3,
      questios: "How does the DATAi Expense Management System (SDK) protect my data?",
      answers: "Neokred prioritizes data security, implementing industry-standard practices. All data is encrypted, stored securely, and access is restricted to authorized personnel."
    },
    {
      id: 4,
      questios: "Can I control how my data is used by the DATAi Expense Management System (SDK)?",
      answers: "Yes, users have complete control over their data. They can grant or revoke consent at any time and disable specific features involving data collection."
    },
    {
      id: 5,
      questios: "Can I opt out of data sharing with the DATAi Expense Management System (SDK)?",
      answers: "Yes, users can opt out of data sharing by declining consent or uninstalling applications that utilize the SDK."
    },

  ]
  const Faqs3 = [
    {
      id: 1,
      questios: "How can I integrate the DATAi Expense Management System (SDK) into my application?",
      answers: "Neokred provides comprehensive documentation and tutorials to guide developers through the integration process. The SDK is designed to be easy to integrate and customize."
    },
    {
      id: 2,
      questios: "What are the technical requirements for using the DATAi Expense Management System (SDK)?",
      answers: "The SDK supports various programming languages and platforms, ensuring compatibility with a wide range of applications. Developers can refer to the technical documentation for specific requirements."
    },
    {
      id: 3,
      questios: "Can I customize the DATAi Expense Management System (SDK) to fit my application's needs?",
      answers: "Absolutely. The Expense Management System (SDK) offers a flexible framework that allows developers to customize its features and appearance to align with their application's design and functionality."
    },
    {
      id: 4,
      questios: "What are the pricing options for the DATAi Expense Management System (SDK)?",
      answers: "Neokred offers a variety of pricing plans to suit different developer needs and application usage. Developers are encouraged to contact the Neokred sales team to discuss pricing options."

    },
    {
      id: 5,
      questios: "Can I get support for using the DATAi  Expense Management System (SDK)?",
      answers: "Neokred provides dedicated technical support to assist developers with any questions or issues they may encounter during integration or application development."
    },

  ]

  const options = [
    {
      id: 1,
      name: "General FAQs"
    },
    {
      id: 2,
      name: "User-Specific"
    },
    {
      id: 3,
      name: "Developer-Specific"
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
    <div className='accordian_profilex_section'>
      <div className='title_accordian_profilex'>Have more questions?<br />
        We have the answers.</div>
      <div className='accordian_general_developer'>
        <div className={selectedTab == 1 ? "active_selected_tab" : "custom_selected_tab"} onClick={() => setSelectedTab(1)}>General FAQs</div>
        <div className={selectedTab == 2 ? "active_selected_tab" : "custom_selected_tab"} onClick={() => setSelectedTab(2)}>User-Specific</div>
        <div className={selectedTab == 3 ? "active_selected_tab" : "custom_selected_tab"} onClick={() => setSelectedTab(3)}>Developer-Specific</div>

      </div>

      <select className='mobile_version_faq' onChange={e => setSelectedTab(e.target.value)}>
        {
          options?.map((items) => {
            return <option className='options_mobile_version_fav' key={items?.id} value={items?.id}>{items?.name}</option>
          })
        }
      </select>


      {
        selectedTab == 1
          ?
          Faqs.map((item) => (
            <div key={item.id}>
              <div onClick={() => toggleAnswer(item.id)} className='questions_answers_box'>
                <div className='question_box'>
                  {item?.questios}
                </div>
                <div className='image_up_down'>
                  <ResponsiveImage src={showAnswers[item.id] ? imageUrl?.profilexPage?.upArrow : imageUrl?.profilexPage?.downArrow} />
                </div>
              </div>
              {showAnswers[item.id] && (
                <div className='answers_show'>{item?.answers}</div>
              )}
            </div>
          ))
          :
          null
      }
      {
        selectedTab == 2
          ?
          Faqs2.map((item) => (
            <div key={item.id}>
              <div onClick={() => toggleAnswer(item.id)} className='questions_answers_box'>
                <div className='question_box'>
                  {item?.questios}
                </div>
                <div className='image_up_down'>
                  <ResponsiveImage src={showAnswers[item.id] ? imageUrl?.profilexPage?.upArrow : imageUrl?.profilexPage?.downArrow} />
                </div>
              </div>
              {showAnswers[item.id] && (
                <div className='answers_show'>{item?.answers}</div>
              )}
            </div>
          ))
          :
          null
      }
      {
        selectedTab == 3
          ?
          Faqs3.map((item) => (
            <div key={item.id}>
              <div onClick={() => toggleAnswer(item.id)} className='questions_answers_box'>
                <div className='question_box'>
                  {item?.questios}
                </div>
                <div className='image_up_down'>
                  <ResponsiveImage src={showAnswers[item.id] ? imageUrl?.profilexPage?.upArrow : imageUrl?.profilexPage?.downArrow} />
                </div>
              </div>
              {showAnswers[item.id] && (
                <div className='answers_show'>{item?.answers}</div>
              )}
            </div>
          ))
          :
          null
      }


    </div>
  )
}

export default AccordianProdilex