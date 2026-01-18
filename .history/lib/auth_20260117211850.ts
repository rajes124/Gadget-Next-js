import { signOut, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
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

export const getCurrentUser = () => {
  return getUserCookie();
};
