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
            <h2 id="Contact">Contact Us</h2>
          </div>
          <form method="post" action="traitement.php">
            <div>
              <label for="emailadress">Your email : </label>
              <input type="text" name="emailadress" id="emailadress" size="30" placeholder="@" />
            </div>
            <div>
                <label for="mail">Your message :</label> <br />
                <textarea name="sendmail" id="mail" rows="6" cols="100"></textarea>
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