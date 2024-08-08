"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
// Sample questions data
const questions = [
  {
    question: "What is your Full Name?",
    type: "text",
  },
  {
    question: "What is your Email address?",
    type: "text",
  },
  {
      question: "What is your Age?",
      type: "text",
    },
    {
        question: "What is your Gender?",
        type: "multiple-choice",
        options:["Male","Female","Other"]
    },
    {
      question: "Company Name:",
      type: "text",
    },
    {
      question: "Designation",
      type: "text",
    },
  {
    question: "How many hours do you spend sitting each day?",
    type: "multiple-choice",
    options:["Less than 2 hours","2-4 hours","4-6 hours", "6-8 hours", "More than 8 hours"]
  },
  {
    question: "Do you engage in regular physical activity or exercise?",
    type: "multiple-choice",
    options:["Yes","No"]
  },
  {
    question: "If yes, how often do you exercise?",
    type: "multiple-choice",
    options:["Daily","3-5 times a week","1-2 times a week","Rarely","NA"]
  },
  {
    question: "What type of physical activities do you participate in? (Check all that apply)",
    type: "multiple-choice",
    options:["Walking","Running","Yoga","Gym","Swimming","Boxing/MMA","Other"]
  },{
    question: "On average, how many hours of sleep do you get each night?",
    type: "multiple-choice",
    options:["Less than 4 hours","4-6 hours","6-8 hours", "More than 8 hours"]
  },
  {
    question: "Do you have any known medical conditions? (Check all that apply)",
    type: "multiple-choice",
    options:["Diabetes","Hyprtnsion","Haert Disease","Asthma","Arthritis","None","Other"]
  },
  {
    question: "Are you currently taking any medications?",
    type: "multiple-choice",
    options:["Yes","No","Other"]
  },
  {
    question: "Do you have a history of surgeries?",
    type: "multiple-choice",
    options:["Yes","No","Other"]
  },
  {
    question: "Which services are you interested in? (Check all that apply)",
    type: "multiple-choice",
    options:["Lower Back Pain management","Neck and Shoulder Pain management","Wrist and Ankle Pain management","Knee and Hip Pain management","Yoga Pain management","Sedentiary lifetyle management"]
  },
  {
    question: "What are your primary health and wellness goals? (Check all that apply)",
    type: "multiple-choice",
    options:["Pain Relief","Weight loss","Weight gain","Improve fitnes","Improve Posture","Increase flexibility","Reduce stress","Improve sleep","Other"]
  },
];

const ProgressBar = ({ progress }) => {
    return (
        <div style={{ width: '100%', height:"10px",backgroundColor: '#e0e0e0', borderRadius: '5px', marginBottom: '20px' }}>
          <div style={{ width: `${progress}%`, backgroundColor: '#5ba1f9', height: '10px', borderRadius: '5px' }} />
        </div>
      );
};

const Assessment = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [otherAnswer, setOtherAnswer] = useState("");
    const totalQuestions = questions.length;
  
    const handleMultipleChoiceAnswer = (option) => {
      const currentAnswers = userAnswers[currentQuestionIndex] || [];
      console.log('option', option,currentAnswers)

        if (currentAnswers.includes(option)) {

          const updatedAnswers = [...currentAnswers.filter((answer) => answer !== option)];

          setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = updatedAnswers; 
            return newAnswers;
          });

        } else {

          setUserAnswers((prevAnswers) => {
            const newAnswers = [...prevAnswers];
            newAnswers[currentQuestionIndex] = [...(currentAnswers), option]; 
            return newAnswers;
          });

        }
      };
    
      const handleTextAnswer = (value) => {
        console.log('value', value)
        setOtherAnswer(value)
      };
    
      const handleNextQuestion = async () => {
        // Handle empty text input for text questions
        console.log('userAnswers', userAnswers,otherAnswer,currentQuestionIndex, typeof userAnswers)

        if(questions[currentQuestionIndex].type === "text" && otherAnswer== "" ){
          toast.error("Please enter your answer before proceeding.");
          return;
        }
          
        
        if (questions[currentQuestionIndex].options && questions[currentQuestionIndex].options.includes("Other") && otherAnswer.trim() === "") {
          toast.error("Please specify your answer for 'Other' before proceeding.");
          return;
        }

        const updatedAnswers = [...userAnswers]; 
        updatedAnswers.push({ [currentQuestionIndex]: otherAnswer });
        setUserAnswers(updatedAnswers);
        console.log('first',  userAnswers,otherAnswer,currentQuestionIndex, typeof userAnswers)
        
       
    
        if (currentQuestionIndex < totalQuestions - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setOtherAnswer(""); 
        } else {
          alert(`Assessment completed! Your answers: ${JSON.stringify(userAnswers)}`);
        }
      };
    const handleBackQuestion = () => {
        if (currentQuestionIndex > 0) {
          setCurrentQuestionIndex(currentQuestionIndex - 1);
          setOtherAnswer(""); // Reset other answer if needed
        }
      };
    const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100; // Calculate progress
  
    return (
      <div className='p-[20px] flex justify-center items-center'>
        {console.log(currentQuestionIndex)}
        <div className='flex flex-col items-center min-w-full justify-center '>
        <ProgressBar progress={progress} />

        {currentQuestionIndex < 6 && <h2 className='lg:text-3xl mb:text-xl p-2'>Personal Information</h2>}
        {currentQuestionIndex >= 6 && currentQuestionIndex < 12 && <h2 className='lg:text-3xl mb:text-xl p-2'>Lifestyle Information</h2>}
        {currentQuestionIndex >= 12 && currentQuestionIndex < 15 && <h2 className='lg:text-3xl mb:text-xl p-2'>Medical History</h2>}
        {currentQuestionIndex >= 15 && <h2 className='lg:text-3xl mb:text-xl p-2'>Service Interest and Goals</h2>}
        <div className='flex flex-col justify-center items-center'>

        <h2 className='lg:text-3xl mb:text-xl p-2'>{questions[currentQuestionIndex].question}</h2>
        
        {questions[currentQuestionIndex].type === "multiple-choice" ? (
          <div>
            {questions[currentQuestionIndex].options && questions[currentQuestionIndex].options.map((option, index) => (
              <div key={index} style={{ margin: '5px' }}>
                <label>
                  <input
                    type="checkbox"
                    onChange={() => handleMultipleChoiceAnswer(option)}
                    checked={userAnswers[currentQuestionIndex]?.includes(option) || false}
                  />
                  {option}
                </label>
              </div>
            ))}
            {questions[currentQuestionIndex].options && questions[currentQuestionIndex].options.includes("Other") && (
              <input
                type="text"
                placeholder="Please specify"
                value={otherAnswer}
                onChange={(e) => handleTextAnswer(e.target.value)}
                style={{ margin: '5px' }}
              />
            )}
          </div>
        ) : (
          <input
            type="text"
            placeholder="Enter your answer"
            value={otherAnswer}
            onChange={(e) => handleTextAnswer(e.target.value)}
            className='mx-2 border-b-2 border-black p-2 my-3'
          />
        )}
         <div>
          <button onClick={handleBackQuestion} className='my-8 border-2 border-black py-2 px-3 rounded-2xl mx-2 font-bold hover:bg-blue-500 hover:text-white'>
            Back
          </button>
          <button onClick={handleNextQuestion} className='my-8 border-2 border-black py-2 px-3 rounded-2xl font-bold hover:bg-blue-500 hover:text-white'>
          {currentQuestionIndex == 15 ? "Submit" :"Next"}
          </button>
          
        </div>
        

      </div>
        </div>
      </div>
    );
  };
  
  export default Assessment;

