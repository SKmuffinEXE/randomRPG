import { useState, useEffect } from "react"
import potion from './potion.png'


export default function StoreItemCard({item, character, currentGold, setCurrentGold, setMessage, setActiveChar, refresh}){

    const [itemDesc, setItemDesc] = useState([])

    useEffect(() => {
        
        checkHeal()
        checkPoison()
    }, [])

    function checkHeal() {
        if (item.heal > 0) {
            setItemDesc(prev => [...prev, `Heals ${item.heal} amount of health`])
        }
    }

    function checkPoison(){
        if(item.poisonheal === true){
            setItemDesc(prev => [...prev, "Heals poison"])
        }
    }

    function buyItem(){
        
        
        if(currentGold >= item.price){
            takeGold()
            setCurrentGold(prev => prev - item.price)
            fetch(`/give_item`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                "item": item.id,
                "character": character.id
            }),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            
            })
            
            console.log("clicked")
            setMessage("Thank you for your purchase!")
        }
        else{
            console.log("not enough gold!")
            setMessage("I'm afraid you're lacking the gold for that my friend!")
            // takeGold()
            }
        console.log(item.price)
    }

    function takeGold(){

        let testGold = currentGold - item.price
        fetch(`/characters/${character.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(
            {gold: testGold}),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            refresh(character.id)
            console.log(data)
            console.log(data.id)
            // setActiveChar(data.id)
            })
    }

    return(
        <div className = "itemCard">
    <h3>{item.name} </h3>
    <h3 ID> Price: {item.price} </h3>
    {itemDesc}
<br/>

<div><img className = "itemImage" src = {item.image} /></div>
        <button className = "useButton" onClick = {() => buyItem()}>Buy</button> 
        </div>
    )
    
}
