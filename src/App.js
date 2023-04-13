// import logo from './logo.svg';
// import wood from './assets/images/woodback.jpg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <>
      <Router>

          <div>
            <Routes>  
                
              <Route path="/" element={<Landing />} />
            </Routes>
          </div>

      </Router>
    </>
  );
}

export default App;