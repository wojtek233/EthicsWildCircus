import React from 'react';
import UploadImage from './UploadImage'

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
      <div className = "formContainer">
        <div className="bannerTop">
          <h1 className='title'>Creation
            <br/>
              of a performance
          </h1>
        </div>
        <form>
            <div className="form-place">
                <label htmlFor="place">Name of perf</label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  onChange={this.change}
                  required/>
            </div> 

            <div className="form-place">
                <label htmlFor="photo">Picture</label>
                <UploadImage
                  savePicture = {this.savePicture}
                />
            </div>
            
            <div className = 'textareaForm'>
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
    )
  }
}
export default FormPerf;
