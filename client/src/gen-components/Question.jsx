import React from 'react';
import PropTypes from 'prop-types';

const Question = ({ question }) => {
    return (
        <div className="py-2">
            <h1 className="text-2xl font-bold">{question}</h1>
        </div>
    );
};

Question.propTypes = {
    question: PropTypes.string.isRequired,
};

export default Question;
