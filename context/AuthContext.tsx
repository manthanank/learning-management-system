"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export interface UserSession {
  id: string;
  name: string;
  email: string;
  role: "Student" | "Instructor";
  tier: string;
  avatarUrl: string;
  enrolledCoursesCount: number;
  certificatesCount: number;
}

interface AuthContextType {
  user: UserSession | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string, role?: "Student" | "Instructor") => void;
  logout: () => void;
  switchRole: () => void;
}

const DEMO_STUDENT: UserSession = {
  id: "usr_stu_551",
  name: "Elena Rostova",
  email: "elena.student@synapse.edu",
  role: "Student",
  tier: "Pro Scholar",
  avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  enrolledCoursesCount: 4,
  certificatesCount: 2,
};

const DEMO_INSTRUCTOR: UserSession = {
  id: "usr_inst_202",
  name: "Prof. Alan Vance",
  email: "alan.vance@synapse.edu",
  role: "Instructor",
  tier: "Principal Faculty",
  avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  enrolledCoursesCount: 8,
  certificatesCount: 15,
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  switchRole: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserSession | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("synapse_auth_session");
    if (saved) {
      try {
        setUser(JSON.parse(saved));
      } catch {
        setUser(DEMO_STUDENT);
      }
    } else {
      setUser(DEMO_STUDENT);
    }
  }, []);

  const login = (email: string, name?: string, role: "Student" | "Instructor" = "Student") => {
    const newUser: UserSession = {
      id: `usr_${Date.now()}`,
      name: name || email.split("@")[0],
      email,
      role,
      tier: role === "Instructor" ? "Principal Faculty" : "Pro Scholar",
      avatarUrl: DEMO_STUDENT.avatarUrl,
      enrolledCoursesCount: 1,
      certificatesCount: 0,
    };
    setUser(newUser);
    localStorage.setItem("synapse_auth_session", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("synapse_auth_session");
  };

  const switchRole = () => {
    setUser((prev) => {
      const next = prev?.role === "Instructor" ? DEMO_STUDENT : DEMO_INSTRUCTOR;
      localStorage.setItem("synapse_auth_session", JSON.stringify(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
