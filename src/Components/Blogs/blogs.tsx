import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, CalendarDays } from "lucide-react";

import Cricket from "../../assets/images/Cricket.jpg";
import football from "../../assets/images/Football ground.jpg";
import sunset from "../../assets/images/sunset.webp";
import c1 from "../../assets/Cricket 1.jpg";

const blogArticles = [
  {
    image: football,
    title: "Why Verified Grounds Make All the Difference",
    description:
      "Learn how our admin approval process ensures quality and a reliable playing experience.",
    date: "June 10, 2025",
  },
  {
    image: Cricket,
    title: "The Rise of Digital Sports Booking: How It’s Changing the Game",
    description:
      "Explore how apps like ZadSports are transforming the way we play and plan sports activities.",
    date: "June 7, 2025",
  },
  {
    image: sunset,
    title: "How Ground Owners Can Maximize Their Listings",
    description:
      "Practical tips for ground owners to increase visibility and attract more bookings on ZadSports.",
    date: "June 10, 2025",
  },
  {
    image: c1,
    title: "Top Booking Trends: What Users Are Looking for in Sports Grounds",
    description:
      "Discover the key factors that players consider when booking grounds online.",
    date: "August 10, 2025",
  },
];

const Blogs: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F0F8FF] py-20 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">

        {/* ← Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-[#0478df] hover:text-blue-700 font-medium mb-8 text-sm sm:text-base"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back
        </button>

        <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
          All Blog Articles
        </h3>
        <h2 className="text-3xl md:text-4xl mt-5 font-medium text-[#0F172A]">
          Dive Deeper into Sports Insights
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-bold text-[#07332f]">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mt-3">
                  {article.description}
                </p>
                <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
                  <CalendarDays className="w-4 h-4" /> {article.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
