import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../helper";
import { FaStar } from "react-icons/fa";
import "./UserFeedback.css";

import { Helmet } from "react-helmet";
interface Feedback {
  reviewContent: string;
  ratings: string;
  userEmail: string;
  userName: string;
}

const ListUserReview: React.FC = () => {
  
  const [listFeedback, setListFeedback] = useState<Feedback[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);

  const fetchFeedback = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listReviews`,
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
          setListFeedback(data.allReview);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch feedback:", error);
      });
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  // Show only visibleCount number of feedbacks
  const displayedFeedback = listFeedback.slice(0, visibleCount);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  const renderStars = (count: string) => {
    const ratingNum = parseInt(count, 10) || 0;
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        key={i}
        className={`w-5 h-5 ${
          i < ratingNum ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="bg-[#daedff] py-16 px-6 md:px-10 lg:px-20 overflow-x-hidden">
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
      <div className="max-w-6xl mx-auto overflow-hidden">
        {/* <h1 className="text-3xl font-bold text-center mb-10 uppercase underline">
          User Reviews
        </h1> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedFeedback.map((feedback, index) => (
            <div
              key={index}
              // className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full"
              className="bg-[#ffffff] p-6 border-l-4  border-blue-500 rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform duration-300 text-left aos-init aos-animate"
            >
              <div className="mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h2
                    className="font-semibold text-lg truncate"
                    title={feedback.userName}
                  >
                    {feedback.userName}
                  </h2>
                </div>

                <div className="flex justify-between items-center mb-3">
                  <p
                    className="text-sm text-gray-500 truncate"
                    title={feedback.userEmail}
                  >
                    {feedback.userEmail}
                  </p>
                </div>

                <div className="flex items-center mb-3">
                  {renderStars(feedback.ratings)}
                </div>

                <p
                  className="text-gray-600 text-sm line-clamp-3"
                  title={stripHtmlTags(feedback.reviewContent)}
                >
                  {stripHtmlTags(feedback.reviewContent)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {listFeedback.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              style={{ borderRadius: "50px" }}
              //   className="text-[#f97316] font-semibold underline hover:text-orange-500 transition duration-300"
              className="text-center px-5 py-2 uppercase bg-[#3ea0f6] hover:bg-[#0478df] font-bold text-white flex items-center justify-center gap-3 transition duration-300 mt-auto w-full max-w-xs mx-4"
              onClick={() =>
                visibleCount === 3
                  ? setVisibleCount(listFeedback.length)
                  : setVisibleCount(3)
              }
            >
              {visibleCount === 3 ? "View More" : "View Less"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListUserReview;
