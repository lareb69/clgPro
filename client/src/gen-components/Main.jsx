import React from 'react';
import Answer from './Answer';
import Question from './Question';

const Main = () => {
    // request to server for question and pass question into their separate componets
    const introdunction =
        'Aliqua esse elit eiusmod amet culpa ea cupidatat commodo minim proident. Voluptate nisi cupidatat do occaecat sint labore ipsum exercitation nostrud magna excepteur amet. Proident aute consequat proident in ipsum incididunt duis deserunt culpa aliqua. Ullamco non culpa consectetur sunt consectetur irure in et. Ea est anim amet cupidatat.';
    const characterstics = [
        'Nulla reprehenderit consectetur velit magna.',
        'Qui nisi exercitation irure eu magna consequat.',
        'Laboris aute veniam do cupidatat occaecat.',
        'Ea eu nostrud mollit est incididunt mollit cillum ullamco adipisicing commodo sunt.',
        'Commodo non deserunt sint ipsum adipisicing dolor ullamco dolor aute minim et.',
    ];

    const types = [
        'Est laboris laboris elit id proident adipisicing excepteur do ullamco.',
        'Incididunt dolor dolor eiusmod aliquip enim nulla mollit non duis adipisicing minim labore fugiat laborum.',
        'Ad sit non esse eiusmod voluptate elit nulla.',
    ];

    const conclusion =
        'Laboris ullamco quis enim commodo. Amet voluptate nostrud dolor mollit exercitation minim consectetur ex anim est duis dolore. Aliqua mollit anim mollit in magna ullamco aute eiusmod officia.';

    return (
        <div className="p-4 px-2">
            <Question question="Proident sint ipsum elit est qui exercitation non duis?" />
            <Answer
                intro={introdunction}
                features={characterstics}
                types={types}
                conclusion={conclusion}
            />
        </div>
    );
};

export default Main;
