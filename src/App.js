import "./App.css";
import Layout from "./components/layout/layout";
import { Suspense } from "react";
import LoadingSpinner from "./components/UI/loadingSpinner";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Services from "./components/pages/services";
import Projects from "./components/pages/projects";
import ContactUs from "./components/pages/contactUs";

function App() {
  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      ></Suspense>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </Layout>
  );
}

export default App;
