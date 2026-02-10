import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgetPass() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const sendOtp = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2438/forgetPass",formdata,{withCredentials:true}).then((res)=>{
      navigate("/verifyPass")
    })
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-950" />
      <div className="absolute top-32 right-32 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-32 left-32 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-[float_7s_ease-in-out_infinite_reverse]" />

      <div
        className="relative w-full max-w-md mx-4"
        style={{ animation: 'slide-up 0.6s ease-out 0.15s forwards', opacity: 0 }}
      >
        <div className="backdrop-blur-xl bg-slate-800/60 border border-slate-600/50 rounded-2xl p-8 shadow-2xl shadow-black/30">
          <div className="text-center mb-8" style={{ animation: 'fade-in-scale 0.5s ease-out 0.25s forwards', opacity: 0 }}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
              Forget Password
            </h2>
            <p className="text-slate-400 text-sm mt-2">We&apos;ll send you an OTP</p>
          </div>

          <form onSubmit={sendOtp} className="space-y-5">
            <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.35s forwards', opacity: 0 }}>
              <label className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                required
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 hover:from-emerald-400 hover:to-teal-400 focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{ animation: 'scale-in 0.5s ease-out 0.45s forwards', opacity: 0 }}
            >
              Send OTP
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
