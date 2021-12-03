export default function ItemCard({item,character,removeItem, setActiveChar, refresh}){

    function heal(healAmount){

        if((healAmount + character.health)> character.mhealth){
            const newHP = character.mhealth
            fetch(`/characters/${character.id}}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(
                {health: newHP}),
            })
            .then((r)=> r.json())
            .then((data) => {console.log(data)
                setActiveChar(data)
                })
        }
        else{
            const newHP =character.health + healAmount
            fetch(`/characters/${character.id}}`, {
                method: "PATCH",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(
                {health: newHP}),
            })
            .then((r)=> r.json())
            .then((data) => {console.log(data)
                setActiveChar(data)
                })
        }
    
            
        
    }

    function itemUse(){
        if(item.heal > 0){
            heal(item.heal)
            }
        
        removeItem(item.id)


        fetch(`/use_item`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
                "item": item.id,
                "character": character.id
            }),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            refresh(character.id);
            })
    }

    return(
        <div>
            {item.name}
            <button onClick = {() => itemUse()}>Use</button>
        </div>
    )
    
}
