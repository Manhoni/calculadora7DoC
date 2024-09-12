///////////////////////
// Welcome to Cursor //
///////////////////////

/*
Step 1: Try generating a react component that lets you play tictactoe with Cmd+K or Ctrl+K on a new line.
  - Then integrate it into the code below and run with npm start

Step 2: Try highlighting all the code with your mouse, then hit Cmd+k or Ctrl+K. 
  - Instruct it to change the game in some way (e.g. add inline styles, add a start screen, make it 4x4 instead of 3x3)

Step 3: Hit Cmd+L or Ctrl+L and ask the chat what the code does

Step 4: To try out cursor on your own projects, go to the file menu (top left) and open a folder.
*/


import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { add, subtract, multiply, divide } from './calculator';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');
  const [isActive, setIsActive] = useState(true);

  const calculateResult = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    switch (operation) {
      case 'add':
        setResult(add(a, b));
        break;
      case 'subtract':
        setResult(subtract(a, b));
        break;
      case 'multiply':
        setResult(multiply(a, b));
        break;
      case 'divide':
        setResult(divide(a, b));
        break;
      default:
        setResult('Operação inválida');
    }
  };

  const handleExit = () => {
    setIsActive(false);
  };

  if (!isActive) {
    return <p className="goodbye-message">Até a próxima!</p>;
  }

  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">+</option>
        <option value="subtract">-</option>
        <option value="multiply">×</option>
        <option value="divide">÷</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />
      <button onClick={calculateResult}>Calcular</button>
      <p className="result-text">Resultado: {result}</p>
      <button onClick={handleExit} className="exit-button">Sair</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora Simples</h1>
        <Calculator />
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);