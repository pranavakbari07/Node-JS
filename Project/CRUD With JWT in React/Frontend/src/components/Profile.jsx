import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            navigate("/login");
        } else {
            handleProfile();
        }
    }, [])

    const handleProfile = async () => {
        await axios.get("http://localhost:2438/profile", {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((res) => {
            setUser(res.data.user);
        })
    }

    const infoRows = [
        { label: 'Full Name', value: user.name },
        { label: 'Email', value: user.email },
        { label: 'Phone', value: '+91 25315 85965' },
        { label: 'User ID', value: '#12345' },
        { label: 'Role', value: 'User' },
        { label: 'Status', value: 'Active', highlight: true },
        { label: 'Joined', value: 'Jan 10, 2024' },
        { label: 'Plan', value: 'Free' },
        { label: 'Last Login', value: '2 hours ago' },
    ]

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100">
            <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-sm" style={{ animation: 'slide-down 0.4s ease-out forwards' }}>
                <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="text-slate-500 hover:text-slate-300 text-sm cursor-pointer transition-colors"
                    >
                        ← Dashboard
                    </button>
                    <button
                        onClick={() => navigate("/login")}
                        className="text-slate-500 hover:text-rose-400 text-sm cursor-pointer transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </header>

            <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
                {/* Left - avatar + actions */}
                <div
                    className="shrink-0 flex flex-col items-center md:items-start gap-4"
                    style={{ animation: 'slide-right 0.5s ease-out 0.1s forwards', opacity: 0 }}
                >
                    <div className="w-24 h-24 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl font-bold text-emerald-400 animate-[pulse-slow_3s_ease-in-out_infinite]">
                        {user.name ? user.name.charAt(0).toUpperCase() : '?'}
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-40">
                        <button className="w-full py-2.5 rounded-lg text-sm font-medium bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700 cursor-pointer transition-all duration-300 transform hover:scale-[1.02]">
                            Edit Profile
                        </button>
                        <button
                            onClick={() => navigate("/changePass")}
                            className="w-full py-2.5 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 cursor-pointer transition-all duration-300 transform hover:scale-[1.02]"
                        >
                            Change Password
                        </button>
                    </div>
                </div>

                {/* Right - name + single info block */}
                <div className="flex-1 min-w-0" style={{ animation: 'slide-left 0.5s ease-out 0.15s forwards', opacity: 0 }}>
                    <h1 className="text-2xl font-bold text-slate-100" style={{ animation: 'fade-in 0.5s ease-out 0.25s forwards', opacity: 0 }}>
                        {user.name || '—'}
                    </h1>
                    <p className="text-slate-500 text-sm mt-1 mb-6" style={{ animation: 'fade-in 0.5s ease-out 0.3s forwards', opacity: 0 }}>
                        {user.email || '—'}
                    </p>

                    <div className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden" style={{ animation: 'scale-in 0.5s ease-out 0.35s forwards', opacity: 0 }}>
                        <div className="px-4 py-3 border-b border-slate-800 bg-slate-800/50">
                            <h2 className="text-sm font-medium text-slate-400">Details</h2>
                        </div>
                        <div className="divide-y divide-slate-800">
                            {infoRows.map((row, i) => (
                                <div
                                    key={row.label}
                                    className="flex justify-between items-center gap-4 px-4 py-3 hover:bg-slate-800/20 transition-all duration-300"
                                    style={{ animation: `slide-up 0.4s ease-out ${0.4 + i * 0.05}s forwards`, opacity: 0 }}
                                >
                                    <span className="text-slate-500 text-sm">{row.label}</span>
                                    <span className={`text-sm text-right truncate max-w-[60%] ${row.highlight ? 'text-emerald-400 font-medium' : 'text-slate-200'}`}>
                                        {row.value || '—'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
