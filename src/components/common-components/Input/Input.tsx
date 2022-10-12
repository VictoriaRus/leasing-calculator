import React, {HTMLAttributes, useState} from 'react';
import './Input.scss'
import RangeInput from "../RangeInput/RangeInput";

interface IInputProps extends HTMLAttributes<HTMLInputElement> {
    min: string;
    max: string;
    initialValue: string;
    children: React.ReactNode;
    onChange: (arg: any) => void;
    field: string;
}

const Input = ({children, min, max, initialValue, field, onChange}: IInputProps) => {
    const [value, setValue] = useState(initialValue);

    const onChangeInput = ({ target: { value: inputValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(inputValue);
        onChange({ [field]: inputValue });
    };

    const onRangeChange = ({ target: { value: rangeValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(rangeValue);
        onChange({ [field]: rangeValue });
    };

    return (
        <div className="input-wrap">
            <input type="number" min={ min } max={ max } className="input" value={ value }
                   onChange={onChangeInput}/>
            <span className="input-info">{ children }</span>
            <RangeInput min={ min } max={ max } value={ value } onChange={ onRangeChange }/>
        </div>
    );
};

export default Input;