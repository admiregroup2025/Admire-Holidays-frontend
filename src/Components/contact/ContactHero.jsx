import React from 'react';

const ContactHero = () => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="src/assets/videos/Hero-contact.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        
      </div>
    </section>
  );
};

export default ContactHero;