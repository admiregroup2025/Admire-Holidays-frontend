import { NavLink } from 'react-router-dom';

const SidebarNav = ({ activeTab, setActiveTab, collapsed, onToggleCollapse }) => {
  const navItems = [
    { id: 'profile', icon: '👤', label: 'Profile' },
    { id: 'bookings', icon: '✈️', label: 'My Bookings', badge: 3 },
    { id: 'reviews', icon: '⭐', label: 'My Reviews' },
    { id: 'saved', icon: '🔖', label: 'Saved Places' },
    { id: 'payments', icon: '💳', label: 'Payment Methods' },
    { id: 'settings', icon: '⚙️', label: 'Settings' },
  ];

  return (
    <div className={`${collapsed ? 'w-20' : 'w-64'} bg-white shadow-lg flex flex-col transition-all duration-300`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-100 flex items-center justify-between">
        {!collapsed && <h2 className="text-xl font-semibold">Dashboard</h2>}
        <button onClick={onToggleCollapse} className="p-1 rounded-lg hover:bg-gray-100">
          {collapsed ? '»' : '«'}
        </button>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center ${collapsed ? 'justify-center px-0' : 'px-6'} py-3 text-left transition-colors ${
                  activeTab === item.id
                    ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-500'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="ml-3 flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="bg-red-500 text-white text-xs font-medium rounded-full px-2 py-1">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Actions */}
      <div className="p-4 border-t border-gray-100">
        <button className={`w-full flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors mb-2`}>
          <span className="text-xl">❓</span>
          {!collapsed && <span className="ml-3">Help</span>}
        </button>
        <button className={`w-full flex items-center ${collapsed ? 'justify-center' : 'px-4'} py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors`}>
          <span className="text-xl">🚪</span>
          {!collapsed && <span className="ml-3">Logout</span>}
        </button>
      </div>
    </div>
  );
};

export default SidebarNav;