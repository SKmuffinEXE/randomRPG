import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

export default function MainRest({setEnemy, setDisplayUser, setCharacterChosen}){
    const [enemyList, setEnemyList] = useState([])
    // const [enemy, setEnemy] = useState([])
    const history = useHistory();

    // useEffect(() => {
    //     fetch(`/enemies`).then((r) => {
    //         if (r.ok) {
    //           r.json().then((enemies) => {
    //               setEnemyList(enemies)
    //           });
              
    //         }
    //       })

    // }, [])

    // function getEnemy(){
    //     // const history = useHistory()
    //    const randoEnemy = enemyList[Math.floor(Math.random() * enemyList.length)]

    // //    console.log(randoEnemy) 
    //    fetch(`/enemies/${randoEnemy.id}`).then((r) => {
    //     if (r.ok) {
    //       r.json().then((enemy) => {
    //           setEnemy(enemy)
    //         //   console.log("enemy is:")
    //         //   console.log(enemy)
    //         // history.pushState('/battle')
    //       });
          
    //     }
    //   })
    // }

function battle(){
    setDisplayUser(prev => !prev)
    history.push("/battle")
}

function changeUser(){
    setCharacterChosen(prev => !prev)
    history.push("/")
}



    return(
        <div>
            <button ID = "ChangeChar" onClick = {() => changeUser()}> Change Character </button>
           <center>  <h1>Area of rest </h1></center>
            {/* <NavLink to={`/battle`}  > Battle</NavLink>  */}
            
            <div ID = "rest"><p>
                A place of rest before your next battle where you can prepare for the battles to come.  Will these battles ever come to an end?  You do not know, the only thing you are aware of is that you must keep on going.  Your next foe approaches.   
                <br/> <br/>
                Make the necessary preparations before you proceed, and think carefully.
                </p></div> <br/>
<div ID = "restButtons">   <button className = "custButton" onClick = {() => battle()}> Battle </button>
{/* 
            <NavLink to={`/character`}> Status</NavLink>  */}

            <button className = "custButton" onClick = {() => {history.push("/character")}}> Status </button>
            
            <button className = "custButton" onClick = {() => {history.push("/inventory")}}> Inventory</button>
          
            <button className = "custButton" onClick = {() => {history.push("/store")}}> Store</button>
            </div>
         
        </div>
    )
}