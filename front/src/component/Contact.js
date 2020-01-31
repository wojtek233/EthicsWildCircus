import React from 'react';
import { Link } from 'react-router-dom'
import './Display.css'

function Contact(){

    
  return(
    <div className = "bloc_page">
      <div className = "boit">
        <button className='arrowBack'>
          <Link className='arrowBackLink' to="/">&lsaquo;</Link>
        </button>
        <div id="cont">
          <div>
            <h2 >Contact Us</h2>
          </div>
          <form id = "formC" method="post" action="traitement.php">
            <div className = 'form-cont'>
              <label for="emailadress">Your email : </label>
              <input type="text" name="emailadress" id="emailadress" placeholder="@" />
            </div>
            <div>
                <label for="mail">Your message :</label> <br />
                <textarea className='textareaContBox' name="sendmail" id="mail" ></textarea>
            </div>
            <div>
            <input type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;