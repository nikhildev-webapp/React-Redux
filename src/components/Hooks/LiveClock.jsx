import React, { useEffect, useState } from 'react'

const LiveClock = () => {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)
        return () => clearInterval(interval);
    }, []);
  return (
      <>
          <div className="container text-white m-0.5 p-2">
              <h3 className="font-bold">Mini Project- LiveClock</h3>
              <h3 className="font-bold">Creating SecodMini Project using useEffect.</h3>
              <h3>{time.toLocaleTimeString()}</h3>
        </div>
      </>
  )
}

export default LiveClock