import React from 'react';

function DisplayPerf(props){

  // let url = 'http://via.placeholder.com/100x80'
  // if (props.perf.photo) {
  // url = props.perf.photo;
  // if (!url.startsWith('http')) {
  // url = `http://localhost:8000/${props.perf.photo}`;
  //  }}

  // let imgValues = {
  // src: url,
  // alt: 'profil perf'
  // }

  return(
  <div id="pagePerf">
    <h2>Performances</h2>
    {props.perfs.map((perf) => 
      <div>
      <img src={`http://localhost:8000/${perf.photo}`} alt={'profil perf'} />
      <h2>{perf.name}</h2>
      <p>{perf.description}</p>
      </div>
      )}
  </div>
  )
}

export default DisplayPerf;
