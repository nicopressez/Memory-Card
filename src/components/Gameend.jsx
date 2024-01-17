export default function Gameend({ended, restartHandler}){
    if (ended) return (
        <dialog open>
            <h1>Lost!</h1>
            <button onClick={restartHandler}>Play again</button>
        </dialog>
    )

}