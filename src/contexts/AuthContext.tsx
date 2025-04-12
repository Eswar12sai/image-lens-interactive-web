
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

// Define user type
interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
}

// Define credentials type
interface Credentials {
  email: string;
  password: string;
}

// Define the auth context shape
interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (credentials: Credentials) => Promise<boolean>;
  signup: (userData: any) => Promise<boolean>;
  logout: () => void;
}

// Create the context
const AuthContext = createContext<AuthContextType | null>(null);

// Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Storage keys
const USERS_STORAGE_KEY = 'leaselens_users';
const CURRENT_USER_KEY = 'leaselens_current_user';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  
  // Load user data on mount
  useEffect(() => {
    const savedUser = localStorage.getItem(CURRENT_USER_KEY);
    if (savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        setCurrentUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to parse saved user:', error);
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    }
  }, []);

  // Function to get users from storage
  const getUsers = (): Record<string, { user: User, password: string }> => {
    const usersString = localStorage.getItem(USERS_STORAGE_KEY);
    return usersString ? JSON.parse(usersString) : {};
  };

  // Function to save users to storage
  const saveUsers = (users: Record<string, { user: User, password: string }>) => {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  // Login function
  const login = async (credentials: Credentials): Promise<boolean> => {
    const { email, password } = credentials;
    
    // Get users from storage
    const users = getUsers();
    
    // Check if user exists and password matches
    const userEntry = Object.values(users).find(entry => 
      entry.user.email.toLowerCase() === email.toLowerCase()
    );
    
    if (userEntry && userEntry.password === password) {
      // Save current user
      setCurrentUser(userEntry.user);
      setIsAuthenticated(true);
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userEntry.user));
      
      toast.success("Successfully logged in!");
      navigate('/dashboard');
      return true;
    } else {
      toast.error("Invalid email or password");
      return false;
    }
  };

  // Signup function
  const signup = async (userData: any): Promise<boolean> => {
    const { email, password, firstName, lastName, company } = userData;
    
    // Get existing users
    const users = getUsers();
    
    // Check if user already exists
    const userExists = Object.values(users).some(entry => 
      entry.user.email.toLowerCase() === email.toLowerCase()
    );
    
    if (userExists) {
      toast.error("An account with this email already exists");
      return false;
    }
    
    // Create new user
    const newUser: User = {
      id: Date.now().toString(),
      firstName,
      lastName,
      email,
      company
    };
    
    // Add user to storage
    users[newUser.id] = {
      user: newUser,
      password
    };
    
    saveUsers(users);
    
    toast.success("Account created successfully! Please log in.");
    navigate('/login');
    return true;
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem(CURRENT_USER_KEY);
    navigate('/login');
    toast.success("Successfully logged out");
  };

  const value = {
    currentUser,
    isAuthenticated,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
