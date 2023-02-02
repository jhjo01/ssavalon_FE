import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
