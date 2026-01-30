import React, { useEffect, useState } from 'react'
import Header from './Header'
import Aside from './Aside'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ViewAdmin() {
  const [record, setRecord] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`http://localhost:2438/deleteData?id=${id}`)
      setRecord((prev) => prev.filter((item) => item._id !== id))
      alert(res.data.msg)
    } catch (err) {
      alert(err.response?.data?.msg || "Error deleting")
    }
  }

  const handleEdit = (id) => {
    const singleData = record.find((item) => item._id === id)
    navigate("/editAdmin", { state: singleData })
  }

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:2438/getData")
      setRecord(res.data.data || [])
    } catch (err) {
      setRecord([])
    }
  }

  return (
    <div className="min-h-screen bg-slate-50/80 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-lg overflow-hidden">
              <div className="px-8 py-6 border-b border-slate-100">
                <h2 className="text-xl font-bold text-slate-800">View Admin</h2>
                <p className="text-slate-500 text-sm mt-0.5">Manage administrator records</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50/80 text-slate-600 font-semibold">
                      <th className="text-left py-4 px-6">S. No.</th>
                      <th className="text-left py-4 px-6">Id</th>
                      <th className="text-left py-4 px-6">Name</th>
                      <th className="text-left py-4 px-6">Age</th>
                      <th className="text-left py-4 px-6">Email</th>
                      <th className="text-left py-4 px-6">Password</th>
                      <th className="text-left py-4 px-6">City</th>
                      <th className="text-right py-4 px-6">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {record.map((e, i) => (
                      <tr key={e._id} className="border-t border-slate-100 hover:bg-slate-50/50 transition">
                        <td className="py-4 px-6 text-slate-700">{i + 1}</td>
                        <td className="py-4 px-6 text-slate-500 font-mono text-xs">{e._id}</td>
                        <td className="py-4 px-6 font-medium text-slate-800">{e.name}</td>
                        <td className="py-4 px-6 text-slate-700">{e.age}</td>
                        <td className="py-4 px-6 text-slate-600">{e.email}</td>
                        <td className="py-4 px-6 text-slate-600">{e.password}</td>
                        <td className="py-4 px-6 text-slate-700">{e.city}</td>
                        <td className="py-4 px-6 text-right space-x-2">
                          <button onClick={() => handleEdit(e._id)} className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700 hover:bg-emerald-200 font-medium transition">
                            Edit
                          </button>
                          <button onClick={() => handleDelete(e._id)} className="px-4 py-2 rounded-xl bg-rose-100 text-rose-700 hover:bg-rose-200 font-medium transition">
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {record.length === 0 && (
                  <div className="py-16 text-center text-slate-500">No admin records found.</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
