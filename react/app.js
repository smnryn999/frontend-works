import React from 'react';
import {useState} from "react";
import ReactDOM from 'react-dom';
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Salesforce from './pages/Salesforce';
import Admin from './pages/Admin';


function Main() {
  const [pageState, setPageState] = useState('home');
  const page = (p, event)=>{setPageState(p); event.target.setAttribute('className', 'active');}
  
  
  const items1 = ['Validation Rules', 'Flow Builder', 'Formulas'];
  const items2 = ['Validation Rules', 'Flow Builder', 'Formulas', 'Process Builder', 'SOQL', 'SOSL', 'Visualforce', 'Workflow'];


  return (
    <div>
      {pageState == 'home' && <Home page={page}/>}
      {pageState == 'salesforce' && <Salesforce page={page}/>}
      {pageState == 'admin' && <Admin page={page}/>}
        
    </div>
  )

}


ReactDOM.render(
  <Main></Main>,
  document.getElementById('react-app')
);
