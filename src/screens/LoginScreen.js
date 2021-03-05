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
            <h2>Watch anywhere. Cancel at  any time.</h2>
            <h3>Ready to watch? 
                Enter your email to create or restart your membership.</h3>
            </div>
            <div className="loginScreen__input">
                <form>
         <input type="email" placeholder="Email Address"></input>
         <button className="loginScreen__getStarted">Get Started</button>
         </form>

   </div>
        </div>
    

        </div>

       
    )
}

export default LoginScreen
