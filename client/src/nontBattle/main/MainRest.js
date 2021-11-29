import React, {useEffect, useState} from 'react';
import {NavLink} from 'react-router-dom';

export default function MainRest({activeChar}){
    const [enemyList, setEnemyList] = useState([])

    useEffect(() => {
        fetch(`/enemies`).then((r) => {
            if (r.ok) {
              r.json().then((enemies) => {
                  setEnemyList(enemies)
              });
              
            }
          })

    }, [])

    function getEnemy(){
       const randoEnemy = Math.floor(Math.random() * enemyList.length)

       console.log(randoEnemy) 
    }



    return(
        <div>
            <h3><NavLink to={`/`}>Back</NavLink> </h3>
            <h1>Area of rest </h1>
            <NavLink to={`/battle`}> Battle</NavLink> 
            <NavLink to={`/character`}> Status</NavLink> 

            <button onClick={() => getEnemy}> test</button>
            
            
        </div>
    )
}