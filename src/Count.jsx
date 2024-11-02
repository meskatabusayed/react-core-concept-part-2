import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1)
  }
  const handleReduce = () => {
    setCount(count - 1);
  }
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleReduce}>Reduce</button>
    </div>
  );
}
