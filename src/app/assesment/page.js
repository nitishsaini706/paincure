"use client";
import React, { useReducer, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const sections = [
  {
    title: "Personal Information",
    questions: [
      { question: "Full Name", type: "text" },
      { question: "Height in Feet", type: "text" },
      { question: "Weight in kg", type: "text" },
      { question: "Email address", type: "text" },
      { question: "Age", type: "text" },
      { question: "Gender", type: "single-choice", options: ["Male", "Female", "Other"] },
    ]
  },
  {
    title: "Professional Information",
    questions: [
      { question: "Company you work for:", type: "text" },
      { question: "Designation", type: "text" },
    ]
  },
  {
    title: "Health and Wellness",
    questions: [
      { question: "How many hours do you spend sitting each day?", type: "single-choice", options: ["Less than 2 hours", "2-4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"] },
      { question: "Do you engage in regular physical activity or exercise?", type: "single-choice", options: ["Yes", "No"] },
      { question: "If yes, how often do you exercise?", type: "single-choice", options: ["Daily", "3-5 times a week", "1-2 times a week", "Rarely", "NA"] },
      { question: "What type of physical activities do you participate in? (Check all that apply)", type: "multi-choice", options: ["Walking", "Running", "Yoga", "Gym", "Swimming", "Boxing/MMA", "Other"] },
      { question: "On average, how many hours of sleep do you get each night?", type: "single-choice", options: ["Less than 4 hours", "4-6 hours", "6-8 hours", "More than 8 hours"] },
      { question: "Do you have any known medical conditions? (Check all that apply)", type: "multi-choice", options: ["Diabetes", "Hypertension", "Heart Disease", "Asthma", "Arthritis", "None", "Other"] },
      { question: "Are you currently taking any medications?", type: "single-choice", options: ["Yes", "No", "Other"] },
      { question: "Do you have a history of surgeries?", type: "single-choice", options: ["Yes", "No", "Other"] },
    ]
  },
  {
    title: "Service Preferences",
    questions: [
      { question: "Which services are you interested in? (Check all that apply)", type: "multi-choice", options: ["Lower Back Pain management", "Neck and Shoulder Pain management", "Wrist and Ankle Pain management", "Knee and Hip Pain management", "Yoga Pain management", "Sedentary lifestyle management"] },
      { question: "What are your primary health and wellness goals? (Check all that apply)", type: "multi-choice", options: ["Pain Relief", "Weight loss", "Weight gain", "Improve fitness", "Improve Posture", "Increase flexibility", "Reduce stress", "Improve sleep", "Other"] },
    ]
  }
];

const initialState = sections.reduce((acc, section) => {
  acc[section.title] = {};
  section.questions.forEach((q) => {
    acc[section.title][q.question] = q.type === 'multi-choice' ? [] : '';
  });
  return acc;
}, {});

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ANSWER':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.question]: action.payload,
        },
      };
    default:
      return state;
  }
};

const ProgressBar = ({ progress }) => (
  <div className="w-full h-2 bg-gray-200 rounded">
    <div className="h-2 bg-blue-600 rounded" style={{ width: `${progress}%` }} />
  </div>
);

const Loader = () => (
  <div className="absolute top-[250px] h-full">
    <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"></div>
  </div>
);

const Assessment = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [formState, dispatch] = useReducer(formReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleAnswerChange = (section, question, answer, isMultiChoice) => {
    if (isMultiChoice) {
      const updatedAnswers = formState[section][question].includes(answer)
        ? formState[section][question].filter((a) => a !== answer)
        : [...formState[section][question], answer];
      dispatch({ type: 'SET_ANSWER', section, question, payload: updatedAnswers });
    } else {
      dispatch({ type: 'SET_ANSWER', section, question, payload: answer });
    }
  };

  const validateCurrentSection = () => {
    const currentSection = sections[currentSectionIndex];
    for (let question of currentSection.questions) {
      const answer = formState[currentSection.title][question.question];
      if (question.type === 'text' && !answer.trim()) {
        toast.error(`Please answer: ${question.question}`);
        return false;
      }
      
      if(question.type === 'text' && findWordInSentence(question.question,"Email")){
        const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
        if(!regex.test(answer)){
          toast.error(`Not a Valid mail`);
          return false;
        }
      }
      if(question.type === 'text' && findWordInSentence(question.question,"Age")){
        const regex = /^\d{2,3}$/;
        if(!regex.test(answer)){
          toast.error(`Not a Valid Age`);
          return false;
        }
      }
      if (question.type === 'single-choice' && !answer) {
        toast.error(`Please select an option for: ${question.question}`);
        return false;
      }
    }
    return true;
  };
  function findWordInSentence(sentence, word) {
    // Create a regex pattern using the word, with word boundaries
    const regex = new RegExp(`\\b${word}\\b`, 'i'); // 'i' for case-insensitive matching
    return regex.test(sentence);
}
  const handleNextSection = () => {
    if (!validateCurrentSection()) return;
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBackSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };
  function extractValues(obj) {
    const valuesArray = [];

    function iterate(subObj) {
        for (const key in subObj) {
            if (typeof subObj[key] === 'object' && !Array.isArray(subObj[key])) {
                iterate(subObj[key]);
            } else {
                const serializedEntry = JSON.stringify({ [key]: Array.isArray(subObj[key]) ? subObj[key] : [subObj[key]] });
                valuesArray.push(serializedEntry);
            }
        }
    }

    iterate(obj);

    // Convert the array of strings to a single string in the desired format
    return valuesArray;
}



  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // console.log('formState', formState)
      const extractedValues = extractValues(formState);
      // console.log('first', extractedValues)
      const resp = await axios.post("https://paincurebackend.onrender.com/api/assessments", extractedValues);
      if (resp.status === 201) {
        toast.success("We'll reach out to you shortly :)");
        router.push('/', { scroll: false });
      } else {
        toast.error("There's some error :(");
      }
    } catch (error) {
      console.log('error', error)
      toast.error("There's some error :(");
    } finally {
      setIsLoading(false);
    }
  };

  const progress = ((currentSectionIndex + 1) / sections.length) * 100;

  return (
    <div className="p-5 flex justify-center items-center relative">
      {isLoading && <Loader />}
      <div className="flex flex-col items-center w-full max-w-3xl">
        <ProgressBar progress={progress} />

        <h2 className="text-2xl mt-10 mb-6">
          {sections[currentSectionIndex].title}
        </h2>

        <div className="w-full">
          {sections[currentSectionIndex].questions.map((question, index) => (
            <div key={index} className="mb-6">
              <p className="text-lg mb-2">{question.question}</p>
              {["multi-choice", "single-choice"].includes(question.type) ? (
                <div>
                  {question.options.map((option, idx) => (
                    <div key={idx} className="mb-2">
                      <label className="flex items-center">
                        <input
                          type={question.type === "single-choice" ? "radio" : "checkbox"}
                          name={question.question}
                          onChange={() =>
                            handleAnswerChange(sections[currentSectionIndex].title, question.question, option, question.type === "multi-choice")
                          }
                          checked={formState[sections[currentSectionIndex].title][question.question].includes(option)}
                          className="mr-2"
                        />
                        <span>{option}</span>
                      </label>
                    </div>
                  ))}
                  {question.options.includes("Other") && (
                    <input
                      type="text"
                      placeholder="Please specify"
                      value={formState[sections[currentSectionIndex].title][question.question]}
                      onChange={(e) => handleAnswerChange(sections[currentSectionIndex].title, question.question, e.target.value, false)}
                      className="mt-2 p-2 border border-gray-300 rounded"
                    />
                  )}
                </div>
              ) : (
                <input
                  type="text"
                  placeholder="Your answer"
                  value={formState[sections[currentSectionIndex].title][question.question]}
                  onChange={(e) => handleAnswerChange(sections[currentSectionIndex].title, question.question, e.target.value, false
                  )}
                  className="w-full p-2 border border-gray-300 rounded"
                  />
                  )}
                  </div>
                  ))}
                  </div>
                  <div className="flex justify-between w-full mt-6">
      <button
        onClick={handleBackSection}
        className={`px-4 py-2 bg-gray-300 rounded ${currentSectionIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={currentSectionIndex === 0}
      >
        Back
      </button>
      <button
        onClick={handleNextSection}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        {currentSectionIndex === sections.length - 1 ? "Submit" : "Next"}
      </button>
    </div>
  </div>
  </div>
  )
}

export default Assessment;
