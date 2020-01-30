import React from 'react';

function DisplayArtist(props){

  let url = 'http://via.placeholder.com/100x80'
  if (props.artist.photo) {
    url = props.artist.photo;
  if (!url.startsWith('http')) {
    url = `http://localhost:8000/${props.artist.photo}`;
  }}

  let imgValues = {
    src: url,
    alt: 'profil artist'
  }
  
  return(
  <div id="pagePlace">
    <div id="ProfilPlace">
    <img className="photoProfil" src={imgValues.src} alt={imgValues.alt} ></img>
    </div>
    <h2 className="titreProfil">{props.artist.firstname} {props.artist.lastname}</h2>
    <div className="desc">
      <p>{props.artist.description}</p>
    </div>
    <button className='buttonNextArtist' type="button" onClick={props.nextArtist}>Suivant</button>
  </div>
  )
}

export default DisplayArtist;


