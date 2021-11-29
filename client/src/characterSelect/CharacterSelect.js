import CharacterCard from './CharactarCard';
import { NavLink } from 'react-router-dom';

export default function CharacterSelect({characterList, getActiveChar}){

    return(
        <div>
            <center> 
            <h1>Character select</h1> </center>

            <div>
                {characterList.map(character => <CharacterCard character = {character} getActiveChar = {getActiveChar}/>)}
                
            </div>
           

           <div> <button> Logout </button></div>  
           <div>  <h3>
               <NavLink to={`/create`}> New Character</NavLink> 
               </h3></div>
        </div>
    )
}