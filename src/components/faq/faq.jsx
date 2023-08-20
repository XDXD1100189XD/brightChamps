import React from 'react';
import './faq.css'; // Import the CSS file for styling
import { useState } from 'react';
const Faq = () => {
  const faqData = [
    {
      question: "What do we do?",
      answer: "We are a champion team of IIT, Harvard, NYU, and IIM alumni, as well as Ph.D holders and ISRO scientists providing 1:1 live classes to children aimed at arming them with the power of technology creation and mathematical thinking. We have our own proprietary teaching platforms apart from the ones from Google, MIT, Autodesk, and others.",
    },
    {
      question: "What topics are covered in BrightCHAMPS curriculum?",
      answer: "Answer 2",
    },
    {
      question: "How does BrightCHAMPS curriculum help perform kids better academically?",
      answer: "Answer 2",
    },
    {
      question: "How do we select kids for our program?",
      answer: "Answer 2",
    }
    // Add more FAQ items as needed
  ];
  return (
    <div className="outer">
      <div className="faq-container">
        <h1 className="faq-heading">Explore more of <div className="highlighter">BrightCHAMPS</div> universe</h1>
        <div className="accordion">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={index === 0} // Open the first item by default
            />
          ))}
        </div>
        <div className="sideImage"> </div>
      </div>
    </div>
  );
}

const AccordionItem = ({ question, answer, isOpen }) => {
  const [openState, setOpenState] = useState(isOpen);

  const toggleAccordion = () => {
    setOpenState(!openState);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-question" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <span className={`arrow ${openState ? 'open' : ''}`}></span>
      </div>
      {openState && <div className="accordion-answer">{answer}</div>}
    </div>
  );
}
export default Faq;