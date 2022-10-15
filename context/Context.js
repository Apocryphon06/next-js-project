import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [count, setCount] = useState(0);
  return <Context.Provider value={count}>{props.children}</Context.Provider>;
};
