# delta-react-google-authentication

Google Sign-In authentication package for React applications integrated with `delta-google-authentication` backend.

## 🚀 Installation

```sh
npm install delta-react-google-authentication
```

## 📌 Setup

You need a backend running `delta-google-authentication`.

## 🔹 Usage

### 1️⃣ Import the `GoogleLoginButton` component

```javascript
import { GoogleLoginButton } from "delta-react-google-authentication";

const Login = () => {
  return (
    <GoogleLoginButton
      backendUrl="http://localhost:5000"
      buttonText="Sign in with Google"
    />
  );
};

export default Login;
```

### 2️⃣ Use `useGoogleAuth` Hook to Get User Data

```javascript
import { useGoogleAuth } from "delta-react-google-authentication";

const Dashboard = () => {
  const { user, loading } = useGoogleAuth(backendUrl);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name} 👋</h2>
          <img src={user.profilePic} alt="Profile" />
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>User not logged in</p>
      )}
    </div>
  );
};

export default Dashboard;
```

## 🔹 Logout

To log out the user, call:

```javascript
import { useGoogleAuth } from "delta-react-google-authentication";
const Logout = () => {
  const {logout } = useGoogleAuth(backendUrl);
    return (
<button onClick={logout}>Logout</button>;
)};

export default Logout;
```

## 🔐 Token

Token will be saved in localStorage as **authToken**.

## 📜 License

This project is licensed under the **MIT License**.

## 💻 Contributing

Feel free to submit issues and pull requests on GitHub.

---

Happy coding! 🚀
