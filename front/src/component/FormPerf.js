import React from 'react';
import UploadImage from './UploadImage'
import { Link } from 'react-router-dom'
import './Display.css'

class FormPerf extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      photo: null,
      description: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.savePicture = this.savePicture.bind(this); 
  }

  savePicture(photo) {
    this.setState({photo: `pictures/${photo}`})
  }

  change = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
    
  handleSubmit(event) {
    event.preventDefault()
  }

    render() {
      return (
      <div className = "bloc_page">
        <div className = "boit">
        <button className='arrowBack'>
          <Link className='arrowBackLink' to="/">&lsaquo;</Link>
        </button>
        <div >
          <h2 >Creation of a performance </h2>
        </div>
        <form id = "formP">
            <div className="form-perf">
                <label htmlFor="perf">Name of performance</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  onChange={this.change}
                  required/>
            </div> 

            <div className="form-perf">
                <label htmlFor="photo">Picture</label>
                <UploadImage
                  savePicture = {this.savePicture}
                />
            </div>
            
            <div className = 'form-perf'>
                <label htmlFor="description">Description</label>
                <textarea 
                  className='textareaFormBox' 
                  placeholder='about the perf' rows='5'
                  name="description"
                  id="description"
                  onChange={this.change}
                />
            </div>
        </form>
        <button 
          className="createButton"
          onClick={() => this.props.postFormDataPerf(this.state)}
          type='submit'
          value='Créer'
        >
          Créer
        </button>
        </div>
    </div>
    )
  }
}
export default FormPerf;
