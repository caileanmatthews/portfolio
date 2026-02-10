import { BrowserRouter, Routes, Route } from "react-router";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <main className="pt-14 md:pt-0 md:pl-16">
        <div className="mx-auto max-w-4xl">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}
