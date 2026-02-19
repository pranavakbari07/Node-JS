import axios from 'axios'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function VerifyPass() {
    const navigate = useNavigate()

    const [formdata, setFormdata] = useState({})
    const token = localStorage.getItem("token");

    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:2438/verifyPass",formdata,{withCredentials:true}).then((res)=>{
            navigate("/login")
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center relative overflow-hidden py-16">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-950" />
            <div className="absolute top-20 left-20 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
            <div className="absolute bottom-20 right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />

            <div className="relative w-full max-w-md mx-4" style={{ animation: 'slide-up 0.6s ease-out 0.1s forwards', opacity: 0 }}>
                <div className="backdrop-blur-xl bg-slate-800/60 border border-slate-600/50 rounded-2xl p-8 shadow-2xl shadow-black/30">
                    <div className="text-center mb-8" style={{ animation: 'fade-in-scale 0.5s ease-out 0.2s forwards', opacity: 0 }}>
                        <h2 className="text-2xl font-bold bg-linear-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                            Verify & Reset Password
                        </h2>
                        <p className="text-slate-400 text-sm mt-2">Enter OTP and new password</p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.3s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">OTP</label>
                            <input
                                type="text"
                                onChange={handleChange}
                                name="otp"
                                placeholder="Enter OTP"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.4s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">New Password</label>
                            <input
                                type="password"
                                onChange={handleChange}
                                name="newPass"
                                placeholder="New password"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.5s forwards', opacity: 0 }}>
                            <label className="block text-sm font-medium text-slate-300">Confirm Password</label>
                            <input
                                type="password"
                                onChange={handleChange}
                                name="confirmPass"
                                placeholder="Confirm password"
                                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl font-semibold bg-linear-to-r from-emerald-500 to-teal-500 text-slate-900 hover:from-emerald-400 hover:to-teal-400 focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                            style={{ animation: 'scale-in 0.5s ease-out 0.6s forwards', opacity: 0 }}
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
