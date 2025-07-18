import React, { useState } from 'react';
import Swal from 'sweetalert2';

const TravelEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await fetch('http://localhost:5000/api/v1/enquiry/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        Swal.fire({
          title: 'Enquiry Submitted!',
          html: `
            <div class="text-left">
              <p class="mb-2"><strong>Name:</strong> ${formData.name}</p>
              <p class="mb-2"><strong>Email:</strong> ${formData.email}</p>
              <p class="mb-2"><strong>Phone:</strong> ${formData.phone}</p>
              <p class="mb-2"><strong>Destination:</strong> ${formData.destination || 'Not specified'}</p>
            </div>
          `,
          icon: 'success',
          confirmButtonColor: '#d97706',
          confirmButtonText: 'Great!',
          footer: 'Our travel expert will contact you soon!'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: ''
        });
      } else {
        Swal.fire('Error', result.message || 'Something went wrong.', 'error');
      }
    } catch (error) {
      Swal.fire('Server Error', 'Please try again later.', 'error');
    }
  };

  const handleClose = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your form data will not be saved.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d97706',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Yes, close it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: ''
        });
        Swal.fire(
          'Closed!',
          'Your form has been cleared.',
          'info'
        );
      }
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg relative border border-blue-200">
        <button
          onClick={handleClose}
          className="absolute top-3 right-4 text-gray-700 hover:text-red-500 text-2xl close-btn"
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-yellow-700">Plan Your Journey</h2>
        <p className="text-sm text-center mb-6 text-gray-600">
          Get in touch with us to explore the best travel experiences!
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="Your Name"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            placeholder="Your Email"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            placeholder="Phone Number"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            placeholder="Tell us your dream destination..."
            rows="4"
            name="destination"
            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={formData.destination}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-600 to-red-500 text-white rounded-md py-2 font-semibold hover:from-yellow-700 hover:to-red-600 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </div>
  );
};

export default TravelEnquiryForm;
