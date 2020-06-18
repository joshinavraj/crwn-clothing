import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'; 
import ShopPage from './pages/shop/shop.component.jsx'
import { Route, Switch } from "react-router";

const HatsPage=()=>(
  <div>
    <h1>HatsPage</h1>
  </div>
)
function App() {
  return (
    <div >
      <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route exact path='/shop' component={ShopPage}/>
     </Switch>
    </div>
  );
}

export default App;
