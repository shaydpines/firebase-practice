import React, { useEffect, useState } from 'react'
import "./App.css";
import { auth } from "./firebase/init"
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
 } from "firebase/auth";
 import Nav from './components/Nav';

function App() {
const [user, setUser] = useState({});
const [loading, setLoading] = useState(true)

useEffect (() => {
  onAuthStateChanged(auth, (user) => {
    setLoading(false);
    if (user) {
      setUser(user)
    }
  })
}, [])

  function register() {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test123")
      .then((user) => {
        console.log(user)
      })
      .catch((error) => {
        console.log("error");
      });
  }

  function signIn() {
    console.log('sign in');
    signInWithEmailAndPassword(auth, 'email@email.com', 'test123')
    .then(({ user }) => {
      console.log('user:' + user.email);
      setUser(user)
      })
      .catch((error) => {
        console.log("error");
    })
  }

  function logOut() {
    console.log("sign out")
    signOut(auth);
    setUser({});
  }

  return (
  <>
  <Nav user={user} loading={loading} register={register} signIn={signIn} logOut={logOut} />
  <div className="main__info">{loading ? 'Loading...' : user.email}</div>
  </>
  );
}

export default App;
