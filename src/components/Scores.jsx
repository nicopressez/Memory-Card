export default function Scores({ score, bestScore }) {
  return (
    <div className="scores">
      <h2>Current score: {score}</h2>
      <h3>Best score: {bestScore}</h3>
    </div>
  );
}
