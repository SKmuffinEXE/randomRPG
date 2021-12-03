import { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';import ItemCard from "./main/ItemCard";


export default function ItemPage({character, setActiveChar, refresh}){
    const [itemList, setItemList] = useState([])

    useEffect(() => {
       setItemList(character.items)
    // console.log("this works")
    }, [])

    function removeItem(item){
        console.log("test")
        let only1 = true
        let change = itemList
        for( let i = 0; i < change.length; i++){
            if (only1 === true) {
                change.splice(i, 1);
            i--
            only1 = false
        }
        }
        setItemList(change)
    }

    const history = useHistory();

    const cards = itemList.map(item => <ItemCard item = {item} character = {character} removeItem ={removeItem} setActiveChar = {setActiveChar} refresh = {refresh}/>)

    return(

        <div>
            <h1> Your Items</h1>

            {cards}

            <button onClick = {() => {history.push("/game/1")}}> Back</button>

        </div>
    )
    
}
