import { useState } from "react";
import axios from "axios";

function AddProject() {
  const [title, setTitle] = useState("");
  const [technology, setTechnology] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5002/projects", {
        title,
        technology,
      });

      alert("Project Added!");

      setTitle("");
      setTechnology("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Technology"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddProject;