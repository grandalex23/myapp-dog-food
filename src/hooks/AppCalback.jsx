import React, { useState, useEffect, useCallback } from "react";
import Logo from "../components/Logo/Logo";

const AppCallback = () => {
   const [count, setCount] = useState(0);
   const [message, setMessage] = useState("Hello");
   //const greeting = (text) => console.log(text);
   //const greeting = () => console.log("Hello");
   const greeting = useCallback((text) => console.log(text), [])

   useEffect(() => {
      greeting(message);
   }, [message, greeting]);

   return (
      <>
         <Logo greeting={greeting}></Logo>
         <button onClick={() => setCount(count + 1)}>CLICKED: {count}</button>
      </>
   )
};

export default AppCallback;
