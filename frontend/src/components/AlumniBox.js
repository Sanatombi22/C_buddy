import { Avatar } from "@mui/material";
import React from 'react';
import { useSelector } from "react-redux";
import { selectUser } from "../feature/userSlice";
import "./css/AlumniBox.css";


function AlumniBox() {
  const user = useSelector(selectUser);
  return (
    <div className='alumniBox'>
        <div className='alumniBox_info'>
            <Avatar src={user?.photo}/>
        </div>
        <div className="alumniBox__alumni">
        <h4> Post your questions and queries </h4>
      </div>
    </div>   
  );
}

export default AlumniBox;