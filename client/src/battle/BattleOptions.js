import {useState} from 'react';
import MainMenu from './menu/MainMenu';
import Attacks from './menu/Attacks';

export default function BattleOptions({character}){
    const {menuState, setMenuState} = useState("main")
  


    return(

        <div> Menu <br/>
 <button> Attack</button> <button>Items</button>
       {/* {currentMenu} */}
       {/* <MainMenu/> */}
    </div>
    )
    
}
