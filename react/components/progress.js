import React from 'react';
import {useState} from 'react';

function Progress(){
  let [progress, setProgress] = useState('20%');
  let [pagex, setPagex] = useState(1);
  return(
    <div>
      <div className='progress w-75 mx-auto'>
        <div className='progress-bar progress-bar-striped bg-success' style={{width: progress}}></div>
      </div>
      <p className='text-center'>Page {pagex} of 5</p>
    </div>
    )
}

export default Progress;
