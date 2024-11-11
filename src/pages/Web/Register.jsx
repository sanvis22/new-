import React from "react";

const Register = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Register<span style={{ color: "#6ccff6" }}>-Now</span>
        </h1>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>👤</span>
          <input
            type="text"
            placeholder="Full Name"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>👤</span>
          <input
            type="text"
            placeholder="Username"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>📧</span>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <span style={styles.icon}>🔒</span>
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
          />
        </div>
        <button style={styles.button}>Register</button>
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
    border: "2px solid #ffb3b3",
    borderRadius: "25px",
    backgroundColor: "white",
    fontFamily: "cursive",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "2.5em",
    color: "#ffb3b3",
    textAlign: "center",
    marginBottom: "20px",
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
  input: {
    width: "250px",
    padding: "10px 10px 10px 35px",
    borderRadius: "25px",
    border: "none",
    backgroundColor: "#d3e8d3",
    fontSize: "1em",
  },
  button: {
    border: "none",
    backgroundColor: "#f48fb1",
    padding: "10px 30px",
    borderRadius: "20px",
    cursor: "pointer",
    fontSize: "1.2em",
    marginTop: "15px",
  },
};

export default Register;
