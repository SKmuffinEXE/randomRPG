import {NavLink} from 'react-router-dom';

export default function CharacterCard({character, getActiveChar, setCharacterChosen, randomizer}){

    function handleClick() {
        getActiveChar(character.id) 
        setCharacterChosen(prev => !prev)
        randomizer()
    }
    

    return(

        <div className = "CharacterCard">
            <h1>{character.name} </h1>
            
            <h3>level: {character.level} </h3>
            Gold: {character.gold}<br/>
            KC: {character.killcount}<br/>
            <h3><NavLink to={`/game/${character.id}`} onClick= {() =>handleClick()}>Select</NavLink> </h3>

        </div>
    )
}