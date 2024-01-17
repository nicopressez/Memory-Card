export default function Gameend({ ended, restartHandler, score }) {
  if (ended)
    return (
      <dialog open>
        <h2>Game Over</h2>
        <h3>Final score:{score}</h3>
        <button onClick={restartHandler}>Play again</button>
      </dialog>
    );
}
