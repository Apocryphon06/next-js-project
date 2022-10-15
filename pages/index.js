import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ textAlign: "left" }}>Home</h1>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/products/about">About</Link>
      </li>
    </div>
  );
};

export default index;
