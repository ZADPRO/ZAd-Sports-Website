import logo from "../../assets/images/Zad Sports Logo-03.png";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { Helmet } from "react-helmet";
export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: "Home", id: "/home#home" },
    { name: "About Us", id: "/home#about" },
    { name: "Services", id: "/home#services" },
    { name: "Blogs", id: "/home#pages" },
    { name: "Achievements", id: "/home#achievements" },
    { name: "New Releases", id: "/home#releases" },
    { name: "Contact Us", id: "/home#contact" },
  ];

  // Scroll to hash section
  const scrollToSection = () => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  };

  useEffect(() => {
    scrollToSection();
  }, [location.hash]);

  // Active link observer
  useEffect(() => {
    const sectionIds = menuItems.map((item) => item.id.split("#")[1]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const match = menuItems.find((item) => item.id.endsWith(`#${id}`));
            if (match) setActive(match.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (path: string) => {
    const [route] = path.split("#");
    if (location.pathname !== route) {
      navigate(route);
    } else {
      const id = path.split("#")[1];
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActive(path);
    setIsToggleOpen(false);
  };
  <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  const excludedRoutes = ["/subscription"];
  const shouldShowHeader = !excludedRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowHeader && (
       <header className="w-full fixed top-0 z-50 bg-white shadow-md border-b border-gray-200 ">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 sm:h-10 md:h-12" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-4 lg:space-x-8 text-sm md:text-base lg:text-lg font-medium">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`transition border-b-2 pb-1 ${
                    active === item.id
                      ? "text-[#0478df] border-[#0478df]"
                      : "text-black border-transparent hover:text-[#0478df] hover:border-[#0478df]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-2xl text-gray-800"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Mobile Dropdown */}
          {isToggleOpen && (
            <div className="md:hidden bg-[#0478df] text-white py-4 px-6 flex flex-col space-y-4 shadow-md z-50">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className={`transition border-b pb-1 ${
                    active === item.id
                      ? "text-[#F7A582] border-[#F7A582]"
                      : "text-white border-transparent hover:text-[#F7A582] hover:border-[#F7A582]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </header>
      )}
    </>
  );
}
