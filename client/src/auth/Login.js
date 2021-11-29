import React, {useState} from 'react';

export default function Login({setUser, setCharacterList}){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [errors, setErrors] = useState([]);

    function login(e){
        e.preventDefault()

    }

    return(
     <div>
         Log in

         <form>
            Username:
            <input className="inputFields" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
             Password: 
            <input className="inputFields" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button id="loginButton" onClick={login}>Login!</button>
        </form>

     </div>   
    )
}