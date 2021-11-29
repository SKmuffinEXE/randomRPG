import {useState, UseEffect} from 'react';
import BattleOptions from './BattleOptions';

export default function BattleMain({character}){

    


    return(

        <div>
            <div> enemy area </div> <br/> <br/> <br/>

            <div> battle text</div> <br/> <br/> <br/>

            <div> {character.name}
                <div>{character.health} / {character.mhealth}</div>
                <div> {character.mana} / {character.mmana}</div>
            </div>
            <br/> 
            <BattleOptions character = {character}/>
        </div>
    )

}