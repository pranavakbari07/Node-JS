import React from 'react'
import Header from './Header'

export default function Dashboard() {
  const stats = [
    { label: 'Users', value: '1,245', change: '+12%' },
    { label: 'Revenue', value: '$8,430', change: '+8%' },
    { label: 'Orders', value: '320', change: '+5%' },
    { label: 'Growth', value: '24%', change: '+3%' },
  ]
  const users = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active', statusColor: 'text-emerald-400', role: 'Admin', lastActive: '2h ago' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Pending', statusColor: 'text-amber-400', role: 'User', lastActive: '5h ago' },
    { name: 'Mike Brown', email: 'mike@example.com', status: 'Inactive', statusColor: 'text-rose-400', role: 'User', lastActive: '1d ago' },
    { name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Active', statusColor: 'text-emerald-400', role: 'Moderator', lastActive: '30m ago' },
    { name: 'David Lee', email: 'david@example.com', status: 'Active', statusColor: 'text-emerald-400', role: 'User', lastActive: '1h ago' },
  ]

  const activities = [
    { action: 'New user registered', user: 'Alex Johnson', time: '5 minutes ago', type: 'user' },
    { action: 'Order completed', user: 'Order #1234', time: '15 minutes ago', type: 'order' },
    { action: 'Profile updated', user: 'Sarah Wilson', time: '1 hour ago', type: 'update' },
    { action: 'Payment received', user: '$450', time: '2 hours ago', type: 'payment' },
  ]

  const quickStats = [
    { label: 'Total Sessions', value: '12.4K', icon: '📊' },
    { label: 'Avg. Response', value: '1.2s', icon: '⚡' },
    { label: 'Success Rate', value: '98.5%', icon: '✅' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      <Header />

      <div className="flex-1 flex gap-0 min-h-0">
        {/* Main content */}
        <main className="flex-1 overflow-auto p-6 md:p-8">
          <div className="max-w-4xl space-y-6">
            {/* Header */}
            <div style={{ animation: 'slide-down 0.5s ease-out forwards' }}>
              <p className="text-slate-500 text-sm mb-1">Overview</p>
              <h1 className="text-xl font-semibold text-slate-200">
                Welcome back
              </h1>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {quickStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="rounded-lg border border-slate-800 bg-slate-900/50 p-4 hover:border-slate-700 transition-all duration-300 transform hover:scale-[1.02]"
                  style={{ animation: `slide-up 0.5s ease-out ${0.1 + i * 0.1}s forwards`, opacity: 0 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl" style={{ animation: `scale-in-center 0.4s ease-out ${0.2 + i * 0.1}s forwards`, opacity: 0 }}>{stat.icon}</span>
                    <span className="text-xs text-slate-500">{stat.label}</span>
                  </div>
                  <p className="text-xl font-semibold text-slate-100">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Recent Users Table */}
            <div
              className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
              style={{ animation: 'scale-in 0.5s ease-out 0.4s forwards', opacity: 0 }}
            >
              <div className="px-4 py-3 border-b border-slate-800 bg-slate-800/50 flex items-center justify-between">
                <h2 className="text-sm font-medium text-slate-300">Recent Users</h2>
                <span className="text-xs text-slate-500">{users.length} total</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-slate-500 border-b border-slate-800">
                      <th className="text-left py-3 px-4 font-medium">Name</th>
                      <th className="text-left py-3 px-4 font-medium">Email</th>
                      <th className="text-left py-3 px-4 font-medium">Role</th>
                      <th className="text-left py-3 px-4 font-medium">Last Active</th>
                      <th className="text-right py-3 px-4 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u, i) => (
                      <tr
                        key={u.email}
                        className="border-b border-slate-800/80 last:border-0 hover:bg-slate-800/30 transition-all duration-300"
                        style={{ animation: `slide-left 0.4s ease-out ${0.5 + i * 0.05}s forwards`, opacity: 0 }}
                      >
                        <td className="py-3 px-4 text-slate-200">{u.name}</td>
                        <td className="py-3 px-4 text-slate-500">{u.email}</td>
                        <td className="py-3 px-4 text-slate-400 text-xs">{u.role}</td>
                        <td className="py-3 px-4 text-slate-500 text-xs">{u.lastActive}</td>
                        <td className={`py-3 px-4 text-right font-medium ${u.statusColor}`}>{u.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Activity Feed */}
            <div
              className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
              style={{ animation: 'scale-in 0.5s ease-out 0.8s forwards', opacity: 0 }}
            >
              <div className="px-4 py-3 border-b border-slate-800 bg-slate-800/50">
                <h2 className="text-sm font-medium text-slate-300">Recent Activity</h2>
              </div>
              <div className="divide-y divide-slate-800">
                {activities.map((activity, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 hover:bg-slate-800/20 transition-all duration-300"
                    style={{ animation: `slide-right 0.4s ease-out ${0.9 + i * 0.08}s forwards`, opacity: 0 }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-slate-200">{activity.action}</p>
                        <p className="text-xs text-slate-500 mt-0.5">{activity.user}</p>
                      </div>
                      <span className="text-xs text-slate-500 shrink-0">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        {/* Right sidebar - stats */}
        <aside className="w-56 shrink-0 border-l border-slate-800 bg-slate-900/30 p-5 flex flex-col gap-4" style={{ animation: 'slide-right 0.5s ease-out 0.2s forwards', opacity: 0 }}>
          <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">Stats</p>
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="py-3 px-0 border-b border-slate-800 last:border-0"
              style={{ animation: `slide-up 0.4s ease-out ${0.3 + i * 0.1}s forwards`, opacity: 0 }}
            >
              <p className="text-slate-500 text-xs">{s.label}</p>
              <div className="flex items-baseline gap-2 mt-0.5">
                <p className="text-lg font-semibold text-slate-100">{s.value}</p>
                <span className="text-xs text-emerald-400">{s.change}</span>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  )
}
