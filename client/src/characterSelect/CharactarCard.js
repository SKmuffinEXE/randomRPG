import {NavLink} from 'react-router-dom';

export default function CharacterCard({character, getActiveChar}){

    return(

        <div className = "CharacterCard">
            <h1>{character.name} </h1>
            
            <h3>level: {character.level} </h3>
            Gold: {character.gold}<br/>
            KC: {character.killcount}<br/>
            <h3><NavLink to={`/game/${character.id}`} onClick= {() =>getActiveChar(character.id)}>Select</NavLink> </h3>

        </div>
    )
}