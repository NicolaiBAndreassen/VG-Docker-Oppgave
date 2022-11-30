import React, { useState } from 'react';
import "./App.css"

export default function CountdownTimer() {
const [now, setNow] = useState(new Date())

const target = new Date()
target.setHours(14, 0, 0)

const remainingTime = new Date(target - now)

const hour = remainingTime.getHours()
const minute = remainingTime.getMinutes()
const second = remainingTime.getSeconds()

setInterval(() => {
  setNow(new Date())
}, 100)

return (
  <div class="App">
    {hour.toString() + ":" + minute.toString() + ":" + second.toString()}
  </div>
)
}