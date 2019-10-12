import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Logo(props) {
  return (
    <div
      className="logo-container"
      onClick={() => console.log("clicked big")}
    >
      <LogoImg />
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
