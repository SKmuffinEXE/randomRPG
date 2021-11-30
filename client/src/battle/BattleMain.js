import {useState, useEffect} from 'react';
import BattleOptions from './BattleOptions';
import BattleDesc from './BattleDesc';

export default function BattleMain({character, enemy}){

    const [enemyHP, setEnemyHP] = useState(enemy.maxhp)
    const [currentHP, setCurrentHP] = useState(character.health)
    const [battleState, setBattleState] = useState(true)
    const [text, setText] = useState([`You are fighting ${enemy.name}`])
    const [winState, setWinState] = useState('')

    // useEffect(() => {
    //     //speed checker will go here, prolly stretch since no enemy outspeeds default character atm.
    // },[])

    function attack(){
        const dmgVal = damage(character.str, enemy.con)
        console.log( `Damage is ${dmgVal}`)
        
        if(dmgVal >= enemyHP){
            setEnemyHP(0)
            setText([`You strike ${enemy.name} for ${dmgVal} damage`, `You defeated ${enemy.name}!`])
            setWinState("You win!")
            endBattle()
        }
        else{
            setEnemyHP(prev => prev - dmgVal)
            setText(prev => [...prev, `You strike ${enemy.name} for ${dmgVal} damage`])
            enemyAttack()
        }
    }

    

    function enemyAttack(){
        const dmgVal = damage(enemy.str, character.con)
        setCurrentHP(prev => prev - dmgVal)
        if(currentHP < 0){
            setWinState("You lose")
            endBattle()
        }

        
    }

    function damage(attack, defend){
        const random = Math.floor(Math.random() * 7 -3)
        const dmg = attack - defend + random

        if(dmg < 1)
            {return 1}
            else
            {return dmg}
        // return random
    }

    



    function endBattle(){
        if(currentHP != 0){
            console.log("You win!")
        }
        else(
            console.log("You lose!")
           
        )
        setBattleState(false)
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
                <div>HP : {currentHP} / {character.mhealth}</div>
                <div> MP:  {character.mana} / {character.mmana}</div>
            </div>
            <br/> 
            <BattleOptions character = {character} attack = {attack} battleState = {battleState} winState = {winState}/>
        </div>
    )

}