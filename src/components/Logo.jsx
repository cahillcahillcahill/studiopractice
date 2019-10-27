import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Logo.css";

export default function Logo(props) {
  return (
    <div className="logo-container">
      <Link to="/">
        {" "}
        <LogoImg />
      </Link>
    </div>
  );

  function LogoImg() {
    return (
      <div className="logo-img">
        _studi{<FontAwesomeIcon icon={faCircle} size="xs" />}practice
      </div>
    );
  }
}
