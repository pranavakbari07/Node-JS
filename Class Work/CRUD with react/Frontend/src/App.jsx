import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';

export default function App() {

  const [formdata, setFormdata] = useState({})
  const [record, setRecord] = useState([])
  const [editIndex, seteditIndex] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (editIndex == null) {
      await axios.post("http://localhost:2438/addData", formdata).then((res) => {
        alert(res.data.msg)
      });
    } else {
      await axios.put(`http://localhost:2438/updateData?id=${editIndex}`, formdata).then((res) => {
        alert(res.data.msg)
      });
    }

    fetchData()
    seteditIndex(null)
    setFormdata({
      name: "",
      age: "",
      city: ""
    })
  }

  const handleEdit = (id) => {
    let editData = record.find((item) => item._id == id)
    setFormdata({
      name: editData.name,
      age: editData.age,
      city: editData.city
    })
    seteditIndex(id)
  }

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:2438/deleteData?id=${id}`).then((res) => {
      let newData = record.filter((item) => item._id != id)
      setRecord(newData)
      alert(res.data.msg)
    })
  }

  const fetchData = async () => {
    await axios.get("http://localhost:2438/getData").then((res) => {
      setRecord(res.data.data)
    })
  }


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">CRUD with MERN</h1>
          <p className="text-gray-600">Create, Read, Update, and Delete operations with MongoDB, Express, React & Node.js</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                <i className="fas fa-user-plus text-white"></i>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {editIndex ? "Edit User" : "Add New User"}
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input 
                  type="text" 
                  name='name' 
                  value={formdata.name || ''}
                  placeholder='Enter your name' 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <input 
                  type="number" 
                  name='age' 
                  value={formdata.age || ''}
                  placeholder='Enter your age' 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                  min="1"
                  max="120"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input 
                  type="text" 
                  name='city' 
                  value={formdata.city || ''}
                  placeholder='Enter your city' 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
                  required
                />
              </div>

              <button 
                type='submit'
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
              >
                {editIndex ? (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-save mr-2"></i>
                    Update Data
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <i className="fas fa-plus-circle mr-2"></i>
                    Add Data
                  </span>
                )}
              </button>

              {editIndex && (
                <button
                  type="button"
                  onClick={() => {
                    seteditIndex(null);
                    setFormdata({ name: "", age: "", city: "" });
                  }}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                >
                  Cancel Edit
                </button>
              )}
            </form>
          </div>

          {/* Records Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                  <i className="fas fa-users text-white"></i>
                </div>
                <h2 className="text-2xl font-bold text-gray-800">User Records</h2>
              </div>
              <div className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {record.length} {record.length === 1 ? 'Record' : 'Records'}
              </div>
            </div>

            {record.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-user-slash text-gray-400 text-3xl"></i>
                </div>
                <h3 className="text-lg font-medium text-gray-600 mb-2">No Records Found</h3>
                <p className="text-gray-500">Add your first user using the form on the left</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {record.map((e, i) => (
                  <div 
                    key={i} 
                    className="bg-gray-50 border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:bg-blue-50 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="mb-3 md:mb-0 md:w-2/3">
                        <div className="flex items-center mb-2">
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded mr-3 font-mono">
                            ID: {e._id?.substring(e._id.length - 6) || 'N/A'}
                          </span>
                          <h3 className="text-lg font-semibold text-gray-800 truncate">
                            {e.name}
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-3">
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-2">
                              <i className="fas fa-birthday-cake text-blue-600 text-sm"></i>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">Age</p>
                              <p className="font-medium text-gray-800">{e.age} years</p>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mr-2">
                              <i className="fas fa-city text-green-600 text-sm"></i>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">City</p>
                              <p className="font-medium text-gray-800">{e.city}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-3 mt-4 md:mt-0">
                        <button 
                          onClick={() => handleEdit(e._id)}
                          className="bg-blue-100 hover:bg-blue-200 text-blue-700 px-4 py-2 rounded-lg font-medium flex items-center transition-colors duration-300"
                        >
                          <i className="fas fa-edit mr-2"></i>
                          Edit
                        </button>
                        <button 
                          onClick={() => handleDelete(e._id)}
                          className="bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-medium flex items-center transition-colors duration-300"
                        >
                          <i className="fas fa-trash-alt mr-2"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-500 text-sm">
          <p>MERN Stack CRUD Application • Built with React & Tailwind CSS</p>
        </div>
      </div>
    </div>
  )
}

