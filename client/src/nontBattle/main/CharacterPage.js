import { useHistory } from "react-router"

export default function CharacterPage({character}){
    const history = useHistory();

    function restArea() {
        history.push("/game/1")
    }
    
return(

    <div>
       <h1> {character.name} </h1>
        <h3>Level: {character.level} </h3>

        <h3>Stats </h3>
        <h4>Strength:{character.str} </h4>
        <h4>Constitution: {character.wis} </h4>
        <h4>Dexterity: {character.dex} </h4>
        <h4>Inteligence: {character.int} </h4>
        <h4>Spirit: {character.wis} </h4>
        <h4>Speed: {character.speed} </h4>

        <button onClick = {() => restArea()}> Back </button>
    </div>
)

}
