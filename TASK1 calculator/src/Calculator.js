import React, { useState, useEffect } from 'react';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearInput();
    } else if (value === '←') {
      backspace();
    } else if (value === 'x²') {
      square();
    } else if (value === '√') {
      squareRoot();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const backspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const square = () => {
    setInput((prevInput) => `(${prevInput})**2`);
  };

  const squareRoot = () => {
    setInput((prevInput) => `Math.sqrt(${prevInput})`);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key;

      if (/[0-9+\-*/.=\n]|Enter/.test(key)) {
        event.preventDefault();
        handleButtonClick(key === 'Enter' ? '=' : key);
      } else if (key === 'Backspace') {
        event.preventDefault();
        backspace();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div
    style={
        {
            background:'beige',
        }
    }
    >
        <h1 style={
            {
                textAlign:'center',
                fontFamily:'sans-serif',
                color:'darkblue'
            }
        }>A Simple Calculator</h1>
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtonClick('x²')} className='square-root'>x²</button>
        <button onClick={() => handleButtonClick('√')} className='square'>√</button>
      <button onClick={() => handleButtonClick('C')} className='clear'>C</button>
        <button onClick={() => handleButtonClick('←')} className='backspace'>←</button>


        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('/')} className='operator'>/</button>

        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('*')} className='operator'>*</button>

        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('-')} className='operator'>-</button>

        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')} className='equals'>=</button>
        <button onClick={() => handleButtonClick('+') } className='operator'>+</button>

        
      </div>
    </div>
    </div>
  );
};

export default Calculator;
