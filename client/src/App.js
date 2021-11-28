import React, {useState, useEffect} from 'react';
import './App.css';
import LandingPage from './auth/LandingPage';

function App() {
  const [user, setUser] = useState(null)
  const [characterList, setCharacterList] = useState([])

  useEffect(() => {
    refresh()
  }, []);

  function refresh(){
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {console.log(user)
          setUser(user)
          setCharacterList(user.player_characters)
          console.log(characterList)
        });
        
      }
    })
    // console.log("clicked")
  }
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
