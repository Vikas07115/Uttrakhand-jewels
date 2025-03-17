import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Login request payload: ", { email, password }); // Log the email and password sent
    try {
      const response = await axios.post("http://localhost:3001/api/login", {
        email,
        password,
      });

      if (response.data.success) {
        navigate("/home");
      } else {
        setMessage("Invalid credentials");
      }
    } catch (error) {
      setMessage("Login failed. Please try again.");
      console.error("Login error", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        {message && <p style={styles.error}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <p style={styles.signupText}>Don't have an account?</p>
        <Link to="/signup" style={styles.signupButton}>
          Sign Up
        </Link>{" "}
        {/* Link for Sign Up */}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #00b09b, #96c93d)", // Gradient background
    padding: "10px",
  },
  loginBox: {
    background: "white",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    width: "320px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "15px",
    color: "#333",
    fontSize: "24px",
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    fontSize: "14px",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745", // Same as signup button
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  signupText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#555",
  },
  signupButton: {
    display: "block",
    marginTop: "10px",
    padding: "10px",
    width: "100%",
    textAlign: "center",
    borderRadius: "5px",
    border: "1px solid #28a745",
    backgroundColor: "white",
    color: "#28a745",
    textDecoration: "none",
    transition: "all 0.3s",
  },
};

export default Login;
