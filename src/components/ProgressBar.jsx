import { useEffect, useState } from "react";

export default function ProgressBar ({timer}) {
  const [remainingTime, setRemainingTime] = useState(timer);
    useEffect (() => {
      const inter = setInterval (() => {
        console.log ('INTERVAL')
        setRemainingTime (prevTime => prevTime - 10);
      }, 10);
      return () => {
        clearInterval (inter);
      }
    }, [])

    return (<progress value={remainingTime} max={timer} />)
}