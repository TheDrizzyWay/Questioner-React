import React from 'react';
import Pagination from './Pagination';
import createicon from '../assets/images/create-new.png';

const Comments = (props) => {
    return (
    <>
    <div className="add">
        <button id="modal-button"><img src={createicon} alt="plus icon" /></button>
        <p>Add a comment</p>
    </div>
    <main>
        <p id="topic-span">Topic 001</p>
        <p id="question-span" />
        <div className="container">
            <div className="questions">
                <p><span>Comment: </span>{props.comment}</p>
                <p><span>Posted By: </span>{props.postedby} <span> On </span>{props.newDate}</p>
            </div>
            <Pagination />
        </div>
    </main>
    <div>
        <a className="home" id="back">Back</a>
    </div>
    </>
    );
};

export default Comments;
