import React from "react";

function Footer() {
  const year = new Date();
  return (
    <div style={{ textAlign: "center" }}>
      &copy; News app project using react by ISMAIL {year.getFullYear()}
    </div>
  );
}

export default Footer;
