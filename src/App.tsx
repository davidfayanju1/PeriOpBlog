import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BookShop from "./pages/BookShop";
import Articles from "./pages/Articles";
import Blogs from "./pages/Blogs";
import Events from "./pages/Events";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BookShop />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/events" element={<Events />} />
    </Routes>
  );
}

export default App;
