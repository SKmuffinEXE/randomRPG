import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import coin from './coin.png'
import StoreItemCard from './StoreItemCard';

export default function StorePage({character, setActiveChar, refresh}){

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


    const displayItems = itemList.map((item) => <StoreItemCard item = {item} character = {character} currentGold={currentGold} setCurrentGold = {setCurrentGold} setMessage = {setMessage} setActiveChar = {setActiveChar} refresh = {refresh}/>)

    return(
        <div>
            
            

            <center><h1>{message} </h1> </center>
            <div ID = "storeGold"><h4> &nbsp; &nbsp; <img ID = "coinSize" src = {coin}/> {currentGold} </h4></div>
            
            <div ID = "characterSelectPage">
            
            {displayItems}

            </div>
            &nbsp;&nbsp;&nbsp; <button className = "custButton" onClick = {() => {history.push(`/game/${character.id}`)}}> Back</button>
        </div>
    )
    
}
