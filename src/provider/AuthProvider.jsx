import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init'



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
  const [user, setUser]  = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = () =>  {
    setLoading(true);
    return signOut(auth);
  }

  const updateUserProfile = (updatedData) =>{
    setLoading(true);
    return updateProfile(auth.currentUser, updatedData);
  }
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const userInfo = {
    user,
    setUser,
    loading,
    createUser,
    signInUser,
    logOut,
    updateUserProfile,
  };
  return (
      <AuthContext.Provider value={userInfo}>
        {children}
      </AuthContext.Provider>
  );
};

export default AuthProvider;