import React from 'react';
import ReactDOM from 'react-dom';


function Header(props){
  
  return (
    <div id='header' className='container-fluid bg-primary'>
      <header className='d-flex justify-content-between d-md-none py-1'>
        <a href='' className='h4 text-light mt-1'>Header</a>
        <i className='fas fa-bars text-light h4 mt-2' data-toggle="collapse" data-target="#menu"></i>
      </header>
      
      <nav id='nav' className='container d-none d-md-flex align-items-center nav nav-pills'>
          <a href='' className='h4 text-light mt-1 nav-link'>Header</a>
          <a href='https://www.pathtosalesforce.com/index.php/tr/' className='nav-link py-3' data-toggle="tab" onClick={ (e)=>props.page('home', e) }>Home</a>
          <a href="" className='nav-link py-3' data-toggle="tab" onClick={ (e)=>props.page('salesforce', e) }>Salesforce</a>
          <a href='' className='nav-link py-3' data-toggle="tab" onClick={ (e)=>props.page('admin', e) }>Administrator</a>
          <a href='' className='dropdown-toggle nav-link' data-toggle='dropdown'>Developer</a>
              <div className='dropdown-menu list-group-item-primary'>
                  <a href='' className='dropdown-item'>Apex</a>
                  <a href='' className='dropdown-item'>LWC</a>
                  <a href='' className='dropdown-item'>Visualforce</a>
              </div>
      </nav>
      
    </div>
    )
}

export default Header;
