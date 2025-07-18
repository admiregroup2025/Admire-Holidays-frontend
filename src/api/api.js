// src/api/api.js
import axios from 'axios';
const baseURL=import.meta.env.VITE_API_URL

// Create an axios instance with base URL
const api = axios.create({
  baseURL: `${baseURL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// POST: contact form
export const submitContactForm = (data) => api.post('/contact', data);

export const submitJourneyEnquiry = (data) => api.post('/planYourJourney', data);

// POST: suggestion or complaint
export const subscribeForm=(data)=>api.post('/subscribe',data);
export const submitSuggestionComplaint = (data) => api.post('/suggestionComplain', data);
// export const getItineraydata=()=> api.get('/destination')



export default api;
