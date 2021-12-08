export default function UserCard({activeChar, characterChosen, user}) {

    return(
        <div ID = "userCard">
            <h3>Current User: {user.username} </h3>
      {characterChosen ? <p>Current Character: {activeChar.name}</p> : null} 
      <div ID = "HPText">
      {characterChosen ?  `HP: ${activeChar.health} / ${activeChar.mhealth}` : null}
      </div>

      {characterChosen ? <progress ID = "healthBar" value = {activeChar.health} max = {activeChar.mhealth}></progress> : null}

      {characterChosen ? <p>EXP:</p> : null}      

      {characterChosen ? <progress value = {activeChar.exp} max = {100}></progress> : null}
      
        </div>
    )
    
}
