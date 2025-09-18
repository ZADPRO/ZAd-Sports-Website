import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BlogView.css";
import Footballground from "../../assets/images/Football ground.jpg";

import { Helmet } from "react-helmet";

const BlogView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {};

  if (!blog) {
    return <div className="text-center py-10">No Blog Found</div>;
  }

  return (
    <>
           <Helmet>
     <title>ZadSports – Book Grounds, Register & Play Matches Easily
</title>
      <meta name="description" content="Book sports grounds instantly, register teams, and play competitive matches with ZadSports. Simplified booking, seamless registration, and thrilling sports action - all in one place." />
       <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://zadsports.com" />
      <meta
  name="keywords"
  content="box cricket ground size, resort with cricket ground, badminton tournament near me, cricket ground booking, cricket ground booking in hyderabad, cnr cricket ground 2, cricket ground for rent, turf cricket ground near me, box cricket turf, basketball ground near me, vdr cricket ground, turf cricket near me, turf box cricket, cricket net practice near me, mrr cricket ground, vscg cricket ground, basketball courts near me, striker sports indoor academy, indoor cricket nets near me, badminton hall, cricket bowling machine near me, book cricket ground near me, hsr layout cricket ground, snr college cricket ground coimbatore, new madies cricket ground, cooperage ground, cricket nets near me, table tennis club near me, cricket ground booking near me, box cricket, cricket turf near me, badminton court booking, indoor cricket near me, box cricket near me, ground booking app, scf cricket ground salem, turf near me for cricket, pool table near me, table tennis court near me, flying feathers badminton academy, cricket ground near me, synthetic ground near me, turf near me, cricket near me, badminton turf near me, salem cricket ground, ayr cricket ground, football turf near me, tennis courts near me, pickleball court, turf football ground near me, football ground in india, football ground near me, cricket tournament maker, cricket team names for local tournament"
/>

    </Helmet>
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
    </div></>
  );
};

export default BlogView;
