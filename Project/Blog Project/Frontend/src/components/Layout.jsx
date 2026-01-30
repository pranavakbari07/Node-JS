import React from 'react'
import Header from './Header'
import Aside from './Aside'
import Dashboard from './Dashboard'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100/80 flex flex-col">
      <Header />
      <div className="flex flex-1 animate-fade-in">
        <Aside />
        <Dashboard />
      </div>
    </div>
  )
}
