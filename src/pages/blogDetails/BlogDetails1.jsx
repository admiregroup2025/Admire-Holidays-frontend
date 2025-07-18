// BlogDetails1.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../Components/NavBar';
import Footer from '../../Components/Footer';

const BlogDetails1 = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-50">
      <NavBar/>
      
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-yellow-600 hover:text-yellow-700 mb-8 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to All Articles
        </button>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="relative w-full h-96">
            <img 
              alt="Family enjoying customized vacation package at beach resort" 
              className="w-full h-full object-cover" 
              src="https://admiredashboard.theholistay.in/blog_images/1743490383_67eb8d4f8aaa5GvpeDsEy.jpg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32 flex items-end p-6">
              <span className="text-white text-sm bg-yellow-600 px-3 py-1 rounded-full">Travel Tips</span>
            </div>
          </div>

          <div className="p-6 md:p-8 lg:p-12">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>Published: June 15, 2023</span>
              <span className="mx-2">•</span>
              <span>8 min read</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The Art of Crafting Your Perfect Vacation Package Without Overspending
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6 text-lg leading-relaxed">
                Creating your dream vacation shouldn't mean emptying your savings. With strategic planning and insider knowledge, you can design a personalized travel experience that fits both your desires and your budget. This guide will walk you through every step of building your ideal getaway while avoiding common financial pitfalls.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8 rounded-r">
                <p className="font-semibold text-blue-700">Key Takeaway:</p>
                <p>The average traveler overspends by 22% on unnecessary package inclusions. By customizing strategically, you can redirect those funds toward experiences that truly matter to you.</p>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Step 1: Define Your Travel Personality</h2>
              <p className="mb-4">Understanding your travel style is crucial for budget allocation:</p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="border p-4 rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-2">The Cultural Explorer</h3>
                  <p className="text-sm">Prioritize city locations, museum passes, and local guides</p>
                </div>
                <div className="border p-4 rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-2">The Relaxation Seeker</h3>
                  <p className="text-sm">Invest in premium accommodations and spa services</p>
                </div>
                <div className="border p-4 rounded-lg bg-gray-50">
                  <h3 className="font-semibold mb-2">The Adventure Enthusiast</h3>
                  <p className="text-sm">Allocate funds for equipment rentals and expert guides</p>
                </div>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Step 2: Master the Package Breakdown</h2>
              <p className="mb-4">Deconstruct pre-made packages to identify savings:</p>
              <ol className="list-decimal pl-6 mb-6 space-y-3">
                <li><strong>Flight Analysis:</strong> Compare package airfare with budget airlines</li>
                <li><strong>Hotel Assessment:</strong> Check if the included hotels match your preferred locations</li>
                <li><strong>Transfer Evaluation:</strong> Determine if shuttle services are necessary or if rideshares would be cheaper</li>
                <li><strong>Activity Audit:</strong> Remove prepaid tours you wouldn't choose independently</li>
              </ol>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-8 border border-yellow-200">
                <h3 className="font-bold text-yellow-800 mb-2">Case Study: Bali Vacation</h3>
                <p className="mb-2">Pre-packaged deal: $2,800 per person</p>
                <p className="mb-2">Customized version: $1,950 per person (30% savings)</p>
                <p className="text-sm">Achieved by booking flights separately, choosing a locally-owned villa, and selecting only desired activities.</p>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Step 3: Timing is Everything</h2>
              <p className="mb-4">Strategic scheduling can dramatically affect costs:</p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Shoulder Seasons:</strong> Travel just before/after peak times for better rates and smaller crowds</li>
                <li><strong>Midweek Magic:</strong> Flying Tuesday-Thursday often saves 15-25% on airfare</li>
                <li><strong>Last-Minute Luxury:</strong> Some high-end resorts discount unsold rooms 7-14 days out</li>
                <li><strong>Advance Advantage:</strong> Book popular activities 3-6 months early to secure availability</li>
              </ul>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Step 4: Accommodation Alternatives</h2>
              <p className="mb-4">Think beyond traditional hotels:</p>
              <table className="min-w-full divide-y divide-gray-200 mb-6">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Option</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Best For</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings Potential</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3">Vacation Rentals</td>
                    <td className="px-4 py-3">Families, groups, long stays</td>
                    <td className="px-4 py-3">25-40%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Boutique B&Bs</td>
                    <td className="px-4 py-3">Couples, cultural experiences</td>
                    <td className="px-4 py-3">15-30%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Hostels (Private Rooms)</td>
                    <td className="px-4 py-3">Solo travelers, budget-conscious</td>
                    <td className="px-4 py-3">50-70%</td>
                  </tr>
                </tbody>
              </table>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Step 5: Dining Without Overspending</h2>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Breakfast Strategies</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Book accommodations with kitchenettes</li>
                    <li>Visit local markets for fresh produce</li>
                    <li>Look for hotels offering free breakfast</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Dinner Savings</h3>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Eat your main meal at lunch when prices are lower</li>
                    <li>Research restaurant week promotions</li>
                    <li>Take advantage of happy hour specials</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-8 rounded-r">
                <p className="font-semibold text-green-700">Pro Tip:</p>
                <p>Many cities offer discount cards that include free public transportation plus museum/attraction discounts. These often pay for themselves in 2-3 uses.</p>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800">Finalizing Your Custom Package</h2>
              <p className="mb-4">Before booking, ask yourself:</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Have I accounted for all time zones and jet lag recovery?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    <span>Are there any local holidays or events that might affect availability?</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span>Have I compared total costs including all taxes and fees?</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-purple-800">Ready to Design Your Dream Trip?</h3>
                <p className="mb-4">Our travel specialists can help you create a completely customized package that matches your unique travel style and budget.</p>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-6 rounded-lg transition">
                  Get Personalized Recommendations
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer/>
    </div>
  );
};

export default BlogDetails1;