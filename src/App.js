
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import About from "./pages/About/About";
import Partners from "./pages/Partners/Partners";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Link to about page */}
            <Route path="about" element={<About />} />
            <Route path="partners" element={<Partners />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
