import React, {useEffect, useState} from 'react';
import './Calc.scss'
import Button from "../common-components/Button/Button";
import Input from "../common-components/Input/Input";
import Title from "../common-components/Title/Title";
import SubTitle from "../common-components/SubTitle/SubTitle";
import InputPercent from "../common-components/InputPercent/InputPercent";

interface IFormState {
    car_coast: string;
    initial_payment: string;
    initial_payment_percent: string;
    lease_term: string;
    total_sum: string;
    monthly_payment_from: string;
}

const Calc = () => {
    const INTEREST_RATE = 0.035;
    const [userData, setUserData] = useState<IFormState>({
        car_coast: '3300000',
        initial_payment: '420000',
        initial_payment_percent: '13',
        lease_term: '60',
        total_sum: '4467313',
        monthly_payment_from: '114455',
    });

    const onMakeRequest = async () => {
        const response = await fetch('https://hookb.in/eK160jgYJ6UlaRPldJ1P', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({
                car_coast: +userData.car_coast,
                initial_payment: +userData.initial_payment,
                initial_payment_percent: +userData.initial_payment_percent,
                lease_term: +userData.lease_term,
                total_sum: +userData.total_sum,
                monthly_payment_from: +userData.monthly_payment_from
            }),
            headers: {
                'Content-type': 'application/json'
            },
        }).then(response => response.json())
            .then(json => console.log(json))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        const initialPayment = (+userData.initial_payment_percent * +userData.car_coast / 100).toString();
        const totalSum = (Math.round(+userData.initial_payment + +userData.lease_term * +userData.monthly_payment_from)).toString();
        const monthlyPaymentFrom = (Math.round((+userData.car_coast - +userData.initial_payment) * ((INTEREST_RATE * Math.pow((1 + INTEREST_RATE),
            +userData.lease_term)) / (Math.pow((1 + INTEREST_RATE), +userData.lease_term) - 1)))).toString();
        setUserData(prevState => ({ ...prevState, initial_payment: initialPayment }));
        setUserData(prevState => ({ ...prevState, monthly_payment_from: monthlyPaymentFrom }));
        setUserData(prevState => ({ ...prevState, total_sum: totalSum }));
    }, [userData.car_coast, userData.lease_term, userData.initial_payment_percent])

    const updateData = (data: IFormState) => {
        setUserData(prevState => ({ ...prevState, ...data }))
    }

    return (
        <div className="container">
            <Title text="Рассчитайте стоимость автомобиля в лизинг"/>
            <form method="POST">
                <div className="wrapper">
                    <div className="col">
                        <SubTitle text="Стоимость автомобиля"/>
                        <Input min="1000000" max="6000000" initialValue={ userData.car_coast } field="car_coast" onChange={ updateData }>₽</Input>
                    </div>
                    <div className="col">
                        <SubTitle text="Первоначальный взнос"/>
                        <InputPercent min='10' max='60' initialValue={ userData.initial_payment_percent } carCost={ userData.car_coast } field="initial_payment_percent" onChange={ updateData }/>
                    </div>
                    <div className="col">
                        <SubTitle text="Срок лизинга"/>
                        <Input min="1" max="60" initialValue={ userData.lease_term } field="lease_term" onChange={ updateData }>мес.</Input>
                    </div>
                    <div className="col">
                        <SubTitle text="Сумма договора лизинга" />
                        <div className="info">{ userData.total_sum } ₽</div>
                    </div>
                    <div className="col">
                        <SubTitle text="Ежемесячный платеж от" />
                        <div className="info">{ userData.monthly_payment_from } ₽</div>
                    </div>
                    <div className="col">
                        <Button onClick={ onMakeRequest }>Оставить заявку</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Calc;