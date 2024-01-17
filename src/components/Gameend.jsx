export default function Gameend({ended}){
    if (ended) return (
        <dialog open>
            <h1>Lost!</h1>
        </dialog>
    )

}