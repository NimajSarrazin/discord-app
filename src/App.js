import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DowloadPage from "./page/DowloadPage";
import SafetyPage from "./page/SafetyPage";
import LoginPage from "./page/LoginPage";
import ErrorPage from "./page/ErrorPage";
import HomePage from "./page/HomePage";
import SectionFooter from "./components/footer/SectionFooter";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/download" element={<DowloadPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <SectionFooter />
    </Router>
  );
}

export default App;
