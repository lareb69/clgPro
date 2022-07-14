import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './gen-components/Navbar';
import Home from './home/Home';
import Compose from './sem-4/components/compose/Compose';
import Semster from './sem-4/components/Semster';
import Subject from './sem-4/components/Subject';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="sem-4" element={<Semster />} />
                <Route path="economy" element={<Subject subject="Economy" />} />
                <Route path="maths" element={<Subject subject="Maths" />} />
                <Route path="english" element={<Subject subject="English" />} />
                <Route path="/compose" element={<Compose />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
