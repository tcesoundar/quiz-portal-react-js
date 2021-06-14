import React from 'react';

const Home = ({startQuiz}) => {
    return (
        <div className="card card-content content">
            <h1>Welcome To Quiz Website</h1>
            <p>All the Best</p>
            <button className="button is-medium is-info" onClick={startQuiz}>Start Quiz</button>
        </div>
    );
};

export default Home;