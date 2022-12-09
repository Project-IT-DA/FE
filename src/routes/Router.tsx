import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import { Header } from "../components/Header";
import ChatList from "../pages/chat/ChatList";
import Landing from "../pages/landing/Landing";
import MyPage from "../pages/MyPage";
import PostDetail from "../pages/posts/PostDetail";
import PostList from "../pages/posts/PostList";
import LandingLogin from "../pages/landing/LandingLogin";
import PostCreate from "../pages/posts/PostCreate";
import ChatDetail from "../pages/chat/ChatDetail";
import CommunityDetail from "../pages/community/CommunityDetail";
import CommunityCreate from "../pages/community/CommunityCreate";
import CommunityList from "../pages/community/CommunityList";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/post" element={<PostList />} />
        <Route path="/login" element={<LandingLogin />} />
        <Route path="post/:id" element={<PostDetail />} />
        <Route path="/community/:id" element={<CommunityDetail />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="post/create" element={<PostCreate />} />
        <Route path="/chat" element={<ChatList />} />
        <Route path="chat/:id" element={<ChatDetail />} />
        <Route path="/community/create" element={<CommunityCreate />} />
        <Route path="/community" element={<CommunityList />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
};

export default Router;
