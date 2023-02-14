import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage";
import MainPage from "./pages/MainPage";
import LobbyPage from "./pages/LobbyPage";
import Mypage from "./pages/Mypage";
import NickChangePage from "./pages/NickChangePage";
import GlobalModal from "./container/GlobalModal";
import Login from "./pages/LoginPage";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/lobby" element={<LobbyPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/game/:id" element={<GamePage />} />
        <Route path="/oauth/kakao" element={<Login />} />
        <Route path="/signup" element={<NickChangePage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <GlobalModal />
    </Router>
  );
}

export default App;
