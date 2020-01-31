import React from 'react';
import { Link } from 'react-router-dom'
import './Display.css'

function DisplayMain() {
  return (
    <div className = "bloc_page">
      <div className="boit">
        <div id="heade">
        <h1 id="tittle">Wild Ethic Circus</h1>
        </div>
        <div id = "nav">
          <div id = "nav_ul">
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
          </div>
          </div>
        <section id="abou" class="boit">
        <h2 id="About">About Us</h2>
          <p>Wild Ethic Circus is one of the very first modern circuses without animals.</p>
          <p>We make a show with only a dozen multi-skilled performers who all perform the entire show, doing "a bit of everything", from acrobatics and clowning to music and aerial work.</p>
          <p>Each show is a synthesis of circus styles from around the world, with its own central theme and storyline. Shows employ continuous live music, with performers rather than stagehands changing the props.</p>
          <p>The company employs a full-time ensemble of 12 performers, an equal number of men and women, plus a technical crew, production and artistic departments.</p>
          <p>Wild Circus has performed in twenty-seven countries across five continents.</p>
        </section>
        </div>
    </div>
  
  );
}

export default DisplayMain;