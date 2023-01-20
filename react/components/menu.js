import React from 'react';

function Menu(props){
  
  return (
    <div>
    <nav id='menu' className='collapse'>
      <ul className='list-group'>
        <li className='list-group-item list-group-item-primary' onClick={ (e)=>props.page('home', e) }>Home</li>
        
        <li className='list-group-item list-group-item-primary' onClick={ (e)=>props.page('salesforce', e) }>Salesforce</li>
        <li className='list-group-item list-group-item-primary' onClick={ (e)=>props.page('admin', e) }>Administrator</li>
        <li className='list-group-item list-group-item-primary'>
        <a href='' className='dropdown-toggle' data-toggle='dropdown'>Developer</a>
          <div className='dropdown-menu list-group-item-primary'>
            <a href='https://www.pathtosalesforce.com/index.php/tr/' className='dropdown-item'>Apex</a>
            <a href='' className='dropdown-item'>LWC</a>
            <a href='' className='dropdown-item'>Visualforce</a>
          </div>
        </li>
      </ul>
    </nav>
    </div>
    )
}

export default Menu;
