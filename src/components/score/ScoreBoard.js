import React, {useEffect, useState} from 'react';

const ScoreBoard = ({results, data, onResetQuiz}) => {
    const [noOfCorrectAnswers, setNoOfCorrectAnswers] = useState(0)

    useEffect(() => {
            let correctAnswersCount = 0
            results.forEach((result, index) => {
                if(result.answer === data[index].answer)
                    correctAnswersCount++;
            })
            setNoOfCorrectAnswers(correctAnswersCount)
        }
    )

    return (
        <div className="card card-content content">
            <h1>Score Board</h1>
            <p>Your Score : <b>{noOfCorrectAnswers}</b> out of <b>{data.length}</b></p>
            <button className="button is-info is-medium" onClick={onResetQuiz}>Try Again</button>
        </div>
    );
};

export default ScoreBoard;