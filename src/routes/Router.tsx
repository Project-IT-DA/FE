import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import { Header } from "../components/Header";
import Landing from "../pages/landing/Landing";
import PostDetail from "../pages/posts/PostDetail";
import LandingLogin from "../pages/landing/LandingLogin";

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LandingLogin />} />
        <Route path="post/:id" element={<PostDetail />} />
      </Routes>
      {/* <FooterBar /> */}
    </BrowserRouter>
  );
};

export default Router;
