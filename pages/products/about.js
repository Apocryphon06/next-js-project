import Link from "next/link";
import React from "react";

const about = () => {
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ textAlign: "left" }}>About</h1>
      <li>
        <Link href="/">Home</Link>
      </li>
    </div>
  );
};

export default about;
