import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";



export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard/>} />

      </Routes>
    </Router>
  );
}


