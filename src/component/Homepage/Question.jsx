import React, { useContext, useState } from "react";
import { LanguageContext } from '../../utils/LanguageContext';
import QuestionData from "../../utils/QuestionData";

const Question = () => {
  const { t } = useContext(LanguageContext);
  const [activeIndex, setActiveIndex] = useState(null);
  const questions = QuestionData();

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div
      className="text-center text-primary-color p-4 mx-auto my-14"
      data-aos="fade-up"
    >
      <h1 className="text-2xl font-bold text-primary-color mb-8">Question</h1>

      <div className="flex justify-center text-left">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {questions.map((question, index) => (
            <div key={index} className="rounded mb-2 border">
              <div
                className="flex justify-between items-center py-3 px-4 cursor-pointer question-header"
                onClick={() => handleClick(index)}
              >
                <span className="text-lg font-medium">{t(question.title)}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 transition-transform transform ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div
                className={`accordion-content ${
                  activeIndex === index ? "open" : ""
                }`}
              >
                <div className="p-4 text-start">{t(question.content)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
