import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendPasswordResetEmail,
  User,
  updateProfile,
  Auth,
} from "firebase/auth";
import { auth, googleProvider } from "./config";
import { setAuthCookie, removeAuthCookie } from "../auth";

// Helper function to ensure Firebase is initialized
const ensureFirebaseInitialized = (): { auth: Auth } => {
  if (!auth || typeof window === "undefined") {
    throw new Error(
      "Firebase is not initialized. Make sure you are on the client-side."
    );
  }
  return { auth };
};

// Firebase authentication functions
export const firebaseSignIn = async (email: string, password: string) => {
  try {
    const { auth } = ensureFirebaseInitialized();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Create a token-like string for our cookie (in real app, you'd use actual JWT)
    const token = `firebase-${user.uid}-${Date.now()}`;
    setAuthCookie(token);

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      token,
    };
  } catch (error: any) {
    console.error("Sign in error:", error);
    return {
      success: false,
      message: error.message || "Failed to sign in",
      error: error.code,
    };
  }
};

export const firebaseSignUp = async (
  email: string,
  password: string,
  displayName?: string
) => {
  try {
    const { auth } = ensureFirebaseInitialized();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // Update display name if provided
    if (displayName) {
      await updateProfile(user, { displayName });
    }

    // Create a token-like string for our cookie
    const token = `firebase-${user.uid}-${Date.now()}`;
    setAuthCookie(token);

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      token,
    };
  } catch (error: any) {
    console.error("Sign up error:", error);
    return {
      success: false,
      message: error.message || "Failed to sign up",
      error: error.code,
    };
  }
};

export const firebaseSignInWithGoogle = async () => {
  try {
    const { auth } = ensureFirebaseInitialized();
    const userCredential = await signInWithPopup(auth, googleProvider!);
    const user = userCredential.user;

    // Create a token-like string for our cookie
    const token = `firebase-${user.uid}-${Date.now()}`;
    setAuthCookie(token);

    return {
      success: true,
      user: {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
      token,
    };
  } catch (error: any) {
    console.error("Google sign in error:", error);
    return {
      success: false,
      message: error.message || "Failed to sign in with Google",
      error: error.code,
    };
  }
};

export const firebaseSignOut = async () => {
  try {
    const { auth } = ensureFirebaseInitialized();
    await signOut(auth);
    removeAuthCookie();
    return { success: true };
  } catch (error: any) {
    console.error("Sign out error:", error);
    return {
      success: false,
      message: error.message || "Failed to sign out",
    };
  }
};

export const sendPasswordReset = async (email: string) => {
  try {
    const { auth } = ensureFirebaseInitialized();
    await sendPasswordResetEmail(auth, email);
    return { success: true, message: "Password reset email sent!" };
  } catch (error: any) {
    console.error("Password reset error:", error);
    return {
      success: false,
      message: error.message || "Failed to send password reset email",
    };
  }
};

export const getCurrentFirebaseUser = () => {
  if (typeof window === "undefined" || !auth) {
    return null;
  }
  const user = auth.currentUser;
  return user
    ? {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }
    : null;
};
