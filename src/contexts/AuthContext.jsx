import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is stored in localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData) => {
    const userWithPoints = { ...userData, points: 0 };
    setUser(userWithPoints);
    localStorage.setItem('user', JSON.stringify(userWithPoints));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const earnPoints = (points) => {
    setUser(prevUser => {
      const updatedUser = { ...prevUser, points: prevUser.points + points };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      return updatedUser;
    });
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, earnPoints }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
