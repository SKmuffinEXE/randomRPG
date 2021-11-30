import React, {useEffect, useState} from 'react';
import {NavLink, useHistory} from 'react-router-dom';

export default function MainRest({setEnemy}){
    const [enemyList, setEnemyList] = useState([])
    // const [enemy, setEnemy] = useState([])

    useEffect(() => {
        fetch(`/enemies`).then((r) => {
            if (r.ok) {
              r.json().then((enemies) => {
                  setEnemyList(enemies)
              });
              
            }
          })

    }, [])

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



    return(
        <div>
            <h3><NavLink to={`/`}>Back</NavLink> </h3>
            <h1>Area of rest </h1>
            <NavLink to={`/battle`}  > Battle</NavLink> 

            <NavLink to={`/character`}> Status</NavLink> 

            <button> test</button>
            
            
        </div>
    )
}