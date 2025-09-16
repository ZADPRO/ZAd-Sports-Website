// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import decrypt from "../../helper";
// import axios from "axios";

// const FeedBackForm: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [rating, setRating] = useState(0);
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const navigate = useNavigate();
//   const submitFeedback = () => {
//     axios
//       .post(
//         `${import.meta.env.VITE_API_URL}/settingsRoutes/addReviews`,
//         {
//           refProductName: "MicroFin",
//           userName: name,
//           userEmail: email,
//           reviewContent: message,
//           ratings: rating.toString(),
//         },
//         { headers: { "Content-Type": "application/json" } }
//       )
//       .then((response: any) => {
//         const data = decrypt(
//           response.data[1],
//           response.data[0],
//           import.meta.env.VITE_ENCRYPTION_KEY
//         );
//         console.log("Feedback Response:", data);

//         if (data.success) {
//           setSuccessMsg("Thank you! Your feedback has been submitted.");
//           setName("");
//           setEmail("");
//           setMessage("");
//           setRating(0);
//         } else {
//           setErrorMsg("Something went wrong. Please try again.");
//         }
//       })
//       .catch((error) => {
//         console.error("Failed to submit feedback:", error);
//         setErrorMsg("Failed to send feedback. Please try again.");
//       });
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     console.log("Form submitted");

//     // Navigate after form submission
//     // navigate("/thank-you");
//      if (!name || !email || !message || rating === 0) {
//       setErrorMsg("Please fill all fields and provide a rating.");
//       return;
//     }

//     setLoading(true);
//     setErrorMsg("");
//     setSuccessMsg("");

//     submitFeedback();

//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   };

//   return (
//     <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();

//           console.log("sdjfbkjsdf");
//         }}
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="text-2xl font-bold mb-6 text-white"
//         >
//           Send Feedback
//         </motion.h2>

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.1 }}
//           className="flex flex-col mb-4"
//         >
//           <label className="mb-1 font-semibold text-white">Name</label>
//           <input
//             type="text"
//             required
//             className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
//             placeholder="Your Name"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2 }}
//           className="flex flex-col mb-4"
//         >
//           <label className="mb-1 font-semibold text-white">Email</label>
//           <input
//             type="email"
//             required
//             className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
//             placeholder="Your Email"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3 }}
//           className="flex flex-col mb-4"
//         >
//           <label className="mb-1 font-semibold text-white">Message</label>
//           <textarea
//             rows={4}
//             required
//             className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300 resize-none"
//             placeholder="Write your feedback..."
//           ></textarea>
//         </motion.div>

//         <motion.button
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.4 }}
//           whileHover={{ scale: 1.02 }}
//           whileTap={{ scale: 0.98 }}
//           type="submit"
//           className="w-full py-3 bg-white text-[#2563eb] font-bold rounded-md hover:bg-blue-100 transition duration-300"
//         >
//           Submit Feedback
//         </motion.button>
//       </form>
//     </div>
//   );
// };

// export default FeedBackForm;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import decrypt from "../../helper";
import axios from "axios";
import { FaStar } from "react-icons/fa";

import { Helmet } from "react-helmet";
const FeedBackForm: React.FC = () => {
    <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const submitFeedback = () => {
    axios
      .post(
        `${import.meta.env.VITE_API_URL}/settingsRoutes/addReviews`,
        {
          refProductName: import.meta.env.VITE_PRODUCT_NAME,
          userName: name,
          userEmail: email,
          reviewContent: message,
          ratings: rating.toString(),
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );
        console.log("Feedback Response:", data);

        if (data.success) {
          setSuccessMsg("Thank you! Your feedback has been submitted.");
          setName("");
          setEmail("");
          setMessage("");
          setRating(0);

          // Navigate to thank-you page after short delay
          setTimeout(() => {
            navigate("/thank-you");
          }, 1000);
        } else {
          setErrorMsg("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Failed to submit feedback:", error);
        setErrorMsg("Failed to send feedback. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message || rating === 0) {
      setErrorMsg("Please fill all fields and provide a rating.");
      return;
    }

    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    submitFeedback();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-bold mb-6 text-white"
        >
          Send Feedback
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col mb-4"
        >
          <label className="mb-1 font-semibold text-white">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
            placeholder="Your Name"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col mb-4"
        >
          <label className="mb-1 font-semibold text-white">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
            placeholder="Your Email"
          />
        </motion.div>

        {/* Optional: Add Rating Input */}
        {/* <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col mb-4"
        >
          <label className="mb-1 font-semibold text-white">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300"
            placeholder="Your Rating"
          />
          
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-col mb-4"
        >
          <label className="mb-1 font-semibold text-white">Rating</label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={28}
                onClick={() => setRating(star)}
                className={`cursor-pointer transition-colors duration-200 ${
                  rating >= star ? "text-yellow-400" : "text-white"
                }`}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col mb-4"
        >
          <label className="mb-1 font-semibold text-white">Message</label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="bg-white/10 placeholder-white text-white p-3 rounded-md border border-white/30 focus:border-white/50 focus:outline-none transition-all duration-300 resize-none"
            placeholder="Write your feedback..."
          ></textarea>
        </motion.div>
        {errorMsg && <p className="text-red-400 mb-2">{errorMsg}</p>}
        {successMsg && <p className="text-green-400 mb-2">{successMsg}</p>}

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className={`w-full py-3 bg-white text-[#2563eb] font-bold rounded-md transition duration-300 ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-100"
          }`}
        >
          {loading ? "Submitting..." : "Submit Feedback"}
        </motion.button>
      </form>
    </div>
  );
};

export default FeedBackForm;
