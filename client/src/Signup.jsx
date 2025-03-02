import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      setMessage("All fields are required");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    setMessage("");

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        { name, email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Signup Response:", response.data);
      setMessage("Registration successful! Redirecting to login...");

      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      console.error("Signup Error:", error.response);
      setMessage(error.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <h2 style={styles.heading}>Register</h2>
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              style={styles.input}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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

          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              autoComplete="off"
              style={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {message && (
            <p style={message.includes("successful") ? styles.success : styles.error}>
              {message}
            </p>
          )}

          <button type="submit" style={styles.button}>Register</button>
        </form>

        <p style={styles.loginText}>Already have an Account?</p>
        <Link to="/login" style={styles.loginButton}>Login</Link>
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
    background: "linear-gradient(135deg, #ff758c, #ff7eb3)",
    padding: "10px",
  },
  signupBox: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "8px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "290px",
    textAlign: "center",
  },
  heading: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "22px",
  },
  inputGroup: {
    marginBottom: "10px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    fontSize: "14px",
    marginBottom: "3px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  error: {
    color: "red",
    fontSize: "12px",
    marginBottom: "8px",
  },
  success: {
    color: "green",
    fontSize: "12px",
    marginBottom: "8px",
  },
  button: {
    width: "100%",
    padding: "8px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  loginText: {
    marginTop: "8px",
    fontSize: "13px",
    color: "#555",
  },
  loginButton: {
    display: "inline-block",
    marginTop: "6px",
    padding: "8px",
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

export default Signup;
