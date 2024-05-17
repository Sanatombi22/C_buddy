import React from 'react';
import "./css/WidgetContent.css";

function WidgetContent() {
  return (
    <div className=" widget__contents">
        <div className="widget__content">
        <img
          src="https://i.pinimg.com/236x/52/19/d9/5219d9b3f4606ed553479e91b2b9b8d2.jpg"
          alt=""
        />
        <div className="widget__contentTitle">
          <h4>FullStack Developer</h4>
          <p>Check out how to become a full stack developer</p>
        </div>
        </div>
    </div>
  )
}

export default WidgetContent;