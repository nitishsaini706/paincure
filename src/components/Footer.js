"use client"
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

const Footer = () => {
    return (
        <section className="bg-[#3D4966] text-white ">
            <Container style={{ padding: "45px 45px 25px 45px" }} >

                <Row className="mb-6 " style={{ display: "flex", flexDirection: "column", marginBottom: "35px" }}>
                    <Col md={6} style={{ marginBottom: "15px" }}>
                        <div className="flex items-center mb-4">
                            <Image src="/logo.png" alt="logo" width={40} height={40} className="mr-2" />
                            <span className="text-lg font-bold">paincure.AI</span>
                        </div>
                        <p className="text-sm">
                            Paincure.ai, is the innovative solution that harnesses AI and expert healthcare to tackle workplace physical discomfort, empowering you to perform at your best.
                        </p>
                    </Col>
                    <div className='d-flex ' style={{justifyContent:"space-between",marginTop:"25px" , minWidth:""}}>

                        <Col md={3} >
                            <h5 className="text-lg font-bold mb-4">Services</h5>
                            <div className='lg:flex'>
                                <div style={{marginRight:"90px"}}>
                                    <ul className="list-none space-y-2 text-sm">

                                        <li>Back Pain</li>
                                        <li>Neck & Shoulder Pain</li>
                                        <li>Yoga</li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-none space-y-2 text-sm">
                                        <li>Knee & Hip pain</li>
                                        <li>Wrist & Hand Pain</li>
                                        <li>Weight Loss & Gain Workout</li>
                                    </ul>
                                </div>
                            </div>

                        </Col>
                        <Col md={3}>
                            <h5 className="text-lg font-bold mb-4 ">Other Pages</h5>
                            <ul className="list-none space-y-2 text-sm">
                                <li><a href="/" className="text-white hover:underline">Home</a></li>
                                <li><a href="#services" className="text-white hover:underline">Services</a></li>
                                <li><a href="#about" className="text-white hover:underline">About Us</a></li>
                                <li><a href="#blogs" className="text-white hover:underline">Blogs</a></li>
                            </ul>
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <p className="text-sm">&copy; 2024 paincure.ai. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
