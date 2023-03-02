import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
const Home = lazy(() => import("../views/Home"));

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
