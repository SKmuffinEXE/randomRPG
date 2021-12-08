import { useState } from "react";
import { useHistory } from "react-router"

export default function CharacterCreator({ userID, setCharacterList}){
  const [newName, setNewName] = useState("");

  const history = useHistory();

  function newChar(e){
    e.preventDefault();

    fetch(`/characters`, {
      method: "POST",
      headers: {"Content-Type": "application/json",},
      body: JSON.stringify(
      {name: newName,
        health: 20,
        mhealth: 20,
        mana: 20,
        mmana: 20,
        str: 8,
        int: 8,
        dex: 8,
        speed: 8,
        con: 8, 
        wis: 8,
        gold: 20,
        level: 1,
        points: 5,
        killcount: 0,
        user_id: userID,
        exp: 0
      }),
  })
  .then((r)=> r.json())
  .then((data) => {console.log(data)
      // setActiveChar(data)
      // setActiveChar(data.id)
      history.push(`/`)
      setCharacterList(prev => [...prev, data])
      })

  }

    return( <div><center> 
      <h1>  Create a character! </h1>
     
      <div>
          <form onSubmit = {newChar}>
        <label>Name: </label> 
        <input value = {newName} onChange = {(e) => setNewName(e.target.value)}></input> <br/>
        <label>Race: </label> <input/> <br/> <br/>
        <button className = "custButton">Submit</button>

          </form>
      </div>
      </center>
      <br/> <br/>

      <button className = "custButton" onClick = {() => {history.push("/")}}>Back </button>
    </div>
    )
}