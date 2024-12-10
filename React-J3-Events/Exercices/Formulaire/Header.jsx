import React from "react";

const Header = ({ logoSrc, siteTitle }) => {
  return (
    <header>
      <h1>{siteTitle}</h1>
      <img
        src={logoSrc}
        alt="Logo"
        style={{ width: "150px", height: "auto" }}
      />
    </header>
  );
};

export default Header;
