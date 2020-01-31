import React from 'react';
import { Link } from 'react-router-dom'
import './Display.css'

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
  <div className = "bloc_page">
    <div className = "boit">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to="/">&lsaquo;</Link>
    </button>
    <div id="profilArtist">
    <img className="photoProfil" src={imgValues.src} alt={imgValues.alt} ></img>
    </div>
    <h3 className="titreProfil">{props.artist.firstname} {props.artist.lastname}</h3>
    <div className="desc">
      <h3>{props.artist.description}</h3>
    </div>
    <button className='buttonNextArtist' type="button" onClick={props.nextArtist}>Suivant</button>
  </div>
  </div>
  )
}

export default DisplayArtist;


