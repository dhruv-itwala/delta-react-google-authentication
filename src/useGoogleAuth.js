import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAuth = (backendUrl) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Extract token from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
      // Clean URL
      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${backendUrl}/protected`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.user) {
          setUser(response.data.user); // ✅ Explicitly set user object
        } else {
          console.error("No user data found in response", response.data);
        }
        console.log(response.data.user);
      } catch (error) {
        console.error("Authentication failed", error);
        localStorage.removeItem("authToken");
      }
      setLoading(false);
    };

    checkAuth();
  }, [backendUrl]);

  const logout = () => {
    localStorage.removeItem("authToken");
    setUser(null);
  };

  return { user, loading, logout };
};

export default useGoogleAuth;
