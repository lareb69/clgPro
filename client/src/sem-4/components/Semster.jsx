import React from 'react';
import { useNavigate } from 'react-router-dom';

const Semster = () => {
    const navigate = useNavigate();
    return (
        <div className=" h-full text-left text-xl flex item-center flex-col p-6 cursor-pointer">
            <h1 className="text-2xl font-bold"> Subjects </h1>
            <div className="p-4"></div>
            <h1
                className="py-4"
                onClick={() => {
                    navigate('/economy');
                }}
            >
                Economy
            </h1>
            <h1
                className="py-4"
                onClick={() => {
                    navigate('/maths');
                }}
            >
                Maths
            </h1>
            <h1
                className="py-4"
                onClick={() => {
                    navigate('/english');
                }}
            >
                English
            </h1>
        </div>
    );
};

export default Semster;
