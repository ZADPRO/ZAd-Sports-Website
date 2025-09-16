import { Link } from "react-router-dom";
import logo from "../../assets/images/Zad Sports Logo-03.png";
import {
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { useEffect, useState } from "react";
// import decrypt from "../../Helper";
import axios from "axios";
import decrypt from "../../helper";

import { Helmet } from "react-helmet";
interface Product {
  refProductsName: string;
  refProductDescription: string;
  refProductLink: string;
  refProductLogo: string;
  signedImageUrl?: string;
}

export default function Footer() {
  // const [email, setEmail] = useState("");

  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/UserRoutes/ourProducts`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response: any) => {
        const data = decrypt(
          response.data[1],
          response.data[0],
          import.meta.env.VITE_ENCRYPTION_KEY
        );

        if (data.success) {
          const productList = data.productImage; // ✅ No duplication
          setProducts(productList);
        }
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  };
  <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  useEffect(() => {
    fetchProducts();
  }, []);

  // const handleClick = () => {
  //   const to = "info@zadroit.com";
  //   const mailtoLink = `mailto:${to}`;
  //   window.location.href = mailtoLink;
  // };

  const scrollToSection = (id: any) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const excludedRoutes = ["/subscription"];
  const shouldShowFooter = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowFooter && (
        <footer className="bg-[#3592fc] text-[#EEF7FF] py-10 px-6 md:px-10 lg:px-20">
          <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {/* Logo & About */}
            <div>
              <div className="flex items-center gap-2">
                <img src={logo} alt="Logo" className="h-12" />
              </div>
              <p className="text-white mt-6 text-sm">
                ZadSports is a smart platform to book your favorite sports
                grounds with real time availability, flexible timings, and
                instant confirmation.
              </p>
              <div className="flex gap-4 mt-6 text-[#FFCC00]">
                <a
                  href="https://www.instagram.com/_zadsports_/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61577733005842"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook size={20} />
                </a>
                <a
                  href="https://mail.google.com/mail"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold text-[#FFCC00]">
                Quick Links
              </h3>
              <ul className="text-white mt-6 space-y-2 text-sm">
                <li>
                  <Link to="/home#home" onClick={() => scrollToSection("home")}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home#about"
                    onClick={() => scrollToSection("about")}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home#services"
                    onClick={() => scrollToSection("services")}
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home#pages"
                    onClick={() => scrollToSection("pages")}
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/home#contact"
                    onClick={() => scrollToSection("contact")}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms#terms"
                    onClick={() => scrollToSection("terms")}
                  >
                    Terms & Refund Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy#privacy"
                    onClick={() => scrollToSection("privacy")}
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* our Products */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-[#FFCC00]">
                Our Products
              </h3>
              <ul className="space-y-2 text-[#EEF7FF] text-sm">
                {products.map((product, index) => (
                  <li key={index}>
                    <a
                      href={product.refProductLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#fca000] hover:font-semibold transition"
                    >
                      {product.refProductsName}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xl font-semibold text-[#FFCC00]">
                Contact Details
              </h3>
              <ul className="text-white mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-[#FFCC00] text-xl mt-1" />
                  <span>
                    ZAdroit IT Solutions Pvt. Ltd,
                    <br />
                    38/37B, Logi Chetty St No 1,
                    <br />
                    Gugai, Salem, Tamil Nadu 636006
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-[#FFCC00]" /> info@zadroit.com
                </li>
                <li className="flex items-center gap-2">
                  <FaClock className="text-[#FFCC00]" /> 9:30 AM - 6:30 PM, Mon
                  - Fri
                </li>
                <li className="flex items-center gap-2">
                  <IoCall className="text-[#FFCC00] text-xl" /> 0427-356-2462
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            {/* <div>
              <h3 className="text-xl font-semibold text-[#FFCC00]">Newsletter</h3>
              <p className="text-white font-bold mt-5 text-sm">
                Subscribe To Our Newsletter
              </p>
              <p className="text-white mt-3 text-sm">
                Stay informed and never miss out on the latest news, ground booking updates.
              </p>
            </div> */}
          </div>

          <hr className="border-[#FFA377] my-4" />

          <p className="text-center text-white text-sm">
            &copy; 2025 <span className="text-[#FFCC00]">ZadSports</span> All
            Rights Reserved.
          </p>
        </footer>
      )}
    </>
  );
}
