import React, { useState, useMemo } from "react";

function createUser(name) {
   const user = { name };
   let i = 0;
   while (i < 1000000000) i++;
   return user;
}

const AppMemo = () => {

   const [count, setCount] = useState(0);
   const [name, setName] = useState("");

   const user = useMemo(() => createUser(name), [name]);

   return (
      <>
         <button onClick={() => setCount(count + 1)}>CLICKED: {count}</button>
         <input onChange={(event) => setName(event.target.value)}></input>
         <pre> {JSON.stringify(user)}</pre>
      </>
   );

}

export default AppMemo;