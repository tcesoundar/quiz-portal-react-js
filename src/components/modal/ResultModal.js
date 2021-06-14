import React from 'react';

const ResultModal = ({data, results, closeResults}) => {
    return (
         <div className="modal-background">
             <div className="modal-card">
                 <header className="modal-card-head">
                     <p className="modal-card-title">Your Answers</p>
                     <button className="delete" onClick={closeResults}/>
                 </header>
                 <section className="modal-card-body content">
                     <ol>
                         {
                             results.map((result, index) => (
                                 <li className="mb-6" key={index}>
                                     <p><b>{result.question}</b></p>
                                     <p className={result.answer === data[index].answer
                                         ?"has-background-success has-text-white"
                                         :"has-background-danger has-text-white"}>
                                         Your Answer: {result.answer}
                                     </p>
                                     {
                                         result.answer !== data[index].answer &&
                                         <p className="has-background-link has-text-white">
                                             Correct Answer: {data[index].answer}
                                         </p>
                                     }
                                 </li>
                             ))
                         }
                     </ol>
                 </section>
             </div>
        </div>
    );
};

export default ResultModal;