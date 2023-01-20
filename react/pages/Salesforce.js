import React from 'react';
import {useState} from 'react';
import Header from '../components/header';
import Menu from '../components/menu';
//import Progress from '../components/progress';
import Quiz from '../components/quiz';
import Footer, {MoveTop} from '../components/footer';

function Salesforce(props){
  let [progress, setProgress] = useState(70);
  let [i, setI] = useState(1);
  let [quiz, setQuiz] = useState('quiz1');
  
  let question1 = {
    ques: 'What is the result of the following code?',
    code: 'System.debug(7>5)'};
  let question2 = {
    ques: 'What is the output of the following code?',
    code: "System.debug('text')"};
  let question3 = {
    ques: 'What is the output of the following code?',
    code: "System.debug('3'+'5')"};
  let question4 = {
    ques: 'What is the output of the following code?',
    code: "System.debug(8%3)"};
  let question5 = {
    ques: 'What is the output of the following code?',
    code: "System.debug(true || false)"};

  function continues(){
    setI(++i);
    setQuiz('quiz' + i);
  }
  
  return(
    <div>
        <Header page={props.page}/>
        <Menu page={props.page}/>
        <h3>Salesforce Page</h3>
        
        {quiz == 'quiz1' && <Quiz question = {question1} con={continues}/>}
        {quiz == 'quiz2' && <Quiz question = {question2} con={continues}/>}
        {quiz == 'quiz3' && <Quiz question = {question3} con={continues}/>}
        {quiz == 'quiz4' && <Quiz question = {question4} con={continues}/>}
        {quiz == 'quiz5' && <Quiz question = {question5} con={continues}/>}
        
        <MoveTop/>
        <Footer/>
    </div>
    )
}

export default Salesforce;
