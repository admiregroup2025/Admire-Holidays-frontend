import React from 'react'
import SidebarNav from './SidebarNav'
import Header from './Header'

const Bookings = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarNav />
      
      <div className="flex-1">
        <Header 
          title="My Bookings" 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
        />
        
        <main className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">My Bookings</h2>
          {/* Booking content will go here */}
        </main>
      </div>
    </div>
  )
}

export default Bookings