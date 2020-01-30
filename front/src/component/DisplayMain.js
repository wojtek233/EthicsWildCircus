import React from 'react';
import { Link } from 'react-router-dom'

function DisplayMain() {
  return (
    <div>
       <img
          src='https://live.staticflickr.com/7853/40190115523_f661c587fe_b.jpg'
          className='Logo'
          alt='logo Wild'>
       </img>
       <Link to={{pathname:"/perf"     
              }}>
                <button>Performances</button>
       </Link>
       <Link to={{pathname:"/artist"     
              }}>
                <button>Artists</button>
       </Link> 
    </div>
  );
}

export default DisplayMain;