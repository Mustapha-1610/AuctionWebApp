import React from "react";
import { Link } from "react-router-dom";
const LandingPageNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navbarList}>
        <li style={styles.navbarItem}>
          <Link to="/" style={styles.navbarLink}>
            Home
          </Link>
        </li>

        <li style={styles.navbarItem}>
          <Link to="/Blogin" style={styles.navbarLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};
const styles = {
  navbar: {
    backgroundColor: "#f2f2f2",
    padding: "10px",
  },
  navbarList: {
    display: "flex",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  navbarItem: {
    marginRight: "10px",
  },
  navbarLink: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
    padding: "5px",
    borderRadius: "5px",
    transition: "background-color 0.3s ease",
  },
};

export default LandingPageNavbar;
