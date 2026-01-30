import React from 'react'
import Header from './Header'
import Aside from './Aside'
import { useState } from 'react'
import axios from 'axios'

export default function AddAdmin() {
  const [formdata, setFormdata] = useState({})

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:2438/addData", formdata)
      alert(res.data.msg)
      setFormdata({
        name: "",
        age: "",
        city: "",
        email: "",
        password: ""
      })
    } catch (err) {
      alert(err.response?.data?.msg || "Error adding admin")
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition"
  const labelClass = "block text-slate-700 text-sm font-medium mb-1.5"

  return (
    <div className="min-h-screen bg-slate-50/80 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-lg bg-white rounded-3xl border border-slate-200/80 shadow-lg p-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Add Admin</h2>
              <p className="text-slate-500 text-sm mt-1">Create a new administrator</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className={labelClass}>Name</label>
                <input type="text" name="name" value={formdata.name || ""} placeholder="Enter your name" onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Age</label>
                <input type="number" name="age" value={formdata.age || ""} placeholder="Enter your age" onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City</label>
                <input type="text" name="city" value={formdata.city || ""} placeholder="Enter your city" onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" name="email" value={formdata.email || ""} placeholder="Enter your email" onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input type="password" name="password" value={formdata.password || ""} placeholder="Enter your password" onChange={handleChange} className={inputClass} />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-500/25 transition">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
