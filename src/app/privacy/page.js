"use client"
import React from 'react'
import Banner from '../../components/Banner';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import Image from 'next/image';
export default function About() {
    return (
        <div className="container mt-2 rounded-3xl">
            <Container className='mb-5'>
                <Row>
                    <div>
                        <h2 className="text-center mb-3 mt-4 text-3xl font-bold">Paincure AI Privacy Policy</h2>
                        <h2 className='text-left mb-4'>Paincure AI LTD ("Company," "we," "us," or "our") is committed to protecting your privacy. 
                            This Privacy Policy outlines how we handle your Personally Identifiable Information (PII) and Sensitive Personal Data or Information (SPDI)
                             in connection with the services provided by Paincure AI on our website and apps. Please read this policy carefully.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Defintions</h2>
                        <ol class="custom-ol">
                            <li>
                            Personally Identifiable Information (PII): Any information that can identify a natural person, either directly or indirectly, in combination with
                             other information likely available to Paincure AI. This includes your name, age, gender, address, telephone number, and any other information that 
                             can identify you.
                            </li>
                            <li>
                            Sensitive Personal Data or Information (SPDI): Personal information which consists of details related to:
                            <ol className='custom-ol'>
                                <li>
                                Password
                                </li>
                                <li>
                                Financial information such as bank account or credit card or debit card or other payment instrument details
                                </li>
                                <li>
                                Physical, physiological, and mental health condition
                                </li>
                                <li>
                                Sexual orientation
                                </li>
                                <li>
                                Medical records and history
                                </li>
                                <li>Biometric information</li>
                                <li>
                                Any detail relating to the above as provided to a body corporate for providing services
                                </li>
                                <li>Any information received under the above clauses by the body corporate for processing, stored, or processed under lawful contract or otherwise</li>
                            </ol>
                            </li>
                        </ol>
                        <h2 className='text-left mb-4'>Provided that any information that is freely available or accessible in the public domain shall not be regarded as SPDI.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Consent</h2>
                        <h2 className='text-left mb-4'>By registering and using the services listed on our website, you consent to the use and transmission/transfer/sharing of your SPDI to 
                            Paincure AI for the sole purpose of providing the services you wish to avail of. You may withdraw this consent at any time by contacting us.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Privacy Commitment</h2>
                        <h2 className='text-left mb-4'>Your SPDI will be held in strict confidence and in accordance with applicable laws, including the Information Technology (Reasonable Security Practices and 
                            Procedures and Sensitive Personal Data or Information) Rules, 2011. Except as outlined in this policy, we will not disclose your SPDI without your explicit prior consent.</h2>
                    </div>

                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Scope of This Privacy Policy</h2>
                        <h2 className='text-left mb-4'>This policy covers Paincure AI’s treatment of your PII and SPDI that we collect when you use our services through our website and/or apps. 
                            If you choose not to provide the required personal 
                            information, you may not be able to avail of our services, and we may not be able to respond to any queries you may have.</h2>
                      
                       
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Information Collection and Use</h2>
                        <h2 className='text-left mb-4'>Paincure AI collects PII when you register with us through our website (www.paincure.ai) or our mobile application. When registering, we may ask for your 
                            full name, email address, phone number, birth date, address, gender, occupation, and other relevant information. Once registered, you are no longer anonymous to us.</h2>

                        <h2 className='text-left mb-4'>We also automatically receive and log information from your browser, including your IP address, cookie information, and the pages you request.</h2>
                        <h2 className='text-left mb-4'>We use your PII to:</h2>
                        <ol className='custom-ol'>
                            <li>
                            Fulfill your service requests
                            </li>
                            <li>
                            Contact you about special offers and new services
                            </li>
                            <li>
                            Conduct internal audits, data analysis, and research to improve our services and customer communications
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Information Sharing and Disclosure</h2>
                        <h2 className='text-left mb-4'>Paincure AI does not sell or rent your PII or SPDI to anyone. We will only share your information under the following circumstances:</h2>
                        <ol className='custom-ol'>
                            <li>
                            With your specific consent
                            </li>
                            <li>
                            In response to requests from Indian or foreign government, security, law enforcement, and regulatory agencies
                            </li>
                            <li>
                            To comply with legal processes such as court orders or subpoenas
                            </li>
                            <li>
                            To investigate or prevent illegal activities, fraud, or potential threats to physical safety
                            </li>
                            <li>
                            If Paincure AI is acquired by or merged with another company
                            </li>
                            <li>
                            If you violate the Paincure AI Terms of Use
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Non-Personal Information Collection and Use</h2>
                        <h2 className='text-left mb-4'>We also collect non-personal information that does not directly identify any individual. We may use, transfer, 
                            and disclose non-personal information for any purpose. If non-personal information is combined with PII, the combined information will be treated as PII.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Cookies</h2>
                        <h2 className='text-left mb-4'>Paincure AI uses cookies and similar tracking technologies to track activity on our services and hold certain information.
                             Advertisers or other companies do not have access to Paincure AI’s cookies.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Your Ability to Edit and Delete Your Account Information and Preferences</h2>
                        <h2 className='text-left mb-4'>You can edit your account information and preferences at any time through our website.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Security</h2>
                        <h2 className='text-left mb-4'>We store all your PII and SPDI on secure servers and use industry-standard encryption to protect data transmissions.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Usage Data</h2>
                        <h2 className='text-left mb-4'>We collect usage data such as IP address, browser type, pages visited, and time spent on pages to improve our services.

                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Location Data</h2>
                        <h2 className='text-left mb-4'>With your permission, we may use and store information about your location to provide and improve our services. You can enable or disable location services through your device settings.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Changes to This Privacy Policy</h2>
                        <h2 className='text-left mb-4'>Paincure AI may amend this Privacy Policy from time to time. If we make substantial changes, we will notify you by posting a prominent announcement on our website.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Contact Us</h2>
                        <h2 className='text-left mb-4'>If you have any questions about this Privacy Policy, please contact us:
                        </h2>
                        <ol className='custom-ol'>
                            <li>
                            By email: support@paincure.ai or info@paincure.ai
                            </li>
                            <li>
                            By visiting our website: <a>www.paincure.ai</a>
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Governing Laws and Jurisdiction</h2>
                        <h2 className='text-left mb-4'>This Privacy Policy is governed by the laws of the Republic of India, without regard to conflict of laws. The courts of Mumbai, India shall have exclusive jurisdiction over any matter arising from this Privacy Policy.
                        </h2>
                    </div>
                </Row>

            </Container>

        </div>
    )
}
