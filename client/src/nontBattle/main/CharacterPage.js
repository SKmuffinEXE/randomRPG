import {useState} from 'react'
import { useHistory } from "react-router"
import CharacterSelect from "../../characterSelect/CharacterSelect";

export default function CharacterPage({character, getActiveChar}){
    const [leveling, setLeveling] = useState(false)
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
    const [errors, setErrors] = useState([]);

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

    <div ID = "characterPageBG">
        <div >
        <h1>&nbsp; &nbsp; {character.name} </h1> 
       <center> 
        <div ID = "characterPageInfo">
        <div>
        <center>
        <h3>Level: {character.level} </h3> </center>
        <h3> Experience: {character.exp} / 100 </h3>
        <h3 id = "HPText">Health: {character.health} / {character.mhealth} </h3>
        <h3>Enemies killed: {character.killcount} </h3>
        <h3> Gold: {character.gold} </h3>
        </div>
        <div>&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>
    <div ID = "stats">
        <h3>Stats </h3>
        <h4>

        Strength:  
        <button className="statButtons" onClick ={(e) => PointBuy(e, setStrength, initstr , strength,  "plus")}> ↑ </button> 
            {strength} 
            <button className="statButtons" onClick ={(e) => PointBuy(e, setStrength, initstr, strength, "minus")}> ↓</button>
            </h4>
        <h4>Constitution: 
        <button className="statButtons" onClick ={(e) => PointBuy(e, setConstitution, initcon , Constitution,  "plus")}> ↑ </button> 
            
            {Constitution} 
            
            <button className="statButtons" onClick ={(e) => PointBuy(e, setConstitution, initcon, Constitution, "minus")}> ↓</button>
            </h4>
        <h4>Dexterity: 
        <button className="statButtons" onClick ={(e) => PointBuy(e, setDexterity, initdex , Dexterity,  "plus")}> ↑ </button>

            {Dexterity} 
            
            <button className="statButtons" onClick ={(e) => PointBuy(e, setDexterity, initdex, Dexterity, "minus")}> ↓</button>
            
            </h4>
        <h4>Inteligence: 
        <button className="statButtons" onClick ={(e) => PointBuy(e, setInteligence, initint , Inteligence,  "plus")}> ↑ </button>
            
            {character.int} 

            <button className="statButtons" onClick ={(e) => PointBuy(e, setInteligence, initint, Inteligence, "minus")}> ↓</button>
            
            </h4>
        <h4>Spirit: 
            
        <button className="statButtons" onClick ={(e) => PointBuy(e, setWisdom, initwis, Wisdom, "plus")}> ↑ </button>
            
            {Wisdom} 
            
            <button className="statButtons" onClick ={(e) => PointBuy(e, setWisdom, initwis, Wisdom, "minus")}> ↓</button>
            </h4>
        <h4>Speed:

             <button className="statButtons" onClick ={(e) => PointBuy(e, setSpeed, initspd, Speed, "plus")}> ↑ </button> 
            
            {Speed} 
            
            <button className="statButtons" onClick ={(e) => PointBuy(e, setSpeed, initspd, Speed, "minus")}> ↓</button>
            </h4>

        <h4> Points left: {Points} </h4>
        </div>
        
        </div>
        </center>
    </div>
    <center> 
    <div ID>
    <button className = "custButton" onClick = {() => restArea()}> Back </button>
        <button className = "custButton" onClick = {() => levelUp()}> Buy Stats </button>
        </div>
        </center>
    </div>
)

}
