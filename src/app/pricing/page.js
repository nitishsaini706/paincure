"use client"
import { useState } from "react";
import { Container, Row, Col, Card, Table } from "react-bootstrap";

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
          icon: "/path/to/in-clinic-icon.png",
          title: "IN-CLINIC PT",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$500+" : "$300+",
        },
        {
          icon: "/path/to/pain-meds-icon.png",
          title: "PAIN MEDS",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$300+" : "$200",
        },
        {
          icon: "/path/to/chiropractic-icon.png",
          title: "CHIROPRACTIC",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$600+" : "$350",
        },
        {
          icon: "/path/to/surgery-icon.png",
          title: "Surgery",
          description: "$6,000 - 70,000 Per Surgery",
          price: isyearly ? "$6,000+" :"$4500",
        },
      ]
    : [
        {
          icon: "/path/to/in-clinic-icon.png",
          title: "IN-CLINIC PT",
          description: "Co-Pays For One Month Of Sessions",
          price: isyearly ? "$360+" :"$220+",
        },
        {
          icon: "/path/to/pain-meds-icon.png",
          title: "PAIN MEDS",
          description: "MD Visit And One Month Of Meds",
          price: isyearly ? "$150+" : "$35+",
        },
        {
          icon: "/path/to/chiropractic-icon.png",
          title: "CHIROPRACTIC",
          description: "X-Rays And One Month Of Sessions",
          price: isyearly ? "$440+" :"$250+",
        },
        {
          icon: "/path/to/surgery-icon.png",
          title: "Surgery",
          description: "$4,000 - 50,000 Per Surgery",
          price: isyearly ? "$4,000+" :"$2300+",
        },
      ];

  return (
    <div className=" lg:mx-auto mt-10 lg:p-5 rounded-3xl ">
      <Container className="mb:mx-0">
        <h2 className="text-center mb-5 text-4xl font-bold text-gray-800">Pricing</h2>
        
        <div className="flex items-center justify-center mb-5">
          <span className={`mr-2 ${!isCompany ? 'font-bold' : ''}`}>Individual</span>
          <label className="switch ">
            <input type="checkbox" checked={isCompany} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span className={`ml-2 ${isCompany ? 'font-bold' : ''}`}>Company</span>
        </div>

        <Row className="flex items-center justify-center mb-10 mb:w-[400px] mb:mx-0">
          <Col xs={12} md={10} lg={8}>
            <Card className="lg:p-6 shadow-lg rounded-lg mb:mx-0 ">
              <Card.Body>
                <Table responsive className="w-full text-left table-auto">
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50 flex justify-between items-center lg:p-4">
                        <td className="flex items-center">
                          <img src={item.icon} alt={item.title} className="w-10 h-10 mr-4" />
                          <div>
                            <div className="font-bold lg:text-lg mb:text-sm">{item.title}</div>
                            <div className="lg:text-sm mb:text-xs text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="font-bold text-lg text-right">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="flex items-center justify-center mb-1">
        <Col xs={12} md={10} lg={8}>
          <div className={`p-6 shadow-lg rounded-lg ${isyearly ? 'bg-blue-500 text-white' : 'bg-gray-100 text-black'} flex justify-between items-center`}>
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

      <Row className="flex items-center justify-center mb-10">
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

      </Container>
      
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
