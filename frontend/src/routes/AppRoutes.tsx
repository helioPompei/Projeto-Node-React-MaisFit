import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Home } from "../pages/Home/Home";
import { Login } from "../pages/Login/Login";
import { ManageStudents } from "../pages/ManageStudents/ManageStudents";
import { Register } from "../pages/Register/Register";
import { Student } from "../pages/Student/Student";
import { ProtectedRoutes } from "./ProtectedRoutes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/managestudents" element={<ManageStudents />} />
          <Route path="/student/:id" element={<Student />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="*" element={<h1>ERROR 404</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
