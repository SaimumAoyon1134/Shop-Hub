"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { isAuthenticated, getCurrentUser, removeAuthCookie } from "../lib/auth";

interface User {
  id?: number;
  uid?: string;
  name?: string;
  displayName?: string;
  email: string;
  photoURL?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User) => void;
  logout: () => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication status on mount
    const checkAuthStatus = () => {
      const authStatus = isAuthenticated();
      if (authStatus) {
        const currentUser = getCurrentUser();
        setUser(currentUser);
      }
      setLoading(false);
    };

    checkAuthStatus();
  }, []);

  const login = (userData: User) => {
    setUser(userData);
  };

  const logout = async () => {
    // Only call Firebase sign out if we're in the browser
    if (typeof window !== "undefined") {
      try {
        const { firebaseSignOut } = await import("../lib/firebase/auth");
        await firebaseSignOut();
      } catch (error) {
        console.error("Error signing out from Firebase:", error);
      }
    }
    setUser(null);
    removeAuthCookie();
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
