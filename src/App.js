import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DowloadPage from "./page/DowloadPage";
import SafetyPage from "./page/SafetyPage";
import LoginPage from "./page/LoginPage";
import ErrorPage from "./page/ErrorPage";
import Navigation from "./components/navbar/Navigation";
import HomePage from "./page/HomePage";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DowloadPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
