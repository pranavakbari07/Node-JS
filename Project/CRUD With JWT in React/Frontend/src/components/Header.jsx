import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate();

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-slate-900/70 border-b border-slate-700/50 px-6 py-4 flex items-center justify-between shadow-lg shadow-black/20" style={{ animation: 'slide-down 0.4s ease-out forwards' }}>
            <div
                className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate("/dashboard")}
                style={{ animation: 'fade-in 0.5s ease-out 0.1s forwards', opacity: 0 }}
            >
                Dashboard
            </div>

            <button
                onClick={() => navigate("/profile")}
                className="px-4 py-2 rounded-xl font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-800/80 border border-transparent hover:border-slate-600/50 transition-all duration-300 cursor-pointer transform hover:scale-105"
                style={{ animation: 'fade-in 0.5s ease-out 0.15s forwards', opacity: 0 }}
            >
                Profile
            </button>
        </header>
    )
}
