/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Compose = () => {
    const [inputData, setInputData] = useState('');
    const [question, setQuestion] = useState({});

    const data = qs.stringify(question);

    const options = {
        method: 'post',
        url: 'http://localhost:3100/admin',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: data,
    };

    return (
        <div className="flex justify-center items-center flex-col  w-screen  sm:w-[50vw] mx-auto mt-8">
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    setQuestion({ question: inputData });
                    axios(options)
                        .then((response) => {
                            console.log(response);
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }}
            >
                <label
                    htmlFor="question-input"
                    className="text-gray-800 text-lg font-bold py-2 inline-block"
                >
                    Question
                </label>
                <textarea
                    onChange={(e) => {
                        setInputData(e.target.value);
                    }}
                    type="text"
                    value={inputData}
                    className="w-full sm:w-[50vw] px-2 py-1 bg-white transition ease-in-out  font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:bg-white focus:text-gray-800 focus:border-blue-600 focus:outline-none"
                    id="question-input"
                    rows={3}
                />
                <label htmlFor="answer-input">Answer</label>
                <textarea
                    type="text"
                    className="w-full sm:w-[50vw] px-2 py-1 bg-white transition ease-in-out  font-normal text-gray-700 bg-clip-padding border border-solid border-gray-300 rounded focus:bg-white focus:text-gray-800 focus:border-blue-600 focus:outline-none"
                    id="answer-input"
                    rows={10}
                />

                <button className="px-4 mt-4 sm:text-lg bg-slate-700 font-normal py-2  rounded text-white/95 transition-colors ease-in hover:bg-slate-600 hover:text-white">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Compose;
