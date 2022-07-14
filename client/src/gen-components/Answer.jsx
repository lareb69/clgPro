/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const Answer = ({ intro, features, types, conclusion }) => {
    return (
        <div className="py-4 text-left">
            <div className="py-1">
                <h1 className="font-bold text-2xl">Introdunction</h1>

                <p className="pt-2">{intro}</p>
            </div>
            <div className="py-4">
                <h1 className="font-bold text-2xl">Features</h1>
                <div className="pt-2">
                    {features.map((point) => {
                        return <li>{point}</li>;
                    })}
                </div>
            </div>
            {types && (
                <div className="pt-2">
                    <h1 className="font-bold text-2xl">Types</h1>
                    {types.map((point) => {
                        return <li>{point}</li>;
                    })}
                </div>
            )}
            <div className="py-4">
                <h1 className="font-bold text-2xl">Conclusion</h1>
                <p>{conclusion}</p>
            </div>
        </div>
    );
};

Answer.propTypes = {
    intro: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
    conclusion: PropTypes.string.isRequired,
    types: PropTypes.array,
};

Answer.defaultProps = {
    types: null,
};

export default Answer;
