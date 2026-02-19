import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [formdata, setFormdata] = useState({})
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:2438/register", formdata).then((res) => {
            alert(res.data.msg)
            navigate("/login")
        })
        setFormdata({
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center relative overflow-hidden py-12">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--tw-gradient-stops))] from-teal-900/20 via-slate-900 to-slate-950" />
            <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite]" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-[float_5s_ease-in-out_infinite_reverse]" />

            <div
                className="relative w-full max-w-md mx-4"
                style={{ animation: 'slide-up 0.6s ease-out 0.1s forwards', opacity: 0 }}
            >
                <div className="backdrop-blur-xl bg-slate-800/60 border border-slate-600/50 rounded-2xl p-8 shadow-2xl shadow-black/30">
                    <div className="text-center mb-8" style={{ animation: 'fade-in-scale 0.5s ease-out 0.2s forwards', opacity: 0 }}>
                        <h2 className="text-3xl font-bold bg-linear-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                            Register
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">Create your account</p>
                    </div>

                    <form onSubmit={handleRegister} className="space-y-5">
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.3s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">
                                Name
                            </label>
                            <input
                                type="text"
                                name='name'
                                value={formdata.name}
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.4s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">
                                Gmail
                            </label>
                            <input
                                type="email"
                                name='email'
                                value={formdata.email}
                                placeholder="Enter your Gmail"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.5s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">
                                Password
                            </label>
                            <input
                                type="password"
                                name='password'
                                value={formdata.password}
                                placeholder="Enter your password"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-emerald-500 to-teal-500 text-slate-900 hover:from-emerald-400 hover:to-teal-400 focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                            style={{ animation: 'scale-in 0.5s ease-out 0.6s forwards', opacity: 0 }}
                        >
                            Register
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <button
                            onClick={() => navigate("/login")}
                            className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium cursor-pointer"
                            style={{ animation: 'fade-in 0.5s ease-out 0.7s forwards', opacity: 0 }}
                        >
                            Already have an account? <span className="text-emerald-400 font-semibold">Login</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
