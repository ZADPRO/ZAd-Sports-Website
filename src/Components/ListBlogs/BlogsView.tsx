import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlogView.css";
import Footballground from "../../assets/images/Football ground.jpg";


const BlogView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  if (!blog) {
    return <div className="text-center py-10">No Blog Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8 ">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{blog.blogTitle}</h1>
          <p className="text-gray-800 text-sm font-bold" >{blog.blogDate}</p>
        </div>

        <div className="mb-6">
          <img
            src={blog.signedImageUrl || Footballground}
            alt="Blog"
            className="rounded-lg max-h-[400px] object-cover w-full"
          />
        </div>

        <div
          className="prose max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: blog.blogContent }}
        ></div>

        <div className="mt-8 text-center">
          <button
            // onClick={() => navigate(-1)

            // }
            onClick={() => {
              navigate(-1);
window.scrollTo(0, 100);
            }}
            className="bg-blue-400 text-white px-5 py-2 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogView;
