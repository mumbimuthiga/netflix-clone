import React from 'react';
import "../screens/LoginScreen.css"

function LoginScreen() {
    return (
        <div className="loginScreen" >
            <div className="loginScreen__background">
                <img className="loginScreen__logo" src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" 
                alt="">

                </img>

               <button className="loginScreen__button">Sign In</button>
            </div>
          <div className="loginScreen__gradient"></div>
          <div className="loginScreen__body">
              <div>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
            </div>
        </div>
        </div>

       
    )
}

export default LoginScreen
