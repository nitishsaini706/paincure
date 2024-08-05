"use client"
import { useState } from "react";

const ProgramSection = ({ mainHeading, sections }) => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <h1 className="text-3xl font-bold m-5">{mainHeading}</h1>
      <div className="w-full max-w-4xl mx-auto space-y-6 ">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md border ${expanded === index ? `border-${section.borderColor}-500` : "border-gray-300"}`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <div className="flex items-center space-x-4">
                <div className={`text-${section.borderColor}-500 font-bold text-2xl bg-${section.borderColor}-100 p-2 rounded `}>
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-3xl font-semibold ">
                    {section.heading} <span className="text-2xl text-gray-500">{section.duration}</span>
                  </h2>
                  <p className="text-gray-500 text-sm">{section.subtitle}</p>
                </div>
              </div>
              <div>
                {expanded === index ? (
                  <svg
                    className={`w-6 h-6 text-${section.borderColor}-500`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className={`w-6 h-6 text-${section.borderColor}-500`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
            {expanded === index && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="bg-gray-50 p-4 rounded-md shadow-sm ">
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgramSection;
