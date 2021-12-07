import CharacterCard from './CharactarCard';
import { NavLink } from 'react-router-dom';

export default function CharacterSelect({characterList, getActiveChar, setUser, setCharacterChosen}){

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
            <div>
                {characterList.map(character => <CharacterCard character = {character} getActiveChar = {getActiveChar}setCharacterChosen = {setCharacterChosen}/>)}
                
            </div>
            </center>  

           <div> <button onClick = {() => logoutHandler()}> Logout </button></div>  

           <div>  <h3>
               <NavLink to={`/create`}> New Character</NavLink> 
               </h3></div>
        </div>
    )
}