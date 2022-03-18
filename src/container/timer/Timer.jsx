import React from 'react'
// import { useState, useEffect } from 'react';
import DateCountdown from 'react-date-countdown-timer';
import "./timer.scss"
import { useEffect, useState } from "react";
import innerText from 'react-innertext';
import ReactDOM from 'react-dom';


export default function Topbar(){
  
  
  const [days, setDays] = useState(99)
  const [hours, setHours] = useState(99)
  const [minutes, setMinutes] = useState(99)
  const [seconds, setSeconds] = useState(99)
  const timeInterval = 1000;
  let timeDays=0;
  let timeHours=0;
  let timeMinutes=0;
  let timeSeconds=0


  useEffect(() => {
    const hehe = process.env.REACT_APP_WEBSITE_NAME;
    const title = React.createElement('h1', {}, hehe);
    const countdown = () => {
      const endDate = new Date("January 01, 2023 00:00:00").getTime()
      const today = new Date().getTime()  

      const timeDiff = endDate - today

      const seconds = 1000
      const minutes = seconds * 60
      const hours = minutes * 60
      const days = hours * 24 

      timeDays = Math.floor(timeDiff / days)
      timeHours = Math.floor((timeDiff % days) / hours)
      timeMinutes = Math.floor((timeDiff % hours) / minutes)
      timeSeconds = Math.floor((timeDiff % minutes) / seconds)

      timeHours = timeHours < 10 ? "0" + timeHours : timeHours
      timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
      timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds

      setDays(timeDays)
      setHours(timeHours)
      setMinutes(timeMinutes)
      setSeconds(timeSeconds)

      if(timeHours === '00' && timeDays === 0 && timeMinutes === '00' && timeSeconds ==='00'){
        ReactDOM.render(
          title,
          document.getElementById('lethanhdat')
        );
      }
    }
    
   const stoptimer = setInterval(countdown, timeInterval)
    console.log(`${process.env.REACT_APP_WEBSITE_NAME}`)
  }, [])

    return(
    
        <>
        { (
          <section className="container">
            <h1>New Year Countdown 2023</h1>
            
            <div className="countdown">
              <article>
                <p>{days}</p>
                <h3>Days</h3>
              </article>
              <article>
                <p>{hours}</p>
                <h3>Hours</h3>
              </article>
              <article>
                <p>{minutes}</p>
                <h3>Minutes</h3>
              </article>
              <article>
                <p>{seconds}</p>
                <h3>Seconds</h3>
              </article>
            </div>
            <div id='lethanhdat' className='lethanhdat'>
              <a href='https://wortzzzzz.github.io/justWortz/'>the author</a>
            
            </div>
          </section>
        )}  
      </>
    )
        }