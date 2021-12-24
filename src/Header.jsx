import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import ForumIcon from "@mui/icons-material/Forum";

function Header() {
  return (
    <div className="header">
      <IconButton aria-label="View Profile" className="header__icon">
        <PersonIcon fontSize="large" titleAccess="View Profile" />
      </IconButton>
      <img
        className="header__logo"
        src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
        alt="tinder logo"
      />
      <IconButton aria-label="View Chats" className="header__icon">
        <ForumIcon fontSize="large" titleAccess="View Chats" />
      </IconButton>
    </div>
  );
}

export default Header;
