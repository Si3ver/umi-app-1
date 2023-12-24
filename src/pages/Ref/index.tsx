import { useEffect, useRef, useState } from "react";

export default function () {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const id = setInterval(() => {
      console.log(count, countRef.current);
      setCount(c => {
        // return {num: c.num + 1};
        return c + 1;
      });
    }, 500);
    return () => clearInterval(id);
  }, []);

  return <div>123</div>
}
