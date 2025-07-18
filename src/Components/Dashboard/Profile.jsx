import { useState } from 'react';
import SidebarNav from './SidebarNav';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: 'January 2023',
    avatar: '👤'
  });

  return (
    <div className="flex min-h-screen bg-gray-50">
      <SidebarNav />
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">My Profile</h1>
          
          <div className="flex items-center mb-8">
            <div className="text-5xl mr-6">{user.avatar}</div>
            <div>
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-500">Member since {user.joinedDate}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Personal Information</h3>
              {/* Form fields would go here */}
            </div>
            
            <div className="border rounded-lg p-4">
              <h3 className="font-medium text-lg mb-3">Travel Preferences</h3>
              {/* Preferences form would go here */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;