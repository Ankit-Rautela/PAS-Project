import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import LoginPage from './Components/LoginPage';
import Auth from './Components/Auth';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Auth" element={<Auth />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
