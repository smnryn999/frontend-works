import React from 'react';

function BigList(props){
  
  let index = 0;
  function openDiv(event){
    event.target.children[2].classList.toggle('d-none');
    props.paragraph='paragraph2';
  }
  
  
  return (
    <div className='container-md'>
    <div className='bigList float-md-right shadow my-4'>
      <h4 className='font-weight-normal card-header bg-secondary'>{props.title}</h4>
      <ol className='list-group text-primary p-3'>
        {props.liste.map((lis)=> {return <li key={lis} className='list-group-item small border-top mt-1 rounded' onClick={openDiv}>{index<9 ? 0 : null}{index=index+1} {lis}
        <a href='#'><i className='fab fa-youtube float-right text-danger'></i></a><br/>
        <div id="myDiv" className='d-none'>
        <img src='https://picsum.photos/200'/>
         <p className='text-dark'>{props.paragraph}</p>
         </div>
        </li>
       
        })}
      </ol>
    </div>
    </div>
    )
}

export default BigList;
