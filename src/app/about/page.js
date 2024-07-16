"use client"
import React from 'react'
import Banner from '../../components/Banner';
import { Container, Row, Col, Card,Form } from 'react-bootstrap';
import Image from 'next/image';
export default function About() {
  return (
    <div className="container mt-2 rounded-3xl">
    <Container>
      <Row>
      <div className='flex justify-center'>
      <h2 className='text-center mb-3 mt-5 rounded-lg border-2 w-[100px] p-2'>About Us</h2>
      </div>
      <div>
            <h2 className="text-center mb-3  text-3xl font-bold">About paincure.ai</h2>
            <h2 className='text-center  mb-4'>Introducing Paincure.ai - your personal ally in the battle against physical discomfort.</h2>
      </div>   
      <div className='mt-5'>
        <div>
          <h1 className='text-3xl'>What we believe?</h1>
          <div className='mt-3 h-[1px] bg-black w-full'></div>
        </div>
        <div className='mt-3'>
          <p> We believe that every person deserves access to effective, personalized solutions for relieving physical discomfort. 
            That's why we've assembled a team of certified healthcare professionals, including physiotherapists, orthopedists, and yoga instructors, 
            to create tailored treatment plans just for you. </p>
        </div>
      </div>
      </Row>
            <Row className='mt-5 mb-10 p-0'>
              <Col md={6} className='p-0'>
                <Card className='border-0 p-0'>
                  <Card.Body>
                    <Card.Title className='text-3xl'>Our Mission and Vision</Card.Title>
                    <Card.Text>
                    <div className='mt-3 h-[1px] bg-gray-400 w-full'></div>
                      <p className='mt-3'>We envision a future where pain is no longer a barrier to productivity and job satisfaction. </p>
                      <p className='mt-3'>By harnessing the power of AI and leveraging the expertise of healthcare professionals, we're paving the way for a healthier, more comfortable, and more productive lifestyle.</p>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className='p-0'>
                <Card className='p-4 border-0 align-items-center'>
                <Image src="/about.png" className='mb-6' width={300} height={300} />
                </Card>
              </Col>
            </Row>
             <Banner />
            </Container>
            <Container className="text-center my-5 mt-5 border-1  p-3">
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
    <Container>
    <Row className='mt-5 mb-10 p-0'>
              <Col md={4} className='p-0 '>
                <Card className='p-4 border-0 '>
                <Image src="/about2.png" className='mb-6' width={400} height={400} />
                </Card>
              </Col>
              <Col md={8} className='p-0  flex justify-center items-center'>
                <Card className='border-0 p-0  '>
                  <Card.Body>
                    <Card.Title className='text-3xl'>How We Handle Your Data in Compliance with Secure HIPAA Regulations</Card.Title>
                    <Card.Text className='mt-3'>
                      At Paincure.ai, we take data privacy and security seriously. We handle your personal and health information with utmost care, ensuring compliance with strict HIPAA regulations. 
                        Our robust security measures guarantee the confidentiality and protection of your data at all times.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
    </Container>
    <Container>
    <div className="flex justify-center mb-10">
    <div className="w-full max-w-md p-8">
      <h2 className="text-center mb-3  text-3xl font-bold">Contact Us</h2>
      <Form>
                    
                        <Form.Group controlId="formBasicFirstName" >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="John Doe" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName" className='mt-3'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Ex: john@paincure.ai" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName" className='mt-3'>
                            <Form.Label>How can we help you?</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        </Form>
      </div>
      </div>
    </Container>
    </div>
  )
}
