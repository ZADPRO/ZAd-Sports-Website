import logo from "../../assets/images/Zad Sports Logo-03.png";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();
  const location = useLocation();

  // const menuItems = [
  //   { name: "Home", id: "/home" },
  //   { name: "About Us", id: "/home#about" },
  //   { name: "Services", id: "/home#services" },
  //   { name: "Blogs", id: "/home#pages" },
  //   { name: "Achievements", id: "/home#achievements" },
  //   { name: "New Releases", id: "/home#releases" },
  //   { name: "Contact Us", id: "/home#contact" },
  // ];
const menuItems = [
  { name: "Home", id: "/" },          // root
  { name: "About Us", id: "about" },  // section IDs only
  { name: "Services", id: "services" },
  { name: "Blogs", id: "pages" },
  { name: "Achievements", id: "achievements" },
  { name: "New Releases", id: "releases" },
  { name: "Contact Us", id: "contact" },
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
  if (path === "/") {
    // go to root
    if (location.pathname !== "/") navigate("/");
  } else {
    // scroll to section
    const el = document.getElementById(path);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  setActive(path);
  setIsToggleOpen(false);
};


  const excludedRoutes = ["/subscription"];
  const shouldShowHeader = !excludedRoutes.includes(location.pathname);

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
    to={item.id === "/" ? "/" : "#"}
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
