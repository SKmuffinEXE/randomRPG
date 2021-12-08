import React, {useState} from 'react';

export default function Login({setUser, setCharacterList}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    function login(e){
        e.preventDefault();

        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, 
            password}),
        }).then((r) => {
          if (r.ok) {
            r.json().then((user) => {
            //   setCharacterList(user.player_characters)
              setUser(user)
              setCharacterList(user.characters)
            });
          } else {
            r.json().then((err) => {setErrors(err.error)
            console.log(err.error)
            });
          }
        });

    }

    return(
     <div>
         <h1>Log in </h1>
<div id = "signUpPage">
         <form>
            Username:
            <input className="inputFields" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/> <br/>
             Password: 
            <input className="inputFields" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
            <button id="loginButton" onClick={login}>Login!</button>
        </form>
        </div>
     </div>   
    )
}