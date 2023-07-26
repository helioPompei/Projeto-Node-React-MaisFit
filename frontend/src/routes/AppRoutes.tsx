import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { Users } from "../pages/Users/Users";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usuario/:id" element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
