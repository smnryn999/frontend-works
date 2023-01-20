import React from 'react';

function Footer(){
  return (
    <footer className='container-fluid text-center bg-primary py-3 d-inline-block'>
      <p className='h5 text-light mb-0'>Contact Info</p>
      <a href='#' className='text-light small'>info@coder.com</a>
    </footer>
    )
}

export default Footer;

export function MoveTop(){
  
  return (
    <div>
      <a href='#header' id='topArrow' className='position-fixed bg-danger text-light d-inline float-right px-3 py-2'><i className='fas fa-angle-up'></i></a>
    </div>
    )
}
