import React, {useState} from 'react';
import Home from "../home/Home";
import Question from "../quiz/Question";
import QuestionBank from "../../data/QuestionBank.json";
import ScoreBoard from "../score/ScoreBoard";
import ResultModal from "../modal/ResultModal";

const QuizPortal = () => {
    const [step, setStep] = useState(1);
    const [activeQuestionNo, setActiveQuestionNo] = useState(1);
    const [results, setResults] = useState([]);
    const [showResultsModal, setShowResultsModal] = useState(false);

    const resetQuizHandler = () => {
        setActiveQuestionNo(1)
        setResults([])
        setStep(1)
    }

    return (
        <div>
            {
                step === 1 &&
                <Home
                    startQuiz={() => setStep(2)}
                />
            }
            {
                step === 2 &&
                <Question
                    data={QuestionBank.data[activeQuestionNo-1]}
                    setResults={setResults}
                    noOfQuestion={QuestionBank.data.length}
                    activeQuestionNo={activeQuestionNo}
                    setActiveQuestionNo={setActiveQuestionNo}
                    setStep={setStep}
                />
            }
            {
                step === 3 &&
                <ScoreBoard
                    results={results}
                    data={QuestionBank.data}
                    resetQuiz={resetQuizHandler}
                    checkResults={() => setShowResultsModal(true)}
                />
            }
            {
                showResultsModal &&
                <ResultModal
                    data={QuestionBank.data}
                    results={results}
                    closeResults={() => setShowResultsModal(false)}
                />
            }
        </div>
    );
};

export default QuizPortal;