import {useState} from 'react'
import { useHistory } from "react-router"
import CharacterSelect from "../../characterSelect/CharacterSelect";
import coin from './coin.png'
import str from './str.png'
import con from './constitution.png'
import int from './int.png'
import dex from './dex.png'
import spr from './spirit.png'
import spd from './spd.png'

export default function CharacterPage({character, getActiveChar}){

    const history = useHistory();
    const [strength, setStrength] = useState(character.str)
    const [initstr, setinitstr] = useState(character.str)
    const [Dexterity, setDexterity] = useState(character.dex)
    const [initdex, setinitDex] = useState(character.dex)
    const [Constitution, setConstitution] = useState(character.con)
    const [initcon, setinitCon] = useState(character.con)
    const [Inteligence, setInteligence] = useState(character.int)
    const [initint, setinitint] = useState(character.int)
    const [Wisdom, setWisdom] = useState(character.wis)
    const [initwis, setinitWis] = useState(character.wis)
    const [Speed, setSpeed] = useState(character.speed)
    const [initspd, setinitspd] = useState(character.speed)
    const [Points, setPoints] = useState(character.points)


    function PointBuy(e, setStat, initstat, stat, increment){
        e.preventDefault()
    
    if(increment === "plus" && stat < 15 && Points > 0)
        {setStat(prev => ++prev)
        setPoints(prev => --prev)
        }
    else if (increment === "minus" && stat > initstr)
        {
        setStat(prev => --prev)
        setPoints(prev => ++prev)
        }
    } 


    function restArea() {
        history.push(`/game/${character.id}`)
    }

    function levelUp(){
        fetch(`/characters/${character.id}}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify({
            str: strength,
            int: Inteligence,
            dex: Dexterity,
            speed: Speed,
            con: Constitution,
            wis: Wisdom,
            points: Points
        }),
        })
        .then((r)=> r.json())
        .then((data) => {console.log(data)
            getActiveChar(data)

            setinitCon(Constitution)
            setinitDex(Dexterity)
            setinitint(Inteligence)
            setinitstr(strength)
            setinitWis(Wisdom)
            setinitspd(Speed)
            })

            // fetch

    }
    
return(
<div>
    <div ID = "characterPageBG">
        <div >
        
       
        <div ID = "characterPageInfo">
        <div>
        
        <h1>{character.name} </h1> 
        <h3>Level: {character.level} </h3> 
       
        <h3 id = "HPText">Health: {character.health} / {character.mhealth} </h3>
        <progress id = "healthBar" value = {character.health} max = {character.mhealth}> </progress>
        <h3>Enemies killed: {character.killcount} </h3>
        <h3> Gold:<img ID = "coinSize" src = {coin}/> {character.gold}   </h3>
        <h3> Experience: {character.exp} / 100 </h3>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>
    <div ID = "stats">
        <h3>Stats </h3>
        <h4>
        <img ID = "coinSize" src = {str}/>
        Strength:  
        <div ID = "stats"> 
        <button className="upButton" onClick ={(e) => PointBuy(e, setStrength, initstr , strength,  "plus")}> ↑ </button> 
            {strength} 
            <button className="downButton" onClick ={(e) => PointBuy(e, setStrength, initstr, strength, "minus")}> ↓</button>
            </div>
            </h4>
            

        <h4> <img ID = "coinSize" src = {con}/>Constitution: 
        <div ID = "stats"> 
        <button className="upButton" onClick ={(e) => PointBuy(e, setConstitution, initcon , Constitution,  "plus")}> ↑ </button> 
            
            {Constitution} 
            
            <button className="downButton" onClick ={(e) => PointBuy(e, setConstitution, initcon, Constitution, "minus")}> ↓</button>
            </div>
            </h4>
        <h4>  <img ID = "coinSize" src = {dex}/>Dexterity: 

        <div ID = "stats"> 
        <button className="upButton" onClick ={(e) => PointBuy(e, setDexterity, initdex , Dexterity,  "plus")}> ↑ </button>

            {Dexterity} 
            
            <button className="downButton" onClick ={(e) => PointBuy(e, setDexterity, initdex, Dexterity, "minus")}> ↓</button>
            </div>
            </h4>
        <h4> <img ID = "coinSize" src = {int}/>Inteligence: 
        <div ID = "stats"> 
        <button className="upButton" onClick ={(e) => PointBuy(e, setInteligence, initint , Inteligence,  "plus")}> ↑ </button>
            
            {character.int} 

            <button className="downButton" onClick ={(e) => PointBuy(e, setInteligence, initint, Inteligence, "minus")}> ↓</button>
            </div>
            </h4>
        <h4><img ID = "coinSize" src = {spr}/> Spirit: 
        <div ID = "stats"> 
        <button className="upButton" onClick ={(e) => PointBuy(e, setWisdom, initwis, Wisdom, "plus")}> ↑ </button>
            
            {Wisdom} 
            
            <button className="downButton" onClick ={(e) => PointBuy(e, setWisdom, initwis, Wisdom, "minus")}> ↓</button>
            </div>
            </h4>
        <h4> <img ID = "coinSize" src = {spd}/>Speed:
        <div ID = "stats"> 
             <button className="upButton" onClick ={(e) => PointBuy(e, setSpeed, initspd, Speed, "plus")}> ↑ </button> 
            
            {Speed} 
            
            <button className = "downButton" onClick ={(e) => PointBuy(e, setSpeed, initspd, Speed, "minus")}> ↓</button>
            </div>
            </h4>

        <h4> Points left: {Points} </h4>
    <center> 
        <button ID = "buyStats" onClick = {() => levelUp()}> Buy Stats </button>
        </center>
        </div>
        
        </div>

    </div>
        
    </div>
    &nbsp;&nbsp;&nbsp;<button className = "custButton" onClick = {() => restArea()}> Back </button>
    </div>
)

}
