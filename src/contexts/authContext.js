'use client'

import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import jwt from 'jsonwebtoken';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter()

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  };

  useEffect(() => {
    const token = getCookie('tokenApp')
    if (token) {
      const decoded = jwt.decode(token);
      setUser(decoded);
    }
  }, []);


  const login = async (user, password) => {
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, password }),
    });
    
    const data = await res.json();

    if (res.ok) {
      const decoded = jwt.decode(data.token);
      setUser(decoded);
      document.cookie = `tokenApp=${data.token}; path=/; max-age=${60 * 60 * 12};`; // 1 hora
      router.push('/dashboard')
    } else {
      throw new Error(data.message);
    }
  };

  const logout = () => {
    document.cookie = "tokenApp" + '=; Max-Age=-99999999;';
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
