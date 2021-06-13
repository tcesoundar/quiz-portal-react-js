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

    const choiceChangeHandler = (e) => {
        setSelectedAnswer(e.target.value)

        if(error)
            setError('')
    }

    const onNextHandler = () => {
        if(selectedAnswer === '')
            return setError('Please select one answer!')

        setAnswers(prevState => [...prevState, {question: data.question, answer: selectedAnswer}])
        setSelectedAnswer('')

        if(activeQuestion < noOfQuestion-1)
            setActiveQuestion(activeQuestion+1)
    }

    const onPreviousHandler = () => {
        setSelectedAnswer('')

        if(activeQuestion < noOfQuestion)
            setActiveQuestion(activeQuestion-1)
    }

    const onSubmitHandler = () => {
        if(selectedAnswer === '')
            return setError('Please select one answer!')

        setStep(3)
    }

    const isLastQuestion = activeQuestion === noOfQuestion- 1
    const isFirstQuestion = activeQuestion === 0

    return (
        <div className="card card-content content">
            <h2 className="mb-5">{data.question}</h2>
            <div className="control" ref={radioRef}>
                {data.choices.map((choice, index) => (
                    <label className="radio has-background-light" key={index}>
                        <input type="radio" name="answer" value={choice} onChange={choiceChangeHandler}/>
                        {choice}
                    </label>
                ))}
            </div>
            {
                error &&
                <div className="has-text-danger">{error}</div>
            }
            <button className="button is-info" onClick={onNextHandler} disabled={isLastQuestion}>Next</button>
            <button className="button is-info is-pulled-left" onClick={onPreviousHandler} disabled={isFirstQuestion}>Previous</button>
            <button className="button is-success is-pulled-right" onClick={onSubmitHandler} disabled={!isLastQuestion}>Submit</button>
        </div>
    );
};

export default Question;