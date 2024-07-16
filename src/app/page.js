"use client"
import Image from 'next/image';
import { Container, Row, Col, Card,Accordion ,Carousel ,Button } from 'react-bootstrap';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="container mt-2 rounded-3xl">
       <section className="hero-section  rounded-3xl pb-16 " style={{ backgroundColor: '#3D4966' }}>
      <Header bg="black" color="white"/>
      <Container className='mt-11 lg:ml-5 py-13 md:ml-2'>
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
          <Card className='lg:h-[130px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Boost productivity</Card.Title>
              <Card.Text>
                Healthier individuals perform more efficiently.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[130px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Decrease absenteeism</Card.Title>
              <Card.Text>
                Effective pain management leads to fewer sick days.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[130px] mb:mb-3'>
            <Card.Body>
              <Card.Title>Early Risk Prevention</Card.Title>
              <Card.Text>
              Immidate healthcare care expert availability
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
       <section id="features" className="py-5">
      <Container>
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
      <h1 className="text-center text-3xl mb-5">How it works?</h1>
      <Row className="align-items-center">
        <Col md={4}>
          <Image src="/work.png" className='mb-6' width={500} height={500} />
        </Col>
        <Col md={8} className="text-center">
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
    {/* <section id="about" className="py-5 bg-light">
      <Container>
        <Row>
          <Col md={6}>
            <h2>About Us</h2>
            <p>Information about the company, mission, and vision.</p>
          </Col>
          <Col md={6}>
            <Image src="" alt="About us" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </section> */}
    <section id="testimonials" className="py-5">
      <Container className='border-2 p-3'>
        <h2 className="text-center mb-12 text-3xl ">Testimonials</h2>
        <Carousel variant="dark">
          <Carousel.Item interval={500}>
            <Row className="justify-content-center">
              <Col md={8} className='lg:flex lg:h-[300px] justify-between'>
                <blockquote className="blockquote">
                  <p className="mb-2 mr-10">“Paincure.ai has been a game-changer for our company. Employee productivity has skyrocketed, and absenteeism rates have plummeted.”</p>
                  <footer className="blockquote-footer mt-2">John Doe</footer>
                </blockquote>
              <Image className="rounded-2xl border-2  border-black" width={400} height={1000} src="/testimonial1.png"/>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <Row className="justify-content-center">
              <Col md={8} className='lg:flex lg:h-[300px] justify-between'>
                <blockquote className="blockquote">
                  <p className="mb-2 mr-10">"Amazing results! Employee productivity has skyrocketed, and absenteeism rates have plummeted."</p>
                  <footer className="blockquote-footer mt-2">Jane Smith</footer>
                </blockquote>
                <Image className="rounded-2xl border-2  border-black" width={400} height={1000} src="/testimonial2.png"/>

              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-3xl">FAQ</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>How do I report my pain symptoms?</Accordion.Header>
            <Accordion.Body>
            Simply log in to your Paincure.ai account and fill out our user-friendly questionnaire. Our AI will analyze your responses and provide personalized recommendations.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>What type of online consultations can I access with healthcare experts through Paincure.ai?</Accordion.Header>
            <Accordion.Body>
              Answer
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
              <Accordion.Header>How can I track my progress and improvements using the Paincure.ai platform?</Accordion.Header>
              <Accordion.Body>
              Answer
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>Can I access Paincure.ai's services from any device, or is there a specific app I need to use?</Accordion.Header>
              <Accordion.Body>
              Answer
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>Is there a cost associated with using the Paincure.ai services, or are they provided to employees at no charge?</Accordion.Header>
              <Accordion.Body>
              Answer
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
