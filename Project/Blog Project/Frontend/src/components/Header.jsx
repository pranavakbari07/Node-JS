import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200/80 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center justify-between px-6 py-4">
        <Link to="/dashboard" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <h1 className="text-xl font-bold text-slate-800">Admin Panel</h1>
        </Link>
        <nav className="flex items-center gap-1">
          <Link
            to="/dashboard"
            className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-800 font-medium transition"
          >
            Dashboard
          </Link>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-800 font-medium transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}
