import { useState } from 'react';
import { useHistory } from "react-router"
import CharacterCard from './CharactarCard';
import CharacterCreator from './CharacterCreate';
import { NavLink } from 'react-router-dom';

export default function CharacterSelect({characterList, getActiveChar, setUser, setCharacterChosen, randomizer}){

    const history = useHistory();
const [newCharBool, setNewCharBool] = useState(false)

    function logoutHandler() {
        console.log("clicked")
        fetch("/logout", { method: "DELETE" }).then((r) => {
          if (r.ok) {
            setUser(null);
          }
        });
    }

    return(
        <div>
            <center> 
            <h1>Character select</h1> </center>
<center> 
            <div ID = "characterSelectPage">
                {characterList.map(character => <CharacterCard character = {character} getActiveChar = {getActiveChar}setCharacterChosen = {setCharacterChosen} randomizer = {randomizer}/>)}
                
            </div>
            </center>  

           <div> <button className = "custButton" onClick = {() => logoutHandler()}> Logout </button>
           
           <button className = "custButton" onClick = {() => history.push(`/create`)}> New Character</button>
           </div>  

           <div>  <h3>
               {/* <NavLink to={`/create`}> New Character</NavLink>  */}
               </h3></div>
        </div>
    )
}