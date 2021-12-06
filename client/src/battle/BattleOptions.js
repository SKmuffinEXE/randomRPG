import {useState} from 'react';
import { useHistory } from 'react-router';
import MainMenu from './menu/MainMenu';
import Attacks from './menu/Attacks';

export default function BattleOptions({character, attack, battleState, winState, setActiveChar, currentHP, enemy, setText, randomizer}){
    const {menuState, setMenuState} = useState("main")
    const {level, setLevel} = useState(character.level)
    const history = useHistory();

    function RestAgain(){
        if (winState === "You win!") {
            reward()
        }
        else {
            //fetch update health to 1`
        }
        randomizer()
        history.push(`/game/${character.id}`)
    }

  

    function reward(){
        const kc = character.killcount + 1
        const newGold = character.gold + enemy.gold
        let xp = character.exp + enemy.xp
        const newLevel = character.level + 1
        const newPoints = character.points + 5
        
        if (xp >= 100) {
            xp = xp - 100
            
            fetch(`/characters/${character.id}}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({killcount: kc, 
                    health: currentHP,
                gold: newGold,
                level: newLevel,
                exp: xp,
                points: newPoints}),
            })
            .then((r)=> r.json())
            .then((data) => {console.log(data)
                setActiveChar(data)
                })
            // console.log(kc)

        }
        else {
            fetch(`/characters/${character.id}}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({killcount: kc, 
                    health: currentHP,
                    exp: xp,
                gold: newGold
                }),
            })
            .then((r)=> r.json())
            .then((data) => {console.log(data)
                setActiveChar(data)
                })
            // console.log(kc)
        }

                    
       
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
