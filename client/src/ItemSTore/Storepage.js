import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import StoreItemCard from './StoreItemCard';

export default function StorePage({character, setActiveChar}){

    const history = useHistory()
    const [itemList, setItemList] = useState([])
    const [currentGold,setCurrentGold] = useState(character.gold)
    const [message, setMessage] = useState("Welcome to Gilmore's glorious goods!")

    useEffect(() => {
        fetch(`/items`).then((r) => {
            if (r.ok) {
              r.json().then((items) => {
                //   setActiveChar(char)
                setItemList(items)
              });
              
            }
          })
    }, [])


    const displayItems = itemList.map((item) => <StoreItemCard item = {item} character = {character} currentGold={currentGold} setCurrentGold = {setCurrentGold} setMessage = {setMessage} setActiveChar = {setActiveChar}/>)

    return(
        <div>
            Store
            <button onClick = {() => {history.push(`/game/${character.id}`)}}> back</button>

            <h1>Current gold: {currentGold} </h1>
            {message}
            <div>
            
            {displayItems}

            </div>
        </div>
    )
    
}
