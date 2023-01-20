import React from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
import List,{Jumbotron} from '../components/list';
import Footer, {MoveTop} from '../components/footer';


function Home(props){
  
  const items1 = ['Validation Rules', 'Flow Builder', 'Formulas'];
  const items2 = ['Validation Rules', 'Flow Builder', 'Formulas', 'Process Builder', 'SOQL', 'SOSL', 'Visualforce', 'Workflow'];
  
  return(
    <div>
        <Header page={props.page}/>
        <Menu page={props.page}/>
        
        <Jumbotron/>
        <List title='List 1' items={items1}/>
        <List title='List 2' items={items2}/>
        <Footer/>
        
        <MoveTop/>
    </div>
    )
}

export default Home;
