import React from 'react';
import {useState} from 'react';
import Progress from './progress';
import Option from './option';

function Quiz(props){
  const [selects1, setSelects] = useState({A:'true', B:'false', C:'null', D:'error'});
  const selects2 = { A: 'txt', B: 'text', C: 'string', D: 'null'}
  
  
  var save = (e)=>{
    const options = document.querySelector('#options');
    if(options.children[0].style.backgroundColor=='lightblue'){
      document.querySelector('.correct').classList.remove('d-none');
    }
    else {
      document.querySelector('.wrong').classList.remove('d-none');
    }
    e.target.classList.add('d-none');
    document.querySelector('.continue').classList.remove('d-none');
  }
      
  
  return (
    <div>
      <h5 className='bg-primary text-light mx-auto rounded font-weight-normal px-3 py-1 w-75'>Subject</h5>
      
      <Progress/>
      
      <div className='container border border-secondary p-3 w-75'>
        <p>{props.question.ques}<br/><code>{props.question.code}</code>
        </p>
        
        <Option option1={selects1.A} option2={selects1.B} option3={selects1.C} option4={selects1.D}/>
        
        <button className='badge float-right font-weight-light small p-2'><span className='bg-dark text-light rounded-circle px-1'>!</span> Report Problem
        </button>
      </div>
      
      <div className='d-flex justify-content-center w-100'>
      <button className='btn btn-sm btn-info my-3' onClick={save}><i className="material-icons">edit</i> Save</button>
      </div>
      
      <h2 className='correct text-success text-center d-none'>The answer is correct</h2>
      <h2 className='wrong text-danger text-center d-none'>The answer is wrong</h2>
      <button className='continue badge font-weight-normal small float-right p-2 m-2 d-none' onClick={props.con}>Continue<span className='bg-dark text-light font-weight-bold rounded-circle pb-1 ml-1'>&#8594;</span>
        </button>
      
    </div>
    )
}

export default Quiz;
