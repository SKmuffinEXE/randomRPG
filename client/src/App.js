import React, {useState, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import LandingPage from './auth/LandingPage';
import MainRest from './nontBattle/main/MainRest';
import CharacterSelect from './characterSelect/CharacterSelect';
import CharacterCreator from './characterSelect/CharacterCreate';
import CharacterPage from './nontBattle/main/CharacterPage';
import BattleMain from './battle/BattleMain';
import ItemPage from './nontBattle/ItemPage';
import StorePage from './ItemSTore/Storepage';
import UserCard from './auth/userCard';

function App() {
  const [user, setUser] = useState(null)
  const [characterList, setCharacterList] = useState([])
  const [activeChar, setActiveChar] = useState([])
  const [characterChosen, setCharacterChosen] = useState(false)
  const [displayUser, setDisplayUser] = useState(true)
  const [enemy, setEnemy] = useState([])


  useEffect(() => {
    refresh()
    // test()
    randomizer()
    getActiveChar([])
    
    
    //testing get ActiveChar, remove when finished
  }, []);

  function randomizer(){
    const x = Math.floor(Math.random() * 4) + 1;
    console.log(x)
    getEnemy(x)
   
  }

  function getActiveChar(x){
    fetch(`/characters/${x}`).then((r) => {
      if (r.ok) {
        r.json().then((char) => {
            setActiveChar(char)
        });
        
      }
    })
    // console.log("Current Character")
    // console.log(activeChar)
    // test()
  }

  //this just temporary automatically makes user 1
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

  function getEnemy(x){
//    console.log(randoEnemy) 
   fetch(`/enemies/${x}`).then((r) => {
    if (r.ok) {
      r.json().then((enemy) => {
          setEnemy(enemy)
        //   console.log("enemy is:")
        //   console.log(enemy)
        // history.pushState('/battle')
      });
      
    }
  })
}

  function refresh(){
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // console.log(user)
          setUser(user)
          setCharacterList(user.characters)
          // console.log("username:")
          // console.log(user.username)
          
        });
        
      }
    })
    // console.log("clicked")
  }


  if (!user) return <LandingPage setUser={setUser} setCharacterList = {setCharacterList} />;
  return (
    <div className="App">
      
        {/* <LandingPage setUser={setUser} setCharacterList = {setCharacterList}/> */}

      {/* </header> */}
      {displayUser ? <UserCard user = {user} characterChosen = {characterChosen} activeChar = {activeChar}/> : null}
      
      <Switch>
      <Route exact path="/game/:id"> 
        <MainRest setEnemy = {setEnemy} setDisplayUser = {setDisplayUser} setCharacterChosen = {setCharacterChosen}/>
      </Route>
      <Route exact path="/battle"> 
        <BattleMain character = {activeChar} enemy = {enemy} setActiveChar = {setActiveChar} randomizer = {randomizer} setDisplayUser = {setDisplayUser}/>
      </Route>
      <Route exact path="/inventory"> 
        <ItemPage character = {activeChar} setActiveChar = {setActiveChar} refresh={getActiveChar}/>
      </Route>
      <Route exact path= "/character">
        <CharacterPage character = {activeChar} getActiveChar = {getActiveChar}/>
         </Route>
      <Route exact path="/create"> 
        <CharacterCreator refresh = {test} userID = {user.id}  setCharacterList = {setCharacterList}/>
      </Route>  
      <Route exact path = "/store">
        <StorePage character = {activeChar} setActiveChar = {setActiveChar} refresh = {getActiveChar}/>
      </Route>
      <Route exact path="/">
        <CharacterSelect characterList = {characterList}getActiveChar = {getActiveChar} setUser = {setUser} setCharacterChosen = {setCharacterChosen} setCharacterList = {setCharacterList}/>
          </Route>
          
      <Route path="*">
            <h1>404 not found</h1>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
