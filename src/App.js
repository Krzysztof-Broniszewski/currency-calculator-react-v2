import { useState, useEffect } from 'react';
import { currencies } from './currencies';
import { Form } from './Form';

function App() {

  useEffect(() => {
  }, []);

  const [result, setResult] = useState();

  const calculateResult = (currencyName, amount) => {
    const rate = currencies.find(({ code }) => code === currencyName).rate;

    setResult({
      sourceAmount: +amount,
      targetAmount: amount / rate,
      currencyName,
    });
  }

  return (
    <div className="app">
      <Form
        result={result}
        calculateResult={calculateResult}
      />
    </div>
  );
}

export default App;