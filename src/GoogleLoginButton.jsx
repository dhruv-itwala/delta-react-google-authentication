import React from "react";

const GoogleLoginButton = ({
  backendUrl,
  buttonText = "Sign in with Google",
}) => {
  const handleLogin = () => {
    if (!backendUrl) {
      console.error("Backend URL is required.");
      return;
    }

    // Redirect user to backend authentication route
    window.location.href = `${backendUrl}/auth/google`;
  };

  return <button onClick={handleLogin}>{buttonText}</button>;
};

export default GoogleLoginButton;
