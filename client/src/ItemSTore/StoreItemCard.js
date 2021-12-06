import { useState, useEffect } from "react"
import potion from './potion.png'


export default function StoreItemCard({item, character, currentGold, setCurrentGold, setMessage, setActiveChar}){

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
        
        
        if(currentGold >= 25){
            takeGold()
            setCurrentGold(prev => prev - 25)
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
            
        }
        else{
            console.log("not enough gold!")
            setMessage("I'm afraid you're lacking the gold for that my friend!")
            // takeGold()
            }
        
    }

    function takeGold(){

        let testGold = currentGold - 25
        fetch(`/characters/${character.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(
            {gold: testGold}),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            setActiveChar(data)
            })
    }

    return(
        <div className = "itemCard">
    <h3>{item.name} </h3>
    <h3> Price: 25 Gold </h3>
    {itemDesc}
<br/>

<div><img className = "itemImage" src = {item.image} /></div>
        <button onClick = {() => buyItem()}>Buy</button> 
        </div>
    )
    
}
