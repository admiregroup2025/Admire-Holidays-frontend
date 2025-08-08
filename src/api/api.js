import axios from 'axios';
const baseURL=import.meta.env.VITE_API_URL

const api = axios.create({
 
 console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);


  baseURL: `${baseURL}/api/v1`,

  headers: {
    'Content-Type': 'application/json',
  },
});
console.log('ertyu+' +api.defaults.baseURL)

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
