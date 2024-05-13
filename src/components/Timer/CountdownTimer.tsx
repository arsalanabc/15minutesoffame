import React, { useState, useEffect } from 'react'

type TimeLeft = Record<string, number>

function CountdownTimer ({ targetDate }: { targetDate: Date }): React.ReactElement {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft = {}

    if (difference > 0) {
      timeLeft = {
        min: Math.floor((difference / 1000 / 60) % 60),
        s: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => { clearTimeout(timer) }
  })

  const timerComponents: any[] = []

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] === 0) {
      return
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]}{interval}{' '}
      </span>
    )
  })

  return (
    <div style={{ textAlign: 'right' }}>
        <span> Next refresh in </span>

      {(timerComponents.length > 0)
        ? (
            timerComponents
          )
        : (
        <span>Countdown complete!</span>
          )}
    </div>
  )
};

export default CountdownTimer
