import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddPlayer from "./components/AddPlayer";
import AddTeam from "./components/AddTeam";
import Bidding from "./components/Bidding";

function App() {
  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>SKKPL Kho-Kho Auction App</h1>
        <nav style={{ marginBottom: 20 }}>
          <Link to="/add-player" style={{ marginRight: 10 }}>Add Player</Link>
          <Link to="/add-team" style={{ marginRight: 10 }}>Add Team</Link>
          <Link to="/bidding">Bidding</Link>
        </nav>
        <Routes>
          <Route path="/add-player" element={<AddPlayer />} />
          <Route path="/add-team" element={<AddTeam />} />
          <Route path="/bidding" element={<Bidding />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;