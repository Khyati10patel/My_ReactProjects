import React, { useState } from "react";
import { quizQuestion } from "../QuizData/Quizdata";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";

const Quiz = ({ startTimer, setName }) => {
    const [qNumber, setQNumber] = useState(0);
    const [score, setScore] = useState(0);
    const [displayScore, setDisplayScore] = useState(false);
    const [clickedAnswer, setclickedAnswer] = useState(0);
    const [seconds, setSeconds] = useState(20);

    const navigate = useNavigate();

    const selectedAnswer = (selected, id) => {
        setclickedAnswer(id);
        setTimeout(() => {
            const nextQ = qNumber + 1;
            setclickedAnswer(0);
            if (nextQ < quizQuestion.length) {
                setQNumber(nextQ);
            }
            if (nextQ === quizQuestion.length) {
                setDisplayScore(true);
            }
            if (selected === true) {
                setScore((score) => score + 1);
            }
            setSeconds(20);
        }, 600);
    };

    return (
        <div className="Main_Div">
            <div className="Quiz_Div">
                {displayScore ? (
                    <>
                        <p>
                            Your Score : {score} / {quizQuestion.length}
                        </p>
                        <div className="buttons_div">
                            <button
                                onClick={() => {
                                    navigate(-1);
                                    setName(" ");
                                }}
                            >
                                Retry
                            </button>
                            <button
                                onClick={() => {
                                    navigate("/");
                                    setName(" ");
                                }}
                            >
                                Exit
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="quiz_top_div">
                            <h2>
                                {qNumber + 1} of {quizQuestion.length}
                            </h2>
                            {startTimer && (
                                <Timer
                                    setDisplayScore={setDisplayScore}
                                    setQNumber={setQNumber}
                                    seconds={seconds}
                                    setSeconds={setSeconds} 
                                    qNumber={qNumber}
                                    quizQuestions={quizQuestion}
                                />
                            )}
                        </div>

                        <h5>
                            {quizQuestion[qNumber].question}
                        </h5>

                        <ul>
                            {quizQuestion[qNumber].answers.map((answer) => (
                                <li
                                    className={clickedAnswer === answer.id ? `answerCss` : null}
                                    key={answer.id}
                                    onClick={() => selectedAnswer(answer.isCorrect, answer.id)}
                                >
                                    {answer.ans}
                                </li>
                            ))}
                        </ul>
                        
                    </>
                )}
            </div>
        </div>
    );
};

export default Quiz;