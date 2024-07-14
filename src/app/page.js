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
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Feature 1</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Feature 2</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Feature 3</Card.Title>
                <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section id="about" className="py-5 bg-light">
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
    </section>
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
            <Accordion.Header>Question 1</Accordion.Header>
            <Accordion.Body>
              Answer to question 1.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Question 2</Accordion.Header>
            <Accordion.Body>
              Answer to question 2.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
    <section id="team" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Team</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Team Member 1</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Team Member 2</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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
    <section id="team" className="py-5">
      <Container>
        <h2 className="text-center mb-4">Our Team</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Team Member 1</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Team Member 2</Card.Title>
                <Card.Text>Short bio or description of the team member.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
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
