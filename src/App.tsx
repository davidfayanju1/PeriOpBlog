import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookShop from "./pages/BookShop";
import Articles from "./pages/Articles";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/books" element={<BookShop />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default App;
