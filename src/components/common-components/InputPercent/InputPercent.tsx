import React, {useState} from 'react';
import './Inputpercent.scss';
import RangeInput from "../RangeInput/RangeInput";

interface IInputProps {
    min: string;
    max: string;
    initialValue: string;
    onChange: (arg: any) => void;
    field: string;
    carCost: string;
}

const InputPercent = ({ min, max, initialValue, field, carCost, onChange }: IInputProps) => {
    const [value, setValue] = useState(initialValue);

    const onChangeInput = ({ target: { value: inputValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(inputValue);
        onChange({ [field]: inputValue });
    };

    const onRangeChange = ({ target: { value: rangeValue } }: React.ChangeEvent<HTMLInputElement>) => {
        setValue(rangeValue);
        onChange({ [field]: rangeValue });
    };

    const getInitialPayment = () => {
        return ((+value * +carCost / 100).toString());
    }

    return (
        <div className="input-wrap">
            <div className="percent-wrap">
                <input type="number" min={ min } max={ max } className="input-percent" value={ value }
                       onChange={ onChangeInput }/>
                <span className="percent-elem">%</span>
            </div>
            <input type="text" className="input" value={ getInitialPayment() }/>
            <RangeInput min={ min } max={ max } value={ value } onChange={ onRangeChange }/>
        </div>
    );
};

export default InputPercent;