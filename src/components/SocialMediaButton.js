import React from 'react';
import PropTypes from 'prop-types';

function SocialMediaButton({ link, text }) {
  return (
    <div className="social-media">
      <a href={link} className="btn btn-long btn-social btn-primary">
        <img src={`icons8-${text.toLowerCase()}-48.png`} alt={text} className="icon" />
        <span className="text">{text}</span>
      </a>
    </div>
  );
}

SocialMediaButton.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SocialMediaButton;
