import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import {
  HomeIcon,
  TicketIcon,
  StarIcon,
  CreditCardIcon,
  QuestionMarkCircleIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    {
      icon: HomeIcon,
      title: "Profile",
      path: "/my-profile",
      matchExact: true, // This route should match exactly
    },
    {
      icon: TicketIcon,
      title: "My Bookings",
      path: "/my-profile/bookings",
      count: 3,
    },
    { 
      icon: StarIcon, 
      title: "My Reviews", 
      path: "/my-profile/reviews" 
    },
    { 
      icon: CreditCardIcon,
      title: "Payments", 
      path: "/my-profile/payments" 
    },
    { 
      icon: QuestionMarkCircleIcon, 
      title: "Help", 
      path: "/my-profile/help" 
    },
  ];

  const logoutItem = {
    icon: ArrowLeftOnRectangleIcon,
    title: "Logout",
    
    onClick: () => {
      // Handle logout logic here
      console.log("Logging out...");
    },
  };

  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64 border-r border-gray-200 bg-white">
        <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <div className="flex items-center flex-shrink-0 px-4">
            <h1 className="text-lg font-bold text-indigo-600">
              Admire Explorer
            </h1>
          </div>
          <nav className="mt-5 flex-1 px-2 space-y-1">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={index}
                Icon={item.icon}
                title={item.title}
                path={item.path}
                count={item.count}
                active={location.pathname.startsWith(item.path)} // Updated active check
              />
            ))}
          </nav>
          <div className="px-2 py-4 border-t border-gray-200">
            <SidebarItem
              Icon={logoutItem.icon}
              title={logoutItem.title}
              onClick={logoutItem.onClick}
              className="text-red-600 hover:bg-red-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
