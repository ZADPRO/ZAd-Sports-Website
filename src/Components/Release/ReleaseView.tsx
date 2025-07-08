import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ReleaseView: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { release } = location.state || {};

  if (!release) {
    return <div className="text-center py-10">No Release Data Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 pt-28">
      {" "}
      {/* pt-28 to push below navbar */}
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">{release.version}</h1>
          <p className="text-gray-500 text-sm">{release.releaseDate}</p>
        </div>

        <div
          className="prose max-w-none text-justify"
          dangerouslySetInnerHTML={{ __html: release.notes }}
        ></div>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              navigate(-1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Back to Releases
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReleaseView;
