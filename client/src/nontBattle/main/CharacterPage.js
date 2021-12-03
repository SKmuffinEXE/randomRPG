import {useState} from 'react'
import { useHistory } from "react-router"
import CharacterSelect from "../../characterSelect/CharacterSelect";

export default function CharacterPage({character}){
    const [leveling, setLeveling] = useState(false)
    const history = useHistory();

    function restArea() {
        history.push("/game/1")
    }

    function levelUp(){
        setLeveling(!leveling)

    }
    
return(

    <div>
       <h1> {character.name} </h1>
        <h3>Level: {character.level} </h3>
        <h3>{character.health} / {character.mhealth} </h3>
        <h3>Enemies killed: {character.killcount} </h3>
        <h3> Gold: {character.gold} </h3>

        <h3>Stats </h3>
        <h4>Strength:{character.str} </h4>
        <h4>Constitution: {character.wis} </h4>
        <h4>Dexterity: {character.dex} </h4>
        <h4>Inteligence: {character.int} </h4>
        <h4>Spirit: {character.wis} </h4>
        <h4>Speed: {character.speed} </h4>

        <h4> Points left: {character.points} </h4>

        <button onClick = {() => restArea()}> Back </button>
        <button onClick = {() => levelUp()}> { leveling ? "Cancel" :"Buy Stats"}</button>
    </div>
)

}
