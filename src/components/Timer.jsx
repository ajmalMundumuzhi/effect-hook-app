import { useState } from "react";
import { useEffect } from "react";

function Timer ({restartTrigger}) {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(s => s + 1);
        },1000)
        const restartTimer = () => {
            setSeconds(0);
        };
        return () => clearInterval(interval);
    }, [])

    useEffect(() => {
        setSeconds(0);
    }, [restartTrigger])

    return <p>Seonds : {seconds}</p>

}

export default Timer;