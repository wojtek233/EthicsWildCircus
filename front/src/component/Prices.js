import React from 'react';
import { Link } from 'react-router-dom'

function Prices(){

    
  return(
  <div id="pagePlace">
    <button className='arrowBack'>
      <Link className='arrowBackLink' to="/">&lsaquo;</Link>
    </button>
    <table>
      <caption>Tickets prices (euros)</caption>
      
        <tr>
          <th></th>
          <th>Adults</th>
          <th>Children (-12)</th>
          <th>Groups (10+)</th>
          <th>Schools</th>
        </tr>
        <tr>
          <th>Week</th>
          <td>10</td>
          <td>5</td>
          <td>70</td>
          <td>50</td>
      </tr>
      <tr>
          <th>Week-end</th>
          <td>12</td>
          <td>6</td>
          <td>85</td>
          <td>65</td>
      </tr>
    </table>
  </div>
  )
}

export default Prices;