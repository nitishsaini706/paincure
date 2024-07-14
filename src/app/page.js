"use client"
import Image from 'next/image';
import { Container, Row, Col, Card,Accordion ,Carousel ,Button } from 'react-bootstrap';
import Header from '../components/Header';


export default function Home() {
  return (
    <div className="container mt-2 rounded-3xl">
       <section className="hero-section  rounded-3xl pb-16 " style={{ backgroundColor: '#3D4966' }}>
      <Header bg="black" color="white"/>
      <Container className='mt-11 ml-5 py-13'>
        <Row className="align-items-center ">
          <Col md={6}>
            <h1 className="text-white mb-3 w-[682px] h-[168px] font-dm-sans font-bold text-[68px] leading-[130%] tracking-[-0.02em]">Banish Workplace ,
            Pain with Paincure.ai</h1>
            <p className='	text-white mb-3'> 
              Introducing Paincure.ai, the innovative solution that harnesses AI and expert healthcare to tackle workplace physical discomfort, empowering you to perform at your best.
            </p>
            <div className='d-flex justify-start items-center w-[544px] h-[64px] gap-[40px] '>
              <Button  className="me-2 border-0 text-black rounded-2xl bg-white w-[162px]">Sign Up</Button>
              <Button className="me-2 border-1 border-white rounded-2xl text-white w-[162px] bg-[#3D4966]">Learn More</Button>
            </div>
          </Col>
          <Col md={6}>
            <Image src="/image1.png" alt="Paincure AI" className="img-fluid rounded-2xl w-[464px] ml-16"width={464} height={10} />
          </Col>
        </Row>
      </Container>
    </section>
       <section id="features" className="py-5">
      <Container>
        <Row>
          <Col md={4}>
            <Card>
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
      <Container>
        <h2 className="text-center mb-4">Testimonials</h2>
        <Carousel>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={8}>
                <blockquote className="blockquote">
                  <p className="mb-0">"Great service!"</p>
                  <footer className="blockquote-footer">John Doe</footer>
                </blockquote>
              </Col>
            </Row>
          </Carousel.Item>
          <Carousel.Item>
            <Row className="justify-content-center">
              <Col md={8}>
                <blockquote className="blockquote">
                  <p className="mb-0">"Amazing results!"</p>
                  <footer className="blockquote-footer">Jane Smith</footer>
                </blockquote>
              </Col>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">FAQ</h2>
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
      <Container>
        <h2 className="text-center text-3xl mb-4">For You And Your Team</h2>
        <Row>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>FOR CORPORATES</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Team Member 3</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="blog" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Our Blog</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Blog Post 1</Card.Title>
                <Card.Text>Short summary of the blog post.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Blog Post 2</Card.Title>
                <Card.Text>Short summary of the blog post.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Blog Post 3</Card.Title>
                <Card.Text>Short summary of the blog post.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <p>&copy; 2024 paincure.ai. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#home" className="text-white mx-2">Privacy Policy</a>
            <a href="#home" className="text-white mx-2">Terms of Service</a>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
}
