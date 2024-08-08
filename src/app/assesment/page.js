"use client"
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
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
    type: "single-choice",
    options: ["Male", "Female", "Other"],
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
    type: "single-choice",
    options: [
      "Less than 2 hours",
      "2-4 hours",
      "4-6 hours",
      "6-8 hours",
      "More than 8 hours",
    ],
  },
  {
    question: "Do you engage in regular physical activity or exercise?",
    type: "single-choice",
    options: ["Yes", "No"],
  },
  {
    question: "If yes, how often do you exercise?",
    type: "single-choice",
    options: ["Daily", "3-5 times a week", "1-2 times a week", "Rarely", "NA"],
  },
  {
    question: "What type of physical activities do you participate in? (Check all that apply)",
    type: "multi-choice",
    options: [
      "Walking",
      "Running",
      "Yoga",
      "Gym",
      "Swimming",
      "Boxing/MMA",
      "Other",
    ],
  },
  {
    question: "On average, how many hours of sleep do you get each night?",
    type: "single-choice",
    options: [
      "Less than 4 hours",
      "4-6 hours",
      "6-8 hours",
      "More than 8 hours",
    ],
  },
  {
    question: "Do you have any known medical conditions? (Check all that apply)",
    type: "multi-choice",
    options: [
      "Diabetes",
      "Hypertension",
      "Heart Disease",
      "Asthma",
      "Arthritis",
      "None",
      "Other",
    ],
  },
  {
    question: "Are you currently taking any medications?",
    type: "single-choice",
    options: ["Yes", "No", "Other"],
  },
  {
    question: "Do you have a history of surgeries?",
    type: "single-choice",
    options: ["Yes", "No", "Other"],
  },
  {
    question: "Which services are you interested in? (Check all that apply)",
    type: "multi-choice",
    options: [
      "Lower Back Pain management",
      "Neck and Shoulder Pain management",
      "Wrist and Ankle Pain management",
      "Knee and Hip Pain management",
      "Yoga Pain management",
      "Sedentary lifestyle management",
    ],
  },
  {
    question: "What are your primary health and wellness goals? (Check all that apply)",
    type: "multi-choice",
    options: [
      "Pain Relief",
      "Weight loss",
      "Weight gain",
      "Improve fitness",
      "Improve Posture",
      "Increase flexibility",
      "Reduce stress",
      "Improve sleep",
      "Other",
    ],
  },
];

const ProgressBar = ({ progress }) => {
  return (
    <div
      style={{
        width: "100%",
        height: "10px",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: "#5ba1f9",
          height: "10px",
          borderRadius: "5px",
        }}
      />
    </div>
  );
};

const Loader = () => {
  return (
    <div className="absolute top-[250px] h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-blue-900"></div>
    </div>
  );
};

const Assessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [otherAnswer, setOtherAnswer] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const totalQuestions = questions.length;

  const submit = async()=>{
    try{
      let finaldata=[]
      let i=0;
      for(let key of Object.keys(userAnswers)){
        finaldata.push({
          [questions[i].question] : key
        })
        i+=1;
      }
      setIsLoading(true)
      const resp = await axios.post("https://paincurebackend.onrender.com/assesment",finaldata);
      if(resp && resp.status == 200){
        setIsLoading(false);
        toast.success("We'll reach out to you shortly :)")
      }
    }catch(e){
      console.log('first', first)
      toast.error("There's some error :(")
      setIsLoading(false);
    }
  }

  const handleAnswerChange = (option, isMultipleChoice) => {
    const currentAnswers = userAnswers[currentQuestionIndex] || [];
    
    if (isMultipleChoice) {
      if (currentAnswers.includes(option)) {
        const updatedAnswers = currentAnswers.filter((answer) => answer !== option);
        setUserAnswers((prevAnswers) => {
          const newAnswers = [...prevAnswers];
          newAnswers[currentQuestionIndex] = updatedAnswers;
          return newAnswers;
        });
      } else {
        setUserAnswers((prevAnswers) => {
          const newAnswers = [...prevAnswers];
          newAnswers[currentQuestionIndex] = [...currentAnswers, option];
          return newAnswers;
        });
      }
    } else {
      setUserAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentQuestionIndex] = [option];
        return newAnswers;
      });
    }
  };

  const handleTextAnswer = (value) => {
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = [value];
      return newAnswers;
    });
    setOtherAnswer(value);
  };

  const handleNextQuestion = () => {
    const currentQuestion = questions[currentQuestionIndex];

    if (currentQuestion.type === "text" && !otherAnswer.trim()) {
      toast.error("Field required.");
      return;
    }

    if (
      (currentQuestion.type === "multi-choice" || currentQuestion.type === "single-choice") &&
      !userAnswers[currentQuestionIndex]?.length &&
      otherAnswer.trim() === ""
    ) {
      toast.error("Field required.");
      return;
    }

    if (currentQuestion.options && otherAnswer.trim()) {
      const updatedAnswers = [...userAnswers];
      if (currentQuestion.type === "multi-choice") {
        updatedAnswers[currentQuestionIndex].push(`Other: ${otherAnswer}`);
      } else {
        updatedAnswers[currentQuestionIndex] = [`Other: ${otherAnswer}`];
      }
      setUserAnswers(updatedAnswers);
      setOtherAnswer("");
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setOtherAnswer("");
    } else {
      submit();
    }
  };

  const handleBackQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  
  return (
    <>
    <div className={`p-[20px] flex justify-center items-center `}>
    {isLoading && <Loader />}
      
      <div className="flex flex-col items-center min-w-full justify-center">
        <ProgressBar progress={progress} />

        <h2 className="lg:text-3xl mb:text-xl p-2 mt-12">
          {questions[currentQuestionIndex].question}
        </h2>

        <div className="flex flex-col justify-center items-center">
          {["multi-choice", "single-choice"].includes(questions[currentQuestionIndex].type) ? (
            <div>
              {questions[currentQuestionIndex].options.map((option, index) => (
                <div key={index} style={{ margin: "5px" }}>
                  <label>
                    <input
                      type={
                        questions[currentQuestionIndex].type === "single-choice"
                          ? "radio"
                          : "checkbox"
                      }
                      name={`question-${currentQuestionIndex}`}
                      onChange={() =>
                        handleAnswerChange(option, questions[currentQuestionIndex].type === "multi-choice")
                      }
                      checked={userAnswers[currentQuestionIndex]?.includes(option) || false}
                    />
                    {option}
                  </label>
                </div>
              ))}
              {questions[currentQuestionIndex].options.includes("Other") && (
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherAnswer}
                  onChange={(e) => handleTextAnswer(e.target.value)}
                  className='outline-none'
                  style={{ margin: "5px" }}
                />
              )}
            </div>
          ) : (
            <input
              type="text"
              placeholder="Enter your answer"
              value={otherAnswer}
              onChange={(e) => handleTextAnswer(e.target.value)}
              className="mx-2 border-b-2 border-black p-2 my-3 outline-none"
            />
          )}
          <div>
            <button
              onClick={handleBackQuestion}
              className="my-8 border-2 border-black py-2 px-3 rounded-2xl mx-2 font-bold hover:bg-blue-500 hover:text-white"
            >
              Back
            </button>
            <button
              onClick={handleNextQuestion}
              className="my-8 border-2 border-black py-2 px-3 rounded-2xl font-bold hover:bg-blue-500 hover:text-white"
            >
              {currentQuestionIndex === totalQuestions - 1 ? "Submit" : "Next"}
    
            </button>
          </div>
        </div>
      </div>
      
    </div>
    </>
  );
};
  
  export default Assessment;

