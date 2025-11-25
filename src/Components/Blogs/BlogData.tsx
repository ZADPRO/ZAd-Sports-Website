import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { Helmet } from "react-helmet";
export default function ScrollToTop() {
  
  const { pathname } = useLocation();
  <Helmet>
      <title>ZadSports Blogs – Latest Updates & Tips</title>
      <meta name="description" content="Read the latest sports updates, tips, and stories from ZadSports." />
    </Helmet>
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}