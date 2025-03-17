import React, { useState, useEffect } from "react";
import "./ModalComponent.css";

function ModalComponent() {
  const [showAlert, setShowAlert] = useState(true);

  // Auto-hide after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    showAlert && (
      <div className="center-alert">
        <div className="alert-content">
          <p>For a better experience, please <strong>Log in</strong> or <strong>Sign up</strong>.</p>
          <button className="close-btn" onClick={() => setShowAlert(false)}>×</button>
        </div>
      </div>
    )
  );
}

export default ModalComponent;
