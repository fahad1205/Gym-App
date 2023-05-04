import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AboutUs } from "./Pages/AboutUs/aboutus";
import { Home } from "./Pages/Home/home";
import { Training } from "./Pages/Training/training";
import { Pricing } from "./Pages/Pricing/pricing";
import { Program } from "./Pages/Program/program";
import { Login } from "./Pages/Login/login";
import { Registration } from "./Pages/Registration/registration";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Training" element={<Training />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Program" element={<Program />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}
