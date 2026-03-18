import { useState } from "react";

function MoodChecker() {
  const [mood, setMood] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = () => {
    if (mood === "sad") {
      setResult("Try taking a walk or listening to calming music.");
    } else if (mood === "anxious") {
      setResult("Try deep breathing or mindfulness.");
    } else {
      setResult("You're doing great! Keep it up.");
    }
  };

  return (
    <div>
      <h2>Mood Checker</h2>

      <select onChange={(e) => setMood(e.target.value)}>
        <option value="">Select your mood</option>
        <option value="sad">Sad</option>
        <option value="anxious">Anxious</option>
        <option value="happy">Happy</option>
      </select>

      <button onClick={handleSubmit}>Check</button>

      {result && <p>{result}</p>}
    </div>
  );
}

export default MoodChecker;