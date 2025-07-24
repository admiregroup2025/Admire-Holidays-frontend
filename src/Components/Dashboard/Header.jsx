const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none">
            <span className="sr-only">Notifications</span>
            <span className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
              👤
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;