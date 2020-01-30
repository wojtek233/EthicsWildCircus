import React from 'react';
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';


function DisplayPerf(props){

  return(
  <div id="pagePerf">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to="/">&lsaquo;</Link>
    </button>
    <h2>Performances</h2>
    <Carousel autoPlay width="60%" dynamicHeight>
              {props.perfs.map((perf) => 
              <div>
              <img src={`http://localhost:8000/${perf.photo}`} alt={'profil perf'} />
                <div className="legend">
                <h2 >{perf.name} <br/>
                {perf.description}</h2>
              </div>
              </div>
            )}
      </Carousel>

      <Link to={{pathname:"/formperf"     
              }}>
                <button>Create a performance</button>
       </Link> 
  </div>
  )
}

export default DisplayPerf;
