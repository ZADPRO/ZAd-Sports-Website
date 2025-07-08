// import React, { useEffect, useState } from "react";
// import "./Blogs.css";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// import blogTemplateImg from "../../assets/blogs/blogTemplate.jpg";
// import decrypt from "../../helper";
// // import Achievements from "../17-Achievements/Achievements";

// interface Blog {
//   blogContent: string;
//   blogDate: string;
//   blogImage: string;
//   blogTitle: string;
//   signedImageUrl?: string;
// }


// const Blogs: React.FC = () => {
//   const [listBlogs, setListBlogs] = useState<Blog[]>([]);
//   const [visibleCount, setVisibleCount] = useState(3);
//   const navigate = useNavigate();

//   const fetchBlogs = () => {
//     axios
//       .post(
//         `${import.meta.env.VITE_API_URL}/UserRoutes/listBlogs`,
//         { refProductsId: 5 },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );
//         console.log("data", data);

//         if (data.success) {
//           const blogList = data.AllBlogs; // ✅ Removed duplication
//           setListBlogs(blogList);
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to fetch blog:", error);
//       });
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   const handleViewMore = () => {
//     setVisibleCount(visibleCount === 3 ? listBlogs.length : 3);
//   };

//   const handleReadMore = (blog: Blog) => {
//     navigate("/blog-view", { state: { blog } });
//   };

//   const displayedBlogs = listBlogs.slice(0, visibleCount);

//   return (
//     <div>
//       <div>
//         {/* Banner */}
//         <div className="BlogsBanner">
//           <div className="BlogsBannerOverlay">
//             <h1 className="BlogsBannerTitle uppercase underline">BLOGS</h1>
//           </div>
//         </div>

//         {/* Blog Cards */}
//         <div className="blogCards flex w-full align-items-center justify-content-center">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-10/12 mx-auto py-8 px-10">
//             {displayedBlogs.map((blog, index) => (
//               <div
//                 key={index}
//                 className="cardTemplate flex flex-col rounded-xl shadow-lg cursor-pointer max-w-sm w-full"
//               >
//                 <img
//                   src={blog.signedImageUrl || blogTemplateImg}
//                   alt="blog-img"
//                   className="rounded-t-xl h-48 object-cover w-full"
//                 />

//                 <div className="flex flex-col p-4">
//                   <div className="flex justify-between items-center mb-3">
//                     <p
//                       className="font-bold text-lg"
//                       title={blog.blogTitle} // Tooltip with full title
//                     >
//                       {blog.blogTitle
//                         ? blog.blogTitle.length > 30
//                           ? `${blog.blogTitle.slice(0, 30)}...`
//                           : blog.blogTitle
//                         : ""}
//                     </p>
//                     <p className="text-sm text-gray-500">{blog.blogDate}</p>
//                   </div>

//                   <div
//                     className="text-center p-3 uppercase bg-orange-400 font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-orange-500 transition duration-300"
//                     onClick={() => handleReadMore(blog)}
//                   >
//                     <p>Read More</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* View More Button */}
//         {listBlogs.length > 3 && (
//           <div className="flex justify-center mb-10">
//             <button
//                       style={{borderRadius : "50px"}}

//             className="text-center px-7 py-4 uppercase bg-orange-400 font-bold text-white flex items-center justify-center gap-3 hover:bg-orange-500 transition duration-300 mt-auto w-full max-w-xs mx-4"
//               onClick={handleViewMore}
//             >
//               {visibleCount === 3 ? "View More" : "View Less"}
//             </button>
//           </div>
//         )}
//       </div>
//          {/* <div>
//               <Achievements />
//             </div> */}
//     </div>
//   );
// };

// export default Blogs;
