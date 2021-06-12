import React, {useEffect, useRef, useState} from 'react';

const Question = ({data, activeQuestion, noOfQuestion, setActiveQuestion, setStep, setAnswers}) => {
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [error, setError] = useState('')
    const radioRef = useRef()

    useEffect(() => {
            const findCheckedInput = radioRef.current.querySelector('input:checked')
            if(findCheckedInput)
                findCheckedInput.checked = false
        }
    )

    const onChangeHandler = (e) => {
        setSelectedAnswer(e.target.value)

        if(error)
            setError('')
    }

    const nextChangeHandler = () => {
        if(selectedAnswer === '')
            setError('Please select one answer!')

        setAnswers(prevState => [...prevState, {question: data.question, answer: selectedAnswer}])
        setSelectedAnswer('')

        if(activeQuestion < noOfQuestion-1)
            setActiveQuestion(activeQuestion+1)
    }

    const previousChangeHandler = () => {
        setSelectedAnswer('')

        if(activeQuestion < noOfQuestion)
            setActiveQuestion(activeQuestion-1)
    }

    const isLastQuestion = activeQuestion === noOfQuestion- 1
    const isFirstQuestion = activeQuestion === 0

    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control" ref={radioRef}>
                        {data.choices.map((choice, index) => (
                            <label className="radio has-background-light" key={index}>
                                <input type="radio" name="answer" value={choice} onChange={onChangeHandler}/>
                                {choice}
                            </label>
                        ))}
                    </div>
                    {
                        error &&
                        <div className="has-text-danger">{error}</div>
                    }
                    <button className="button is-info is-pulled-right" onClick={nextChangeHandler} disabled={isLastQuestion}>Next</button>
                    <button className="button is-info is-pulled-left" onClick={previousChangeHandler} disabled={isFirstQuestion}>Previous</button>
                </div>
            </div>
        </div>
    );
};

export default Question;