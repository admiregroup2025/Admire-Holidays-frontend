import React from 'react';
import PropTypes from 'prop-types';

const HeroDomestic = ({ videoSrc, title }) => {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
      <video
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
          {title}
        </h1>
      </div>
    </section>
  );
};

HeroDomestic.propTypes = {
  videoSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default HeroDomestic;