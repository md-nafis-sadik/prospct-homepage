'use client'


import React from 'react';
import './styles.css';


const Testimonial = ({ quote, user, company, image, statValue, statLabel }) => (
  <article className="h-w-o-c-say-testimonial testimonial-m pb-4">
    <div className="h-w-o-c-say-testimonial-card">
      <div className="h-w-o-c-say-testimonial-content">
        <img
          alt=""
          loading="lazy"
          src="/images/stars.svg"
          className="h-w-o-c-say-testimonial-logo-Image"
        />
        <div className="h-w-o-c-say-testimonial-quote">{quote}</div>
        <div className="h-w-o-c-say-testimonial-user">
          <img
            alt=""
            loading="lazy"
            src={image}
            className="h-w-o-c-say-testimonial-user-Image"
          />
          <div className="h-w-o-c-say-testimonial-user-info">
            <div className="h-w-o-c-say-testimonial-username">{user}</div>
            <div className="h-w-o-c-say-testimonial-usercompany">{company}</div>
          </div>
        </div>
        <div className="h-w-o-c-say-testimonial-stats">
          <div className="h-w-o-c-say-testimonial-stat-value">{statValue}</div>
          <div className="h-w-o-c-say-testimonial-stat-label">{statLabel}</div>
        </div>
      </div>
    </div>
  </article>
);

export default Testimonial;
