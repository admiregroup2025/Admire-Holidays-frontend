import { Routes, Route } from 'react-router-dom';
import Sidebar from '../Components/Dashboard/Sidebar';
import Profile from '../Components/Dashboard/Profile';
import Bookings from '../Components/Dashboard/Bookings';
import Header from '../Components/Dashboard/Header';
import NavBar from '../Components/NavBar';

const MyBooking = () => {
  return (
    <div>
      <NavBar/>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header/>
          
          <main className="flex-1 overflow-y-auto p-6">
            <Routes>
              <Route index element={<Profile />} /> {/* This handles /my-profile */}
              <Route path="profile" element={<Profile />} /> 
              <Route path="bookings" element={<Bookings />} /> 
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
};

export default MyBooking;