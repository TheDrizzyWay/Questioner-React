import React from 'react';
import Pagination from './Pagination';
import QuestionCard from './QuestionCard';
import createicon from '../assets/images/create-new.png';

const Questions = () => {
    return (
      <>
        <div className="add">
            <button id="modal-button"><img src={createicon} alt="plus icon" /></button>
            <p>Post a new question</p>
        </div>
        <main>
            <p id="topic-span" />
            <p>QUESTIONS</p>
            <div className="container">
                <QuestionCard />
                <QuestionCard />
                <Pagination />
            </div>
        </main>
        <div>
            <a href="userhome.html" className="home">Home</a>
        </div>
      </>
    );
};

export default Questions;
