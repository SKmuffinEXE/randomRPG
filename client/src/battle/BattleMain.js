import {useState, useEffect} from 'react';
import BattleOptions from './BattleOptions';
import BattleDesc from './BattleDesc';

export default function BattleMain({character, enemy}){

    const [enemyHP, setEnemyHP] = useState(enemy.maxhp)
    const [battleState, setBattleState] = useState(true)
    const [text, setText] = useState([`You are fighting ${enemy.name}`])

    function attack(){

        
        checkBattleState();
    }

    function enemyAttack(){

    }

    

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

        <div>
            <div> enemy area 
                {enemy.name}
                HP:{enemyHP} / {enemy.maxhp}
                </div> <br/> <br/> <br/>

            <div> 
                {/* battle text */}
                
                <BattleDesc character = {character} enemy = {enemy} text ={text}/>
                </div> <br/> <br/> <br/>

            <div> {character.name}
                <div>HP : {character.health} / {character.mhealth}</div>
                <div> MP:  {character.mana} / {character.mmana}</div>
            </div>
            <br/> 
            <BattleOptions character = {character}/>
        </div>
    )

}