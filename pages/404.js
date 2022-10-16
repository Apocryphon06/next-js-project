import React from "react";

function NotFoundFunction() {
  return (
    <div style={{ textAlign: "center" }}>
      <h2>
        <span style={{ color: "red" }}>404</span> Page not found
      </h2>
      <p style={{ color: "#808080", fontSize: "16px" }}>
        The page your looking for doesn't exist or has been moved to another
        location please check the url you have typed.
      </p>
    </div>
  );
}

export default NotFoundFunction;
