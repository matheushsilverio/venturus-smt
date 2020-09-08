/* eslint-disable import/first */

// Imports 
import React from 'react';
import { Switch, Route } from "react-router-dom";

// Pages
import Home from './pages/Home'
import Squad from './pages/Squad'

// Components
import HeaderApp from './components/HeaderApp'

function App() {
  return (
    <div>
      
      <HeaderApp />

      {/* Routes */}
      <div class="container is-fluid">
        <Switch>

          <Route path="/squad/:id">
            <Squad />
          </Route>

          <Route path="/squad">
            <Squad />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
        

      <footer>
        2020 - All rights reserved
      </footer>
    </div>
  )
  
}

export default App;
