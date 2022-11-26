import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Home2 from "./components/home/Home2";
import Home3 from "./components/home/Home3";
import Home4 from "./components/home/Home4";
import Home5 from "./components/home/Home5";
import Home6 from "./components/home/Home6";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:currentPage/" element={<Home3 />} />
        <Route path="/article/detail/:slug" element={<Home2 />} />
        <Route path="/article/category/:categorySlug" element={<Home4 />} />
        <Route path="/article/tag/:tagSlug" element={<Home5 />} />
        <Route path="/article/search/:search" element={<Home6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
