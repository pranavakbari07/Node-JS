import React from 'react'

export default function Dashboard() {
  return (
    <div className="flex-1 p-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
          <p className="text-slate-500 mt-0.5">Welcome back! Here&apos;s what&apos;s happening today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-200/60 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+12.5%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Total Users</p>
            <p className="text-2xl font-bold text-slate-800 mt-0.5">24,567</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-violet-200/60 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-violet-100 text-violet-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+8.2%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Revenue</p>
            <p className="text-2xl font-bold text-slate-800 mt-0.5">$45,231</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-200/60 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-2 py-1 rounded-lg">-3.1%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Orders</p>
            <p className="text-2xl font-bold text-slate-800 mt-0.5">1,429</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-sky-200/60 transition">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-sky-100 text-sky-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">+15.3%</span>
            </div>
            <p className="text-slate-500 text-sm font-medium">Growth</p>
            <p className="text-2xl font-bold text-slate-800 mt-0.5">32.4%</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-slate-800">Sales Overview</h2>
              <select className="text-sm rounded-xl border border-slate-200 px-3 py-2 text-slate-600 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
              </select>
            </div>
            <div className="h-56 flex items-end justify-between gap-2">
              {[45, 65, 80, 55, 90, 70, 60].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t-lg mb-2" style={{ height: `${h}%` }} />
                  <span className="text-slate-400 text-xs">{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][i]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-medium flex items-center justify-center gap-2 transition shadow-sm">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                New Project
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium flex items-center justify-center gap-2 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
              <button className="w-full py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium flex items-center justify-center gap-2 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Reports
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">Recent Activity</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-emerald-100">
                  <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800">New order received</p>
                  <p className="text-slate-500 text-sm">Order #1234 has been placed</p>
                  <p className="text-slate-400 text-xs mt-0.5">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-sky-100">
                  <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800">New user registered</p>
                  <p className="text-slate-500 text-sm">John Doe joined the platform</p>
                  <p className="text-slate-400 text-xs mt-0.5">15 minutes ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4 pb-4 border-b border-slate-100">
                <div className="p-2 rounded-xl bg-violet-100">
                  <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800">Payment processed</p>
                  <p className="text-slate-500 text-sm">$1,234.56 payment received</p>
                  <p className="text-slate-400 text-xs mt-0.5">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-amber-100">
                  <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-800">System alert</p>
                  <p className="text-slate-500 text-sm">High server load detected</p>
                  <p className="text-slate-400 text-xs mt-0.5">3 hours ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-800 mb-5">Top Products</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500" />
                  <div>
                    <p className="font-medium text-slate-800">Product A</p>
                    <p className="text-slate-500 text-sm">Electronics</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">$2,450</p>
                  <p className="text-xs font-medium text-emerald-600">+12%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500" />
                  <div>
                    <p className="font-medium text-slate-800">Product B</p>
                    <p className="text-slate-500 text-sm">Fashion</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">$1,890</p>
                  <p className="text-xs font-medium text-emerald-600">+8%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500" />
                  <div>
                    <p className="font-medium text-slate-800">Product C</p>
                    <p className="text-slate-500 text-sm">Home & Living</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">$1,234</p>
                  <p className="text-xs font-medium text-rose-600">-3%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50/80 hover:bg-slate-100/80 transition">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500" />
                  <div>
                    <p className="font-medium text-slate-800">Product D</p>
                    <p className="text-slate-500 text-sm">Sports</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-slate-800">$987</p>
                  <p className="text-xs font-medium text-emerald-600">+5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
