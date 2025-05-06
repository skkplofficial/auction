import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddTeam() {
  const [teamName, setTeamName] = useState("");
  const [points, setPoints] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "teams"), {
        teamName,
        points: Number(points)
      });
      alert("Team added successfully!");
      setTeamName("");
      setPoints("");
    } catch (error) {
      alert("Error adding team: " + error.message);
    }
  };

  return (
    <div>
      <h2>Add Team</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Team Name" value={teamName} onChange={(e) => setTeamName(e.target.value)} required /><br />
        <input placeholder="Total Points" type="number" value={points} onChange={(e) => setPoints(e.target.value)} required /><br />
        <button type="submit">Add Team</button>
      </form>
    </div>
  );
}

export default AddTeam;