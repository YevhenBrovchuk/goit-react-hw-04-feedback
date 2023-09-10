export const Statistics = ({
  good,
  neutral,
  bad,
  countTotal,
  countPositivFeedback,
}) => {
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {countTotal}</p>
      <p>Positive feedback: {countPositivFeedback} %</p>
    </div>
  );
};
