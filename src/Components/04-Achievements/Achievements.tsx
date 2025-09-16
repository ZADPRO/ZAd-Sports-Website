// import React from "react";
// const Achievement: React.FC = () => {
//     return (
//         <>
//         </>
//     );
// };

// export default Achievement;

import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../helper";
import "./Achievements.css";
import { Helmet } from "react-helmet";
interface Achievements {
  achievementTitle: string;
  achievementDescription: string;
  achievedOn: string;
}

const Achievements: React.FC = () => {
  const [listAchievements, setListAchievements] = useState<Achievements[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  const fetchAchievements = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listAchievements`,
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
          const achievementsList = data.Achievements;
          setListAchievements(achievementsList);
        }
      })
      .catch((error) => {
        console.error("Failed to listAchievements:", error);
      });
  };

  useEffect(() => {
    fetchAchievements();
  }, []);

  const handleViewMore = () => {
    if (visibleCount === 3) {
      setVisibleCount(listAchievements.length); // show all
    } else {
      setVisibleCount(3); // collapse back to 3
    }
  };

  const displayedAchievements = listAchievements.slice(0, visibleCount);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div className="bg-#F0F8FF pt-10 px-5">
      {/* <h1 className="text-3xl font-bold text-center mb-8 uppercase underline">
        Achievements
      </h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {displayedAchievements.map((achievement, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 border-l-4  border-blue-500 rounded-xl shadow
               hover:shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out text-left"
          >
            <div className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <h2
                  className="font-semibold text-lg truncate"
                  title={achievement.achievementTitle}
                >
                  {achievement.achievementTitle}
                </h2>
                <p className="text-sm text-gray-500">
                  {achievement.achievedOn}
                </p>
              </div>
              <div className="tooltip-container">
                <p className="text-gray-600 text-sm line-clamp-3">
                  {stripHtmlTags(achievement.achievementDescription).length >
                  100
                    ? `${stripHtmlTags(
                        achievement.achievementDescription
                      ).slice(0, 100)}...`
                    : stripHtmlTags(achievement.achievementDescription)}
                </p>
                <div className="tooltip-content">
                  {stripHtmlTags(achievement.achievementDescription)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {listAchievements.length > 3 && (
        <div className="flex justify-center mt-10">
          <button
            style={{ borderRadius: "50px" }}
            className="text-center px-5 py-2 uppercase bg-[#3ea0f6] font-bold text-white flex items-center justify-center gap-3 hover:bg-[#0478df] transition duration-300 mt-auto w-full max-w-xs mx-4 mb-3"
            onClick={handleViewMore}
          >
            {visibleCount === 3 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Achievements;
