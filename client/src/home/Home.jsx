import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Semster from '../sem-4/components/Semster';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col">
            <h1 className="font-bold text-center text-2xl p-4">
                Marwari Colleg Important Question
            </h1>

            <div className="p-8 cursor-pointer">
                <h1
                    onClick={() => {
                        navigate('/sem-4');
                    }}
                >
                    SEMESTER - 4
                </h1>
            </div>
        </div>
    );
};

export default Home;
