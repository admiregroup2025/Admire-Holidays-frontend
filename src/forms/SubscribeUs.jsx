import React, { useState } from 'react';
import { User, Phone, Mail } from 'lucide-react';
import Swal from 'sweetalert2';

const SubscribeUs = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', email: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validatePhone = (phone) => /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,}$/.test(phone);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const showSuccessAlert = () => {
    Swal.fire({
      title: 'Success!',
      text: 'Thank you for subscribing!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'OK',
    });
  };

  const showErrorAlert = (message) => {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonColor: '#d33',
      confirmButtonText: 'OK',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    let isValid = true;
    const newErrors = { name: '', phone: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) {
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        showSuccessAlert();
        setFormData({ name: '', phone: '', email: '' });
      } else {
        showErrorAlert(data.message || 'Something went wrong.');
      }
    } catch (error) {
      showErrorAlert('Unable to connect to server. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-16 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-yellow-600 mb-4">Stay in the Loop</h2>
        <p className="text-center text-gray-600 mb-6">Subscribe to receive updates, offers, and more!</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <div className={`flex items-center border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-2`}>
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full outline-none bg-transparent"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.name && <p className="text-red-500 text-sm ml-3">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className={`flex items-center border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-2`}>
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full outline-none bg-transparent"
                value={formData.phone}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm ml-3">{errors.phone}</p>}
          </div>

          {/* Email */}
          <div>
            <div className={`flex items-center border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-full px-4 py-2`}>
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full outline-none bg-transparent"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm ml-3">{errors.email}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-2 rounded-full text-white font-semibold ${isSubmitting ? 'bg-gray-400' : 'bg-yellow-500 hover:bg-yellow-600'}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Subscribe'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeUs;
