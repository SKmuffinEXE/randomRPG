import React, {useState} from 'react';

export default function SignUp(setUser, setCharacterList){
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [passwordConfirmation, setPasswordConfirmation] = useState(null);
    const [imageUrl, setImageUrl] = useState("");
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault();

        fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, 
              password,
              password_confirmation: passwordConfirmation,
            image_url: imageUrl}),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => {
                // setCharacterList(user.player_characters)
                // setUser(user)
                console.log(user)
                setErrors("Registration succesful, please log in!")
              });
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });

    }

    return ( 
    <div>
        <div>
      <h1> Sign up! </h1> <br/>
       {errors}
       <div>
        <form><div id = "signUpPage"> 
            Username:
            <input className="inputFieldsSignUp" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            {/* Profile image:
            <input
            className="inputFieldsSignUp"
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        /> */}
        <br/>
             Password: 
            <input className="inputFieldsSignUp" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/> <br/>
          Confirm Password:
            <input
            className="inputFieldsSignUp"
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />

<button id="signUpButton" onClick={handleSubmit}>SEND IT!</button>
        </div>
        <div> </div>
  <br/> <br/>
            
        </form>
        </div>
    </div>
    

    </div>
    )
}