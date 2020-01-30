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
       <Link to={{pathname:"/prices"     
              }}>
                <button>Prices</button>
       </Link> 
       <section id="abou" class="boit">
      <h2 id="About">About Us</h2>
      <p>Wild Ethic Circus is one of the very first modern circuses without animals.</p>
      <p>We make a show with only a dozen multi-skilled performers who all perform the entire show, doing "a bit of everything", from acrobatics and clowning to music and aerial work.</p>
      <p>Each show is a synthesis of circus styles from around the world, with its own central theme and storyline. Shows employ continuous live music, with performers rather than stagehands changing the props.</p>
      <p>The company employs a full-time ensemble of 12 performers, an equal number of men and women, plus a technical crew, production and artistic departments.</p>
      <p>Wild Circus has performed in twenty-seven countries across five continents.</p>
    </section>
    </div>
  );
}

export default DisplayMain;