import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:3001/api/register", { name, email, password, confirmPassword })
      .then((result) => {
        console.log(result);  // Optionally, you can display the success message here
        navigate("/login");  // Redirect to login page after successful registration
      })
      .catch((err) => {
        setMessage(err.response?.data?.message || "An error occurred");  // Show error message if any
        console.log(err);
      });
  };

  return (
    <div style={styles.container}>
      <div style={styles.signupBox}>
        <h2 style={styles.heading}>Register</h2>
        {message && <p style={styles.error}>{message}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Enter Email"
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
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              required
            />
          </div>
          <button type="submit" style={styles.button}>Register</button>
        </form>
        <p style={styles.loginText}>Already have an account?</p>
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
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    padding: "10px",
  },
  signupBox: {
    background: "white",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    width: "90%", // छोटे स्क्रीन पर अच्छा दिखे
    maxWidth: "320px", // बहुत बड़ा न हो
    textAlign: "center",
  },
  heading: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "22px",
    fontWeight: "bold",
  },
  inputGroup: {
    marginBottom: "12px",
    textAlign: "left",
  },
  label: {
    fontWeight: "bold",
    display: "block",
    fontSize: "14px",
    marginBottom: "4px",
  },
  input: {
    width: "100%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  loginText: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#555",
  },
  loginButton: {
    display: "block",
    marginTop: "10px",
    padding: "8px",
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


export default Signup;
