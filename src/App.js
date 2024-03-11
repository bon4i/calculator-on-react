import styles from './App.module.css';
import React, { useState } from 'react';

export const App = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState(0);
    const [operator, setOperator] = useState('');

    const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const OPERATORS = ['+', '-', '=', 'C'];

    const handleClickCancel = () => {
        setOperand1('');
        setOperand2('');
        setOperator('');
    };
    const numsButtons = NUMS.map((num, index, item) => (
        <div
            className={styles['button-number']}
            key={item}
            onClick={() => setOperand1((prevNum) => prevNum + num)}
        >
            {num}
        </div>
    ));

    const operatorsButtons = OPERATORS.map((operator, index, item) => (
        <div
            className={styles['button-operator']}
            key={item}
            onClick={() => setOperator(operator)}
        >
            {operator}
        </div>
    ));

    return (
        <div className={styles.form}>
            <div className={styles['dispalay-container']}>
                <p>
                    {operand1 || 'Ваши числа'} {operator}
                </p>
                <p>Здесь будет результат</p>
            </div>
            <div className={styles['buttons-container-operators']}>
                {operatorsButtons}
            </div>
            <div className={styles['buttons-container-numbers']}>{numsButtons}</div>
        </div>
    );
};
