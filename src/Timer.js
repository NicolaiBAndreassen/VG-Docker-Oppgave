import React, { useState } from 'react';
import "./App.css"

export default function CountdownTimer() {
const [now, setNow] = useState(new Date())

const date = new Date()

const eventHour = date.getHours()

const target = new Date()
target.setHours(events[0], 0, 0)

const remainingTime = new Date(target - now)

const hour = remainingTime.getHours()
const minute = remainingTime.getMinutes()
const second = remainingTime.getSeconds()

setInterval(() => {
  setNow(new Date())
}, 100)

return (
  <>
    <div class="App">
      {hour.toString() + ":" + minute.toString() + ":" + second.toString()}
    </div>

    <div>
      <Event tid={["dagStart", date.setHours(8, 0 ,0)]}/>
      <Event tid={["lunsjStart", date.setHours(11, 0 ,0)]}/>
      <Event tid={["lunsjSlutt", date.setHours(12, 0 ,0)]}/>
      <Event tid={["dagSlutt", date.setHours(15, 0 ,0)]}/>
    </div>
  </>
  
)
}