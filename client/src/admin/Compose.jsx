import React from 'react';

const Compose = () => {
    return (
        <div className="flex item-center justify-center flex-col p-8 w-full">
            <form action="" method="post">
                <input
                    type="text"
                    name="text"
                    className="border rounded min-w-full sm:w-80"
                />
                <button className="px-8 py-4">Submit</button>
            </form>
        </div>
    );
};

export default Compose;
