import Statistics from "./Statistics";
const Total = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = ((good - bad) / total).toFixed(2);
    const positive = ((good / total) * 100).toFixed(2);
    if (total === 0) {
      return (
        <div>No feedback given</div>
      )
    }
    return(
      <div>
        <Statistics text='good' value={good} />
        <Statistics text='neutral' value={neutral} />
        <Statistics text='bad' value={bad} />
        <Statistics text='total' value={total} />
        <Statistics text='average' value={average} />
        <Statistics text='positive' value={positive} />
      </div>
    )
  }
export default Total;