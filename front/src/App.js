import React from 'react'
import axios from 'axios'
import './App.css'
import DisplayMain from './component/DisplayMain.js'
import DisplayPerf from './component/DisplayPerf.js'
import FormPerf from './component/FormPerf'
import DisplayArtist from './component/DisplayArtist.js'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'
import UploadImage from './component/UploadImage.js'
import Prices from './component/Prices.js'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      perf: null,
      currentPerf: 0,
      artist :null,
      currentArtist: 0,
    }
    this.nextArtist = this.nextArtist.bind(this)
    this.postFormDataPerf = this.postFormDataPerf.bind(this)
    }

  
  nextArtist() {
    this.setState(prevState => {
      return {
        currentArtist:
          (prevState.currentArtist + 1) % prevState.artists.length
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
  
    postFormDataPerf(formData) {
      axios.post('http://localhost:8000/api/perfs', {
        name: formData.name,
        photo: formData.photo,
        description: formData.description,
      })
      .then(response => {
        if (response.status === 201) {
          this.setState(prevState => {
            return {perfs: [...prevState.perfs, response.data]}
          }, () => {
            alert("Your performance is created !")
          })
        } else {
          console.log(response)
        }
      })
    }  

  render() {
          return (
        <BrowserRouter>
          <Route exact path="/">
            <DisplayMain />
          </Route>
          <Route exact path='/perf' >
            {this.state.perfs && (
              <DisplayPerf
                perfs={this.state.perfs}
              />
            )}
          </Route>
          <Route exact path='/artist'>
            {this.state.artists && (
              <DisplayArtist
                artist={this.state.artists[this.state.currentArtist]}
                nextArtist={this.nextArtist}
              />
            )}
          </Route>
          <Route exact path='/prices' >
               <Prices />
          </Route>
           
          <Route exact path='/formperf'>
            <FormPerf postFormDataPerf={this.postFormDataPerf} />
          </Route>
   
          <Route exact path='/uploadimages'>
            <UploadImage />
          </Route>
        </BrowserRouter>
    )
  }
}
export default App
