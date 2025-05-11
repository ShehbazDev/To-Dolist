import { useState } from "react";

export default function Joke() {
let [joke, setjoke] = useState({})
    const URL = "https://official-joke-api.appspot.com/random_joke"

    const getNewjoke = async () => {
         let Respose = await fetch(URL);
         let jsonRespose = await Respose.json();
         console.log(jsonRespose)
         setjoke({setup : jsonRespose.setup, punchline: jsonRespose.punchline})
    }
    return (
        <div>
            <h3>
                joke!
            </h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={getNewjoke}>new joke</button>
        </div>
    )
}

