"use client"
import { Container, Card, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

const Blog = async ({ params }) => {
    const { slug } = params;
    const apiUrl = "https://paincurebackend.onrender.com";
    
    let blog = null;
    try {
        const response = await fetch(`${apiUrl}/api/blogs/${slug}`, {
            cache: 'no-store', // Ensure fresh data
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        blog = data.blog || null;
    } catch (error) {
        console.error('Error fetching blog data:', error);
    }

    if (!blog) {
        return <Container><p>Blog not found</p></Container>;
    }
    const formatToIST = (utcDateString) => {
        const utcDate = new Date(utcDateString);
        const istOffset = 5.5 * 60; // IST is UTC+5:30
        const localDate = new Date(utcDate.getTime() + (istOffset * 60 * 1000));

        const day = String(localDate.getDate()).padStart(2, '0');
        const month = String(localDate.getMonth() + 1).padStart(2, '0');
        const year = localDate.getFullYear();
        const hours = String(localDate.getHours()).padStart(2, '0');
        const minutes = String(localDate.getMinutes()).padStart(2, '0');
        const seconds = String(localDate.getSeconds()).padStart(2, '0');

        return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    };
    return (
        <Container>
            <Card className='mt-5 p-4 mb-5'>
                <h1 className='text-3xl mb-3'>Author: {blog.name}</h1>
                <h1 className='text-xl mb-5'> Created on: {formatToIST(blog.creation_time)}</h1>
                <div className='flex justify-center items-center'>
                <Image src={blog.image || '/blog.png'} width={800} height={800} alt={blog.title} />
                </div>

            
                
                <Card.Body>
                    <Card.Title className='text-3xl mt-3 mb-3'>{blog.title}</Card.Title>
                    <Card.Text>{blog.body}</Card.Text>
                    <Link href="/blogs" passHref>
                        <Button variant="primary" className="mt-3">Back to Blogs</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Blog;
