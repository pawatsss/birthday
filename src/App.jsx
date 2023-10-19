import './App.css'
import { useEffect, useState } from 'react'


function App() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const Countdown = (birthDate) => {
    let now = new Date().getTime()
    let timeCount = birthDate - now

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24))
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000)
    setTime({
      days,
      hours,
      minutes,
      seconds,
    })
  }

  useEffect(() => {
    setInterval(() => {
      let day = 22
      let month = 3 
      let year =
        new Date().getMonth() + 1 > month
          ? new Date().getFullYear() + 1
          : new Date().getMonth() + 1 === month && new Date().getDate() > day
          ? new Date().getFullYear() + 1
          : new Date().getFullYear()

      let birth = new Date(`${month}/${day}/${year}`).getTime()
      Countdown(birth)
    }, 1000)
  }, [])

  return (
    <div className='container'>
      <h1>วันเกิด 22 มีนาคม</h1>
      <div className='boxnm'>
        <div className='boxs'>
          <div className='box'>
            <h3>DAY {time.days}</h3>
            
          </div>
          <div className='box'>
            <h3>hours {time.hours}</h3>
          </div>
          <div className='box'>
            <h3>minutes {time.minutes}</h3>
          </div>
          <div className='box'>
            <h3>seconds {time.seconds} </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App