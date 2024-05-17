import Add from "@mui/icons-material/Add";

import React from 'react'
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className='sidebarOptions'>
        <div className='sidebarOption'>
        <img
          src="https://i.pinimg.com/564x/62/14/c0/6214c0d273006d6f16fdfb3c0f08da9f.jpg"
          alt=""
        />
        <p>Programming</p>
        </div>

        <div className="sidebarOption">
        <img
          // src="https://i.pinimg.com/564x/e0/a2/d3/e0a2d39bbcb10fcda3ee8f8afaa29402.jpg"
          src="https://i.pinimg.com/564x/09/63/39/096339a264ac415529311109c07414cd.jpg"
          alt=""
        />

        <p>Data Structures and Algorithms</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/564x/bd/33/d9/bd33d935960554116816854a73e0e454.jpg"
          alt=""
        />
        <p>Internships</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/564x/25/ee/83/25ee834344e919f51214fa76ca8a1f42.jpg"
          alt=""
        />
        <p>University</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/564x/47/3b/93/473b9341f94cc81cddd143b01608644e.jpg"
          alt=""
        />
        <p>Hackathons</p>
      </div>

      {/* <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt=""
        />
        <p>Movies</p>
      </div> */}

      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/564x/b2/e5/38/b2e5380cccf49d3aa6d8cdba1aca90e8.jpg"
          alt=""
        />
        <p>New Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://i.pinimg.com/564x/84/29/7b/84297b0a21b125b9f00c9a61691026de.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <Add />
        <p className="text">Discover More</p>
      </div>

        
    </div>
  )
}

export default SidebarOptions