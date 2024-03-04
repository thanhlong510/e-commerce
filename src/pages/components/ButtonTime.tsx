"use client"
import React from 'react'
import dayjs from 'dayjs'
const ButtonTime = () => {
    const currentDate = new Date();
  return (
    <button className=" bg-slate-200 font-medium px-4 py-3 rounded-lg">
    {`${dayjs(currentDate).format("MMM D, YYYY H:m A")}`}

    </button>
  )
}

export default ButtonTime