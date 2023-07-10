import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [questions, setQuestions] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    if (!name || !category || !difficulty || !questions)
      return alert("Please fill all the fields");
    e.preventDefault();
    navigate("/questions", {
      state: { name, category, difficulty, questions },
    });
  };

  return (
    <div>
      <div>HomePage</div>
      <div>
        <div>
          <div>
            <h3>Set up your quiz</h3>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                justifyContent: "center",
                width: "20%",
                margin: "auto",
                border: "1px solid black",
                padding: "20px",
                borderRadius: "10px",
              }}
            >
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
              />
              <select
                name="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                id="category"
              >
                <option value="select">Select Category</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Science">Science & Nature</option>
                <option value="Computers">Science: Computers</option>
                <option value="Mathematics">Science: Mathematics</option>
                <option value="Politics">Politics</option>
              </select>
              <select
                name="Difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                id="difficulty"
              >
                <option value="select">Select Difficulty</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <select
                name="Number of Questions"
                value={questions}
                onChange={(e) => setQuestions(e.target.value)}
                id="questions"
              >
                <option value="select">Select Number of Questions</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
              <input type="submit" value="Submit" onClick={submitHandler} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
