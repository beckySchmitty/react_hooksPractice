import React, {useState, useEffect} from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
       const intervalID = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    // CLEAN UP
        return () => {
            clearInterval(intervalID)
        }
    }, [])


    return (
        <div>
            <h1>{seconds}</h1>
        </div>
    )
}

export default Timer;