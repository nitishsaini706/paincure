"use client"

import Banner from '../../components/Banner';
import { Container, Row, Col, Card } from 'react-bootstrap';


export default function Blogs(){
    return(
<div className="container mt-2 rounded-3xl">

<Container>
        <h2 className="text-center mb-3 mt-5 text-3xl">Our Blogs</h2>
        <h2 className='text-center  mb-4  text-xl'>Learn more about the company and the team behind it.</h2>
        <Row className='mt-5 mb-10'>
          <Col md={6}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Revolutionizing Workplace Wellness with Paincure.ai</Card.Title>
                <Card.Text>Discover how Paincure.ai is transforming workplace wellness with advanced AI solutions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Personalized Pain Management with Paincure.ai</Card.Title>
                <Card.Text>Learn how Paincure.ai provides personalized pain management solutions to help employees .</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
         <Banner className='mb-10'/>
        <Row className='mb-10 mt-10'>
          <Col md={6}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Revolutionizing Workplace Wellness with Paincure.ai</Card.Title>
                <Card.Text>Discover how Paincure.ai is transforming workplace wellness with advanced AI solutions.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className='p-4'>
              <Card.Img variant="top" src="./blog.png" />
              <Card.Body>
                <Card.Title>Personalized Pain Management with Paincure.ai</Card.Title>
                <Card.Text>Learn how Paincure.ai provides personalized pain management solutions to help employees .</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        </Container>
</div>
    
    )
}