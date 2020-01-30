import React from 'react';

function DisplayPerf(props){

  let url = 'http://via.placeholder.com/100x80'
  if (props.perf.photo) {
    url = props.perf.photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${props.perf.photo}`;
  }}

  let imgValues = {
    src: url,
    alt: 'profil perf'
  }

  return(
  <div id="pagePlace">
    <div id="ProfilPlace">
    <img className="photoProfil" src={imgValues.src} alt={imgValues.alt} ></img>
    </div>
    <h2 className="titreProfil">{props.perf.name}</h2>
    <div className="desc">
      <p>{props.perf.description}</p>
    </div>
    <button className='buttonNextPerf' type="button" onClick={props.nextPerf}>Suivant</button>
  </div>
  )
}

export default DisplayPerf;


