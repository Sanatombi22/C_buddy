import "./App.css";
import React, { useEffect } from "react";
import Alumni from "./components/alumni";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./feature/userSlice";
import Login from "./components/auth/Login";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        dispatch(
          login({
            userName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email,
            uid: authUser.uid,
          })
        );
        console.log("AuthUser", authUser);
      }
    });
  }, [dispatch]);


  return (
    <div className="App">
      {/* <h1> I'm testing if it works</h1> */}
      {/* <alumni /> */}
      {user ? <Alumni /> : <Login />}
      {/* <Alumni /> */}
    </div>
  ); 
}

export default App;
  