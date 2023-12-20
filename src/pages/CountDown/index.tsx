import { useEffect, useState } from "react";
import { useCountDown1, useCountDown2 } from "./useCountDown";

export default function () {
  const [count1] = useCountDown1({
    time: 10,
    func: () => {
      console.log('count1 finish!');
    }
  });

  const [count2] = useCountDown2({
    time: 10,
    func: () => {
      console.log('count1 finish!');
    }
  });

  return <>
    <div>count1: {count1}</div>
    <div>count2: {count2}</div>
  </>
}
