"use client"
import Image from 'next/image';
import { Container, Row, Col, Card,Accordion ,Carousel ,Button,Modal } from 'react-bootstrap';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useWindowSize } from 'react-use';
import Link from 'next/link';
import ProgramDetails from "../components/solution"
import { FaWhatsapp } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
  const isLargeScreen = useMediaQuery({ query: '(max-width: 440px)' });

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [showIcon, setShowicon] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [formData,setFormData] = useState({
    name:'',
    phone:'',
    service:''
  })
  const setChange = (e) => {
    const { id, value } = e.target;
    console.log('e', e)
    if(id == "phone"){
      setShowicon(false)
    }else if(formData.phone==""){
      setShowicon(true)
    }
    setFormData((prev) => ({
      ...prev,
      [id]: value
    })
    );
  };
  
  const apiUrl = "https://paincurebackend.onrender.com"
  console.log(apiUrl)
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

       
const testimonials = [
  {
    name: "Olivia Sonny",
    age: 32,
    condition: "Depression",
    testimonial: "I was struggling with depression and it was affecting my career. When my friend told me about this technology, I was skeptical that a device would solve my problem. But NIBS has given me my life back.",
    image: "https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/test1.jpg"
  },
  {
    name: "Jasper fiery",
    age: 29,
    condition: "Post Partum Depression",
    testimonial: "I didn’t want to take antidepressants, so my doctor told me about NIBS. I noticed a significant improvement in my overall mood, energy, and symptoms after just 4-5 sessions with NIBS.",
    image: "https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/test2.jpg"
  },
  {
    name: "Charlotte Elizabeth",
    age: 38,
    condition: "Depression",
    testimonial: "My biggest problem was that medicines were causing lifestyle problems and I was losing my productivity at work. NIBS helped me improve without side effects, I am really thankful to their team.",
    image: "https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/test5.jpg"
  },
  {
    name: "Margot",
    age: 39,
    condition: "Depression & Anxiety",
    testimonial: "At first, talk therapy was helpful, but I soon stopped getting better. Then, my psychologist told me about Mave Health. Their team made a special program for me with NIBS, and it’s made my life much better.",
    image: "https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/test4.jpg"
  },
  {
    name: "Elton Butcher",
    age: 45,
    condition: "Depression",
    testimonial: "I visited my psychologist because of constant brain fog and I didn’t realize that it was depression. NIBS helped me improve my life.",
    image: "https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/test3.jpg"
  },
];

const submit = (e)=>{
  e.preventDefault();
  if(!checked){
    toast.error("Please accpet Privacy Policy");
    return;
  }

  if(formData.name == ''){
    toast.error("name is required");
    return;
  }
  if(formData.phone == ''){
    toast.error("phone is required")
    return;
  }
  if(formData.service == ''){
    toast.error("category is required")
    return;
  }
  else{
    setLoading(true)
    setShow(false)
    fetch(`${apiUrl}/api/users/whatsapp`,{method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)})
            .then(response => response.json())
            .then(data => {
              setLoading(false)
              console.log(data)
              if(data && data.length){
                toast.success("we'll get back to you shortly. :-)")
                setFormData({
                  name:'',
                  phone:'',
                  service:''
                })
              }
            })
            .catch(error => {
              console.error('Error fetching blog data:', error);
              toast.error("Hold on, we've got a problem. :-(")
              setLoading(false)
        }); 
  }
}
const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
  const { width } = useWindowSize();
  const [chunks, setChunks] = useState([]);
  const [checked, setChecked] = useState(false);
  const [category, setCategory] = useState("select Category");
  const categories = [
    'Neck pain',
    'Wrist pain',
    'Lower back pain',
    'Knee Pain',
    'Sedentary lifestyle'
  ];
  const toggleDropdown = () => {
    setIsOpen(!isOpen); // Toggle dropdown visibility
  };
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility
  const sections = [
    {
      heading: "Step: 1 Access Your Path to Relief",
      points: [
        "Tell us about your pain. Share your symptoms",
        "AI will analyze them to understand your condition better."
      ]
    },
    {
      heading: "Step: 2 Connect with Leading Experts",
      points: [
        "Get expert guidance.",
        "We'll connect you with top healthcare professionals who specialize in treating your specific pain."
      ]
    },
    {
      heading: "Step: 3 Engage in Tailored Care",
      points: [
        "Personalized care.",
        "Receive a tailored treatment plan, including customized exercise routines and online consultations."
      ]
    },
    {
      heading: "Step : 4 Implement and Track Your Progress",
      points: [
        "Track your progress.",
        "Monitor your improvements and celebrate your milestones with detailed progress reports."
      ]
    }
  ];
  const handleOptionClick = (item) => {
    setCategory(item);
    setChange({target:{id:'service',value:item}})
    setIsOpen(false); // Close dropdown after selecting an option
  };
  useEffect(() => {
    const chunkSize = width < 768 ? 1 : 4;
    setChunks(chunkArray(testimonials, chunkSize));
  }, [width]);
  return (
    
    <div className=" mt-2 rounded-3xl ">
      <Header bg="white" color="black"/>
       <section  className=" pb-16 bg-gradient-to-r from-blue-500 to-blue-400 " style={{ borderRadius: "0 0 30px 30px" }}>
      <Container className=' lg:ml-5 py-13 md:ml-2'>
        <Row className="align-items-center ">
          <Col md={6} className='md:mb-2 sm:mb-2'>
            <h1 className="text-white mb-3 lg:w-[682px] lg:h-[168px] font-dm-sans font-bold lg:text-[45px] lg:leading-[130%] tracking-[-0.02em] mb:text-[30px] mb:mt-4">Desk job got you down? We'll lift
               you and prevent physical health risks.</h1>
            <p className='	text-white mb-3 md:text-xl sm:text-sm'> 
            Personalized pain relief for the modern desk worker - paincure.Ai
            </p>
            <div className='d-flex justify-start items-center lg:w-[544px] lg:h-[64px] lg:gap-[40px] md:gap-[20px]  md:w-[200px] '>
              <Link href="/assesment">
              <Button  className="me-2 border-0  rounded-2xl bg-white text-black hover:bg-blue-500 hover:text-white lg:w-[162px] md:w-[60px]">Get Started</Button>
              </Link>
              <Link href="/services/sedentary-lifestyle-service">
              <Button className="me-2 border-1 border-white rounded-2xl text-black lg:w-[162px] bg-white md:w-[60px]">Learn More</Button>
              </Link>
            </div>
          </Col>
          <Col md={6} >
            {/* <Image src="https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/image1.png" alt="Paincure AI" className="img-fluid rounded-2xl lg:w-[464px] lg:ml-20  md:w-[200px] mt-8 " width={460} height={10} /> */}
            <svg className="img-fluid rounded-2xl scale-x-[-1] lg:w-[600px] lg:ml-20  md:w-[200px] mt-8 " viewBox="0 0 769 371" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M287.182 130.389C282.79 134.867 278.428 139.356 273.386 143.437C272.395 144.239 271.674 145.532 271.567 146.638C270.793 154.623 264.857 160.631 258.587 166.405C248.386 175.798 240.794 186.351 235.864 197.84C233.339 203.725 232.423 210.135 232.1 216.432C231.486 228.44 232.448 240.429 235.36 252.18C237.438 260.566 239.981 268.922 242.601 277.249C247.905 294.103 252.462 311.144 252.113 328.683" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M108.879 69.2589C97.63 69.94 88.4582 73.4943 80.9724 80.1872C71.1724 88.9492 68.7482 99.153 70.2794 110.036C71.1805 116.441 74.6635 122.351 79.0798 127.897C81.8027 131.317 84.3238 134.842 85.32 138.913C86.4785 143.649 85.6674 148.382 84.292 152.86C81.5571 161.763 77.5526 170.423 72.552 178.759C68.3307 185.795 65.2764 193.021 63.3104 200.666C60.3163 212.307 61.0962 223.862 62.9211 235.415C64.5027 245.427 67.5827 255.256 70.5865 265.064C73.6407 275.037 76.5921 285.017 79.3561 295.044C82.4967 306.436 83.2909 317.862 83.1824 329.413" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M483.639 137.658C484.771 140.783 485.871 143.901 487.331 146.966C488.916 150.292 491.756 151.991 495.824 153.391C503.752 156.119 512.067 157.26 520.581 157.707C528.438 158.119 531.003 155.533 530.3 150.863C529.703 146.893 533.508 143.452 533.211 139.75C532.943 136.405 533.891 135.131 538.007 134.186C540.697 133.568 541.139 131.401 539.443 129.29C536.26 125.33 532.892 121.398 532.791 116.471C532.771 115.517 532.304 114.357 532.836 113.638C538.888 105.477 534.834 98.1676 530.388 90.6626C528.741 87.8823 527.146 85.2497 524.637 82.857C519.409 77.8715 511.954 76.1187 504.489 74.5109C492.752 71.9828 480.846 72.261 469.682 75.9614C459.295 79.4045 450.425 84.3004 447.568 93.8687C446.849 96.2757 444.711 98.8213 443.769 101.479C441.246 108.594 442.185 115.8 446.216 122.073C448.203 125.166 448.37 128.655 451.17 131.657C453.606 134.268 455.712 137.469 457.197 140.733C460.005 146.908 457.643 152.135 453.135 157.276C446.36 165.001 436.41 170.273 428.258 176.896C412.127 190.002 402.388 205.34 402.323 223.924C402.288 234.293 402.965 244.53 405.527 254.688C408.082 264.812 410.425 274.974 413.298 285.044C416.119 294.933 419.542 304.713 421.971 314.682C422.935 318.639 424.885 322.461 425.685 326.481" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M316.692 152.692C315.424 157.293 312.266 161.282 309.272 165.25C305.379 170.411 306.052 174.819 309.736 180.049C315.31 187.961 319.343 196.502 323.763 204.872C327.631 212.197 330.219 219.769 332.613 227.4C333.508 230.253 332.543 233.313 331.235 235.951C328.604 241.259 329.742 246.464 330.555 251.751C330.828 253.53 331.042 255.326 331.062 257.116C331.228 272.271 331.625 287.429 331.359 302.582C331.214 310.801 333.387 318.785 334.007 326.908" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M669.396 145.377C669.642 149.279 672.165 152.705 673.352 156.417C673.709 157.533 675.501 158.665 676.996 159.221C686.831 162.886 697.073 165.575 708.195 165.413C712.77 165.346 715.328 163.655 714.987 160.39C714.568 156.373 716.942 152.96 717.976 149.282C718.486 147.469 718.543 145.668 718.768 144.008C720.13 143.549 721.352 143.254 722.416 142.758C726.257 140.966 726.547 139.379 724.279 136.295C722.338 133.658 720.167 130.973 719.23 128.088C718.421 125.597 717.351 122.553 720.405 120.26C722.674 118.557 722.036 116.296 722.021 114.493C721.932 103.626 718.109 93.8397 706.587 86.7026C700.873 83.1639 693.812 81.9659 686.965 80.8864C674.47 78.9167 661.905 79.7324 650.826 84.8001C639.866 89.8137 633.22 97.5631 630.329 107.381C626.588 120.089 631.76 131.272 639.29 141.983C642.205 146.13 643.783 149.951 642.52 154.564C641.058 159.898 636.992 163.915 631.354 166.75C623.261 170.819 614.53 174.133 606.43 178.194C594.136 184.357 585.71 193.125 580.114 203.44C571.892 218.597 572.132 234.391 573.851 250.389C575.612 266.771 581.02 282.51 586.56 298.233C589.699 307.14 593.75 315.854 597.424 324.647C597.543 324.931 598.024 325.125 598.336 325.361" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M269.897 177.081C275.107 176.589 279.981 176.505 285.351 177.812C294.537 180.049 299.997 184.956 304.359 190.791C310.871 199.502 309.68 209.071 306.766 218.25C304.989 223.845 305.66 229.124 306.921 234.376C307.667 237.485 307.835 240.63 308.446 243.724C310.032 251.748 310.521 259.886 310.252 268.035C310.054 274.002 310.22 279.978 309.861 285.938C309.561 290.93 311.235 295.35 314.67 299.515C320.68 306.802 323.211 315.029 325.137 323.403C325.439 324.716 325.777 326.023 326.099 327.333" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M503.815 156.819C502.171 161.696 500.02 166.491 495.941 170.443C490.581 175.636 489.611 180.554 493.674 186.684C499.428 195.366 501.895 205.037 504.558 214.491C506.392 221 508.565 227.609 507.841 234.485C507.567 237.092 507.324 239.606 505.946 242.015C504.049 245.33 503.254 248.87 503.305 252.419C503.408 259.594 502.62 266.75 502.585 273.908C502.547 281.782 503.314 289.654 503.572 297.53C503.631 299.339 504.257 301.214 502.412 302.996C501.721 303.664 502.13 305.51 502.846 306.452C507.56 312.654 509.382 319.511 510.852 326.468" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M501.808 302.915C497.743 301.243 496.563 298.009 496.325 295.078C495.745 287.944 495.612 280.751 496.078 273.61C496.682 264.349 495.718 255.22 494.437 246.043C493.244 237.501 490.415 229.218 493.294 220.211C496.632 209.768 495.037 199.205 486.477 189.873C481.009 183.911 473.04 181.857 464.455 180.44C462.615 180.136 460.732 179.983 458.868 179.76" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M644.087 178.891C655.475 179.992 666.041 183.045 673.728 189.54C677.969 193.123 680.164 198.244 681.563 203.269C683.137 208.924 681.931 214.221 680.084 219.813C678.195 225.532 677.809 231.502 678.701 237.697C680.233 248.331 681.309 259.077 680.35 269.886C679.557 278.811 679.768 287.786 679.534 296.739C679.484 298.671 680.208 300.523 681.495 302.067C687.147 308.849 690.183 316.328 691.87 324.202" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M297.453 134.239C297.766 142.402 302.368 147.358 311.525 150.28C319.188 152.727 327.101 153.879 335.319 153.941C341.295 153.986 343.533 152.302 343.615 147.807C343.686 143.915 344.142 140.167 346.687 136.631C347.3 135.779 347.281 134.228 346.221 133.123C347.076 131.652 348.869 131.201 350.475 130.561C353.687 129.283 353.989 127.553 352.343 125.156C350.005 121.752 346.667 118.759 346.344 114.498C346.239 113.117 345.763 111.88 346.575 110.544C349.936 105.013 349.299 99.3007 347.304 93.7258C342.848 81.2744 334.522 72.7661 313.69 70.2302C303.574 68.9988 294.091 69.7701 284.319 71.588C277.702 72.819 272.746 75.9112 268.761 79.4594C259.652 87.5711 254.906 96.9406 256.072 108.11C257.003 117.024 261.701 124.574 267.292 131.943C269.809 135.262 270.712 138.965 272.857 142.327" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.858 206.539C131.684 212.896 129.184 219.086 128.815 225.549C128.381 233.185 130.629 240.602 131.974 248.063C133.417 256.062 133.602 264.064 133.273 272.052C132.983 279.105 133.184 286.141 133.206 293.181C133.218 297.01 136.803 299.951 139.005 303.074C144.183 310.419 146.721 318.235 148.26 326.355C148.432 327.263 149.765 327.827 149.263 328.847" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M74.8296 223.506C76.5807 223.336 76.8195 224.76 77.0537 225.306C80.0303 232.251 83.4963 238.926 82.7628 246.728C81.9017 255.888 82.4022 265.104 85.2049 274.31C87.6763 282.428 91.0547 290.401 92.9206 298.569C94.8083 306.833 97.7343 314.729 101.755 322.446C103.07 324.972 104.574 327.439 105.991 329.934" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M131.459 151.772C129.487 157.04 127.352 162.277 125.597 167.586C124.266 171.613 127.737 174.66 130.387 177.503C139.411 187.185 147.431 197.288 153.807 208.153C158.537 216.215 162.088 224.553 162.336 233.499C162.419 236.533 161.379 239.508 160.292 242.495C158.721 246.81 159.793 251.313 160.368 255.706C160.54 257.018 160.745 258.331 160.758 259.648C160.919 276.116 161.157 292.584 161.141 309.053C161.134 315.282 162.92 321.425 162.247 327.659C162.109 328.941 163.307 328.782 164.158 329.078" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M717.398 98.7792C712.11 99.4529 707.171 97.8109 702.036 97.4285C692.516 96.7194 685.453 100.488 682.96 107.651C682.148 109.986 681.205 112.336 678.023 113.864C673.546 116.015 674.189 119.758 674.411 123.133C674.488 124.29 674.841 125.182 673.992 126.405C672.199 128.985 670.134 129.391 667.861 127.12C666.974 126.234 665.986 125.307 665.551 124.271C664.553 121.891 662.759 120.661 659.416 121.12C655.72 121.629 653.399 123.321 652.98 126.187C652.228 131.322 654.12 135.818 659.119 139.368C661.888 141.334 664.858 141.995 667.951 139.661" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M253.533 222.692C255.43 226.853 257.286 231.025 259.236 235.171C261.111 239.156 260.707 243.373 260.083 247.323C258.423 257.824 260.356 268.038 263.47 278.075C266.576 288.085 270.21 298.001 272.839 308.103C273.397 310.25 274.38 312.081 276.649 313.435" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M625.396 224.521C624.348 226.04 625.021 227.567 625.956 228.787C631.248 235.697 632.451 243.113 631.248 250.97C630.168 258.016 630.63 264.999 631.534 272.11C632.522 279.886 634.95 287.378 636.929 294.922C639.572 304.994 641.018 315.349 646.268 324.951" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M439.256 226.473C442.93 233.107 447.156 239.687 446.348 247.173C445.598 254.123 445.596 261.025 446.579 267.943C447.682 275.695 450.098 283.24 452.387 290.804C454.552 297.958 456.705 305.117 459.118 312.222C460.743 317.005 462.537 321.776 465.706 326.138" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M343.591 87.2997C338.581 87.3662 333.649 86.5771 328.685 86.4448C324.761 86.3402 320.742 86.7466 317.059 88.2238C312.053 90.2311 309.498 93.5609 308.902 97.6333C308.614 99.6041 307.961 101.18 305.997 102.274C301.888 104.563 300.767 107.631 301.431 111.292C301.537 111.878 301.512 112.487 301.45 113.08C301.272 114.799 302.466 117.031 299.162 117.721C295.805 118.423 294.803 116.571 293.43 114.636C292.206 112.913 291.882 110.05 287.464 110.627C283.838 111.101 281.268 112.07 280.486 115.043C280.377 115.458 279.61 115.774 279.148 116.136" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M110.796 75.6871C109.073 73.8415 111.421 71.4427 109.449 69.5502C109.224 69.3347 110.018 68.4433 111.661 68.4069C122.179 68.1738 132.322 69.4078 141.922 72.6054C149.196 75.0284 153.791 79.5906 157.508 84.916C160.75 89.561 161.497 94.6488 163.079 99.5942C163.994 102.455 162.824 105.362 161.193 107.78C158.644 111.563 160.35 114.84 161.945 118.198C162.889 120.185 164.325 122.045 165.676 123.903C168.056 127.176 167.817 128.303 163.835 130.35C162.693 130.936 161.334 131.272 160.605 131.533C160.618 133.023 160.818 134.239 160.581 135.404C160.374 136.427 160.277 137.466 157.818 136.986C155.205 136.476 152.274 136.914 149.482 136.938" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M507.439 90.9096C501.264 92.3154 497.193 95.0172 496.226 100.3C495.755 102.874 494.835 105.578 491.324 107.203C487.418 109.011 487.838 112.21 488.237 115.052C488.405 116.244 488.715 117.493 488.52 118.632C488.039 121.448 485.401 122.117 482.509 120.538C481.517 119.997 481.22 117.381 478.829 119.439" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M132.762 86.5982C126.782 88.6021 123.349 92.2169 122.745 97.0773C122.452 99.4337 121.354 100.959 118.929 102.106C115.721 103.623 115.284 105.935 115.184 108.587C115.077 111.43 116.927 114.76 112.216 117.002C110.516 114.958 107.486 114.055 105.788 111.613C103.54 108.381 97.7529 109.515 95.2312 113.03C91.46 118.287 97.2134 126.813 102.006 129.032C104.212 130.054 107.068 129.577 109.623 129.044" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M480.216 118.353C477.551 114.309 476.817 114.002 472.273 114.835C468.248 115.573 467.226 117.754 467.169 120.613C467.101 123.995 467.767 127.05 470.468 129.934C474.703 134.457 476.194 135.007 482.669 133.012" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M97.7112 178.197C114.935 177.303 127.622 188.499 130.414 198.691C130.584 199.311 130.845 199.73 131.407 200.107" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111.212 124.376C109.155 127.561 110.498 130.895 111.12 134.011C111.357 135.199 111.993 136.807 112.076 137.981C112.496 143.898 117.064 146.878 123.507 149.005C130.691 151.376 138.296 152.463 145.913 153.376C153.48 154.283 158.852 151.717 157.814 145.471C157.35 142.682 159.843 140.284 158.795 137.574" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M688.17 163.834C685.557 170.179 681.475 176.005 676.562 181.41C674.318 183.879 675.838 186.709 673.958 189.018" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M341.448 108.8C341.378 108.021 341.892 106.978 340.491 106.681C334.966 105.513 329.411 104.415 324.217 107.516" stroke="white" stroke-opacity="0.9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M156.961 86.391C150.532 86.8462 144.288 85.1655 137.872 85.4803" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M528.087 110.783C522.1 108.786 516.174 108.187 510.406 111.292" stroke="white" stroke-opacity="0.9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M276.775 110.786C276.768 112.888 276.709 114.868 279.044 116.58C280.144 117.386 280.263 119.091 280.55 120.424C281.306 123.943 283.498 126.868 286.744 129.29C288.696 130.746 291.237 130.53 293.694 129.975" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M155.27 106.276C149.153 104.237 143.158 103.492 137.594 107.323" stroke="white" stroke-opacity="0.9" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M529.779 91.0764C523.882 90.7688 517.984 90.4613 512.087 90.1537" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M659.119 140.81C656.503 143.339 653.86 145.851 651.281 148.402C649.379 150.283 646.877 151.182 643.851 151.324" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M473.836 134.162C471.102 137.163 468.451 140.208 465.089 142.845C463.508 144.085 461.717 144.836 459.502 145.025" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M715.24 118.49C712.909 118.032 710.596 117.508 708.243 117.133C704.446 116.526 700.735 116.496 697.556 118.641" stroke="white" stroke-opacity="0.9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M100.558 130.196C98.7131 132.121 96.8592 134.042 95.0252 135.973C92.8875 138.225 90.1349 139.824 86.6863 140.698" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M659.443 124.338C663.16 125.414 664.226 127.15 662.352 130.068C661.088 132.035 661.643 133.737 665.11 133.956" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M278.026 311.275C276.127 313.364 276.869 315.542 277.614 317.724C278.791 321.167 279.719 324.68 282.355 327.708" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M452.439 135.419C450.967 135.7 449.887 136.043 450.068 137.591C450.33 139.841 450.169 142.122 450.189 144.389" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.492 194.56C277.521 197.902 277.55 201.243 277.578 204.584" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.253 166.635C277.279 169.619 277.304 172.602 277.33 175.586" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M276.659 151.603C277.547 154.437 277.004 157.329 277.198 160.191" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.322 253.976C111.659 256.846 111.684 259.71 112.395 262.568" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M277.621 209.596C277.646 212.461 277.67 215.325 277.695 218.189" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M477.902 119.805C477.971 120.616 477.427 121.27 477.111 121.993C476.105 124.293 475.614 126.738 479.83 127.666" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.236 298.373C112.519 301.232 111.74 304.133 112.775 306.961" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M110.961 95.0196C110.944 97.884 109.816 100.758 111.035 103.612" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M531.611 141.902C528.041 141.694 524.471 141.485 520.901 141.277" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111.838 197.41C111.115 200.042 111.138 202.668 111.905 205.287" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M276.917 181.676C278.08 184.257 276.908 186.94 277.45 189.548" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.114 284.053C112.365 286.673 111.667 289.336 112.647 291.925" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M110.998 153.737C111.021 156.363 111.043 158.988 111.066 161.613" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M623.577 120.706C623.599 123.332 623.622 125.957 623.644 128.583" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M287.506 113.916C290.831 115.027 291.031 117.125 289.812 119.244C288.324 121.833 289.061 123.182 292.708 123.539" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M623.822 149.347C623.844 151.973 623.867 154.598 623.889 157.223" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M451.139 309.793C451.162 312.419 451.184 315.044 451.206 317.669" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.824 312.689C111.889 315.295 112.632 317.945 112.426 320.57" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M110.838 80.6992C110.491 84.0438 109.919 87.3904 110.924 90.7235" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M111.586 168.054C110.484 170.689 111.491 173.306 111.654 175.93" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M716.903 149.625C713.68 148.861 710.38 149.542 707.127 149.35" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M520.91 115.141C520.049 116.922 518.444 114.957 517.44 115.545C515.684 116.574 514.029 117.706 512.332 118.794" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M623.454 106.386C623.475 108.773 623.495 111.16 623.516 113.546" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M112.457 269.728C112.322 272.116 112.187 274.504 112.053 276.892" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M707.378 124.286C703.441 121.805 701.33 124.249 699.017 126.147" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M99.9518 113.732C104.184 114.118 105.73 115.396 104.003 118.288C102.641 120.571 103.898 121.455 105.613 122.634" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M147.871 111.889C143.911 109.614 141.995 113.157 139.045 113.755" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M344.494 138.491C341.583 137.769 338.594 138.369 335.649 138.209" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M451.966 297.613C450.91 299.731 451.838 301.917 451.555 304.061" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M451.249 268.26C450.735 270.289 452.862 273.056 448.506 274.012" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M449.496 63.4788C448.301 66.3533 449.828 69.2046 449.569 72.0711" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M334.541 117.452C334.54 117.333 334.549 117.213 334.536 117.094C334.331 115.218 336.056 112.669 332.594 111.829C329.776 111.145 328.025 112.961 326.605 114.656" stroke="white" stroke-opacity="0.9" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M623.693 134.311C623.718 137.175 623.742 140.039 623.767 142.903" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M453.133 53.4226C450.052 55.9062 446.931 53.7664 443.826 53.5023" stroke="white" stroke-opacity="0.9" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M281.878 54.5306C278.157 55.2042 275.518 56.5318 276.34 59.9486" stroke="white" stroke-opacity="0.9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M473.236 118.413C475.148 117.359 475.873 118.796 476.968 119.455" stroke="white" stroke-opacity="0.9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          </Col>
        </Row>
      </Container>
    </section>
       <section id="info" className="py-5">
       <Container className="text-center my-5 border-1  p-3">
      <h1 className='lg:text-3xl mb-2 font-bold mb:text-2xl'>Experience the Future of Pain Management</h1>
      <p className='mb:text-sm'>At paincure.Ai, we harness state-of-the-art AI technology, including Mediapipe and OpenCV, to analyze body posture and detect pain symptoms.</p>
      <Row className="mt-[50px]">
        <Col md={4}>
          <Card className='lg:h-[80px]  mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>Boost productivity</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>Decrease absenteeism</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>Early Risk Prevention</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row >
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>Reduce Sick Leave Costs</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>Weight Control</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='lg:h-[80px] mb:mb-3 hover:bg-blue-400 hover:text-white'>
            <Card.Body>
              <Card.Title>One to One Sessions</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
   
       <section id="features" className="py-5">
       <h1 className='lg:text-3xl font-bold mb:text-2xl text-center'>Pain Relief services</h1>
      <Container className='mt-10'>
        <Row>
          <Col md={4}>
            <Card className='mb:h-[300px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/backpain.png' alt="Back Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Back Pain</Card.Title>
                <Card.Text  className='lg:h-[100px]'>Office work ofte­n creates lower back discomfort, ranging from light pains to se­vere cramps, 
                  disrupting our eve­ryday activities. Specific strategie­s are crucial to soothe this bodily misery.</Card.Text>
                  <div className=''><Link href={`/services/lower-back-service`} passHref><Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
                  </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mb:h-[300px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/neckpain.png' alt="Neck Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Neck Pain</Card.Title>
                <Card.Text  className='lg:h-[100px]'>Sitting at a desk ofte­n leads to shoulder and neck pain, making e­veryday jobs tough. 
                  Health problems could also bring about this body pain, me­ssing up work efficiency.
                </Card.Text>
                <Link href={`/services/neck-service`} passHref><Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} >
            <Card className='mb:h-[300px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/handpain.png' alt="Hand Pain" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Wrist and Hand Pain</Card.Title>
                <Card.Text  className='lg:h-[100px]'>Sitting jobs often cause­ wrist and ankle discomfort, leading to pain in conditions like arthritis. 
                  The­se joint pains can interrupt eve­ryday activities, but there are­ specific ways to ease the­m.</Card.Text>
                  <Link href={`/services/wrist-service`} passHref><Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='mt-5'>
          <Col md={4}>
            <Card className='mb:h-[300px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/kneepain.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Knee and Hip Pain</Card.Title>
                <Card.Text  className='lg:h-[100px]'>Sitting at a desk all day strains our kne­es and hips. It can bring out pain from issues like arthritis or we­ight problems.
                   Joint pain can make eve­ryday tasks tough.</Card.Text>
                   <Link href={`/services/knee-service`} passHref> <Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mb:h-[300px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/yoga.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body>
                <Card.Title>Yoga for Headaches and Migraines</Card.Title>
                <Card.Text  className='lg:h-[100px]'> Hormones changing and things in our surroundings can cause­ awful headaches and migraines. The­se can mess up regular activitie­s.</Card.Text>
                <Link href={`/services/yoga-service`} passHref><Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='mb:h-[320px] lg:h-[280px]'>
            <Image src='https://pub-347bb297e82743de9cb21763c18763ef.r2.dev/paincure/weight.png' alt="Paincure AI" className='mt-2 ml-2' width={50} height={50}/>
              <Card.Body >
                <Card.Title className=''>Sedentary Lifestyle Risk Assessment</Card.Title>
                <Card.Text className='lg:h-[100px]'>Sitting too much can lead to me­ntal issues like stress and sadne­ss, harming happiness. We nee­d specific solutions to fight these fe­elings and bring back balance to work and life.</Card.Text>
                <Link href={`/services/sedentary-lifestyle-service`} passHref><Button variant="primary" className="mt-3 w-50 p-2 rounded-xl">More Info</Button></Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
    <Container className="py-5">
    <ProgramDetails mainHeading={"How It Works: Our 4 Easy Steps process to Achieve Lasting Pain Relief"}
       sections={sections} />
    </Container>
    </section>
    {/* <section id="testimonials" className="pt-2 pb-5">
  <Container className="my-5">
  <h2 className="text-center mb-12 text-3xl font-bold">Testimonials</h2>
      <Carousel variant='dark' className='mb:flex'>
        {chunks.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <Row>
              {chunk.map((t, index) => (
                <Col key={index} md={3} className="mb-4">
                  <Card className="h-[500px] lg:flex lg:flex-col lg:justify-between ">
                    <Card.Body className="lg:flex-grow-1 ">
                      <Card.Title className="font-bold text-xl">{t.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {t.age}, {t.condition}
                      </Card.Subtitle>
                      <Card.Text className='h-[200px]'>{t.testimonial}</Card.Text>
                    </Card.Body>
                    <div className='flex justify-center items-center lg:mb-5'>
                    <Image src={t.image}  width={170} height={170} className='rounded-full'/>
                    </div>         
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
</section> */}

    <section id="faq" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 text-3xl">FAQ</h2>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header> What is paincure.Ai?</Accordion.Header>
            <Accordion.Body>
            paincure.Ai is a digital platform that combines AI technology with HCPC-registered healthcare experts to provide 
            personalized pain relief therapies, helping you live a pain-free and productive life.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>How do I report my pain symptoms on the paincure.Ai platform?</Accordion.Header>
            <Accordion.Body>
            Log in, navigate to "Report Symptoms," and answer questions about your pain. You can also upload relevant medical records
             to help our experts create a tailored treatment plan for you.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
              <Accordion.Header>How does digital pain relief therapy work for me?</Accordion.Header>
              <Accordion.Body>
              After reporting your symptoms, our platform connects you with healthcare experts who provide a personalized therapy plan, including exercises and lifestyle adjustments. 
              Access our content library and schedule one-on-one sessions as needed.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>How many years of experience do your healthcare experts have?</Accordion.Header>
              <Accordion.Body>
              Our experts are HCPC-registered, with many years of experience, including practice within the NHS, ensuring you receive qualified and dedicated care.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='4'>
              <Accordion.Header>What equipment do I require to get started?</Accordion.Header>
              <Accordion.Body>
              You only need a device with internet access. Some exercises may require basic items like a yoga mat and resistance bands, which will be specified in your plan.
            </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='5'>
              <Accordion.Header>How long are trial periods?</Accordion.Header>
              <Accordion.Body>
              Enjoy a 1-month free trial with full access to our content library and a complimentary one-on-one session with a healthcare expert.           
               </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='6'>
              <Accordion.Header>How do I report my pain symptoms on the paincure.Ai platform?</Accordion.Header>
              <Accordion.Body>
              Simply log in, go to "Report Symptoms," and fill out the details of your pain. Our support team is available to assist you if needed.
               </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </Container>
    </section>
    <section id="team" className="py-5">
    <Container className="py-5">
      <h1 className="text-center text-3xl mb-5">For You And Your Team</h1>
      <Row>
        <Col md={6}>
          <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-400 text-white h-[350px]">
            <h3 className='rounded-xl bg-gray-100 text-black p-1 text-center w-[120px]'>FOR CORPORATES</h3>
            <h2 className='mt-3 lg:text-3xl lg:w-[501px] md:text-xl mb:text-xl'>Enhance Employee Wellness And Boost Productivity</h2>
            <div className='mt-3 h-[1px] bg-white w-50'></div>
            <ul className="list-unstyled">
              <li className='mt-2'>Reduce Absenteeism</li>
              <li className='mt-2'>Increase Productivity</li>
              <li className='mt-2'>Promote Employee Satisfaction</li>
            </ul>
            <Button variant="light" className="mt-3 w-100 p-2 rounded-xl"  onClick={handleShow}>Request a Demo</Button>
          </div>
        </Col>
        <Col md={6}>
          <div className="p-4 rounded-lg bg-gray-200 h-[350px]">
            <h3 className='rounded-xl bg-gray-100 text-black p-1 text-center w-[120px]'>FOR EMPLOYEES</h3>
            <h2 className='mt-3 lg:text-3xl lg:w-[501px] mb:text-xl'>Alleviate Pain And Improve Your Work Experiences</h2>
            <div className='mt-3 h-[1px] bg-black w-50'></div>
            <ul className="list-unstyled">
              <li className='mt-2'>Personalized Pain Relief</li>
              <li className='mt-2'>Access Expert Care</li>
              <li className='mt-2'>Improve Daily Comfort</li>
            </ul>
            <Link href={`/assesment`} passHref> <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Get started</Button> </Link>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
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
                        blogs && blogs.length ? blogs.slice(0, 3).map((blog, index) => (
                            <Col key={index} md={4}>
                                <Card className='p-4 h-[500px]'>
                                    <div className=' h-[300px]' >
                                        <Image
                                            src={blog.image || './blog.png'}
                                            width={400}
                                            height={400}
                                      
                                        />
                                    </div>
                                    <Card.Body className='h-[100px]'>
                                        <Card.Title className='mb-2'>{blog.title}</Card.Title>
                                        <Card.Text >
                                            {blog.body.slice(0, 50)}......
                                            <Link href={`/blog/${blog.slug}`} passHref>
                                                <Button variant="primary" className="mt-3 w-100 p-2 rounded-xl">Read More</Button>
                                            </Link>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )) : <h1>No Blogs</h1>
                    )}
                    </Row>
                    </Container>
                    <>
      {/* Sticky Button */}
      <div className="fixed lg:bottom-4 lg:right-4 p-2  mb:bottom-10 mb:right-4">
        <Button
          variant="success"
          style={{  background: 'linear-gradient(to right, #3b82f6, #60a5fa)', borderColor: '#3b82f6' }}
       className='flex justify-between items-center mr-2'
          onClick={handleShow}
        >
           <FaWhatsapp
               className='text-green-200 mr-1'
            />
          Book a free demo

        </Button>
      </div>

      <Modal show={show} onHide={handleClose} className={`${isLargeScreen ? 'mb:top-[150px] mb:w-[400px] mb:p-2':''}`}>
        <Modal.Header closeButton>
          <Modal.Title>Book a FREE Consulting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="flex items-center justify-center  bg-gray-100 border-2 border-blue-200">
      <div className="w-full p-8 bg-white rounded ">
      
        <form className="space-y-4">
          <div className="lg:flex lg:items-center lg:space-x-4 ">
           <div className='w-full'>

         
            <input
              type="text"
              id='name'
              placeholder="Full Name"
              value={formData.name}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none  mb:mb-2"
              onChange={setChange}
            />
             <div className="relative mb-2"> {/* Wrapper for relative positioning */}
            {showIcon && <FaWhatsapp className="absolute inset-y-0 left-3 my-auto text-green-500" size={24} />}
            <input
                type="text"
                placeholder="        WhatsApp Preferred" // Use a simple string for the placeholder
                id="phone"
                onChange={setChange}
                value={formData.phone}
                className="pl-10 w-full p-2 border border-gray-300 rounded focus:outline-none" // Add padding to the left to avoid overlap with the icon
            />
        </div>
            <div className="relative w-full">
      <div
        className="p-2 border border-gray-300 rounded focus:outline-none  cursor-pointer"
        onClick={toggleDropdown} // Show/hide dropdown on click
      >
        {category}
      </div>
      {isOpen && ( // Only render the dropdown if isOpen is true
        <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded mt-1 z-10">
          {categories.map((item) => (
            <li
              key={item}
              id={item}
              className="p-2 hover:bg-gradient-to-r from-blue-500 to-blue-400 hover:text-white cursor-pointer"
              onClick={() => handleOptionClick(item)} // Handle option click
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
          </div>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="w-4 h-4 border-gray-300 rounded" value={checked} onClick={()=>{setChecked(!checked)}}/>
            <label htmlFor="terms" className="ml-2 text-gray-700">I have read and agree to paincure.Ai's <a href="/terms-condition" className="text-blue-500">Terms of Use</a> and <a href="/privacy" className="text-blue-500">Privacy Policy</a>.</label>
          </div>
          <button type="submit" className="w-full py-2 mt-4 text-white bg-gradient-to-r from-blue-500 to-blue-400 rounded hover:bg-white hover:font-bold" onClick={submit}>Book a Free Demo</button>
        </form>
      </div>
    </div>
        </Modal.Body>
       
      </Modal>
    </>
    {/* </section> */}
    </div>
  );
}
