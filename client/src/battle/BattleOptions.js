import {useState} from 'react';
import { useHistory } from 'react-router';
import MainMenu from './menu/MainMenu';
import Attacks from './menu/Attacks';

export default function BattleOptions({character, attack, battleState, winState}){
    const {menuState, setMenuState} = useState("main")
    const history = useHistory();

    function RestAgain(){
        if (winState === "You win!") {
            //fetch update KC +1
        }
        else {
            //fetch update health to 1`
        }
        history.push("/game/1")
    }
  

    if(!battleState) return <button onClick ={RestAgain}>{winState}</button>
    return(

        <div> Menu <br/>
 <button onClick = {() => attack()}> Attack</button> <button>Items</button>
       {/* {currentMenu} */}
       {/* <MainMenu/> */}
    </div>
    )
    
}
