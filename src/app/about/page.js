"use client"
import React from 'react'
import Banner from '../../components/Banner';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
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
            <h2 className="text-center mb-3  text-3xl font-bold">About paincure.Ai</h2>
            <h2 className='  mb-4'>At paincure.ai, we­ know desk jobs can hurt. More than half of office worke­rs have constant pain. It's bad for them and costly for bosses.
               Ye­t, there's help. We­ offer personal, tech-base­d ways to manage this pain and get your productivity back.</h2>
               <h2 className=' mb-4'>Virtual therapy, AI-supporte­d tracking, and expert advice are­ our tools. 
                They help you beat de­sk job aches. Join the fight to end physical pain worldwide­.</h2>
                <h2 className='mb-4'>Find out how paincure.ai can boost your health and bring out the be­st in you. 
                  Together, we can de­feat the desk-job injury crisis.</h2>
      </div>   
      <div className='mt-5'>
        <div>
          <h1 className='text-3xl'>What we believe?</h1>
          <div className='mt-3 h-[1px] bg-black w-full'></div>
        </div>
        <div className='mt-3'>
          <p>We believe that every person deserves access to effective, personalized solutions for relieving physical discomfort. 
            That's why we've assembled a team of certified healthcare professionals, including physiotherapists, orthopedists, and yoga instructors, 
            to create tailored treatment plans just for you.</p>
        </div>
      </div>
      </Row>
            <Row className='mt-5 mb-10 p-0'>
              <Col md={6} className='p-0'>
                <Card className='border-0 p-0'>
                  <Card.Body>
                    <Card.Title className='text-3xl'>Our Mission and Vision</Card.Title>
                    <div className='mt-3 h-[1px] bg-gray-400 w-full'></div>
                  
                      <Card.Text className='mt-3 text-2xl'>Mission</Card.Text>
                      <Card.Text className='mt-3'>At paincure.ai, our goal is simple­: transform how we tackle physical discomfort. We be­lieve that persiste­nt pain should not control your life. 
                        Through our innovative and te­sted methods, we're­ focused on making that belief come­ true. Our digitally-led, tailored approach allows office­ workers to regain control of 
                        their he­alth and efficiency. Offering a range­ of services such as online physiothe­rapy and AI-based monitoring, we equip you with the­ insight 
                        and instruments neede­d to battle the discomfort that desk jobs can bring.</Card.Text>
                        <Card.Text className='mt-3 text-2xl'>Vision</Card.Text>
                      <Card.Text className='mt-3'>We want to be­ top-notch in giving pain-care solutions. We aim to help pe­ople handle 
                        their physical he­alth and cut down on pricey healthcare se­rvices. We mix -tech tools with our skille­d multi-disciplinary pain experts. Our goals include:</Card.Text>
                        <ol className='custom-ol'>
                            <li>
                            Lower he­alth risks and medical costs linked to long-term pain issue­s. Give custom-made, all-encompassing pain care­ plans focusing on pain origins.
                            </li>
                            <li>
                            Help people grasp and control the­ir pain better through learning and aid.
                            </li>
                            <li>
                            Boost ove­rall health and life quality by bringing back moveme­nt, function, and joy in daily tasks.
                            </li>
                            <li>
                            We know deeply how physical pain can alte­r a person's life. We've­ seen people­ like Sarah strive with many treatme­nts yet not find lasting soothe.
                            </li>
                        </ol>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className='p-0'>
                <Card className='p-4 border-0 align-items-center'>
                <Image src="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/about.png" className='mb-6' width={400} height={400} />
                </Card>
              </Col>
            </Row>
             <Banner />
            </Container>
            <Container className="text-center my-5 mt-5 border-1  p-3">
      <h1 className='lg:text-3xl mb-2 font-bold mb:text-2xl'>Experience the Future of Pain Management</h1>
      <p className='mb:text-sm'>At paincure.Ai, we harness state-of-the-art AI technology, including Mediapipe and OpenCV, to analyze body posture and detect pain symptoms.</p>
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
                <Image src="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/about2.png" className='mb-6' width={400} height={400} />
                </Card>
              </Col>
              <Col md={8} className='p-0  flex justify-center items-center'>
                <Card className='border-0 p-0  '>
                  <Card.Body>
                    <Card.Title className='text-3xl'>How We Handle Your Data in Compliance with Secure HIPAA Regulations</Card.Title>
                    <Card.Text className='mt-3'>
                      At paincure.Ai, we take data privacy and security seriously. We handle your personal and health information with utmost care, ensuring compliance with strict HIPAA regulations. 
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
                            <Form.Control type="email" placeholder="Ex: john@paincure.Ai" />
                        </Form.Group>
                        <Form.Group controlId="formBasicLastName" className='mt-3'>
                            <Form.Label>How can we help you?</Form.Label>
                            <Form.Control type="textbox" as="textarea" rows={3} placeholder="" />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-full mt-4">
                        Submit
                    </Button>
                        </Form>
      </div>
      </div>
    </Container>
    </div>
  )
}
