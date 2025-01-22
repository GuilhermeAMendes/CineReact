import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Film from "./Pages/Film";
import NotFound from "./Pages/NotFound";
import Favorite from "./Pages/Favorite";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Film/:id" element={<Film />} />
        <Route path="/Favorite" element={<Favorite/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
