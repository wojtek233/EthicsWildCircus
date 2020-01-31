import React from 'react';
import { Link } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import './Display.css'

function DisplayPerf(props){

  return(
  <div className = "bloc_page">
    <div className="boit">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to="/">&lsaquo;</Link>
    </button>
    <h2>Performances</h2>
    <div id = "car">
      <Carousel infiniteLoop width="80%"  autoPlay showThumbs={false}>
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
    </div > 
    <div id = "navp">             
      <Link to={{pathname:"/formperf"     
              }}>
                <button>Create a performance</button>
       </Link> 
       </div>
       </div>
  </div>
  )
}

export default DisplayPerf;
