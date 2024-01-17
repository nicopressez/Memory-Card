import { useState } from "react";

export default function Scores({score, bestScore}){

    return (
        <div className="scores">
        <h1>Current score: {score}</h1>
        <h2>Best score: {bestScore}</h2>
        </div>
    )
}