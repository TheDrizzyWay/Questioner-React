import React from 'react';
import upvoteicon from '../assets/images/upvoteicon.png';
import downvoteicon from '../assets/images/downvoteicon.png';

const QuestionCard = (props) => {
    return (
        <div className="questions">
            <p><span>| Title: </span>{props.title}</p>
            <p><span>| Question: </span>{props.body}</p>
            <p><span>| Upvotes: </span>{props.upvotes}</p>
            <p><span>| Downvotes: </span>{props.downvotes}</p>
            <p><span>| Posted By: </span>{props.postedby} <span> On </span>{props.newDate}</p>
            <div className="actions">
                <span>Upvote</span><img src={upvoteicon}
                    alt="upvote" id="up" data-id="${question.id}" />
                <span>Downvote</span><img src={downvoteicon}
                    alt="downvote" id="down" data-id="${question.id}" />
                <span>{props.numbercomments} Comment(s)</span><a href="usercomments.html?id=${question.id}">
                    <img src="images/edit.png" alt="comments" /></a>
            </div>
        </div>
    );
};

export default QuestionCard;
