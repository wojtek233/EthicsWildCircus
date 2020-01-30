import React from 'react';
import { Link } from 'react-router-dom'

function DisplayPerf(props){

  return(
  <div id="pagePerf">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to="/">&lsaquo;</Link>
    </button>
    <h2>Performances</h2>
    {props.perfs.map((perf) => 
      <div>
      <img src={`http://localhost:8000/${perf.photo}`} alt={'profil perf'} />
      <h2>{perf.name}</h2>
      <p>{perf.description}</p>
      </div>
      )}
      <Link to={{pathname:"/formperf"     
              }}>
                <button>Create a performance</button>
       </Link> 
  </div>
  )
}

export default DisplayPerf;
