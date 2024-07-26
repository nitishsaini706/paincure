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
                            <span className="text-lg font-bold">paincure.Ai</span>
                        </div>
                        <p className="text-sm">
                            paincure.Ai, is the innovative solution that harnesses AI and expert healthcare to tackle workplace physical discomfort, empowering you to perform at your best.
                        </p>
                    </Col>
                    <div className='flex mt-[25px] lg:justify-evenly ' >

                        <div  className='mb:mr-0 '>
                            <h5 className="text-lg font-bold mb-4">Services</h5>
                            <div className='lg:flex'>
                                <div className='lg:mr-[90px]'>
                                    <ul className="list-none space-y-2 text-sm cursor-pointer">

                                        <li ><a href="/services/lower-back-service">Back Pain</a></li>
                                        <li ><a href="/services/neck-service">Neck & Shoulder Pain</a></li>
                                        <li><a href="/services/yoga-service">Yoga for Migraines and Headaches</a></li>
                                    </ul>
                                </div>
                                <div>
                                    <ul className="list-none space-y-2 text-sm cursor-pointer">
                                        <li ><a href="/services/knee-service">Knee & Hip pain</a></li>
                                        <li ><a href="/services/wrist-service">Wrist & Hand Pain</a></li>
                                        <li>Weight Loss & Gain Workout</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className='lg:flex '>

                        <div className='mb:mb-3 lg:mr-[50px]'>

                            <h5 className="text-lg font-bold mb-4 ">Info</h5>
                            <ul className="list-none space-y-2 text-sm">
                                <li><a href="/terms-condition" className="text-white  hover:underline">Terms & Conditions</a></li>
                                <li><a href="/privacy" className="text-white  hover:underline">Privacy</a></li>
                                
                            </ul>
                        </div>
                        <div>
                            <h5 className="text-lg font-bold mb-4 ">Other Pages</h5>
                            <ul className="list-none space-y-2 text-sm">
                                <li><a href="/" className="text-white hover:underline">Home</a></li>
                                <li><a href="/about" className="text-white hover:underline">About Us</a></li>
                                <li><a href="/blogs" className="text-white hover:underline">Blogs</a></li>
                                <li><a href="/pricing" className="text-white hover:underline">Pricing</a></li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </Row>
                <Row>
                    <Col md={12} className="text-center">
                        <p className="text-sm">&copy; 2024 paincure.Ai. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
