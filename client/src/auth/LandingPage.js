import React, {useState} from 'react';
import Login from './Login';
import SignUp from './SignUp';
import logo from './logo.png';

export default function LandingPage({setUser, setCharacterList}){
    const [page, setPage] = useState(true);

    return(

        <div>
            <center> 
            <h1> Welcome to the Simple RPG!</h1>
            <img id = "logoSize" src = {logo}/>
            <h2> Login to start playing or create an account!</h2>
            <div id = 'landingPageButtons'><button onClick={() => setPage(true)}> login</button> <button onClick={() => setPage(false)}> sign up</button> </div>
            
            {page ? <Login setUser={setUser} setCharacterList = {setCharacterList}/> : <SignUp setUser={setUser} setCharacterList = {setCharacterList}/>}
            </center>
        </div>
    )
}