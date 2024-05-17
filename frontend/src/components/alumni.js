// Parent component

import React from 'react';
import Feed from './Feed';
import Widget from './Widget';
import Sidebar from './Sidebar';
import AlumniHeader from './alumniHeader';
import "./css/alumni.css";


function Alumni() {
  return (
    <div className= 'alumni'> 
        <AlumniHeader />
        <div className="alumni_contents">
             <div className="alumni__content">
                <Sidebar />
                <Feed />
                <Widget />
              </div>
        </div>
    </div>
  );
}

export default Alumni;
