// import React from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import { ArrowLeft, CalendarDays } from "lucide-react";

// import Cricket from "../../assets/images/Cricket.jpg";
// import football from "../../assets/images/Football ground.jpg";
// import sunset from "../../assets/images/sunset.webp";
// import c1 from "../../assets/Cricket 1.jpg";

// const blogArticles = [
//   {
//     image: football,
//     title: "Why Verified Grounds Make All the Difference",
//     description:
//       "Learn how our admin approval process ensures quality and a reliable playing experience.",
//     date: "June 10, 2025",
//   },
//   {
//     image: Cricket,
//     title: "The Rise of Digital Sports Booking: How It’s Changing the Game",
//     description:
//       "Explore how apps like ZadSports are transforming the way we play and plan sports activities.",
//     date: "June 7, 2025",
//   },
//   {
//     image: sunset,
//     title: "How Ground Owners Can Maximize Their Listings",
//     description:
//       "Practical tips for ground owners to increase visibility and attract more bookings on ZadSports.",
//     date: "June 10, 2025",
//   },
//   {
//     image: c1,
//     title: "Top Booking Trends: What Users Are Looking for in Sports Grounds",
//     description:
//       "Discover the key factors that players consider when booking grounds online.",
//     date: "August 10, 2025",
//   },
// ];

// const Blogs: React.FC = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="bg-[#F0F8FF] py-20 px-6 sm:px-10">
//       <div className="max-w-6xl mx-auto">

//         {/* ← Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="flex items-center text-[#0478df] hover:text-blue-700 font-medium mb-8 text-sm sm:text-base"
//         >
//           <ArrowLeft className="w-5 h-5 mr-2" />
//           Back
//         </button>

//         <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
//           All Blog Articles
//         </h3>
//         <h2 className="text-3xl md:text-4xl mt-5 font-medium text-[#0F172A]">
//           Dive Deeper into Sports Insights
//         </h2>

//         <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogArticles.map((article, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.3 }}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out"
//             >
//               <img
//                 src={article.image}
//                 alt={article.title}
//                 className="w-full h-52 object-cover"
//               />
//               <div className="p-5">
//                 <h3 className="text-xl font-bold text-[#07332f]">
//                   {article.title}
//                 </h3>
//                 <p className="text-sm text-gray-600 mt-3">
//                   {article.description}
//                 </p>
//                 <p className="text-xs text-gray-400 mt-2 flex items-center gap-1">
//                   <CalendarDays className="w-4 h-4" /> {article.date}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blogs;

import React, { useEffect, useState } from "react";
import "../../Components/ListBlogs/ListBlogs.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cricket from "../../assets/images/Cricket.jpg";
import { Helmet } from "react-helmet";
// import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
import decrypt from "../../helper";
// import Achievements from "../17-Achievements/Achievements";

interface Blog {
  blogContent: string;
  blogDate: string;
  blogImage: string;
  blogTitle: string;
  signedImageUrl?: string;
}

const Blogs: React.FC = () => {
  const [listBlogs, setListBlogs] = useState<Blog[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const fetchBlogs = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listBlogs`,
        {
          refProductsId: import.meta.env.VITE_PRODUCT_ID,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("data", data);

        if (data.success) {
          const blogList = data.AllBlogs; // ✅ Removed duplication
          setListBlogs(blogList);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch blog:", error);
      });
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(visibleCount === 3 ? listBlogs.length : 3);
  };

  const handleReadMore = (blog: Blog) => {
    navigate("/blog-view", { state: { blog } });
  };

  const displayedBlogs = listBlogs.slice(0, visibleCount);

  return (
    <>
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
    <div>
      <div>
        {/* Banner */}
        <div className="Banner">
          <div className="BannerOverlay">
            {/* <h1 className="BannerTitle uppercase underline">BLOGS</h1> */}
          </div>
        </div>

        {/* Blog Cards */}
        {/* <div className="blogCards flex w-full align-items-center justify-content-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-10/12 mx-auto py-8 px-10">
            {displayedBlogs.map((blog, index) => (
              <div
                key={index}
                className="cardTemplate flex flex-col rounded-xl shadow-lg cursor-pointer max-w-sm w-full"
              >
                <img
                  src={blog.signedImageUrl || Cricket}
                  alt="blog-img"
                  className="rounded-t-xl h-48 object-cover w-full"
                />

                <div className="flex flex-col p-4">
                  <div className="flex justify-between items-center mb-3">
                    <p
                      className="font-bold text-lg"
                      title={blog.blogTitle} // Tooltip with full title
                    >
                      {blog.blogTitle
                        ? blog.blogTitle.length > 30
                          ? `${blog.blogTitle.slice(0, 30)}...`
                          : blog.blogTitle
                        : ""}
                    </p>
                    <p className="text-sm text-gray-500">{blog.blogDate}</p>
                  </div>

                  <div
                    className="text-center p-3 uppercase bg-orange-400 font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-orange-500 transition duration-300"
                    onClick={() => handleReadMore(blog)}
                  >
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        <div className="blogCards flex w-full items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-11/12 mx-auto py-10 px-1">
            {displayedBlogs.map((blog, index) => (
              <div
                key={index}
                className="cardTemplate flex flex-col rounded-2xl shadow-lg cursor-pointer w-full bg-white h-full"
              >
                <img
                  src={blog.signedImageUrl || Cricket}
                  alt="blog-img"
                  className="rounded-t-2xl h-48 object-cover w-full"
                />

                <div className="flex flex-col p-2 flex-grow">
                  <div className="flex  justify-center items-center mb-3">
                    <p
                      className="font-bold text-lg truncate w-8/12"
                      title={blog.blogTitle}
                    >
                      {blog.blogTitle
                        ? blog.blogTitle.length >= 10
                          ? `${blog.blogTitle.slice(0, 10)}...`
                          : blog.blogTitle
                        : ""}
                    </p>
                    <p className="text-sm text-gray-500">{blog.blogDate}</p>
                  </div>

                  <div className="flex-grow" />
                  <div
                    className="text-center py-1 px-2 bg-[#3ea0f6] font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-[#0478df] transition duration-300"
                    onClick={() => handleReadMore(blog)}
                    style={{ borderRadius: "50px" }}
                  >
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        {listBlogs.length > 3 && (
          <div className="flex justify-center mb-10">
            <button
              style={{ borderRadius: "50px" }}
              className="text-center px-5 py-2  bg-[#3ea0f6] font-bold text-white flex items-center justify-center gap-3 hover:bg-[#0478df] transition duration-300 mt-auto w-full max-w-xs mx-4"
              onClick={handleViewMore}
            >
              {visibleCount === 3 ? "View More" : "View Less"}
            </button>
          </div>
        )}
      </div>
      {/* <div>
              <Achievements />
            </div> */}
    </div></>
  );
};

export default Blogs;
