import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const siteName = "";
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setDropdownVisible((prev) => !prev);
    };

    return (
        <header style={headerStyle}>
            {/* Site Name */}
            <div style={siteNameStyle}>
                <h1>{siteName}</h1>
            </div>

            {/* User Section */}
            <div style={userSectionStyle}>
                <div style={userIconWrapperStyle} onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faUser} style={iconStyle} />
                </div>

                {/* Dropdown */}
                {dropdownVisible && (
                    <div style={dropdownStyle}>
                        <p style={welcomeTextStyle}>Welcome!</p>
                        <a href="#" name="btn_logout" style={logoutLinkStyle}>
                            <FontAwesomeIcon icon={faSignOutAlt} style={iconStyle} />
                            <span style={{ marginLeft: "8px" }} onClick={() => { navigate("/") }}>Logout</span>
                        </a>
                    </div>
                )}
            </div>
        </header>
    );
};

// Styling
const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: "#004d40",
    color: "#fff",
    position: "relative",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const siteNameStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
};

const userSectionStyle = {
    position: "relative",
    cursor: "pointer",
};

const userIconWrapperStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    color: "#4CAF50",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
};

const iconStyle = {
    fontSize: "1.2rem",
};

const dropdownStyle = {
    position: "absolute",
    top: "50px",
    right: "0",
    backgroundColor: "#fff",
    color: "#333",
    borderRadius: "4px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    padding: "0.5rem 1rem",
    zIndex: 10,
    width: "150px",
    textAlign: "center",
};

const welcomeTextStyle = {
    fontWeight: "bold",
    marginBottom: "0.5rem",
};

const logoutLinkStyle = {
    textDecoration: "none",
    color: "#4CAF50",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
};

export default Header;
