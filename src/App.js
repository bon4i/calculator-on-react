import styles from './App.module.css';
import React, { useState } from 'react';

export const App = () => {
    const [operand1, setOperand1] = useState('');
    const [operand2, setOperand2] = useState('');
    const [operator, setOperator] = useState('');
    const [result, setResult] = useState('');
    const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const OPERATORS = ['+', '-', '=', 'C'];

    const clearValues = () => {
        setOperand1('');
        setOperand2('');
        setOperator('');
    };

    const handleBtnClick = (num) => () => {
        if (operand1 && operator) {
            setOperand2((prevNum) => prevNum + num);
        } else {
            setOperand1((prevNum) => prevNum + num);
        }
    };

    const calcOperands = () => {
        switch (operator) {
            case '+':
                setResult(Number(operand1) + Number(operand2));
                break;
            case '-':
                setResult(Number(operand1) - Number(operand2));
                break;
            default:
        }
        return result;
    };

    const handleOperatorClick = (event) => {
        switch (event.target.textContent) {
            case '+':
                if (operand1) {
                    setOperator('+');
                }
                break;
            case '-':
                if (operand1) {
                    setOperator('-');
                }
                break;
            case 'C':
                clearValues();
                setResult('');
                break;
            case '=':
                calcOperands();
                clearValues();
                break;
            default:
        }
        return result;
    };

    return (
        <>
            <div className={styles.form}>
                <div className={styles['dispalay-container']}>
                    <p>
                        {operand1 || 'Ваши числа'} {operator} {operand2}
                    </p>
                    <p>{result || 'Ваш результат'}</p>
                </div>
                <div
                    className={styles['buttons-container-operators']}
                    onClick={handleOperatorClick}
                >
                    {OPERATORS.map((operator) => (
                        <div className={styles['button-operator']} key={operator}>
                            {operator}
                        </div>
                    ))}
                </div>
                <div className={styles['buttons-container-numbers']}>
                    {NUMS.map((num) => (
                        <div
                            className={styles['button-number']}
                            key={num}
                            onClick={handleBtnClick(num)}
                        >
                            {num}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
