import { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  // Login with email
  const loginWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Register with email and send data to backend
  const registerWithEmail = async (
    email,
    password,
    name,
    img_url,
    address
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const newUser = userCredential.user;

      // Send user data to backend
      const response = await fetch(
        "http://localhost:5000/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            //uid: newUser.uid,
            email: email,
            name: name ,
            img_url: img_url || "https://i.ibb.co/k6hTYW1/Alien-Dev.jpg",
            address: address,
            isAdmin: true, // Default role
            isBlocked: false, // Default status
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to register user data.");
      }

      return newUser;
    } catch (error) {
      console.error("Registration failed:", error.message);
      throw error; // Re-throw error for further handling if needed
    }
  };

  // Logout user
  const logOutUser = () => {
    console.log("Clicked Logout");
    return signOut(auth);
  };

  // Monitor auth state and fetch user data from backend
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      console.log("Provider ",currentUser.email);
      if (currentUser) {
        try {
          const res = await fetch(
            `http://localhost:5000/userprovider/${currentUser.email}`
          );

          if (!res.ok) {
            throw new Error("Failed to fetch user data.");
          }

          const data = await res.json();
          setUser(data);
        } catch (error) {
          console.error("Error fetching user data:", error.message);
        }
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <AuthContext.Provider
      value={{ registerWithEmail, user, loginWithEmail, logOutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;