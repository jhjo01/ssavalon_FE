import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage";
import MainPage from "./pages/MainPage";
import LobbyPage from "./pages/LobbyPage";
import Mypage from "./pages/Mypage";
import NickChangePage from "./pages/NickChangePage";
import GlobalModal from "./container/GlobalModal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/signup" element={<NickChangePage />} />
      </Routes>
      <GlobalModal />
    </Router>
  );
}

export default App;
