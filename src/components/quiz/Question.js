import React, {useEffect, useRef, useState} from 'react';

const Question = ({data, setResults, noOfQuestion, activeQuestionNo, setActiveQuestionNo, setStep}) => {
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

        setResults(prevState => [...prevState, {questionNo: data.questionNo, question: data.question, answer: selectedAnswer}])
        setSelectedAnswer('')

        if(activeQuestionNo < noOfQuestion)
            setActiveQuestionNo(activeQuestionNo+1)
    }

    const onPreviousHandler = () => {
        setSelectedAnswer('')

        if(activeQuestionNo <= noOfQuestion)
            setActiveQuestionNo(activeQuestionNo-1)
    }

    const onSubmitHandler = () => {
        if(selectedAnswer === '')
            return setError('Please select one answer!')

        setResults(prevState => [...prevState, {questionNo: data.questionNo, question: data.question, answer: selectedAnswer}])
        setSelectedAnswer('')

        setStep(3)
    }

    const isLastQuestion = activeQuestionNo === noOfQuestion
    const isFirstQuestion = activeQuestionNo === 1

    return (
        <div className="card card-content content">
            <h2 className="mb-5">{data.questionNo + ". " + data.question}</h2>
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