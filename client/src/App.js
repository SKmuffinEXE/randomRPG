import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './auth/LandingPage';
import MainRest from './nontBattle/main/MainRest';
import CharacterSelect from './characterSelect/CharacterSelect';
import CharacterCreator from './characterSelect/CharacterCreate';
import CharacterPage from './nontBattle/main/CharacterPage';
import BattleMain from './battle/BattleMain';

function App() {
  const [user, setUser] = useState([])
  const [characterList, setCharacterList] = useState([])
  const [activeChar, setActiveChar] = useState([])


  useEffect(() => {
    // refresh()
    test()
    getActiveChar(1)
    //testing get ActiveChar, remove when finished
  }, []);

  function getActiveChar(x){
    fetch(`/characters/${x}`).then((r) => {
      if (r.ok) {
        r.json().then((char) => {
            setActiveChar(char)
        });
        
      }
    })
    console.log("Current Character")
    console.log(activeChar)
  }

  function test(){
    fetch("/users/1").then((r) => {
      if (r.ok) {
        r.json().then((user) => {console.log(user)
          setUser(user)
          setCharacterList(user.characters)
        });
        
      }
    })
    // console.log("clicked")
    console.log(user)
  }
  

  function refresh(){
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {console.log(user)
          setUser(user)
         
          console.log(characterList)
        });
        
      }
    })
    // console.log("clicked")
  }
  return (
    <div className="App">
      
        {/* <LandingPage setUser={setUser} setCharacterList = {setCharacterList}/> */}

      {/* </header> */}
      {/* Hello! */}
      {user.username}
      <Switch>
      <Route exact path="/game/:id"> 
        <MainRest activeChar = {activeChar}/>
      </Route>
      <Route exact path="/battle"> 
        <BattleMain character = {activeChar}/>
      </Route>
      <Route exact path= "/character">
        <CharacterPage character = {activeChar}/>
         </Route>
      <Route exact path="/create"> 
        <CharacterCreator/>
      </Route>  
      <Route exact path="/">
        <CharacterSelect characterList = {characterList} getActiveChar = {getActiveChar}/>
          </Route>
      <Route path="*">
            <h1>404 not found</h1>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
