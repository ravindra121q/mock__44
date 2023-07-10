import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        gap: "20px",
        backgroundColor: "black",
        paddingTop: "10px",
        paddingBottom: "10px",
        color: "white",
        fontSize: "20px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to={"/dashboard"}>Dashboard</Link>{" "}
    </div>
  );
};
