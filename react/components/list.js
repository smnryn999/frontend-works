import React from 'react';


function List(props){
  
  return (
    <div className='container my-4'>
      
      <div id='card' className="card shadow">
        <h5 className="card-header bg-secondary">{props.title}</h5>
        <div className="card-body d-flex flex-column">
           {props.items.map((item)=>{
            return <a href={item} className='small my-1' key={item}>{item}</a>})}
        </div>
      </div>
      
    </div>
    )
}

export default List;

export function Jumbotron() {
  
  return (
    <div className='container-md my-4'>
     <div id='jumbotron' className='jumbotron text-center float-right shadow'>
        <p className='h4 font-weight-normal'>The easy and best way to learn to code.</p>
        <p>Lorem ipsum dolor sit amet. Capaci.</p>
        <p className='badge badge-danger'><span className='h6 border-right pr-2 mr-1'>G+</span> Login with Google+</p>
     </div>
    </div>
    )
}

export function JumbotronS() {
  
  return (
    <div className='container-md my-4'>
     <div id='jumbotronS' className='px-3 py-2 shadow'>
        <p className='badge badge-danger mt-3'><span className='h6 border-right pr-2 mr-1'>G+</span> Login with Google+</p>
     </div>
    </div>
    )
}


