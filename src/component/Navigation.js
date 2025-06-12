import React from 'react';
import {Link} from 'react-router-dom';
function Navigation(props) {
  return (
    <nav className='gnb'> 
      <ul>
        <li><Link to='/movie'>Home</Link></li>
        <li><Link to='/Main'>Movies</Link></li>
        <li><Link to='/Intro'>Intro</Link></li>
        <li><Link to='/API'>API</Link></li>
        <li><Link to='/Contact'>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;