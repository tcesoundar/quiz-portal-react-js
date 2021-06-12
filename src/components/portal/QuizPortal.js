import React, {useState} from 'react';
import Home from "../home/Home";
import Question from "../quiz/Question";
import QuestionBank from "../../data/QuestionBank.json";

const QuizPortal = () => {
    const [step, setStep] = useState(1);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);

    const quizStartHandler = () => {
        setStep(2);
    }

    return (
        <div>
            {
                step === 1 &&
                <Home
                    onQuizStart={quizStartHandler}
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
        </div>
    );
};

export default QuizPortal;