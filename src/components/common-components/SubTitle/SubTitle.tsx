import React from 'react';
import './Subtitle.scss';

interface ISubTitleProps extends React.ComponentProps<'h4'> {
    text: string;
}

const SubTitle = ({ text }: ISubTitleProps) => {
    return (
        <h4 className="subtitle">
            { text }
        </h4>
    );
};

export default React.memo(SubTitle);