import {useState, useEffect} from 'react';
import BattleOptions from './BattleOptions';
import BattleDesc from './BattleDesc';

export default function BattleMain({character, enemy, setActiveChar, randomizer, setDisplayUser}){

    const [enemyHP, setEnemyHP] = useState(enemy.maxhp)
    const [currentHP, setCurrentHP] = useState(character.health)
    const [battleState, setBattleState] = useState(true)
    const [text, setText] = useState([`You are fighting a ${enemy.name}`])
    const [winState, setWinState] = useState('')

    // useEffect(() => {
    //     //speed checker will go here, prolly stretch since no enemy outspeeds default character atm.
    // },[])

    function attack(){
        const dmgVal = damage(character.str, enemy.con)
        console.log( `Damage is ${dmgVal}`)
        
        if(dmgVal >= enemyHP){
            setEnemyHP(0)
            setText([`You strike ${enemy.name} for ${dmgVal} damage`, `${enemy.name} falls before your feet.`, `You defeated ${enemy.name}!`, `You've gained ${enemy.gold} gold!`, `You've gained ${enemy.xp} experience!`])
            // setRandoEnemy()
            setWinState("You win!")
            checkLevelUp()
            endBattle()
        }
        else{
            setEnemyHP(prev => prev - dmgVal)
            setText(prev => [...prev, `You strike ${enemy.name} for ${dmgVal} damage`])
            enemyAttack()
        }
    }

    function checkLevelUp(){
        if(character.exp >= 90){
            setText(prev => [...prev, "You leveled up!"])
        }
    }

    function enemyAttack(){
        const dmgVal = damage(enemy.str, character.con)
        setText(prev => [...prev, `${enemy.name} attacks you for ${dmgVal} damage`])
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
            <div ID = "BattleEnemyCard">
                {enemy.name} <br/> 
                <progress id = "enemyHealthBar" value = {enemyHP} max = {enemy.maxhp}> </progress>
               {/* <div ID = "HPText"> HP: {enemyHP} / {enemy.maxhp} </div> */}
                </div> <br/> <br/> <br/>

            <div ID = "BattleText"> 
            <div ID = "InnerBattleText">
                
                
                <BattleDesc character = {character} enemy = {enemy} text ={text}/> 
                </div>
                </div> <br/> <br/> <br/>

            <div ID = "BattlePCCard"> 
            
            <div ID = "bold"> <h1>{character.name} </h1></div>
                <div ID = "HPText">HP : {currentHP} / {character.mhealth}</div>
                <progress id = "healthBar" value = {currentHP} max = {character.mhealth}> </progress>

                
                <div ID = "MPText"> MP:  {character.mana} / {character.mmana}</div>

                {/* <progress id = "manaBar" value = {character.mana} max = {character.mmana}> </progress> */}
            </div>
            <br/> 
            
            <div ID = "BattleOptions">
                <center>
            <BattleOptions character = {character} attack = {attack} battleState = {battleState} winState = {winState} setActiveChar = {setActiveChar} currentHP = {currentHP} enemy = {enemy} setText ={setText} randomizer ={randomizer} setDisplayUser ={setDisplayUser}/>
            </center>
            </div>
        </div>
    )

}