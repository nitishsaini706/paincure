
// "use client"

// import { useEffect, useState } from 'react';
// import Banner from '../../components/Banner';
// import { Container, Row, Col, Card, Button } from 'react-bootstrap';
// import Image from 'next/image';
// import Link from 'next/link';
// export default function Blogs() {
//     const [blogs, setBlogs] = useState([]);
//     const apiUrl = "https://paincurebackend.onrender.com"
//     console.log(apiUrl)
//     useEffect(() => {
        
//         fetch(`${apiUrl}/api/blogs/web`)
//             .then(response => response.json())
//             .then(data => setBlogs(data.blog))
//             .catch(error => console.error('Error fetching blog data:', error));
//           }, []);
          
//           console.log(blogs)
//     return (
//         <div className="container mt-2 rounded-3xl">
//             <Container>
//                 <h2 className="text-center mb-3 mt-5 text-3xl">Our Blogs</h2>
//                 <h2 className='text-center mb-4 text-xl'>Learn more about the company and the team behind it.</h2>
//                 <Row className='mt-5 mb-10'>
//                     {blogs.length >  0 ? blogs.slice(0, 3).map((blog, index) => (
//                         <Col key={index} md={4}>
//                             <Card className='p-4'>
//                               <div className='flex justify-center items-center'>
                              
//                               <Image  src={blog.image || './blog.png'} width={400} height={400} />
//                               </div>
                               
//                                 <Card.Body>
//                                 <Card.Title className='mb-2'>{blog.title}</Card.Title>
//                                     <Card.Text>{blog.body.slice(0, 70)}......
//                                     <Link href={`/blog/${blog.slug}`} passHref>
//                                             <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Read More</Button>
//                                         </Link>
//                                     </Card.Text>
//                                 </Card.Body>
//                             </Card>
//                         </Col>
//                     )) : null}
//                 </Row>
//                 <Banner className='mb-10' />
//                 <Row className='mb-10 mt-10'>
//                     {blogs.slice(3, 6).map((blog, index) => (
//                         <Col key={index} md={6}>
//                         <Card className='p-4'>
//                             <Image  src={blog.image || './blog.png'} width={170} height={170} />
//                             <Card.Body>
//                             <Card.Title className='mb-2'>{blog.title}</Card.Title>
//                                 <Card.Text>{blog.body.slice(0, 50)}......
//                                   <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Read More</Button>
//                                 </Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </div>
//     );
// }
"use client"
import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import Banner from '../../components/Banner';

const BlogCardShimmer = () => (
  <Card className='p-4'>
    <div style={{ width: '100%', height: '200px', background: '#f0f0f0', position: 'relative' }}>
      <div className='shimmer' style={{ width: '100%', height: '100%', position: 'absolute' }}></div>
    </div>
    <Card.Body>
      <div className='shimmer' style={{ width: '100%', height: '20px', marginBottom: '10px' }}></div>
      <div className='shimmer' style={{ width: '100%', height: '60px' }}></div>
    </Card.Body>
  </Card>
);

const styles = `
  .shimmer {
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }
`;

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiUrl = "https://paincurebackend.onrender.com";
    console.log(apiUrl);

    useEffect(() => {
        fetch(`${apiUrl}/api/blogs/web`)
            .then(response => response.json())
            .then(data => {
                setBlogs(data.blog);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching blog data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className="container mt-2 rounded-3xl">
            <style>{styles}</style>
            <Container>
                <h2 className="text-center mb-3 mt-5 text-3xl">Our Blogs</h2>
                <h2 className='text-center mb-4 text-xl'>Learn more about the company and the team behind it.</h2>
                <Row className='mt-5 mb-10'>
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <Col key={index} md={4}>
                                <BlogCardShimmer />
                            </Col>
                        ))
                    ) : (
                        blogs.slice(0, 3).map((blog, index) => (
                            <Col key={index} md={4}>
                                <Card className='p-4 h-[500px]'>
                                    <div className='mb:h-[200px] lg:h-[250px]'>
                                        <Image
                                            src={blog.image || 'https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/blog.png'}
                                            width={400}
                                            height={400}
                                        />
                                    </div>
                                    <Card.Body className='h-[100px]'>
                                        <Card.Title className='mb-2'>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.body.slice(0, 50)}......
                                            <Link href={`/blog/${blog.slug}`} passHref>
                                                <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Read More</Button>
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
                <Banner className='mb-10' />
                <Row className='mb-10 mt-10'>
                    {loading ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <Col key={index} md={4}>
                                <BlogCardShimmer />
                            </Col>
                        ))
                    ) : (
                        blogs.slice(3, 6).map((blog, index) => (
                            <Col key={index} md={4}>
                                <Card className='p-4 h-[500px]'>
                                    <div className='h-[300px]'>
                                        <Image
                                            src={blog.image || './blog.png'}
                                            width={400}
                                            height={400}
                                        />
                                    </div>
                                    <Card.Body className='h-[100px]'>
                                        <Card.Title className='mb-2'>{blog.title}</Card.Title>
                                        <Card.Text>
                                            {blog.body.slice(0, 50)}......
                                            <Link href={`/blog/${blog.slug}`} passHref>
                                                <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Read More</Button>
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
}
