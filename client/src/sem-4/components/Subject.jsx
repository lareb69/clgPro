import React from 'react';
import PropTypes from 'prop-types';
import Main from '../../gen-components/Main';

const Subject = ({ subject }) => {
    return (
        <>
            <h1 className=" py-2 text-2xl text-black font-bold text-center">
                {subject}
            </h1>

            <Main />
        </>
    );
};

Subject.propTypes = {
    subject: PropTypes.string.isRequired,
};

export default Subject;
