import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    let res = await axios.post("http://localhost:2438/login", formdata)
    if (res.data.auth) {
      alert(res.data.msg);
      localStorage.setItem("token", res.data.token);  
      navigate("/dashboard")
    } else {
      navigate("/login")
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-slate-900 to-slate-950" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-[float_6s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite_reverse]" />

      <div
        className="relative w-full max-w-md"
        style={{ animation: 'slide-up 0.6s ease-out 0.2s forwards', opacity: 0 }}
      >
        <div className="backdrop-blur-xl bg-slate-800/60 border border-slate-600/50 rounded-2xl p-8 shadow-2xl shadow-black/30">
          <div className="text-center mb-8" style={{ animation: 'fade-in-scale 0.5s ease-out 0.3s forwards', opacity: 0 }}>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
              Login
            </h2>
            <p className="text-slate-400 text-sm mt-2">Welcome back</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.4s forwards', opacity: 0 }}>
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
            <div className="space-y-2" style={{ animation: 'slide-left 0.5s ease-out 0.5s forwards', opacity: 0 }}>
              <label className="block text-sm font-medium text-slate-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-600/50 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                required
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-900 hover:from-emerald-400 hover:to-teal-400 focus:ring-2 focus:ring-emerald-400/50 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              style={{ animation: 'scale-in 0.5s ease-out 0.6s forwards', opacity: 0 }}
            >
              Login
            </button>
          </form>

          <button
            onClick={() => navigate("/forgetPass")}
            className="w-full mt-6 py-2.5 rounded-xl border border-slate-600/50 text-slate-400 hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer text-sm font-medium"
            style={{ animation: 'fade-in 0.5s ease-out 0.7s forwards', opacity: 0 }}
          >
            Forgot Password ?
          </button>

          <div className="mt-4 text-center">
            <button
              onClick={() => navigate("/")}
              className="text-slate-400 hover:text-emerald-400 transition-colors text-sm font-medium cursor-pointer"
              style={{ animation: 'fade-in 0.5s ease-out 0.8s forwards', opacity: 0 }}
            >
              Don&apos;t have an account? <span className="text-emerald-400 font-semibold">Register</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
