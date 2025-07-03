import React, { useEffect, useRef } from "react";
import grass from "../../assets/images/grass.jpg";
import ball from "../../assets/images/ball.jpg";
import { Carousel } from 'primereact/carousel';
import bat from "../../assets/images/bat.webp";
import ManPlay from "../../assets/images/Man play vector.jpg"
import Glide from "@glidejs/glide";
import IT4 from "../../assets/images/IT 4.jpg"
import IT5 from "../../assets/images/IT 5.jpg"
import IT6 from "../../assets/images/IT 7.jpg"
import IT8 from "../../assets/images/IT 8.jpg"
import Main2 from "../../assets/images/Main image back.jpg"
import sunset from "../../assets/images/sunset.webp"
import { Link } from 'react-router-dom';
import nn from "../../assets/images/nn.jpg"
import profile1 from "../../assets/images/Patient/patient1.png"
import profile2 from "../../assets/images/Patient/patient2.png"
import profile3 from "../../assets/images/Patient/patient3.png"
import contactform from "../../assets/images/contact page.jpg"
import {testinomials} from "../../Pages/Testinomials/testinomials";
import { FaCalendarCheck, FaClipboardList, FaTools, FaBan, FaFileInvoice, FaHeadset } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import football from "../../assets/images/Football ground.jpg"
import "@glidejs/glide/dist/css/glide.core.min.css"; // only this line inside TS/JS

import { useState } from "react";
import formimg from "../../assets/images/form.png";
import { motion } from "framer-motion";
import "./Home.css";
import { useSwipeable } from "react-swipeable";
import { Search, CalendarDays, CreditCard } from "lucide-react";
import Cricket from "../../assets/images/Cricket.jpg"

const Home: React.FC = () => {
  console.log("hek");
  
  // -------------------------------------------------------------
  const slideInFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.8,
      ease: "easeOut",
    },
  },
};
//   testimonials//////////////////////////////////////////////////////////
// Testimonials data for ground booking
const testimonials = [
  {
    name: "Nirmal",
    role: "Player",
    image: profile1,
    feedback: "Booking a ground with ZadSports is seamless! I found a verified ground near me and booked in minutes.",
  },
  {
    name: "Riya",
    role: "Ground Owner",
    image: profile2,
    feedback: "ZadSports helped me list and manage my ground easily. I’ve seen more bookings since I joined.",
  },
  {
    name: "Arjun",
    role: "Player",
    image: profile3,
    feedback: "The platform is so smooth. I could check time slots, book, and even pay within seconds!",
  },

];
// -------------------------------------------------aboutus
useEffect(() => {
  const slider = new Glide(".glide-09", {
    type: "carousel",
    autoplay: 1,
    animationDuration: 3000,
    animationTimingFunc: "linear",
    perView: 3,
    gap: 24,
    direction: "rtl", // <--- Scrolls from left to right
    breakpoints: {
      1024: { perView: 2 },
      640: { perView: 1 },
    },
  });

  slider.mount();
  return () => slider.destroy();
}, []);
// -------------------------------------
 useEffect(() => {
    const slider = new Glide(".glide-versions", {
      type: "carousel",
      autoplay: 1,
      animationDuration: 3000,
      animationTimingFunc: "linear",
      perView: 3,
      gap: 4, // reduced gap
      direction: "rtl",
      breakpoints: {
        1024: { perView: 2 },
        640: { perView: 1 },
      },
    });

    slider.mount();
    return () => slider.destroy();
  }, []);
// -------------------------------------------
const [showFeedbackForm, setShowFeedbackForm] = useState(false);

const slideInFromLeft1 = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};
 

  
const logos = [
  {
    src: "/src/assets/about/coreBeleif.png",
    alt: "Client 1",
    url: "https://example1.com",
    tooltip: "ZadSports",
  },
  {
    src: "/src/assets/about/coreBeleif.png",
    alt: "Client 2",
    url: "https://example2.com",
    tooltip: "Client Two",
  },
  {
    src: "/src/assets/about/coreBeleif.png",
    alt: "Client 3",
    url: "https://example3.com",
    tooltip: "Client Three",
  },
  {
    src: "/src/assets/about/coreBeleif.png",
    alt: "Client 4",
    url: "https://example4.com",
    tooltip: "Client Four",
  },
  {
    src: "/src/assets/about/coreBeleif.png",
    alt: "Client 5",
    url: "https://example5.com",
    tooltip: "Client Five",
  },
];
// new arival//////////////////////////////////////////////////////////////////////////////////////
const releaseData = [
  {
    version: "Version 1.1",
    points: [
      {
        title: "Improved Booking UI",
        content: "Users can now experience a faster and cleaner interface for ground booking with fewer steps.",
      },
      {
        title: "Slot Availability Fix",
        content: "Resolved issues where slots weren't showing up in rare time zones.",
      },
    ],
  },
  {
    version: "Version 2.0",
    points: [
      {
        title: "New Owner Dashboard",
        content: "Dashboard now shows insights like revenue, bookings per day, and reviews.",
      },
      {
        title: "Search Filters Added",
        content: "Users can filter grounds by sport type, lighting, amenities, and more.",
      },
    ],
  },
  {
    version: "Version 2.1",
    points: [
      {
        title: "Bug Fixes",
        content: "Minor performance improvements and fixes from 2.0 feedback.",
      },
    ],
  },
  {
    version: "Version 3.0",
    points: [
      {
        title: "Mobile App Launch",
        content: "ZadSports is now available on Android and iOS for faster access.",
      },
      {
        title: "Payment Gateway Update",
        content: "Added Razorpay and PayPal for smoother payment options.",
      },
    ],
  },
  {
    version: "Version 3.1",
    points: [
      {
        title: "Live Chat Support",
        content: "Users and owners can now chat directly with our team inside the app.",
      },
    ],
  },
];

  const [selectedVersion, setSelectedVersion] = useState(releaseData[0]);
  const remainingReleases = releaseData.slice(1);
const navigate = useNavigate();
  const responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  const versionTemplate = (item) => {
    const isSelected = selectedVersion.version === item.version;
    return (
      <div className="text-center px-3 py-2">
        <button
          onClick={() => setSelectedVersion(item)}
          className={`w-50px py-1 px-3 rounded-lg text-sm font-semibold border transition-all duration-500 ${
            isSelected
              ? 'bg-[#0478df] text-white border-[#0478df]'
              : 'bg-white text-[#0478df] border-gray-300 hover:bg-blue-50'
          }`}
        >
          Version {item.version}
        </button>
      </div>
    );
  };

// -------------------------------------------------------------

const blogArticles = [
  {
    image: football,
    title: "Why Verified Grounds Make All the Difference",
    description:
      "Learn how our admin approval process ensures quality and a reliable playing experience.",
      date: "June 10, 2025",
       link: "#",
  },
  {
    image: Cricket,
    title: "The Rise of Digital Sports Booking: How It’s Changing the Game",
    description:
      "Explore how apps like ZadSports are transforming the way we play and plan sports activities.",
      date: "June 7, 2025",
       link: "#",
  },
  {
    image: sunset,
    title: "How Ground Owners Can Maximize Their Listings",
    description:
      "Practical tips for ground owners to increase visibility and attract more bookings on ZadSports.",
      date: "June 10, 2025",
       link: "#",
  },

];
 const [showModal, setShowModal] = useState(false);
  const[name,setName]=useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  
  const handleClick = () => {
    const to = "soniyateddy9791@gmail.com";
    const subject = encodeURIComponent(`Inquiry from ${name}`); // You can customize this
  
    const body = encodeURIComponent(
      `Dear Zadroit Team,\n\n` +
      `I hope this message finds you well.\n\n` +
      `${description}\n\n` +
     `Email : ${email}\n`+
     `Mobile Number : ${phone}\n\n`+
      `Best regards,\n` +
      `${name}\n`+
       `${phone}`
    );
  
    const mailtoLink = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };
  
  const whyChooseData = [
  {
    icon: <FaCalendarCheck className="text-yellow-500 text-3xl mb-2" />,
    title: 'Easy Booking',
    description: 'Quick and hassle free ground reservations.',
  },
  {
    icon: <FaClipboardList className="text-yellow-500 text-3xl mb-2" />,
    title: 'End-to-End Management',
    description: 'We handle everything from booking to payments.',
  },
  {
    icon: <FaTools className="text-yellow-500 text-3xl mb-2" />,
    title: 'Extra Services',
    description: 'Get equipment, Food, Toilet, Stay and more in one place.',
  },
  {
    icon: <FaBan className="text-yellow-500 text-3xl mb-2" />,
    title: 'Less Cancellations',
    description: 'Reliable bookings with minimal last minute changes.',
  },
  {
    icon: <FaFileInvoice className="text-yellow-500 text-3xl mb-2" />,
    title: 'Clear Invoicing',
    description: 'Transparent pricing with instant invoices.',
  },
  {
    icon: <FaHeadset className="text-yellow-500 text-3xl mb-2" />,
    title: 'Customer Support',
    description: 'Friendly help whenever you need it.',
  },
];

 const [_isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
 
// ------------------------------------------------------nw releases

 return (
    <div className="bg-[#EEF7FF]">
<div
  id="home"
  className="min-h-screen md:min-h-[80vh] lg:min-h-[90vh] relative overflow-hidden flex flex-col lg:flex-row items-center justify-center bg-cover bg-center bg-no-repeat overflow-x-hidden"
  style={{
    backgroundImage: `linear-gradient(rgba(0, 31, 63, 0.5), rgba(0, 31, 63, 0.5)), url(${ball})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 z-0" />

  {/* Main Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 py-12 gap-10">
    
    {/* Right-to-Left Text Animation */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:w-1/2 text-center lg:text-left"
    >
      <p className="text-base sm:text-lg md:text-sm text-white tracking-widest uppercase">
  Your Game. Your Time. Your Turf.
</p>

<h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-5xl font-bold text-[#EEF7FF] mt-4 leading-tight">
  Book grounds instantly. Play without limits.
</h1>

      <p className="text-sm sm:text-base text-white mt-4">
        With ZadSports, you can reserve your favorite sports grounds anytime, anywhere. Whether you're training, competing, or just playing for fun we empower your squad with real-time bookings, flexible packages, and seamless experiences.
      </p>
    </motion.div>

    {/* Right-to-Left Image Animation */}
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:w-1/2 mt-10 lg:mt-0 flex justify-center items-center relative"
    >
      {/* Main Ball Image */}
      <motion.img
        src={Main2}
        alt="Main2"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        className="w-56 sm:w-64 md:w-72 lg:w-[440px] h-[300px] md:h-[350px] lg:h-[380px] object-cover rounded-xl shadow-xl z-10"
      />

      {/* Overlap Grass Image */}
      <motion.img
        src={grass}
        alt="Grass"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4 }}
        className="absolute top-[10rem] right-4 sm:right-8 md:right-10 lg:right-1 w-52 sm:w-60 md:w-64 lg:w-[300px] h-[200px] md:h-[220px] lg:h-[240px] object-cover rounded-xl shadow-xl z-20"
      />
    </motion.div>
  </div>
</div>


{/* -------------------------------------------------------------------- */}
 <div id="about" className="mt-20 bg-[#F0F8FF] py-20 px-6 sm:px-4">
  {/* About Us Title (Center & Top) */}
  <h5 className="text-xl md:text-2xl font-bold text-[#0478df] tracking-widest uppercase text-center -mt-8 mb-12">
    About Us
  </h5>

  {/* Flex Container with responsive layout */}
  <div className="flex flex-col lg:flex-row items-start justify-center max-w-6xl mx-auto gap-8">
    {/* Left - Text Content */}
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="w-full lg:w-1/2 flex flex-col items-start text-center lg:text-center px-2"
    >
      <h2 className="text-3xl md:text-4xl font-medium text-[#07332f] mb-6">
        The Story <span className="text-[#0478df]">ZAdroit IT SolutionS</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-700 font-medium text-justify">
        What started as a small team of tech experts has grown into a trusted global IT solutions provider.
        With over a decade of experience, we help businesses streamline operations, boost productivity, and
        stay ahead with cutting edge technology.
      </p>
      <p className="mt-4 text-lg md:text-xl text-gray-700 font-medium text-justify">
        Driven by innovation and strong partnerships, our mission remains the same — empowering businesses
        with future-ready solutions.
      </p>
    </motion.div>

    {/* Right - Images Section */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}
      className="w-full lg:w-1/2 flex justify-center"
    >
      <div className="grid grid-cols-2 gap-3 px-2 mt-8 lg:mt-0">
        {[IT4,IT5,IT6,IT8].map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.3, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, ease: "easeOut" }}
            viewport={{ amount: 0.3, once: true }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src={src}
              alt={`Ground ${i + 1}`}
              className="w-[220px] h-[240px] sm:w-[170px] sm:h-[190px] object-cover rounded-xl"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Our Products Section */}
  <div className="w-full mt-16">
  <p className="text-center text-xl md:text-2xl font-bold text-[#0478df] uppercase mb-6">
    Our Products
  </p>
  <div className="glide-09 relative w-full overflow-hidden">
    <div data-glide-el="track">
      <ul className="glide__slides flex">
        {logos.map((logo, idx) => (
          <li key={idx} className="glide__slide flex justify-center px-4">
            <img
              src={logo.src}
              alt={logo.alt}
              onClick={() => window.open(logo.url, "_blank")}
              className="h-20 w-auto object-contain cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>
</div>

{/* ------------------------------------------------------------------------------------------------------------- */}
      <div id="services" className=" scroll-section bg-[#bde1ff] py-12 px-6 md:px-12 lg:px-20">

        {/* Top Section - Contact Info */}
 
       <div  className="bg-[#FBFBFB] py-12 px-6 md:px-12 lg:px-20">
  <h5 className="text-xl md:text-2xl text-center mb-4 font-bold text-[#0478df] tracking-widest uppercase">
    How to Book Your Ground
  </h5>
  <h2 className=" font-bold text-center text-[#07332f] mb-12">
    Simple, fast, and hassle-free booking in just 3 steps  no registration required!
  </h2>
<div className="flex flex-wrap justify-center gap-6">
 
        
  {[
  {
    Icon: Search,
    title: "1. Browse & Select",
    desc: "Find your perfect ground with powerful filters and maps.",
    points: ["Nearby ground search", "Filter by sport type", "Verified reviews"],
    delay: 0.3,
  },
  {
    Icon: CalendarDays,
    title: "2. Pick Date & Time",
    desc: "Choose the right time slot for your match.",
    points: ["Instant slot confirmation", "Time slot reminders", "Calendar sync"],
    delay: 0.5,
  },
  {
    Icon: CreditCard,
    title: "3. Book & Pay",
    desc: "Confirm your ground with secure payments.",
    points: ["No hidden charges", "UPI / Card options", "Receipt on WhatsApp"],
    delay: 0.7,
  },
].map((step, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: step.delay }}
    viewport={{ once: true }}
    className="group bg-white rounded-xl shadow-md w-full sm:w-[90%] md:w-[48%] lg:w-[30%] p-6 text-center hover:shadow-xl transition-all duration-700"
  >
    {/* Icon */}
    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-transparent border border-gray-400 group-hover:bg-yellow-300 mx-auto mb-4 transition duration-500">
      <step.Icon className="w-6 h-6 text-black transition duration-500" />
    </div>

    {/* Title & Description */}
    <h3 className="text-xl font-bold mb-2 text-[#0f172a]">{step.title}</h3>
    <p className="text-sm text-gray-700 font-medium mb-4">{step.desc}</p>

    {/* Animated Bullet Points */}
   <div className="flex flex-col items-center">
  <div className="flex flex-col items-start">
    {step.points.map((point, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: step.delay + i * 0.15 }}
        viewport={{ once: true }}
        className="flex items-start gap-2 mb-2 text-gray-700 text-sm"
      >
        <span className="text-blue-600 font-bold">✔</span>
        <span>{point}</span>
      </motion.div>
    ))}
  </div>
</div>

  </motion.div>
))}

</div>


</div>
{/* ====================================================================================== */}

{/* -------------------------------------------------------------------------------------------- */}
 <section className="py-16 px-6 bg-[#f4faff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-2xl font-bold text-[#0478df] text-center mb-6">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {whyChooseData.map((item, index) => (
            <div
              key={index}
              className="bg-white border-l-4 border-blue-500 rounded-lg shadow-sm px-6 py-6 hover:shadow-lg transition duration-300"
            >
              <div className="text-[#FFCC00] flex flex-col items-start text-left">
                {item.icon}
                <h3 className="text-lg font-bold text-[#07332f] mt-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

{/* -------------------------------------------------------------------------------------------------------------- */}
 <section id="testimonials" className="py-16 px-6 sm:px-10">
  <div className="max-w-6xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
        Testimonials
      </h3>
      <h2 className="font-bold mt-5 font-medium text-[#0F172A]">
        What Players & Owners Say
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonials.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white p-6 rounded-xl shadow-md hover:scale-105 text-center"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"
          />
          <h4 className="font-bold text-[#1D4ED8] text-lg">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
          <p className="text-gray-700 mt-3 text-sm leading-relaxed">“{item.feedback}”</p>
        </motion.div>
      ))}
    </div>

    <div className="mt-10 text-center">
     <button
  onClick={() => navigate("/testimonials")}
  className="inline-block bg-[#0478df] text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
>
  View More
</button>

    </div>
  </div>
</section>
{/* ------------------------------------------------------------------------------------------------ */}

   <section id="pages" className="bg-[#F0F8FF] py-12 px-4 sm:px-6 md:px-10">
  <div className="max-w-6xl mx-auto">
    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest text-center sm:text-left">
      BLOGs
    </h3>
    <h2 className="text-2xl sm:text-3xl md:text-4xl mt-3 font-medium text-[#0F172A] text-center sm:text-left">
      Sports Insights and Booking Tips
    </h2>
    <p className="text-[#334155] mt-4 sm:mt-6 max-w-3xl text-center sm:text-left mx-auto sm:mx-0 text-sm sm:text-base">
      Latest News & Articles.
    </p>

    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
      {blogArticles.map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
        >
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-48 sm:h-52 object-cover"
          />
          <div className="p-4 sm:p-5">
            <h3 className="text-lg sm:text-xl font-bold text-[#07332f]">{article.title}</h3>
            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{article.description}</p>
            <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
              <CalendarDays className="w-4 h-4" /> {article.date}
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="text-[#0478df] font-medium mt-2 inline-block"
            >
              Read More →
            </button>
          </div>
        </motion.div>
      ))}
    </div>

    <div className="text-center mt-8">
      <button
  onClick={() => navigate("/blogs")}
  className="inline-block bg-[#0478df] text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-700 transition text-sm sm:text-base md:text-lg"
>
  View More
</button>

    </div>
  </div>

  {/* Modal */}
  {showModal && (
    <div className="fixed inset-0 bg-[#] bg-opacity-100 z-50 flex items-center justify-center px-4 py-6 sm:px-6">
      <div className="bg-white rounded-xl w-full max-w-sm sm:max-w-md md:max-w-lg p-4 sm:p-6 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-3 right-3 text-2xl font-bold text-gray-800 border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center bg-white hover:text-red-500 shadow-sm"
        >
          &times;
        </button>

        <img
          src={bat}
          alt="Blog Modal"
          className="w-full h-40 sm:h-48 object-cover rounded mb-4"
        />
        <h3 className="text-lg sm:text-xl font-bold text-[#07332f] mb-2">
          Why Verified Grounds Make All the Difference
        </h3>
        <p className="text-sm text-gray-700 mb-4">
          This is static modal content regardless of which blog card you click. It can display
          hardcoded data or be customized later.
        </p>
        <p className="text-xs text-gray-500 flex items-center gap-1">
          <CalendarDays className="w-4 h-4" /> June 10, 2025
        </p>
      </div>
    </div>
  )}
</section>
 </div>
{/* ----------------------------------------------------------------------------------------------------- */}
     <section id="achievements" className="bg-[#F0F8FF] py-16 px-6 sm:px-10">
  <div className="max-w-6xl mx-auto">
    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-center mt-10 mb-10 lg:mb-20"
    >
      <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
        Achievements
      </h3>
      <h2 className="text-3xl md:text-4xl mt-5 font-medium text-[#0F172A]">
        Our Growth and Impact
      </h2>
      <p className="text-[#334155] mt-6 max-w-3xl mx-auto text-base md:text-lg">
        We are proud to serve sports players and venue owners through a platform that prioritizes quality,
        trust, and ease of use.
      </p>
    </motion.div>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          title: "500+ Grounds Onboarded",
          description: "Expanding rapidly with verified sports venues across regions.",
        },
        {
          title: "1000+ Seamless Bookings",
          description: "Real-time slot bookings completed smoothly through the platform.",
        },
        {
          title: "Owners & Players Portals",
          description: "Dedicated interfaces for ground owners and sports players.",
        },
        {
          title: "100% Verified Listings",
          description: "All grounds are checked and approved by our admins.",
        },
        {
          title: "Growing Community",
          description: "Trusted by a vibrant community of sports enthusiasts and pros.",
        },
        {
          title: "Supportive Platform",
          description: "Backed by responsive support and helpful tools for all users.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }} // Always from right to left
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative overflow-hidden group rounded-xl shadow-md cursor-pointer bg-white h-[200px] md:h-[240px] lg:h-[220px] flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#60A5FA] to-[#1D4ED8] origin-bottom scale-y-0 transition-transform duration-500 group-hover:scale-y-100 z-0"></div>
          <div className="relative z-10 px-6 py-6 flex flex-col items-center text-center transition-all duration-300">
            <h3 className="text-lg font-semibold text-[#1D4ED8] group-hover:text-white">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700 mt-2 group-hover:text-blue-100">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      
{/* --------------------------------------------------------------------------------------------- */}
   <section id="releases" className="bg-[#daedff] py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
            Releases
          </h3>
          <h2 className="text-lg text-[#07332f] mt-1">What’s New on ZadSports?</h2>
        </div>

        {/* Static + Scrollable Versions Row */}
        <div className="flex items-center overflow-hidden gap-1">
          {/* Version 1.1 (Static) */}
          <div className="min-w-[90px]">
            <button
              onClick={() => setSelectedVersion(releaseData[0])}
              className={`w-[90px] py-2 px-2 rounded-md text-xs font-semibold border text-center transition-all duration-300 ${
                selectedVersion.version === releaseData[0].version
                  ? "bg-[#0478df] text-white border-[#0478df]"
                  : "bg-white text-[#0478df] border-gray-300 hover:bg-blue-50"
              }`}
            >
              {releaseData[0].version}
            </button>
          </div>

          {/* Remaining Versions (Scrollable) */}
          <div className="glide-versions w-full">
            <div className="glide__track" data-glide-el="track">
              <ul className="glide__slides">
                {releaseData.slice(1).map((release, idx) => (
                  <li key={idx} className="glide__slide px-1">
                    <div className="flex justify-center">
                      <button
                        onClick={() => setSelectedVersion(release)}
                        className={`w-[90px] py-2 px-2 rounded-md text-xs font-semibold border text-center transition-all duration-300 ${
                          selectedVersion.version === release.version
                            ? "bg-[#0478df] text-white border-[#0478df]"
                            : "bg-white text-[#0478df] border-gray-300 hover:bg-blue-50"
                        }`}
                      >
                        {release.version}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Version Details */}
        <div className="bg-white mt-8 p-6 rounded-xl shadow-md space-y-6 max-w-3xl mx-auto">
          {selectedVersion.points.map((point, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold text-[#0478df]">{point.title}</h4>
              <p className="text-gray-700 mt-1 text-md leading-relaxed">
                {point.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
 {/* ------------------------------------------------------------------------------ */} 
<section id="contact" className="relative py-16 px-6 overflow-hidden">
  {/* Fixed Blurred Background */}
 <div
  className="absolute inset-0 z-0 bg-cover bg-center filter blur-md scale-110"
  style={{
    // backgroundImage: `url(${showFeedbackForm ? ball : ManPlay})`,
     backgroundImage: `url(${Cricket})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
></div>


  {/* Content Layer */}
  <div className="relative z-10">
    <h2 className="text-xl md:text-2xl font-bold text-[#0478df] text-center mb-6">
      {showFeedbackForm ? "Feedback Form" : "Contact Form"}
    </h2>

    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={slideInFromLeft1}
      className={`max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white/10 backdrop-blur-lg border border-white/30 rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ${
        showFeedbackForm ? "md:grid-flow-dense" : ""
      }`}
    >
      {/* Left/Right Panel - Info Section */}
      <motion.div
        key={showFeedbackForm ? "feedback-info" : "contact-info"}
        initial="hidden"
        animate="visible"
        variants={showFeedbackForm ? slideInFromRight : slideInFromLeft1}
        className={`flex flex-col justify-center items-center p-6 bg-white/10 backdrop-blur-lg text-white border-white/20 rounded-lg shadow-lg ${
          showFeedbackForm ? "md:order-2" : "md:order-1"
        }`}
      >
        <motion.img
          key={showFeedbackForm ? "ball-img" : "manplay-img"}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src={showFeedbackForm ? ball : ManPlay}
          alt="Visual"
          className="rounded-xl w-48 h-48 object-cover mb-4 shadow-lg border border-white/30"
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-semibold"
        >
          {showFeedbackForm ? "We'd Love Your Feedback!" : "Get in Touch"}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-md mt-2 text-center"
        >
          {showFeedbackForm ? "Share your experience with ZadSports." : "Have questions? We're here to help!"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-md font-medium mt-2 text-center px-4"
        >
          {showFeedbackForm
            ? "Your input helps us improve and serve you better."
            : "We're here to assist with bookings, partnerships, and all your questions."}
          <span className="font-bold"> ZadSports!</span>
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-4 py-2 bg-white text-[#0478df] font-bold rounded-full shadow hover:bg-blue-100 transition-all duration-300"
          onClick={() => setShowFeedbackForm(!showFeedbackForm)}
        >
          {showFeedbackForm ? "Contact Us" : "Give Feedback"}
        </motion.button>
      </motion.div>

      {/* Right/Left Panel - Form Section */}
      <motion.form
        key={showFeedbackForm ? "feedback-form" : "contact-form"}
        initial="hidden"
        animate="visible"
        variants={showFeedbackForm ? slideInFromLeft1 : slideInFromRight}
        className={`p-8 text-white w-full ${
          showFeedbackForm ? "md:order-1" : "md:order-2"
        }`}
      >
        {showFeedbackForm ? (
          <>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-white"
            >
              Send Feedback
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col mb-4"
            >
              <label className="mb-1 font-semibold text-white">Name</label>
              <input
                type="text"
                className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
                placeholder="Your Name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col mb-4"
            >
              <label className="mb-1 font-semibold text-white">Email</label>
              <input
                type="email"
                className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
                placeholder="Your Email"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col mb-4"
            >
              <label className="mb-1 font-semibold text-white">Message</label>
              <textarea
                rows={4}
                className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Write your feedback..."
              ></textarea>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full py-3 bg-white text-[#2563eb] font-bold rounded-md hover:bg-blue-100 transition duration-300"
            >
              Submit Feedback
            </motion.button>
          </>
        ) : (
          <>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold mb-6 text-white"
            >
              Contact Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-white">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-1 font-semibold text-white">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col mt-4"
            >
              <label className="mb-1 font-semibold text-white">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col mt-4"
            >
              <label className="mb-1 font-semibold text-white">Message</label>
              <textarea
                placeholder="Tell us how we can help..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300 resize-none"
              ></textarea>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              onClick={handleClick}
              className="mt-6 w-full py-3 bg-white text-[#2563eb] font-bold font-style-lato rounded-md hover:bg-blue-100 transition duration-300"
            >
              Submit
            </motion.button>
          </>
        )}
      </motion.form>
    </motion.div>
  </div>
</section>

    </div>
  );
};

export default Home;
