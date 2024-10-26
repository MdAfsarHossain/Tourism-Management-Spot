import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create New User
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Register new user by using google auth
  const registerWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  // Register new user by using github auth
  const registerWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  }

  // Login user with email and password
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Update profile
  const updateUserProfile = (loginUser, displayName, photoURL) => {
    setLoading(false);
    return updateProfile(loginUser, { displayName, photoURL });
  }

  // Logout user profile
  // const logout = () => {
  //   setLoading(true);
  //   return signOut();
  // }

  // State user or Observer Current user
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
        console.log(currentUser)
    });

    return () => {
        unSubscribe();
    }
  })

  const authInfo = {
    user,
    loading,
    createUser,
    updateUserProfile,
    // logout,
    loginUser,
    registerWithGoogle,
    registerWithGitHub,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
