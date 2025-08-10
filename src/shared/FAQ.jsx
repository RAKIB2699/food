import React, { useState } from "react";
import { Link } from "react-router";

const faqData = [
  {
    question: "How can I join the Foody community?",
    answer:
      "Simply register an account and start sharing or requesting food through our platform. It’s free and easy!",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Absolutely! We prioritize your privacy and use secure methods to protect your data.",
  },
  {
    question: "Can I donate leftover food?",
    answer:
      "Yes, you can add leftover food items for donation via the 'Add Food' section in your dashboard.",
  },
  {
    question: "How do I request food?",
    answer:
      "Browse the available food listings and click 'Request' on any item that suits your needs.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Our platform currently supports multiple regions. Please check the location filter when browsing food listings.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1600px] w-11/12 mx-auto px-6 py-16">
      <h2 className="text-4xl font-extrabold text-green-700 mb-10 text-center">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, i) => {
          const isOpen = i === activeIndex;
          return (
            <div
              key={i}
              className="border border-green-300 rounded-lg shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-green-800 font-semibold text-lg hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 cursor-pointer"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                {item.question}
                <span
                  aria-hidden="true"
                  className={`inline-block transform transition-transform duration-300 text-green-600 text-2xl font-bold select-none`}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`px-6 pb-6 text-gray-700 text-base transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                style={{ overflow: "hidden" }}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-center mt-6 text-3xl font-semibold">Learn More Info</p>
      <div className="flex justify-center mt-3">
        <Link to='/contact'>  <button className="btn btn-primary text-white flex justify-center">
          Contact Us
        </button>
        </Link>
      </div>
    </section>
  );
};

export default FAQ;
