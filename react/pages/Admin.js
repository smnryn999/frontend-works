import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import List,{JumbotronS} from '../components/list';
import BigList from '../components/bigList';
import Footer, {MoveTop} from '../components/footer';

function Admin(props){
  
  const items = ['Validation Rules', 'Flow Builder', 'Formulas', 'Questions', 'Full', 'Validation Rules', 'Flow Builder', 'Formulas', 'Questions', 'Full','Validation Rules', 'Flow Builder', 'Formulas', 'Questions', 'Full'];
  let paragraph1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';
  let paragraph2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  
  return(
    <div>
        <Header page={props.page}/>
        <Menu page={props.page}/>
        <BigList title='Information' liste={items} paragraph={paragraph1}/>
        <JumbotronS/>
        <List title='Admin' items={items}/>
        
        <MoveTop/>
        <Footer/>
    </div>
    )
}

export default Admin;
