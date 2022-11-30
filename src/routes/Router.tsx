import { BrowserRouter, Route, Routes } from "react-router-dom";
import FooterBar from "../components/FooterBar";
import Landing from "../pages/Landing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route />
        <Route path="/" element={<Landing />} />
      </Routes>
      <FooterBar />
    </BrowserRouter>
  );
};

export default Router;
