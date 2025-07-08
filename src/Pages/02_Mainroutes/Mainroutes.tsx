import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "../00_Header/Header";
import Footer from "../01_Footer/Footer";
import Home from "../../Components/00_Home/Home";
import Terms from "../03_Terms/Terms";
import Privacy from "../04_Privacy/Privacy";
import Login from "../05-Login/Login";
import Dashboard from "../06-Dashboard/Dashboard";
import Subscription from "../07-Subscription/Subscription";
import TestimonialsPage from "../../Components/Testinomials/testimonials";
// import Terms from "../03_Terms/Terms";
// import Privacy from "../04_Privacy/Privacy";
import Blogs from "../../Components/Blogs/blogs";
import ScrollToTop from "../../Components/Blogs/BlogData";
import ReleaseView from "../../Components/Release/ReleaseView";
import BlogView from "../../Components/ListBlogs/BlogsView";
function App() {
  return (
    <div>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/home" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/release-view" element={<ReleaseView />} />
          <Route path="/blog-view" element={<BlogView />} />

          <Route path="/testimonials" element={<TestimonialsPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
