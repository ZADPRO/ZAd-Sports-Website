import React, { useEffect, useState } from "react";
import axios from "axios";
import decrypt from "../../helper";
import { useNavigate } from "react-router-dom";

interface Release {
  version: string;
  notes: string;
  releaseDate: string;
}

const AdminRelease: React.FC = () => {
  const [listRelease, setListRelease] = useState<Release[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const navigate = useNavigate();

  const fetchRelease = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/UserRoutes/listRelease`,
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
          setListRelease(data.Release);
        }
      })
      .catch((error) => {
        console.error("Failed to list Release:", error);
      });
  };

  useEffect(() => {
    fetchRelease();
  }, []);

  const handleViewMore = () => {
    setVisibleCount(visibleCount === 3 ? listRelease.length : 3);
  };

  const handleReadMore = (release: Release) => {
    navigate("/release-view", { state: { release } });
  };

  const displayedRelease = listRelease.slice(0, visibleCount);

  const stripHtmlTags = (html: string = "") => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  };

  return (
    <div id="releases">
      {/* Banner Section */}
      <div className="BlogssBanner">
        <div className="BlogssBannerOverlay">
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-[#0478df] uppercase tracking-widest">
              Releases
            </h3>
            <h2 className="text-lg text-[#07332f] mt-1">
              What’s New on ZadSports?
            </h2>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      {/* <div className="blogCards flex w-full align-items-center justify-center">
        <div className="flex w-full md:w-10/12 mx-auto lg:flex-row flex-col py-8 px-10 gap-10 flex-wrap">
          {displayedRelease.map((release, index) => (
            <div
              key={index}
              className="cardTemplate flex flex-col flex-1 rounded-xl shadow-lg cursor-pointer max-w-sm"
            >
              <div className="flex flex-col p-4 flex-grow">
                <div className="flex justify-between items-center mb-3">
                  <h2
                    className="font-bold text-lg truncate"
                    title={release.version}
                  >
                    {release.version}
                  </h2>
                  <p className="text-sm text-gray-500">{release.releaseDate}</p>
                </div>

                <p
                  className="text-gray-600 text-sm mb-4 line-clamp-3"
                  title={stripHtmlTags(release.notes)}
                >
                  {stripHtmlTags(release.notes)}
                </p>

                <div
                  className="text-center p-3 uppercase bg-blue-800 font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-blue-700 transition duration-300 mt-auto"
                  onClick={() => handleReadMore(release)}
                >
                  <p>Read More</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      <div className="blogCards flex w-full items-center justify-center">
        <div className="w-full md:w-10/12 mx-auto py-8 px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRelease.map((release, index) => (
              <div
                key={index}
                className="cardTemplate flex flex-col rounded-xl shadow-lg cursor-pointer bg-white"
              >
                <div className="flex flex-col p-4 flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <h2
                      className="font-bold text-lg truncate text-[#0478df] "
                      title={release.version}
                    >
                      {release.version}
                    </h2>
                    <p className="text-sm text-gray-500">
                      {release.releaseDate}
                    </p>
                  </div>

                  <p
                    className="text-gray-600 text-sm mb-4 line-clamp-3"
                    title={stripHtmlTags(release.notes)}
                  >
                    {stripHtmlTags(release.notes)}
                  </p>

                  <div
                    className="text-center px-4 py-2 bg-[#3ea0f6] font-bold text-white rounded-xl flex items-center justify-center gap-3 hover:bg-[#0478df] transition duration-300 mt-auto"
                    onClick={() => handleReadMore(release)}
                    style={{ borderRadius: "50px" }}
                  >
                    <p>Read More</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Button */}
      {listRelease.length > 3 && (
        <div className="flex justify-center mb-10">
          <button
            style={{ borderRadius: "50px" }}
            className="text-center px-4 py-3  bg-[#3ea0f6] font-bold text-white flex items-center justify-center gap-3 hover:bg-[#0478df] transition duration-300 mt-auto w-full max-w-xs mx-4"
            onClick={handleViewMore}
          >
            {visibleCount === 3 ? "View More" : "View Less"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminRelease;
