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
                        <h2 className="text-center mb-3 mt-4 text-3xl font-bold">Terms and conditions</h2>
                        <h2 className='text-left mb-4'>Paincure AI Ltd (together with its affiliates, referred to as the “Company”) provides services
                            (defined in paragraph 1 of these Terms of Service) to individuals who utilize and/or subscribe to such services (“User”) through our Web application
                            named “paincure.Ai” and/or the website at www.paincure.Ai (collectively, the “Platform”).</h2>

                        <h2 className='text-left  mb-4'>These Terms of Service (“Terms”) constitute a legally binding agreement between you and the Company governing your use of the services through our Platform.</h2>


                        <h2 className='text-left  mb-4 font-bold'>YOU ACKNOWLEDGE AND AGREE THAT, BY CLICKING ON THE “I AGREE” OR SIMILAR BUTTON ON OUR WEBSITE OR ON OUR WEBSITE, REGISTERING FOR AN ACCOUNT, DOWNLOADING OUR MOBILE
                            APPLICATION OR ANY UPGRADES TO SUCH APPLICATION, USING OR ACCESSING THE PLATFORM, YOU ARE INDICATING AND UNDERTAKING THAT YOU HAVE READ, UNDERSTOOD, AND AGREED TO BE
                            BOUND BY THESE TERMS,
                            WHETHER OR NOT YOU HAVE REGISTERED WITH THE PLATFORM. IF YOU DO NOT AGREE TO THESE TERMS, THEN YOU HAVE NO RIGHT TO ACCESS OR USE THE PLATFORM. </h2>
                        <h2 className='text-left  mb-4'>These Terms are effective as of the date you first click “I agree” (or a similar button or checkbox) or use or access the Platform, whichever is earlier.
                            Any personal data you submit to us through the Platform or which we collect about you is governed by our privacy policy (“Privacy Policy”), available at
                            https://www.paincure.Ai/privacy. You acknowledge that by using or accessing the Platform, you have reviewed, understood, and agreed to the Privacy Policy.
                            The Privacy Policy is incorporated by reference into these Terms and together form part of and are hereinafter referred to as this "Agreement".
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Service</h2>
                        <h2 className='text-left mb-4'>We provide services related to (a) the diagnosis of chronic pain caused by musculoskeletal disorders through an artificial
                            intelligence-based software application owned and developed by us, named ‘Paincure AI Motion Coach’ (“AI Software”), and/or also by Service Providers;
                            and (b) health and wellness services such as yoga, meditation, physiotherapy, orthopedics, and nutrition, provided by persons engaged by the Company to offer
                            these services on the Platform (“Service Providers”) to the Users (collectively, “Service” or “Services”). The Service Providers,
                            with the assistance of the initial study conducted by the AI Software, provide a diagnosis under the scope of sub-clause (b) above.</h2>


                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Changes to Terms</h2>
                        <h2 className='text-left mb-4'>The Company reserves the right, at its sole discretion, to modify, add, or
                            remove any terms or conditions of these Terms without notice or liability to the User. Any changes to these Terms shall
                            be effective immediately following the posting of such changes. The User agrees to review these Terms periodically and acknowledges that
                            any subsequent use by the User following
                            changes to these Terms shall constitute the User’s acceptance of all such changes.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Access and Use of Service</h2>
                        <h2 className='text-left mb-4'>Users registering for the Services must be at least eighteen (18) years of age.
                            If the User is below 18 years of age, the User’s registration information must be verified by their parents/guardians.
                            The Company makes no claims that the Services may be lawfully accessed in any specific location. Access to the Services may not be legal by certain persons
                            or in certain states or countries, or may require government authorization and/or registration. When Users access the Platform, they are solely responsible for
                            compliance with the laws and regulations of their jurisdiction.
                            By signing up and using paincure.Ai, you agree to these Terms of Service and our Privacy Policy, and you commit to abiding by them. If you have any questions,
                            please contact us at support@paincure.Ai.</h2>
                    </div>

                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">User’s Conduct</h2>
                        <h2 className='text-left mb-4'>The User may use the Services only for lawful purposes and in accordance with these Terms. Users are prohibited from using the Services for any purposes other than
                            those designated by the Company, and must comply with all applicable laws and these Terms.</h2>
                        <h2 className=' text-left mb-4'>The User must not violate or attempt to violate the security of the Services, including but not limited to:</h2>
                        <ol class="custom-ol">
                            <li>
                                Accessing data not intended for the User or logging into a server or account which the User is not authorized to access.
                            </li>
                            <li>
                                Attempting to probe, scan, or test the vulnerability of a system or network or breach security or authentication measures without proper authorization.
                            </li>
                            <li>
                                Interfering with service to any User, host, or network, including submitting a virus, overloading, "flooding", "spamming", "mail-bombing", or "crashing".
                            </li>
                            <li>
                                Forging any TCP/IP packet header or any part of the header information in any email or newsgroup posting.
                            </li>
                            <li>
                                Scraping or harvesting data, or using robots to skew payouts.
                            </li>
                            <li>
                                Reverse engineering the AI Software and any other software used by the Company.
                            </li>
                        </ol>
                        <h2 className=' text-left mb-4'>Violations may result in civil or criminal liability. The Company reserves the right to seek claims
                            for any injury or loss from the User if they are found violating these Terms. The Company will investigate occurrences that may involve such violations
                            and may involve and cooperate with law enforcement entities in prosecuting Users who are involved in such violations.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">User Information</h2>
                        <h2 className='text-left mb-4'>The User is solely responsible for the information he/she inputs or uploads to the Platform
                            and warrants that they have the right and authorization to register for the Services and post ‘User Generated’ content.
                            The Company reserves the right to decide whether the information the User inputs or uploads is appropriate and complies with these Terms,
                            other Company policies, and applicable laws. The Company may discontinue any of the User’s services or debar such User from the Platform if such
                            User violates any provisions of these Terms, the Platform’s policies, or any other applicable laws or regulations.</h2>

                        <h2 className='text-left mb-4'>If the User registers for the Services, they will be asked to provide certain information, including a valid email address.
                            The User warrants that all such information is current, accurate, and will be kept up to date. The User further represents that they are not impersonating
                            anyone and have created the account on the Platform for themselves, not for any third party. The User’s privacy rights are set forth in the Company’s Privacy Policy.
                            The Company may offer services and products based
                            on the preferences the User identifies at the time of registration and at any time thereafter, unless the User opts out of receiving third-party services and products.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Username/ Password/ Security</h2>
                        <h2 className='text-left mb-4'>The User is responsible for maintaining the confidentiality of his/her information related to the Services, including the username and password,
                            and is responsible for all uses of the username and password whether or not authorized by the User. If the User wishes to have someone else use his/her device,
                            it is important to log out to prevent another individual from gaining access to the account. The User agrees to immediately notify the Company of any unauthorized
                            use of the username and password.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Disclaimer</h2>
                        <ol class="custom-ol">
                            <li>
                                The Company does not prescribe or sell any drugs, medicines, or supplements to Users on the Platform. The Company offers the Platform to provide Services through the AI Software and Service Providers as outlined in paragraph 2 of these Terms. The Company has restricted Service Providers from prescribing any drugs, medicines, or supplements as per the Drugs and Cosmetics Act, 1940.
                                For clarity, the Company does not provide or endorse any medical recommendation or opinion. The Platform allows Users to (i) generate reports for diagnosing musculoskeletal disorders and (ii) connect with Service Providers by providing their details. The use of the Service does not create a doctor/patient relationship between the User and the Company or the Service Providers.
                            </li>
                            <li>
                                We are not responsible for any defect or deficiency in the consultation or diagnosis recommended by any Service Provider based on the AI Software reports, nor for any prescription or recommendation of medicines/drugs/supplements, which the Service Provider is expressly prohibited from soliciting.
                            </li>
                            <li>
                                Service Providers on the Platform have signed contracts with us, confirming they are qualified to provide the Services, including practicing medicine and physiotherapy in India. While we make reasonable inquiries to confirm these representations, we are not responsible for any misrepresentation or fraud. We do not recommend or endorse any Service Providers or make any representations about the quality of their services.                            </li>
                            <li>
                                We are not responsible for the accuracy of assessment tests generated through the AI Software. These reports are for informational purposes to suggest probable causes and risks for musculoskeletal disorders. The results do not constitute a medical opinion or recommendation, and Users should seek advice from a medical practitioner before relying on such reports.                            </li>
                            <li>
                                Users should not cause Service Providers to rely on such reports and should not deter independent analysis by the Service Providers.
                                Before using the Service, Users may consult their physician to determine if such a program is right for their needs. All suggestions and comments related to the use of any equipment, poses, moves, and instructions are optional and are carried out at the User’s discretion while using the Service. Nothing in this Service should be construed as medical advice or diagnosis.
                            </li>
                            <li>
                                By using the Services, Users represent that they understand physical exercise involves strenuous physical movement and carries the risk of injury. Users are responsible for judging their physical and mental capabilities for such activities and ensuring they do not exceed their limits. The User understands that, from time to time, Service Providers may suggest physical adjustments or the use of equipment, and it is the User’s discretion to determine if such adjustments or equipment are appropriate.
                                Users expressly waive and release any claim for injury against the Company, including its directors, Service Providers, trainers, independent contractors, employees, agents, affiliates, and representatives. Each User shall exercise discretion in deciding whether the Services are suitable for their purposes. The Company grants a limited, non-exclusive license to access and use the Services for personal and non-commercial purposes. This includes rights to view content on the Company's website and applications. If a User accesses any component of the Services for which there is a fee, the User agrees to pay the associated fees. All fees and charges, including taxes and late fees, will be charged to the User’s payment method. Users agree to maintain valid payment information as part of their account information.                            </li>
                            <li>
                                In addition to paragraph "d" of these Terms, we disclaim all liability for any actions undertaken by the User at their discretion while using the Services on the Platform. The User undertakes to use reasonable care and judgment when using the Services and shall not hold the Company liable for any injury caused by
                            </li>
                        </ol>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Warranty Disclaimers</h2>
                        <h2 className='text-left mb-4'>The Services are provided "as is" and "as available" without any warranty, and the Company disclaims all warranties and conditions,
                            whether express, implied, or statutory. This includes but is not limited to implied warranties of merchantability, satisfactory quality, fitness for a particular purpose,
                            accuracy, quiet enjoyment, and non-infringement of third-party rights. The Company does not guarantee that the Services will meet User requirements, be uninterrupted or
                            error-free, or be free from viruses or other harmful mechanisms. If the Services prove defective, the Company is not liable for any costs associated with servicing or
                            replacing equipment or data. The Company makes no warranties regarding the accuracy, reliability, completeness, or timeliness of the Services or User-generated content.
                            Data transmission over the internet is not secure and is subject to potential loss, interception, or alteration while in transit. The Company assumes no liability for any
                            damages or costs incurred from such transmissions. User data uploaded to the Services is the sole responsibility of the User, and the Company is not liable for any deletion,
                            correction, destruction, damage, or loss of such information.
                            Users should maintain their own backups of all information. The Company's maximum liability will not exceed the amount paid for the Services.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Informed Consent</h2>
                        <h2 className='text-left mb-4'>Users acknowledge that consultations will be remote and based on verbal communication and AI-generated reports. Users consent to the use of telephonic and electronic
                            communications for services, including audio, video, and written communications. Users also consent to the recording, saving, and storing of all related communications and information, which will
                            be treated as confidential in accordance with the Company's privacy policy and applicable laws.</h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Limitation of Liabilities</h2>
                        <h2 className='text-left mb-4'>The Company, its affiliates, and representatives are not liable for any direct, indirect, incidental, special, consequential, punitive, exemplary, or
                            any other damages resulting from the use or inability to use the Services. This includes but is not limited to damages for errors, omissions, interruptions, defects, delays,
                            viruses, loss of profits, data loss, unauthorized access, emotional distress, and other tangible and intangible losses. Network-related issues affecting the Services' performance
                            are not the Company's responsibility. The User’s sole remedy for dissatisfaction with the Services is to discontinue use. The Company is not liable for any personal injury,
                            harm, or death related to the use of the Services. Maximum liability in connection with the Services will not exceed the amount paid for the Services. Users are advised to use
                            their discretion in following advice obtained from the Services, and the Company is not liable for any misdiagnosis, faulty judgment, or adverse events resulting from the
                            Services. The Services are not intended for emergency or life-threatening conditions.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Indemnification</h2>
                        <h2 className='text-left mb-4'>Users agree to defend, indemnify, and hold the Company and its affiliates, officers, directors, employees, agents, and partners harmless
                            from any claims, liabilities, losses, or expenses, including legal fees, arising from the User’s use of the Services, any User-generated content, or any breach of this Agreement.
                            The Company will provide prompt notice of any such claim and assist in the defence at the User’s expense. The Company reserves the right to assume exclusive defence and control
                            of any matter subject to indemnification.

                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Communications</h2>
                        <h2 className='text-left mb-4'>By using the Services, Users consent to receive electronic communications from the Company, including emails
                            about account management, passwords, marketing, transactions, and other information related to the Services.
                        </h2>
                    </div>
                    <div>
                        <h2 className="text-left mb-3 mt-4 text-3xl">Additional Terms and Conditions</h2>
                        <h2 className='text-left mb-4'>These Terms do not create any joint venture, partnership, employer/employee, or principal-agent relationship between
                            Users and the Company. They are governed by the laws of the Republic of India, with exclusive jurisdiction in the courts of Pune, India. If any provision is
                            held invalid or unenforceable, it will be enforced to the maximum extent permissible, and the remaining provisions will remain in effect. Failure to enforce
                            any right or claim does not constitute a waiver. Users may not assign their rights or obligations under these Terms. These Terms create rights and obligations
                            only between the Company and each User, not for any other parties.
                        </h2>
                    </div>
                </Row>

            </Container>

        </div>
    )
}
