import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {BrowserRouter as Router ,Switch ,Route} from 'react-router-dom'

import './App.css';
import LoginScreen from './screens/LoginScreen';

function App() {
  const user=null;
  return (
    <div className="app">
      
      {!user ?(
      <LoginScreen>

      </LoginScreen>):(
         <Router>
         <Switch>
        <Route path="/"> <HomeScreen></HomeScreen></Route>
        
        </Switch>
      </Router>
      )} 

       
      
     
    
    </div>
  );
}

export default App;
