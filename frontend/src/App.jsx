import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home2 from "./pages/Home2";
import Home from "./pages/Home";
import Bidding from "./pages/Bidding";
import SignUpSuccess from "./pages/SignUpSuccess";
import GetStarted from "./pages/GetStarted";
import Home3 from "./pages/Home3";
import Home1 from "./pages/Home1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/bidding":
        title = "";
        metaDescription = "";
        break;
      case "/sign-up-success":
        title = "";
        metaDescription = "";
        break;
      case "/get-started":
        title = "";
        metaDescription = "";
        break;
      case "/home":
        title = "";
        metaDescription = "";
        break;
      case "/home1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bidding" element={<Bidding />} />
      <Route path="/sign-up-success" element={<SignUpSuccess />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/home" element={<Home3 />} />
      <Route path="/home1" element={<Home1 />} />
      <Route path="/home2" element={<Home2 />} />
    </Routes>
  );
}
export default App;
