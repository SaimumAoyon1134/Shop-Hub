// Authentication utility functions
const AUTH_COOKIE_NAME = "auth_token";
const MOCK_USER = {
  email: "user@example.com",
  password: "password123",
  name: "Saimum Islam",
};

// Updated authentication function that tries Firebase first, then falls back to mock
export async function authenticateUser(email: string, password: string) {
  // In a real app, this would call Firebase authentication
  // For now, keeping the mock authentication as fallback

  // First try the mock authentication for demo purposes
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    return {
      success: true,
      user: {
        id: 1,
        name: MOCK_USER.name,
        email: MOCK_USER.email,
      },
      token: "mock-jwt-token-" + Date.now(),
    };
  }

  return {
    success: false,
    message: "Invalid credentials",
  };
}

// Check if user is authenticated
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;

  try {
    const token = document.cookie
      .split("; ")
      .find((row) => row.startsWith(AUTH_COOKIE_NAME + "="))
      ?.split("=")[1];

    return !!token;
  } catch (error) {
    return false;
  }
}

// Get auth token
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;

  try {
    return (
      document.cookie
        .split("; ")
        .find((row) => row.startsWith(AUTH_COOKIE_NAME + "="))
        ?.split("=")[1] || null
    );
  } catch (error) {
    return null;
  }
}

// Set auth cookie
export function setAuthCookie(token: string) {
  if (typeof window === "undefined") return;

  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // 7 days expiration

  document.cookie = `${AUTH_COOKIE_NAME}=${token}; expires=${expires.toUTCString()}; path=/`;
}

// Remove auth cookie
export function removeAuthCookie() {
  if (typeof window === "undefined") return;

  document.cookie = `${AUTH_COOKIE_NAME}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// Get current user info (in a real app, this would decode JWT)
export function getCurrentUser() {
  if (!isAuthenticated()) return null;

  return {
    id: 1,
    name: MOCK_USER.name,
    email: MOCK_USER.email,
  };
}
