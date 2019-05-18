import React from 'react';
import '../assets/styles/pagination.scss';

const Pagination = () => {
    return (
        <div className="next">
            <a href="#">&laquo;</a>
            <a href="#" className="active">1</a>
            <a href="#">&raquo;</a>
        </div>
    );
};

export default Pagination;
