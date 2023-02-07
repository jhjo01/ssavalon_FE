import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Index from "./pages/Index";
import Lobby from "./pages/LobbyPage";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/game/:id" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;
