import Header from './Header'
import Aside from './Aside'
import Dashboard from './Dashboard'

function Layout() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Aside />
        <Dashboard />
      </div>
    </div>
  )
}

export default Layout
