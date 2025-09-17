import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

import profile1 from "../../assets/images/Patient/patient1.png";
import profile2 from "../../assets/images/Patient/patient2.png";
import profile3 from "../../assets/images/Patient/patient3.png";
import profile4 from "../../assets/images/Patient/patient4.png";

import { Helmet } from "react-helmet";
const testimonials = [
  {
    name: "Nirmal",
    role: "Player",
    image: profile1,
    feedback:
      "Booking a ground with ZadSports is seamless! I found a verified ground near me and booked in minutes.",
  },
  {
    name: "Riya",
    role: "Ground Owner",
    image: profile2,
    feedback:
      "ZadSports helped me list and manage my ground easily. I’ve seen more bookings since I joined.",
  },
  {
    name: "Arjun",
    role: "Player",
    image: profile3,
    feedback:
      "The platform is so smooth. I could check time slots, book, and even pay within seconds!",
  },
  {
    name: "Karan",
    role: "Ground Owner",
    image: profile4,
    feedback:
      "As an owner, I love how organized and secure the ZadSports platform is. Highly recommended!",
  },
];

const TestimonialsPage: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 px-6 sm:px-10">
       <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
       <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zadsports.com" />
      <meta
  name="keywords"
  content="box cricket ground size, resort with cricket ground, badminton tournament near me, cricket ground booking, cricket ground booking in hyderabad, cnr cricket ground 2, cricket ground for rent, turf cricket ground near me, box cricket turf, basketball ground near me, vdr cricket ground, turf cricket near me, turf box cricket, cricket net practice near me, mrr cricket ground, vscg cricket ground, basketball courts near me, striker sports indoor academy, indoor cricket nets near me, badminton hall, cricket bowling machine near me, book cricket ground near me, hsr layout cricket ground, snr college cricket ground coimbatore, new madies cricket ground, cooperage ground, cricket nets near me, table tennis club near me, cricket ground booking near me, box cricket, cricket turf near me, badminton court booking, indoor cricket near me, box cricket near me, ground booking app, scf cricket ground salem, turf near me for cricket, pool table near me, table tennis court near me, flying feathers badminton academy, cricket ground near me, synthetic ground near me, turf near me, cricket near me, badminton turf near me, salem cricket ground, ayr cricket ground, football turf near me, tennis courts near me, pickleball court, turf football ground near me, football ground in india, football ground near me, cricket tournament maker, cricket team names for local tournament"
/>

    </Helmet>
      <div className="max-w-6xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#0478df] hover:text-blue-700 font-medium mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
            All Testimonials
          </h3>
          <h2 className="font-bold mt-5 text-[#0F172A]">
            What Everyone Says About Us
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-105 text-center transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-blue-500"
              />
              <h4 className="font-bold text-[#1D4ED8] text-lg">{item.name}</h4>
              <p className="text-sm text-gray-500">{item.role}</p>
              <p className="text-gray-700 mt-3 text-sm leading-relaxed">
                “{item.feedback}”
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPage;
