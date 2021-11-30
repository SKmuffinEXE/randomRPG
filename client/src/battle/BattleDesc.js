import React, {useState} from 'react';

export default function BattleDesc({character, enemy, text}){

  


    return (
        <div>

        {text.map((x) => <div> {x} </div>)}

        </div>

    )
    
}
