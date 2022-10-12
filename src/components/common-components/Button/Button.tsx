import React, { useState } from 'react';
import './Button.scss'

interface IButtonProps {
    onClick: () => void;
    children: React.ReactNode
}

const Button = ({ children,onClick }: IButtonProps) => {
    const [isSend, setIsSend] = useState(false);

    return (
        <button type="button" className={ isSend ? "button button-loading" : "button" } onClick={ onClick }>
            <span className="button__text">
               { children }
            </span>
        </button>
    );
};

export default Button;