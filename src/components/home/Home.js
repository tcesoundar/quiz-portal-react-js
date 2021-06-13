import React from 'react';

const Home = ({onQuizStart}) => {
    return (
        <div className="card card-content content">
            <h1>Start the Quiz</h1>
            <p>All the Best</p>
            <button className="button is-medium is-info" onClick={onQuizStart}>Start Quiz</button>
        </div>
    );
};

export default Home;