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

    const cards = itemList.map(item => <ItemCard item = {item} character = {character} removeItem ={removeItem} setActiveChar = {setActiveChar} refresh = {refresh} key = {item.name}/>)

    return(

        <div>
           <center> <h1> Your Items</h1> </center>
            

 <div ID = "itemPage">
            {cards}
            </div>
            <br/> <br/>
            &nbsp; &nbsp;&nbsp; <button className = "custButton" onClick = {() => {history.push(`/game/${character.id}`)}}> Back</button>

        </div>
    )
    
}
