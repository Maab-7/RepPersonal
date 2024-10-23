import { useState } from 'react'
import Button from './components/Button' ;
import Statistics from './components/Statistics';
import Total from './components/Total';

const App = () => {
  //guarda los clics de cada boton en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodButton = () => {
    setGood(good + 1)
  };
  
  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
  };

  const handleBadButton = () => {
    setBad(bad + 1)
  };

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <table>
          <tbody>
        <tr>
          <td><Button onClick={handleGoodButton} text='good'/></td>
          <td><Button onClick={handleNeutralButton} text='neutral'/></td>
          <td><Button onClick={handleBadButton} text='bad'/></td>
        </tr>
        </tbody>
        </table>
      </div>
      <h1>statistics</h1>
      <Total good={good} neutral={neutral} bad={bad} />
    </div>
  );
};
export default App