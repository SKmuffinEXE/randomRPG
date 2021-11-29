import {useState} from 'react';
import MainMenu from './menu/MainMenu';
import Attacks from './menu/Attacks';

export default function BattleOptions({character}){
    const {menuState, setMenuState} = useState("main")
    const {battleState, setBattleState} = useState(true)

    function checkBattleState() {
        if(character.health != 0){
            setBattleState(true)
            //return to next turn
        }
        else{
            setBattleState(false)
            //return to rest area with 1 hp and lost money
        }
    }



    return(

        <div> Menu <br/>
 <button> Attack</button> <button>Items</button>
       {/* {currentMenu} */}
       {/* <MainMenu/> */}
    </div>
    )
    
}
