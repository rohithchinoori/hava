import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Airport from "./components/Airport";
import Home from "./components/Home";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/airport-details" element={<Airport />} />
    </Routes>
  </Router>
);

export default App;
