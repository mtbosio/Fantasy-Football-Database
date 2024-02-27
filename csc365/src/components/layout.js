import React from "react";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <>
      <div className="navbar">
        <a href="/" target="_blank" rel="noopener noreferrer">
          Home
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Login
        </a>
        <a href="/" target="_blank" rel="noopener noreferrer">
          Insights
        </a>
      </div>
      <div>{children}</div>
    </>
  );
}
