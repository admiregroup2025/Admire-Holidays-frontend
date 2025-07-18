import React, { useState } from 'react';

const VideoTestimonials = () => {
  // Local dummy data
  const [testimonials] = useState([
    {
      id: 1,
      videoUrl: "https://admiredashboard.theholistay.in/video_testimonials/1744832665_68000899dc1eeysVLbm4x.mp4",
      title: "MR. & MRS. SAURABH",
      location: "Goa, India"
    },
    {
      id: 2,
      videoUrl: "https://admiredashboard.theholistay.in/video_testimonials/1744831357_6800037d6ba5ezCa1VChV.mp4",
      title: "MR. & MRS. CHATURVEDI",
      location: "Maldives"
    },
    {
      id: 3,
      videoUrl: "https://admiredashboard.theholistay.in/video_testimonials/1744828415_67fff7ffb4411BQ8ziXEn.mp4",
      title: "MR. & MRS. JAGTAP",
      location: "Kerala"
    },
    {
      id: 4,
      videoUrl: "https://admiredashboard.theholistay.in/video_testimonials/1744777935_67ff32cfd1730AjhlCBQ9.mp4",
      title: "MR. & MRS. RAKESH",
      location: "Shimla"
    },
    
  ]);

  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <section className="bg-[#f9f9f9] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#CF1E27] via-[#f1a7a6] to-[#CF1E27] drop-shadow-lg">
          Hear From Our Happy Travelers
        </h2>
        <p className="text-xl text-gray-600 mt-3">
          Real journeys, real stories. Watch what our travelers have to say!
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer group"
            onMouseEnter={() => setHoveredVideo(testimonial.id)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <div className="aspect-video bg-black relative">
              <video
                className="w-full h-full object-cover"
                loop
                muted
                playsInline
                autoPlay={hoveredVideo === testimonial.id}
              >
                <source src={testimonial.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
            <div className="p-5 absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-transparent to-transparent text-center">
              <p className="text-white font-semibold text-lg">
                {testimonial.title}
              </p>
              {testimonial.location && (
                <p className="text-gray-200 text-sm mt-1">
                  {testimonial.location}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-r from-[#CF1E27] to-[#e74c3c] text-white font-bold py-3 px-8 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
          View All Testimonials
        </button>
      </div>
    </section>
  );
};

export default VideoTestimonials;