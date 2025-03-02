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
  