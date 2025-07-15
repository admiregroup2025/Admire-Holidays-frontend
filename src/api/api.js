// src/api/api.js
import axios from 'axios';

// Create an axios instance with base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// POST: contact form
export const submitContactForm = (data) => api.post('/contact', data);

export const submitJourneyEnquiry = (data) => api.post('/planYourJourney', data);

// POST: suggestion or complaint
export const submitSuggestionComplaint = (data) => api.post('/suggestionComplain', data);



export default api;
