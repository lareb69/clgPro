import React, { useState } from 'react';

import axios from 'axios';

const Compose = () => {
    const [inputData, setInputData] = useState('');
    const [question, setQuestion] = useState({});

    const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        question,
        url: 'http://localhost:3100/admin',
    };

    return (
        <div className="flex item-center justify-center flex-col p-8 w-full">
            <form
                onClick={(e) => {
                    // e.preventDefault();
                    setQuestion({ question: inputData });
                    axios(options).then((response) => {
                        console.log(response.data);
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
