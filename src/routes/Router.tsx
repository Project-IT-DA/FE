import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import { Header } from "../components/Header";
import Landing from "../pages/Landing";
import PostDetail from "../pages/posts/PostDetail";
import PostList from "../pages/posts/PostList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post" element={<PostList />} />
        <Route path="post/:id" element={<PostDetail />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
};

export default Router;
