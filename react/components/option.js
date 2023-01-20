import React from 'react';

function Option(props){
  function selection(e){
    for(let i=0;i<4;i++){
    e.target.parentNode.children[i].style.backgroundColor='whitesmoke';}
    e.target.style.backgroundColor='lightblue';
  }
  return(
    <div id='options'>
      <p className='border border-info rounded p-1' onClick={selection}>{props.option1}</p>
      <p className='border border-info rounded p-1' onClick={selection}>{props.option2}</p>
      <p className='border border-info rounded p-1' onClick={selection}>{props.option3}</p>
      <p className='border border-info rounded p-1' onClick={selection}>{props.option4}</p>
    </div>
    )
}

export default Option;
