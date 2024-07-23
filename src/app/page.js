"use client"
import Image from 'next/image';
import { Container, Row, Col, Card,Accordion ,Carousel ,Button } from 'react-bootstrap';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
export default function Home() {

const testimonials = [
  {
    name: "Aditya Jain",
    age: 32,
    condition: "Depression",
    testimonial: "I was struggling with depression and it was affecting my career. When my friend told me about this technology, I was skeptical that a device would solve my problem. But NIBS has given me my life back.",
    image: "/testimonial1.png"
  },
  {
    name: "Chetna Bhuyan",
    age: 29,
    condition: "Post Partum Depression",
    testimonial: "I didn’t want to take antidepressants, so my doctor told me about NIBS. I noticed a significant improvement in my overall mood, energy, and symptoms after just 4-5 sessions with NIBS.",
    image: "/testimonial1.png"
  },
  {
    name: "Shreyasi Gupta",
    age: 38,
    condition: "Depression",
    testimonial: "My biggest problem was that medicines were causing lifestyle problems and I was losing my productivity at work. NIBS helped me improve without side effects, I am really thankful to their team.",
    image: "/testimonial1.png"
  },
  {
    name: "Biswa Chakraborty",
    age: 39,
    condition: "Depression & Anxiety",
    testimonial: "At first, talk therapy was helpful, but I soon stopped getting better. Then, my psychologist told me about Mave Health. Their team made a special program for me with NIBS, and it’s made my life much better.",
    image: "/testimonial1.png"
  },
  {
    name: "Dheeraj Kumar",
    age: 45,
    condition: "Depression",
    testimonial: "I visited my psychologist because of constant brain fog and I didn’t realize that it was depression. NIBS helped me improve my life.",
    image: "/testimonial1.png"
  },
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
  const { width } = useWindowSize();
  const [chunks, setChunks] = useState([]);

  useEffect(() => {
    const chunkSize = width < 768 ? 1 : 4;
    setChunks(chunkArray(testimonials, chunkSize));
  }, [width]);
  return (
    
    <div className=" container mt-2 rounded-3xl ">
      <Header bg="black" color="white"/>
       <section  className=" pb-16 " style={{ backgroundColor: '#3D4966',borderRadius: "0 0 30px 30px" }}>
      <Container className=' lg:ml-5 py-13 md:ml-2'>
        <Row className="align-items-center ">
          <Col md={6} className='md:mb-2 sm:mb-2'>
            <h1 className="text-white mb-3 lg:w-[682px] lg:h-[168px] font-dm-sans font-bold lg:text-[68px] lg:leading-[130%] tracking-[-0.02em] mb:text-[30px]">Banish Workplace ,
            Pain with Paincure.ai</h1>
            <p className='	text-white mb-3 md:text-md sm:text-sm'> 
              Introducing Paincure.ai, the innovative solution that harnesses AI and expert healthcare to tackle workplace physical discomfort, empowering you to perform at your best.
            </p>
            <div className='d-flex justify-start items-center lg:w-[544px] lg:h-[64px] lg:gap-[40px] md:gap-[20px]  md:w-[200px] '>
              <Button  className="me-2 border-0 text-black rounded-2xl bg-white lg:w-[162px] md:w-[60px]">Sign Up</Button>
              <Button className="me-2 border-1 border-white rounded-2xl text-white lg:w-[162px] bg-[#3D4966] md:w-[60px]">Learn More</Button>
            </div>
          </Col>
          <Col md={6} >
            <Image src="/image1.png" alt="Paincure AI" className="img-fluid rounded-2xl lg:w-[464px] lg:ml-16 md:ml-2 md:w-[200px] mt-8 " width={460} height={10} />
          </Col>
        </Row>
      </Container>
    </section>
       <section id="info" className="py-5">
       <Container className="text-center my-5 border-1  p-3">
      <h1 className='lg:text-3xl mb-2 font-bold mb:text-2xl'>Experience the Future of Pain Management</h1>
      <p className='mb:text-sm'>At Paincure.ai, we harness state-of-the-art AI technology, including Mediapipe and OpenCV, to analyze body posture and detect pain symptoms.</p>
      <Row className="mt-[50px]">
        <Col md={4}>
          <Card className='lg:h-[80px]  mb:mb-3'>
            <Card.Body>
              <Card.Title>Boost productivity</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Decrease absenteeism</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Early Risk Prevention</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Reduce Sick Leave Costs</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Weight Control</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3'>
            <Card.Body>
              <Card.Title>One to One Sessions</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
    <section id="book" className="py-2">
      <Container>
      <div className="flex items-center justify-center  bg-gray-100 border-2 border-gray-400">
      <div className="w-full p-8 bg-white rounded ">
        <h2 className="mb-6 text-2xl font-bold text-center text-[#3D4966]">Book a FREE Consulting</h2>
        <form className="space-y-4">
          <div className="lg:flex lg:items-center lg:space-x-4 ">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500 mb:mb-2"
            />
            <div className="relative w-full mb:mb-2">
              <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500 ">
                <option value="+91">+91</option>
                {/* Add more country codes here */}
              </select>
              <input
                type="text"
                placeholder="WhatsApp Preferred"
                className="absolute inset-y-0 left-0 w-full pl-20 p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500"
              />
            </div>
            <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-purple-500">
              <option>Select Category</option>
              {/* Add more categories here */}
            </select>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="w-4 h-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"/>
            <label htmlFor="terms" className="ml-2 text-gray-700">I have read and agree to PainCure.AI's <a href="#" className="text-blue-500">Terms of Use</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.</label>
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-white bg-[#3D4966] rounded hover:bg-[#2b3449] focus:outline-none">Book a Free Demo</button>
        </form>
      </div>
    </div>
      </Container>
    </section>
       <section id="features" className="py-5">
       <h1 className='lg:text-3xl font-bold mb:text-2xl text-center'>Pain Relief services</h1>
      <Container className='mt-10'>
        <Row>
          <Col md={4}>
            <Card >
            <Image src='/backpain.png' alt="Back Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Back Pain</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <Image src='/neckpain.png' alt="Neck Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Neck Pain</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className=''>
            <Card>
            <Image src='/handpain.png' alt="Hand Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Wrist and Hand Pain</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4}>
            <Card>
            <Image src='/kneepain.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Knee and Hip Pain</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <Image src='/yoga.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Yoga</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
            <Image src='/weight.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Weight Loss & Gain Workout</Card.Title>
                <Card.Text>Repetitive strain injuries in the wrists and hands can significantly impact an employee's ability to perform their job duties.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
    <Container className="py-5">
      <h1 className="text-center text-3xl mb-5 font-bold ">How it works?</h1>
      <Row className="align-items-center">
        <Col md={6}>
          <Image src="/work.png" className='mb-6' width={700} height={700} />
        </Col>
        <Col md={6} className="text-center">
          <div className="steps">
            <div className="step mb-4">
              <Card className="mb-3">
                <Card.Body>
                  <h3 className='mb-3 font-bold '> Access</h3>
                  <p>Tell us about your pain. Share your symptoms, and our AI will analyze them to understand your condition better.</p>
                </Card.Body>
              </Card>
              <div className="arrow"></div>
            </div>
            <div className="step mb-4">
              <Card className="mb-3">
                <Card.Body>
                  <h3 className='mb-3 font-bold'> Connect</h3>
                  <p>Get expert guidance. We'll connect you with top healthcare professionals who specialize in treating your specific pain.</p>
                </Card.Body>
              </Card>
              <div className="arrow"></div>
            </div>
            <div className="step mb-4">
              <Card className="mb-3">
                <Card.Body>
                  <h3 className='mb-3 font-bold'> Engage</h3>
                  <p>Personalized care. Receive a tailored treatment plan, including customized exercise routines and online consultations.</p>
                </Card.Body>
              </Card>
              <div className="arrow"></div>
            </div>
            <div className="step">
              <Card className="mb-3">
                <Card.Body>
                  <h3 className='mb-3 font-bold'> Track</h3>
                  <p>Track your progress. Monitor your improvements and celebrate your milestones with detailed progress reports.</p>
                </Card.Body>
              </Card>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    <section id="testimonials" className="py-5">
  <Container className="my-5">
  <h2 className="text-center mb-12 text-3xl font-bold">Testimonials</h2>
      <Carousel variant='dark' className='mb:flex'>
        {chunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row>
              {chunk.map((t, index) => (
                <Col key={index} md={3} className="mb-4">
                  <Card className="h-[500px] lg:flex lg:flex-col lg:justify-between">
                    <Card.Body className="lg:flex-grow-1">
                      <Card.Title className="font-bold text-xl">{t.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {t.age}, {t.condition}
                      </Card.Subtitle>
                      <Card.Text className='h-[200px]'>{t.testimonial}</Card.Text>
                    </Card.Body>
                    <div className='flex justify-center items-center mb-5'>
                    <Image src={t.image}  width={170} height={170} />
                    </div>         
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
</section>

    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-3xl">FAQ</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> What is Paincure.ai?</Accordion.Header>
            <Accordion.Body>
            Paincure.ai is a digital platform that combines AI technology with HCPC-registered healthcare experts to provide 
            personalized pain relief therapies, helping you live a pain-free and productive life.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I report my pain symptoms on the Paincure.ai platform?</Accordion.Header>
            <Accordion.Body>
            Log in, navigate to "Report Symptoms," and answer questions about your pain. You can also upload relevant medical records
             to help our experts create a tailored treatment plan for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
              <Accordion.Header>How does digital pain relief therapy work for me?</Accordion.Header>
              <Accordion.Body>
              After reporting your symptoms, our platform connects you with healthcare experts who provide a personalized therapy plan, including exercises and lifestyle adjustments. 
              Access our content library and schedule one-on-one sessions as needed.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>How many years of experience do your healthcare experts have?</Accordion.Header>
              <Accordion.Body>
              Our experts are HCPC-registered, with many years of experience, including practice within the NHS, ensuring you receive qualified and dedicated care.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>What equipment do I require to get started?</Accordion.Header>
              <Accordion.Body>
              You only need a device with internet access. Some exercises may require basic items like a yoga mat and resistance bands, which will be specified in your plan.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='5'>
              <Accordion.Header>What equipment do I require to get started?</Accordion.Header>
              <Accordion.Body>
              You only need a device with internet access. Some exercises may require basic items like a yoga mat and resistance bands, which will be specified in your plan.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='6'>
              <Accordion.Header>How long are trial periods?</Accordion.Header>
              <Accordion.Body>
              Enjoy a 1-month free trial with full access to our content library and a complimentary one-on-one session with a healthcare expert.           
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='7'>
              <Accordion.Header>How do I report my pain symptoms on the Paincure.ai platform?</Accordion.Header>
              <Accordion.Body>
              Simply log in, go to "Report Symptoms," and fill out the details of your pain. Our support team is available to assist you if needed.
               </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Container>
    </section>
    <section id="team" className="py-5">
    <Container className="py-5">
      <h1 className="text-center text-3xl mb-5">For You And Your Team</h1>
      <Row>
        <Col md={6}>
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white h-[350px]">
            <h3 className='rounded-xl bg-gray-100 text-black p-1 text-center w-[120px]'>FOR CORPORATES</h3>
            <h2 className='mt-3 lg:text-3xl lg:w-[501px] md:text-xl mb:text-xl'>Enhance Employee Wellness And Boost Productivity</h2>
            <div className='mt-3 h-[1px] bg-white w-50'></div>
            <ul className="list-unstyled">
              <li className='mt-2'>Reduce Absenteeism</li>
              <li className='mt-2'>Increase Productivity</li>
              <li className='mt-2'>Promote Employee Satisfaction</li>
            </ul>
            <Button variant="light" className="mt-3 w-100 p-2 rounded-xl">Request a Demo</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-4 rounded-lg bg-gray-200 h-[350px]">
            <h3 className='rounded-xl bg-gray-100 text-black p-1 text-center w-[120px]'>FOR EMPLOYEES</h3>
            <h2 className='mt-3 lg:text-3xl lg:w-[501px] mb:text-xl'>Alleviate Pain And Improve Your Work Experiences</h2>
            <div className='mt-3 h-[1px] bg-black w-50'></div>
            <ul className="list-unstyled">
              <li className='mt-2'>Personalized Pain Relief</li>
              <li className='mt-2'>Access Expert Care</li>
              <li className='mt-2'>Improve Daily Comfort</li>
            </ul>
            <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Get started</Button>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
    <section id="blog" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-3xl ">Our Blogs</h2>
        <Row>
          <Col md={4}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Revolutionizing Workplace Wellness with Paincure.ai</Card.Title>
                <Card.Text>Discover how Paincure.ai is transforming workplace wellness with advanced AI solutions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Personalized Pain Management with Paincure.ai</Card.Title>
                <Card.Text>Learn how Paincure.ai provides personalized pain management solutions to help employees .</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>The Benefits of Hydration for Weight Loss</Card.Title>
                <Card.Text>Discover how staying hydrated can support your weight loss goals and improve overall health.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
}
