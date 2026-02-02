import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios .post("http://localhost:2438/login", formdata).then((res) => {
        // console.log(res.data);
        if (res.data && res.data.auth) {
          navigate("/dashboard");
        } else {
          alert(res.data.message || "Login failed 😕");
        }
      })
      .catch((err) => {
        console.log(err);
        alert(
          err.response?.data?.message ||
            "Server error. Make sure backend is running! 🛠️"
        );
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-emerald-50/50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent pointer-events-none" />

      <div
        className="w-full max-w-md relative animate-fade-in-up opacity-0"
        style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
      >
        <div className="bg-white/90 backdrop-blur-md rounded-[1.75rem] shadow-2xl shadow-slate-200/50 border border-slate-200/60 p-10 hover:shadow-emerald-500/10 transition-shadow duration-500">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 text-white mb-6 shadow-lg shadow-emerald-500/30 animate-float">
              <svg
                className="w-9 h-9"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">
              Admin Login
            </h1>
            <p className="text-slate-500 text-sm mt-1">
              Sign in to your account
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div
              className="animate-fade-in-up opacity-0"
              style={{
                animationDelay: "0.2s",
                animationFillMode: "forwards",
              }}
            >
              <label className="block text-slate-700 text-sm font-medium mb-1.5">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formdata.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                placeholder="Enter your email"
                required
              />
            </div>

            <div
              className="animate-fade-in-up opacity-0"
              style={{
                animationDelay: "0.25s",
                animationFillMode: "forwards",
              }}
            >
              <label className="block text-slate-700 text-sm font-medium mb-1.5">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formdata.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all duration-300"
                placeholder="Enter your password"
                required
              />
            </div>

            <div
              className="animate-fade-in-up opacity-0"
              style={{
                animationDelay: "0.3s",
                animationFillMode: "forwards",
              }}
            >
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold shadow-lg transition-all duration-300"
              >
                Sign In
              </button>
            </div>
          </form>

          <p className="mt-6 text-center text-slate-500 text-sm">
            Don't have an account?{" "}
            <a className="text-emerald-600 font-medium">Contact admin</a>
          </p>
        </div>
      </div>
    </div>
  );
}
