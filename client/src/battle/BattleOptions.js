import {useState} from 'react';
import { useHistory } from 'react-router';
import MainMenu from './menu/MainMenu';
import Attacks from './menu/Attacks';

export default function BattleOptions({character, attack, battleState, winState, setActiveChar, currentHP, enemy}){
    const {menuState, setMenuState} = useState("main")
    const history = useHistory();

    function RestAgain(){
        if (winState === "You win!") {
            reward()
        }
        else {
            //fetch update health to 1`
        }
        history.push("/game/1")
    }

    function reward(){
        const kc = character.killcount + 1
        const newGold = character.gold + enemy.gold
        

                    fetch(`/characters/${character.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({killcount: kc, 
                health: currentHP,
            gold: newGold}),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            setActiveChar(data)
            })
        console.log(kc)
    
        }

        // fetch(`/characters/${character.id}`), {
        //     method: "PATCH",
        //     headers: {"Content-Type": "application/json",},
        //     body: JSON.stringify(
        //         {killcountt: kc, health: character.health}),}
        // }
        // .then((r) => r.json())
        // .then((data) => setActiveChar(data))



    function resetHealth(){

    }
  

    if(!battleState) return <button onClick ={() => RestAgain()}>{winState}</button>;
    return(

        <div> Menu <br/>
 <button onClick = {() => attack()}> Attack</button> <button>Items</button>
       {/* {currentMenu} */}
       {/* <MainMenu/> */}
    </div>
    )
    
}
