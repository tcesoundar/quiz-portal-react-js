import React from 'react';

const Home = ({onQuizStart}) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Start the Quiz</h1>
                    <p>All the Best</p>
                    <button className="button is-medium is-info" onClick={onQuizStart}>Start Quiz</button>
                </div>
            </div>
        </div>
    );
};

export default Home;