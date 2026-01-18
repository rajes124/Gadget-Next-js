import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';
import { setAuthCookie, removeAuthCookie, setUserCookie, getUserCookie } from './cookies';

export const signIn = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    
    setAuthCookie(token);
    setUserCookie({
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
    });
    
    return result.user;
  } catch (error: any) {
    throw error;
  }
};

export const signUp = async (email: string, password: string, displayName?: string) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const token = await result.user.getIdToken();
    
    setAuthCookie(token);
    setUserCookie({
      uid: result.user.uid,
      email: result.user.email,
      displayName: displayName || email.split('@')[0],
    });
    
    return result.user;
  } catch (error: any) {
    throw error;
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    removeAuthCookie();
  } catch (error) {
    console.error('Logout error:', error);
  }
};

export const signInWithGoogle = async () => {
  try {
    const googleProvider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    
    const userData = {
      uid: result.user.uid,
      email: result.user.email,
      displayName: result.user.displayName,
      photoURL: result.user.photoURL,
    };
    
    setAuthCookie(token);
    setUserCookie(userData);

    // Save user to backend
    try {
      const response = await fetch('http://localhost:5000/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: result.user.email,
          displayName: result.user.displayName,
          googleId: result.user.uid,
          photoURL: result.user.photoURL,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('User saved to backend:', data);
      }
    } catch (backendError) {
      console.warn('Could not save to backend:', backendError);
      // Continue even if backend fails - user is still authenticated with Firebase
    }
    
    return result.user;
  } catch (error: any) {
    throw error;
  }
};

export const getCurrentUser = () => {
  return getUserCookie();
};
