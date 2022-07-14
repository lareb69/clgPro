import React, { useState } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Compose = () => {
    const navigate = useNavigate();
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
        <div className="flex item-center justify-center flex-col p-8 w-full">
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
                <input
                    onChange={(e) => {
                        setInputData(e.target.value);
                    }}
                    type="text"
                    value={inputData}
                    className="border rounded min-w-full sm:w-80"
                />
                <button className="px-8 py-4">Submit</button>
            </form>
        </div>
    );
};

export default Compose;
