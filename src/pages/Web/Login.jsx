import React from "react";

const Login = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Log-<span style={{ color: "#6ccff6" }}>In</span>
        </h1>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>👤</span>
          <input
            type="text"
            placeholder="User Name"
            style={styles.inputUser}
          />
        </div>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            style={styles.inputPassword}
          />
        </div>
        <button style={styles.button}>→</button>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "white",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "90px",
    border: "2px solid #ffb3b3", // Add border color and style here
    borderRadius: "25px", // Optional: rounded corners
    backgroundColor: "#fff", // Optional: white background inside the border
    fontFamily: "cursive",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Optional: add a shadow effect
  },
  title: {
    fontSize: "3em",
    color: "#ffb3b3",
    textAlign: "center",
  },
  inputGroup: {
    position: "relative",
    margin: "10px 0",
    display: "flex",
    alignItems: "center",
  },
  icon: {
    position: "absolute",
    left: "10px",
    fontSize: "1.2em",
  },
  inputUser: {
    width: "200px",
    padding: "10px 10px 10px 30px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#d3e8d3",
    fontSize: "1em",
  },
  inputPassword: {
    width: "200px",
    padding: "10px 10px 10px 30px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#ffffc2",
    fontSize: "1em",
  },
  button: {
    border: "none",
    backgroundColor: "#f48fb1",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "1.2em",
    marginTop: "10px",
  },
};

export default Login;
