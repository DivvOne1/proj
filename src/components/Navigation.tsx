import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 bg-blue-500 items-center text-white">
      <span className="font-bold">ХАХАХАХА ШАПКА ГОТОВА</span>

      <span>
        <Link to="/" className="mr-2">Кот1</Link>
        <Link to="/about">Кот2</Link>
      </span>
    </nav>
  )
}