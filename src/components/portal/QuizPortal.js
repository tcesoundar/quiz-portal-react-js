import React, {useState} from 'react';
import Home from "../home/Home";
import Question from "../quiz/Question";
import QuestionBank from "../../data/QuestionBank.json";
import ScoreBoard from "../score/ScoreBoard";

const QuizPortal = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const startQuizHandler = () => {
        setStep(2);
    }

    const resetQuizHandler = () => {
        setActiveQuestion(0)
        setAnswers([])
        setStep(2)
    }

    return (
        <div>
            {
                step === 1 &&
                <Home
                    onQuizStart={startQuizHandler}
                />
            }
            {
                step === 2 &&
                <Question
                    data={QuestionBank.data[activeQuestion]}
                    setAnswers={setAnswers}
                    noOfQuestion={QuestionBank.data.length}
                    activeQuestion={activeQuestion}
                    setActiveQuestion={setActiveQuestion}
                    setStep={setStep}
                />
            }
            {
                step === 3 &&
                <ScoreBoard
                    results={answers}
                    data={QuestionBank.data}
                    onResetQuiz={resetQuizHandler}
                />
            }
        </div>
    );
};

export default QuizPortal;