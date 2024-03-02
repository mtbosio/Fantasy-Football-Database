import React from "react";
import "../styles/globals.css";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/insights">Insights</Link>
      </div>
      <div>{children}</div>
    </>
  );
}
