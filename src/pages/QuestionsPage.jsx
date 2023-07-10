import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addQuestion, postData } from "../redux/action";

export const QuestionsPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const questions = useSelector((state) => state.data[0]?.questions);
  const handleSubmit = () => {
    dispatch(postData(location.state, count)).then(() => {
      navigate("/dashboard");
    });
    alert("Submitted");
    return navigate("/");
  };
  useEffect(() => {
    dispatch(addQuestion(location.state, 1));
    console.log(+location.state.questions, currentQuestionIndex);
  }, [dispatch, location.state]);

  const handleNextQuestion = () => {
    if (currentQuestionIndex < (+location.state.questions || 0) - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOption(null);
    }
  };

  const handleOptionSelect = (selectedAnswer) => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedAnswer === correctAnswer && selectedOption === null) {
      setCount((prevCount) => prevCount + 1);
    }
    setSelectedOption(selectedAnswer);
  };

  return (
    <div>
      <h1>Questions</h1>
      {questions && questions.length > 0 && (
        <div
          style={{
            backgroundColor: "green",
            padding: "10px",
            color: "white",
          }}
        >
          <h3>{questions[currentQuestionIndex].question}</h3>
          <div>
            {questions[currentQuestionIndex].options.map((option, i) => (
              <div key={i}>
                <p
                  onClick={() => handleOptionSelect(option)}
                  style={{
                    border: "1px solid black",
                    padding: "10px",
                    width: "50%",
                    borderRadius: "10px",
                    margin: "auto",
                    marginBottom: "20px",
                    backgroundColor:
                      option === selectedOption
                        ? selectedOption ===
                          questions[currentQuestionIndex].answer
                          ? "green"
                          : "red"
                        : "white",
                    color:
                      option === selectedOption
                        ? selectedOption ===
                          questions[currentQuestionIndex].answer
                          ? "white"
                          : "black"
                        : "black",
                  }}
                  value={option}
                >
                  {option}
                </p>
              </div>
            ))}
          </div>

          <button
            style={{
              margin: "auto",
              fontSize: "20px",
              borderRadius: "10px",
              padding: "10px",
              width: "15%",
            }}
            disabled={+location.state.questions !== currentQuestionIndex + 1}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      )}

      <div>
        <button
          onClick={handlePrevQuestion}
          disabled={currentQuestionIndex === 0 || !questions}
        >
          Previous
        </button>
        <button
          onClick={handleNextQuestion}
          disabled={
            currentQuestionIndex === (+location.state.questions || 0) - 1 ||
            !questions
          }
        >
          Next
        </button>
        {currentQuestionIndex + 1} / {questions ? +location.state.questions : 0}
      </div>
    </div>
  );
};
