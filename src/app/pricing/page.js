"use client"
import { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Modal } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';
import { FaWhatsapp } from 'react-icons/fa';
export default function Pricing() {
  const [isCompany, setIsCompany] = useState(false);
  const [isyearly, setIsyearly] = useState(false);
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData,setFormData] = useState({
    name:'',
    phone:'',
    service:''
  })
  const [category, setCategory] = useState("select Category");
  const categories = [
    'Neck pain',
    'Wrist pain',
    'Lower back pain',
    'Knee Pain',
    'Sedentary lifestyle'
  ];
  const setChange = (e) => {
    const { id, value } = e.target;
    console.log('e', e)
    if(id == "phone"){
      setShowicon(false)
    }else if(formData.phone==""){
      setShowicon(true)
    }
    setFormData((prev) => ({
      ...prev,
      [id]: value
    })
    );
  };
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };
  const submit = (e)=>{
    e.preventDefault();
    if(!checked){
      toast.error("Please accpet Privacy Policy");
      return;
    }
  
    if(formData.name == ''){
      toast.error("name is required");
      return;
    }
    if(formData.phone == ''){
      toast.error("phone is required")
      return;
    }
    if(formData.service == ''){
      toast.error("category is required")
      return;
    }
    else{
      setLoading(true)
      setShow(false)
      fetch(`${apiUrl}/api/users/whatsapp`,{method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)})
              .then(response => response.json())
              .then(data => {
                setLoading(false)
                console.log(data)
                if(data && data.length){
                  toast.success("we'll get back to you shortly. :-)")
                  setFormData({
                    name:'',
                    phone:'',
                    service:''
                  })
                }
              })
              .catch(error => {
                console.error('Error fetching blog data:', error);
                toast.error("Hold on, we've got a problem. :-(")
                setLoading(false)
          }); 
    }
  }
  const handleToggle = () => {
    setIsCompany(!isCompany);
  };
  const handleYearly = () => {
    setIsyearly(!isyearly);
  };
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });
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

      
      const features = [
        { title: "Features", value: "With Paincure.ai", isMainTitle: true,noValue: "Without Paincure.ai" },
        { title: "Health Risk Assessment", value: "✓", noValue:'✗' },
        { title: "Pain-Specific Content Library and Pre-Recorded Workout Routine", value: "✓", noValue:'✗' },
        { title: "Avoiding the Need for Chiropractic", value: "✓", noValue:'✗' },
        { title: "One-to-One Session with a Healthcare Expert", value: "✓",noValue:'✗' },
        { title: "Ergonomic Setup Audit and Assessment", value: "✓",noValue: "✗" },
        { title: "Employee Physical Health Risk Assessment Report", value: "✓", noValue: '✗' },
        { title: "Monthly General Health and Safety Webinars", value: "✓", noValue: '✗' },
        { title: "Comprehensive Health Risk Assessment", value: "✓", noValue: '✗' },
        { title: "Extensive Pain-Specific Content Library and Pre-Recorded Workout Routine", value: "✓",noValue: '✗' },
        { title: "Personalized One-to-One Sessions with Healthcare Experts", value: "✓",noValue:"✗" },
      ];
      const firstFeature = features[0];
      const restFeatures = features.slice(1);
   
     
 
      

      
  return (
    <div className=" lg:mx-[100px] mt-10 lg:p-5 rounded-3xl ">
      <Container className="mb:mx-0 lg:mb-20">
        <h2 className="text-center mb-8 text-4xl font-bold text-gray-800 lg:w-auto mb:w-[350px]">Solutions </h2>
        <h3 className="text-center mb-8 text-2xl font-bold text-gray-800 lg:w-auto mb:w-[350px]">Start your Free Trial Now <br></br> Shaping healthcare and pain management with paincure.Ai </h3>   
{/*         
        <div className="flex items-center justify-center mb-5 lg:w-auto mb:w-[350px]">
          <span className={`mr-2 ${!isCompany ? 'font-bold' : ''}`}>Individual</span>
          <label className="switch ">
            <input type="checkbox" checked={isCompany} onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span className={`ml-2 ${isCompany ? 'font-bold' : ''}`}>Company</span>
        </div> */}




 

  <div className="flex items-center justify-around mb:mb-3">
    
<div className=" p-8 bg-white rounded w-[500px] min-h-[300px] border-2 border-blue-500">

  <form className="space-y-4">
    <div className="lg:flex lg:items-center lg:space-x-4 ">
     <div className='w-full'>

   
      <input
        type="text"
        id='name'
        placeholder="Full Name"
        value={formData.name}
        className="w-full p-2 border border-gray-300 rounded focus:outline-none  mb:mb-2"
        onChange={setChange}
      />
       <div className="relative mb-2"> {/* Wrapper for relative positioning */}
      { <FaWhatsapp className="absolute inset-y-0 left-3 my-auto text-green-500" size={24} />}
      <input
          type="text"
          placeholder="        WhatsApp Preferred" // Use a simple string for the placeholder
          id="phone"
          onChange={setChange}
          value={formData.phone}
          className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none" // Add padding to the left to avoid overlap with the icon
      />
  </div>
      <div className="relative w-full">
<div
  className="p-2 border border-gray-300 rounded focus:outline-none  cursor-pointer"
  onClick={toggleDropdown} // Show/hide dropdown on click
>
  {category}
</div>
{isOpen && ( // Only render the dropdown if isOpen is true
  <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
    {categories.map((item) => (
      <li
        key={item}
        id={item}
        className="p-2 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white cursor-pointer"
        onClick={() => handleOptionClick(item)} // Handle option click
      >
        {item}
      </li>
    ))}
  </ul>
)}
</div>
    </div>
    </div>
    <div className="flex items-center">
      <input type="checkbox" id="terms" className="w-4 h-4 border-gray-300 rounded" value={checked} onClick={()=>{setChecked(!checked)}}/>
      <label htmlFor="terms" className="ml-2 text-gray-700">I have read and agree to paincure.Ai's <a href="/terms-condition" className="text-blue-500">Terms of Use</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>.</label>
    </div>
    <button type="submit" className="w-full py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded hover:bg-white hover:font-bold" onClick={submit}>Book a Free Demo</button>
  </form>
</div>
</div>



{/* <div className="lg:flex lg:justify-center lg:w-auto">


        <Row className="flex items-center justify-center mb-10 mb:w-[350px] mb:mx-0 lg:w-[700px] ">
          <Col xs={12} md={10} lg={8}>
            <Card className="lg:p-3 shadow-lg rounded-lg mb:mx-0 border-red-500 border-2">
              <Card.Body>
                <Table responsive className="w-full text-center table-auto">
                  <thead className="lg:text-2xl font-bold">Without paincure.Ai <br></br> <p className="text-xl">{isCompany ? '£5599-£6879':'£1599-£4779'}</p> </thead>
                  <tbody>
                    {without.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50 flex justify-between items-center lg:p-4 mb:mr-0">
                        <td className="flex items-center lg:w-[300px] mb:mr-0"> */}
                          {/* <img src={item.icon} alt={item.title} className="w-10 h-10 mr-2" />
                          <BsXCircle className="lg:w-10 lg:h-12 mr-2 mb:w-5 mb:h-12" color="red"/>
                          <div> */}
                            {/* <div className=" text-wrap font-bold lg:text-lg mb:text-sm w-[250px]">{item.title}</div> */}
                            {/* <div className="lg:text-sm mb:text-xs text-gray-500">{item.description}</div> */}
                          {/* </div>
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
                <thead className="lg:text-2xl font-bold">With paincure.Ai <br></br><p className="text-xl">£{isCompany ? (isyearly ? '399/yr': '50/mo') : (isyearly ? "249/yr":'35/mo')}</p></thead>
                  <tbody>
                    {pricingData.map((item, index) => (
                      <tr key={index} className="bg-white even:bg-gray-50 flex justify-between items-center lg:p-4 ">
                        <td className="flex items-center lg:w-[300px] mb:mr-0 "> */}
                          {/* <img src={item.icon} alt={item.title} className="w-10 h-10 mr-4" /> */}
                          {/* <BsCheck2Circle className="lg:w-10 lg:h-12 mr-2 mb:w-5 mb:h-12" color="green"/>
                          <div> */}
                            {/* <div className="font-bold lg:text-lg mb:text-sm w-[250px] mb:min-h-[30px]">{item.title}</div> */}
                            {/* <div className="lg:text-sm mb:text-xs text-gray-500">{item.description}</div> */}
                          {/* </div>
                        </td> */}
                        {/* <td className="font-bold text-lg text-right">{item.price}</td> */}
                      {/* </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

</div> */}
        {/* <div className="lg:flex lg:justify-center lg:w-auto"> */}

    {/* </div> */}
      </Container>

 
  
   

    
      <Container className="mb-5 bg-gradient-to-r from-blue-500 to-blue-400 text-white p-5">
      {isLargeScreen ? (
        <>
          {features.map((feature, index) => (
            <Row key={index} className="border-b border-white-600 py-4">
              <Col md={6}>
                <h4 className="text-2xl">{feature.title}</h4>
              </Col>
              <Col md={3} className="text-center border-l border-white-600">
                <span className='text-2xl'>{feature.value}</span>
              </Col>
              <Col md={3} className="text-center border-l border-white-600">
                <span className='text-2xl'>{feature.noValue}</span>
              </Col>
            </Row>
          ))}
        </>
      ) : (
        <div style={{  padding: '3px', borderRadius: '8px' }}>
        <h3 className="text-center text-3xl mb-2" style={{ color: '#ffffff' }}>Features</h3>
        <ul className="list-unstyled">
          {restFeatures.map((feature, index) => (
            <li key={index} className="d-flex justify-content-between align-items-center py-2 border-bottom border-gray-600">
              <span style={{ color: '#ffffff' }}>{feature.title}</span>
              <span className='text-2xl'>{feature.value}</span>
            </li>
          ))}
        </ul>
      </div>
    
      )}
    </Container>


      <div className=" lg:w-auto flex flex-col items-center">

      {/* <Row className="flex items-center justify-center mb-3 lg:w-[700px] mb:w-[350px]">
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
      </Row> */}
  
      {/* <Row className="flex items-center justify-center mb-10 lg:w-[700px] mb:w-[350px]">
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
      </button> */}
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
