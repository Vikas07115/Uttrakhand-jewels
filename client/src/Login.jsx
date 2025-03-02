import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage("Please enter both email and password.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long.");
      return;
    }

    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email,
        password,
      });

      console.log("API Response:", response.data); // Debugging

      if (response.data.message === "Login Successful") {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));

        setMessage("Login Successful! Redirecting...");
        setTimeout(() => navigate("/home"), 1000);
      } else {
        setMessage(response.data.error || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        setMessage(error.response.data.error || "Something went wrong. Please try again.");
      } else {
        setMessage("Could not connect to the server. Please try again later.");
      }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter Password"
              autoComplete="off"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {message && (
            <p style={message.includes("Success") ? styles.success : styles.error}>
              {message}
            </p>
          )}

          <button type="submit" style={styles.button}>Login</button>
        </form>

        <p style={styles.signupText}>Don't have an Account?</p>
        <Link to="/signup" style={styles.signupButton}>Signup</Link>
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
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    padding: "10px",
  },
  loginBox: {
    background: "white",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "280px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "8px",
    color: "#333",
    fontSize: "20px",
  },
  inputGroup: {
    marginBottom: "8px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    fontSize: "13px",
    marginBottom: "2px",
  },
  input: {
    width: "100%",
    padding: "7px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "13px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "6px",
  },
  success: {
    color: "green",
    fontSize: "12px",
    marginBottom: "6px",
  },
  button: {
    width: "100%",
    padding: "7px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  signupText: {
    marginTop: "5px",
    fontSize: "12px",
    color: "#555",
  },
  signupButton: {
    display: "inline-block",
    marginTop: "4px",
    padding: "7px",
    width: "100%",
    textAlign: "center",
    borderRadius: "4px",
    border: "1px solid #28a745",
    backgroundColor: "white",
    color: "#28a745",
    textDecoration: "none",
    transition: "all 0.3s",
  },
};

export default Login;
