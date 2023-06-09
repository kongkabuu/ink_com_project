import Header from "./components/Header";
import Articlelist from "./components/Articlelist";
import { Routes, Route } from "react-router-dom";
import CreateArticle from "./components/CreateArticle";
import Hero from "./components/Hero";
import "./index.css";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/Create_Article" element={<CreateArticle />} />
        <Route path="/Articles" element={<Articlelist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
