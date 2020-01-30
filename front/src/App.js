import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayMain from './component/DisplayMain.js'
import DisplayPerf from './component/DisplayPerf.js'
import FormPerf from './component/FormPerf'
import ModifPerf from './component/ModifPerf'
import DisplayArtist from './component/DisplayArtist.js'
import FormArtist from './component/FormArtist.js'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import UploadImage from './component/UploadImage.js'



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      perfs : null,
      currentPerf: 0,
      artist :null,
      currentArtist: 0,
    }
    this.nextArtist = this.nextArtist.bind(this)
    this.nextPerf = this.nextPerf.bind(this)
  }

  
  nextArtist() {
    this.setState(prevState => {
      return {
        currentArtist:
          (prevState.currentArtist + 1) % prevState.artists.length
      }
    })
  }

  nextPerf() {
    this.setState(prevState => {
      return {
        currentPerf:
          (prevState.currentPerf + 1) % prevState.perfs.length
      }
    })
  }
 
  componentDidMount() {
    
    axios.get('http://localhost:8000/api/perfs')
    .then(response => response.data)
      .then(data => {
        this.setState({
          perfs: data})
       })

    axios.get('http://localhost:8000/api/artists')
      .then(response => response.data)
      .then(data => {
        this.setState({
          artists: data})
      })
    }
    
  render() {
          return (
        <BrowserRouter>
          <Route exact path="/">
            <DisplayMain />
          </Route>
          {/* <Route exact path='/formperf'>
            <FormPerf />
          </Route>
          <Route exact path='/modifperf'>
            <ModifPerf perf={this.state.perfs} />
          </Route>
          <Route exact path='/perf' >
            {this.state.perfs && (
              <DisplayPerf
                perf={this.state.perfs[this.state.currentPerf]}
              />
            )}
           <button  type="button" onClick={this.nextPerf}>Suivant</button>
          </Route>
          <Route exact path='/artist'>
            {this.state.artists && (
              <DisplayArtist
                artist={this.state.artists[this.state.currentArtist]}
              />
            )}
            <button  type="button" onClick={this.nextArtist}>Suivant</button>
          </Route>        
          <Route exact path='/formartist'>
            <FormArtist artist={this.state.artist}/>
          </Route>   
          <Route exact path='/uploadimages'>
            <UploadImage />
          </Route> */}
        </BrowserRouter>
    )
  }
}
export default App
