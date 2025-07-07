import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { app } from "../../firebase/firebase.config";

export const AuthContext = createContext();

 const auth = getAuth(app);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // Add creat user function 
  const createUser = (email, password) => {
return createUserWithEmailAndPassword(auth,email,password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const authInfo = { user, loading, logout,createUser };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};
