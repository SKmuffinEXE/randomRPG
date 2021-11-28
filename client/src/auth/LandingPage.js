import React, {useState} from 'react';

export default function LandingPage(){
    const [page, setPage] = useState(false);

    return(

        <div>
            <h1> Welcome to the game!</h1>
            <h2> Login to start playing or create an account!</h2>
        </div>
    )
}