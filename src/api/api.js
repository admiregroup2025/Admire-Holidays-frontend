import axios from 'axios';

// Safely get base URL with fallback
const getBaseURL = () => {
  // 1. Check Vite environment variable
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }
  
  // 2. Fallback for production
  return 'https://api.admireholidays.com';
};

// Create API instance
const api = axios.create({
  baseURL: `${getBaseURL()}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Debug output
console.log('API Configuration:', {
  baseURL: api.defaults.baseURL,
  env: import.meta.env
});
// POST: contact form
export const submitContactForm = (data) => api.post('/contact', data);

export const submitJourneyEnquiry = (data) => api.post('/planYourJourney', data);

// POST: suggestion or complaint
export const subscribeForm=(data)=>api.post('/subscribe',data);
export const submitSuggestionComplaint = (data) => api.post('/suggestionComplain', data);
export const travelGallery=()=> api.get('/customer-gallery');

export const getHeroSection = (title) => api.get(`/hero-section/${title}`);

export const getTestimonialVideo=()=> api.get('/testimonials');

export const getBlogDetails=()=> api.get('/blog');

export const getBlogDetailsPage=()=> api.get('/blog/id');

export const getDomesticDestinations = (type) => api.get(`/destination/image-gallery/${type}`);

export const getItenary = (type) => api.get(`/itineraries/${type}`);















export default api;
