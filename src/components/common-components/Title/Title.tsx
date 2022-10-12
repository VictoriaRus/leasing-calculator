import React from 'react';
import './Title.scss';

interface ITitleProps extends React.ComponentProps<'h1'> {
    text: string;
}

const Title = ({ text }: ITitleProps) => {
    return (
        <h1 className="title">
            { text }
        </h1>
    );
};

export default React.memo(Title);