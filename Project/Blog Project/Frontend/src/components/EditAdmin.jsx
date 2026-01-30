import React, { useEffect, useState } from 'react'
import Header from './Header'
import Aside from './Aside'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function EditAdmin() {
  const [formdata, setFormdata] = useState({})
  const locationObj = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (locationObj.state) {
      setFormdata(locationObj.state)
    } else {
      navigate("/viewAdmin")
    }
  }, [locationObj.state, navigate])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put("http://localhost:2438/updateData", formdata)
      alert(res.data.msg)
      navigate("/viewAdmin")
    } catch (err) {
      alert(err.response?.data?.msg || "Error updating admin")
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
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-800">Edit Admin</h2>
              <p className="text-slate-500 text-sm mt-1">Edit administrator form</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className={labelClass}>Name</label>
                <input type="text" name="name" placeholder="Enter your name" value={formdata.name || ""} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Age</label>
                <input type="number" name="age" placeholder="Enter your age" value={formdata.age || ""} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>City</label>
                <input type="text" name="city" placeholder="Enter your city" value={formdata.city || ""} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Email</label>
                <input type="email" name="email" placeholder="Enter your email" value={formdata.email || ""} onChange={handleChange} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Password</label>
                <input type="password" name="password" placeholder="Enter your password" value={formdata.password || ""} onChange={handleChange} className={inputClass} />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-semibold shadow-lg shadow-amber-500/25 transition">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
