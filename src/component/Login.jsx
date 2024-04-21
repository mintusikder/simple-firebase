import React, { useState } from 'react';
import { getAuth, signInWithPopup, signOut } from 'firebase/auth';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import app from '../firebase/firebase.init';

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handelGoogleSign = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelGithubSign = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setUser(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user ? (
        <button onClick={handelSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={handelGoogleSign}>Google</button>
          <button onClick={handelGithubSign}>GitHub</button>
        </>
      )}
      {user && (
        <div>
          <h2>User : {user.displayName}</h2>
          <h4>Email: {user.email}</h4>
          <img src={user.photoURL} alt="User Profile" />
        </div>
      )}
    </div>
  );
};

export default Login;
