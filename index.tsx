"use client";

import Link from "next/link";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome to Allo Health</h1>
      <h2>Front Desk System</h2>
      <div style={{ marginTop: "20px" }}>
        <Link href="/login">
          <button
            style={{
              padding: "10px 20px",
              marginRight: "10px",
              backgroundColor: "#0070f3",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
        </Link>
        <Link href="/signup">
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
