import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(new Date())
  useEffect(()=>{
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  },[])

  function formatTime(){
    let hour = time.getHours()
    let minutes = time.getMinutes()
    let second = time.getSeconds()
    const waktu = hour >= 12 ? 'PM' : 'AM'
    hour = hour % 12 || 12;
    return `${hour}:${minutes}:${second}${waktu}`
  }

  return (
    <div>
      <h1 className='header'>Digital Clock App</h1>
      <div className='container'>
        <h1 className='clock'>{formatTime()}</h1>
      </div>
    </div>
  )
}

export default App
