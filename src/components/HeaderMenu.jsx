import React from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeaderMenu(props) {
  return <FontAwesomeIcon icon={faBars} size="2x" className="menu-btn" />;
}
