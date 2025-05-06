import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function AddPlayer() {
  const [name, setName] = useState("");
  const [level, setLevel] = useState("");
  const [basePrice, setBasePrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "players"), {
        name,
        level,
        basePrice: Number(basePrice)
      });
      alert("Player added successfully!");
      setName("");
      setLevel("");
      setBasePrice("");
    } catch (error) {
      alert("Error adding player: " + error.message);
    }
  };

  return (
    <div>
      <h2>Add Player</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Player Name" value={name} onChange={(e) => setName(e.target.value)} required /><br />
        <input placeholder="Level (जिला/राज्य/अंतर्राष्ट्रीय)" value={level} onChange={(e) => setLevel(e.target.value)} required /><br />
        <input placeholder="Base Price" type="number" value={basePrice} onChange={(e) => setBasePrice(e.target.value)} required /><br />
        <button type="submit">Add Player</button>
      </form>
    </div>
  );
}

export default AddPlayer;