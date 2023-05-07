import LoginPage from "./components/Login";
import Registeration from "./components/registered";
import { Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registeration />} ></Route>
        <Route path="/login" element={<LoginPage />} ></Route>
      </Routes>
    </>
  );
}

export default App;
