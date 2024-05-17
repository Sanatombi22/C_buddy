import React from "react";
import "./Login.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase";


function Login() {
  const handleSubmit = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <div className="login-container">
          <div className="login-content">
            <img
              // src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
              src="https://img.freepik.com/premium-vector/letter-c-b-logo-vector_23987-229.jpg?w=740"
              alt="logo"
            />
            <h2>College Buddy</h2>
            <button onClick={handleSubmit} className="btn-login"> 
              Login to continue
            </button>
          </div>
        </div>
      );
}

export default Login;

      
    