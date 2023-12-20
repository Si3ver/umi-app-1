
import { useEffect, useState } from "react"

interface IProps {
  time: number;
  func: () => void;
}

// 1 用 setTimeout 实现
function useCountDown1 ({time, func}: IProps) {
  const [count, setCount] = useState(time);

  useEffect(() => {
    setTimeout(() => {
      setCount(x => x - 1);
      if (count <= 0) {
        func?.();
      }
    }, 1000);
  }, [count]);

  return [count] as const
}

// 2 用 setInterval 实现
function useCountDown2 ({time, func}: IProps) {
  const [count, setCount] = useState(time);
  useEffect(() => {
    const timer = setInterval(() => {
      setCount(c => c - 1);
      if (count <= 0) {
        func?.();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, [count])

  return [count] as const
}

export { useCountDown1, useCountDown2 };
