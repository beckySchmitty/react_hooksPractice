import React, {useState, useEffect} from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
    }, [])


    return (
        <div>
            <h1>{seconds}</h1>
        </div>
    )
}

export default Timer;