"use client"
import { useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";
import { BsCheck2Circle,BsXCircle   } from "react-icons/bs";

export default function Pricing() {
  const [isCompany, setIsCompany] = useState(false);
  const [isyearly, setIsyearly] = useState(false);

  const handleToggle = () => {
    setIsCompany(!isCompany);
  };
  const handleYearly = () => {
    setIsyearly(!isyearly);
  };

  const pricingData = isCompany
    ? [
        {
          icon: "/neckpain.png",
          title: "Ergonomic setup audit and assessment",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$500+" : "$300+",
        },
        {
          icon: "/kneepain.png",
          title: "Employee health data and report management ",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$300+" : "$200",
        },
        {
          icon: "/backpain.png",
          title: "Employee physical health risk assessment report",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$600+" : "$350",
        },
        {
          icon: "/handpain.png",
          title: "Monthly general health and safety webinar",
          description: "$6,000 - 70,000 Per Surgery",
          price: isyearly ? "$6,000+" :"$4500",
        },
      ]
    : [
        {
          icon: "/neckpain.png",
          title: "Health Risk assessment",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$360+" :"$220+",
        },
        {
          icon: "/kneepain.png",
          title: "Pain-specific content library and pre-record workout routine",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$150+" : "$35+",
        },
        {
          icon: "/backpain.png",
          title: "Avoiding the need of Chiropractic ",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$440+" :"$250+",
        },
        {
          icon: "/handpain.png",
          title: "One to one session with a healthcare expert",
          description: "$4,000 - 50,000 Per Surgery",
          price: isyearly ? "$4,000+" :"$2300+",
        },
      ];
  const without = isCompany
    ? [
        {
          icon: "/neckpain.png",
          title: "Cost of up to 6 months of paid leave due to physical pain £6836 ($8700 Approx)",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$500+" : "$300+",
        },
        {
          icon: "/kneepain.png",
          title: "Avg. Productivity loss in the UK and EU 17 Days per year",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$300+" : "$200",
        },
        {
          icon: "/backpain.png",
          title: "New Hiring and training Cost",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$600+" : "$350",
        },
        {
          icon: "/backpain.png",
          title: "Cost of external medical expertes hire",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$600+" : "$350",
        },
      ]
    : [
        {
          icon: "/neckpain.png",
          title: "In-clinic PT Session £280 (4 session avg requirement)",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$360+" :"$220+",
        },
        {
          icon: "/kneepain.png",
          title: "Pain med £199 (single visit)",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$150+" : "$35+",
        },
        {
          icon: "/backpain.png",
          title: "Chiropractic (X-ray and one-month session £499 (plus approx)",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$440+" :"$250+",
        },
        {
          icon: "/handpain.png",
          title: "Private surgery £3599 plus avg",
          description: "$4,000 - 50,000 Per Surgery",
          price: isyearly ? "$4,000+" :"$2300+",
        },
        
      ];

  return (
    <div className=" lg:mx-auto mt-10 lg:p-5 rounded-3xl ">
      <Container className="mb:mx-0 lg:mb-20">
        <h2 className="text-center mb-8 text-4xl font-bold text-gray-800 lg:w-auto mb:w-[350px]">Pricing </h2>
        <h3 className="text-center mb-8 text-2xl font-bold text-gray-800 lg:w-auto mb:w-[350px]">Start your Free Trial Now <br></br> Shaping healthcare and pain management with PainCure.AI </h3>   
        
        <div className="flex items-center justify-center mb-5 lg:w-auto mb:w-[350px]">
          <span className={`mr-2 ${!isCompany ? 'font-bold' : ''}`}>Individual</span>
          <label className="switch ">
            <input type="checkbox" checked={isCompany} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span className={`ml-2 ${isCompany ? 'font-bold' : ''}`}>Company</span>
        </div>

<div className="lg:flex lg:justify-center lg:w-auto">


        <Row className="flex items-center justify-center mb-10 mb:w-[350px] mb:mx-0 lg:w-[700px] ">
          <Col xs={12} md={10} lg={8}>
            <Card className="lg:p-3 shadow-lg rounded-lg mb:mx-0 border-red-500 border-2">
              <Card.Body>
                <Table responsive className="w-full text-center table-auto">
                  <thead className="lg:text-2xl font-bold">Without PainCure.AI <br></br> <p className="text-xl">{isCompany ? '£5599-£6879':'£1599-£4779'}</p> </thead>
                  <tbody>
                    {without.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50 flex justify-between items-center lg:p-4 mb:mr-0">
                        <td className="flex items-center lg:w-[300px] mb:mr-0">
                          {/* <img src={item.icon} alt={item.title} className="w-10 h-10 mr-2" /> */}
                          <BsXCircle className="lg:w-10 lg:h-12 mr-2 mb:w-5 mb:h-12" color="red"/>
                          <div>
                            <div className=" text-wrap font-bold lg:text-lg mb:text-sm w-[250px]">{item.title}</div>
                            {/* <div className="lg:text-sm mb:text-xs text-gray-500">{item.description}</div> */}
                          </div>
                        </td>
                        
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="flex items-center justify-center mb-10 mb:w-[350px] mb:mx-0 lg:w-[700px]">
          <Col xs={12} md={10} lg={8}>
            <Card className="lg:p-3 shadow-lg rounded-lg mb:mx-0 border-green-700 border-2">
              <Card.Body>
                <Table responsive className="w-full text-center table-auto">
                <thead className="lg:text-2xl font-bold">With PainCure.AI <br></br><p className="text-xl">£{isCompany ? (isyearly ? '399/yr': '50/mo') : (isyearly ? "249/yr":'35/mo')}</p></thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50 flex justify-between items-center lg:p-4 ">
                        <td className="flex items-center lg:w-[300px] mb:mr-0 ">
                          {/* <img src={item.icon} alt={item.title} className="w-10 h-10 mr-4" /> */}
                          <BsCheck2Circle className="lg:w-10 lg:h-12 mr-2 mb:w-5 mb:h-12" color="green"/>
                          <div>
                            <div className="font-bold lg:text-lg mb:text-sm w-[250px] mb:min-h-[30px]">{item.title}</div>
                            {/* <div className="lg:text-sm mb:text-xs text-gray-500">{item.description}</div> */}
                          </div>
                        </td>
                        {/* <td className="font-bold text-lg text-right">{item.price}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

</div>
       

      </Container>

      <div className=" lg:w-auto flex flex-col items-center">

      <Row className="flex items-center justify-center mb-3 lg:w-[700px] mb:w-[350px]">
        <Col xs={12} md={10} lg={8}>
          <div className={`p-6 shadow-lg rounded-lg ${isyearly ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} flex justify-between items-center`}>
            <div>
              <div className="font-bold lg:text-2xl">YEARLY ACCESS</div>
              <div className="lg:text-lg">{isCompany ? '399/yr' : '249/yr'}</div>
            </div>
            {isyearly && (
              <div className="bg-yellow-400 text-black font-bold rounded-full py-2 mb:px-2 lg:px-4 mb:text-xs">Save Almost 40%</div>
            )}
          </div>
        </Col>
      </Row>

      <Row className="flex items-center justify-center mb-10 lg:w-[700px] mb:w-[350px]">
        <Col xs={12} md={10} lg={8}>
          <div className={`p-6 shadow-lg rounded-lg ${!isyearly ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'} flex justify-between items-center`}>
            <div>
              <div className="font-bold lg:text-2xl">MONTHLY ACCESS</div>
              <div className="lg:text-lg">{isCompany ? '50/mo' : '35/mo'}</div>
            </div>
            {!isyearly && (
              <div className="bg-yellow-400 text-black font-bold rounded-full py-2 mb:px-2 lg:px-4 mb:text-xs">Save Almost 60%</div>
            )}
          </div>
        </Col>
      </Row>
      <button onClick={handleYearly} className="block mx-auto bg-blue-500 text-white rounded-lg py-2 px-4 my-4">
        {isyearly ? 'Switch to Monthly' : 'Switch to Yearly'}
      </button>
      </div>
      {/* Add some custom styles for the toggle switch */}
      <style jsx>{`
        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 34px;
        }
        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }
        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 34px;
        }
        .slider:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
          border-radius: 50%;
        }
        input:checked + .slider {
          background-color: #66b2b2;
        }
        input:checked + .slider:before {
          transform: translateX(26px);
        }
      `}</style>
    </div>
  );
}
