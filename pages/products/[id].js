import React from "react";
import { useRouter } from "next/router";

const myfunction = () => {
  const router = useRouter();
  return <div>accept any value passed as path variable {router.query.id}</div>;
};

export default myfunction;
