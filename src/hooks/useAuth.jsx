import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const useAuth = () => {
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    return signInWithPopup(auth, provider); // ✅ Firebase popup method
  };

  return {
    signInWithGoogle,
  };
};

export default useAuth;
