import Link from "next/link";
import React, { useState } from "react";

const index = () => {
  const [count, setcount] = useState(0);
  return (
    <div style={{ margin: "10px" }}>
      <h1 style={{ textAlign: "left" }}>Home</h1>
      <p>{count}</p>
      <button
        style={{ padding: "10px", backgroundColor: "teal" }}
        onClick={() => setcount((prevCount) => prevCount + 1)}
      >
        +
      </button>
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
