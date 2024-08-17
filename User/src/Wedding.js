import React from 'react';
import Slider from 'react-slick';
import './wedding.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Wedding = () => {
  const packages = [
    {
      name: 'Basic Wedding Package',
      description: 'Perfect for intimate weddings, includes venue, basic decorations, and catering.',
      price: 'Rs.5 Lakhs',
      features: [
        'Max. 100 Guests',
        'Catering',
        'Basic Wedding Decorations',
        'Sound System',
        'Event coordination support',
      ],
      images: [
        'basicweddecor.jpg',
        'basicwedhaldi.jpg',
      ],
    },
    {
      name: 'Standard Wedding Package',
      description: 'Ideal for medium-sized weddings, includes venue, enhanced decorations, catering, and entertainment.',
      price: 'Rs.10 Lakhs',
      features: [
        'Max. 300 Guests',
        'Catering',
        'Enhanced Wedding Decorations',
        'Sound System and Lighting',
        'Event coordination support',
        'Photography and Videography',
        'Live Performances',
      ],
      images: [
        'standardclothes.jpg',
        'standardwedfood.jpg',
        'standardweddecor.jpg',
        'premiumwedhaldi.jpg',
      ],
    },
    {
      name: 'Premium Wedding Package',
      description: 'Best for grand weddings, includes premium venue, deluxe decorations, full catering, and complete event management.',
      price: 'Rs.20 Lakhs',
      features: [
        'Max. 500 Guests',
        'Full Catering',
        'Deluxe Wedding Decorations',
        'Sound System,Lighting',
        'Event planning and management',
        'Photography and Videography',
        'Luxury Transportation',
        'Customized Invitations',
        'Fireworks display',
        'Live Performances'
      ],
      images: [
        'premiumweddecor.jpg',
        'luxuryclothes.jpg',
        'luxurywed.jpg',
        'luxurywedhaldi.jpg',

      ],
    },
  ];

  const events = [
    {
      title: 'Ring Ceremonies',
      description: 'Experience the beauty of tradition with our packages, including cultural ceremonies and decorations.',
    },
    {
      title: 'Destination Weddings',
      description: 'Make your special day unforgettable with our destination wedding packages, including travel, venue, and accommodations.',
    },
    {
      title: 'Haldi',
      description: 'Celebrate Haldi, featuring deluxe venues, decorations, and full event management.',
    },
    {
      title: 'Sangeet',
      description: 'Bring your dream wedding theme to life with our customizable themed wedding packages, including decorations and entertainment.',
    },
    {
      title: 'Reception',
      description: 'Make your Reception a memorable event with our packages.',
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="wedding">
      <header>
        <h1>Wedding Events</h1>
        <p>Explore our exclusive packages tailored for your dream wedding events.</p>
      </header>

      <div className="wedding-events-section">
        <div className="wedding-event-cards">
          {events.map((event, index) => (
            <div key={index} className="wedding-event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="wedding-Package">
        <h1><strong>Our Wedding Packages</strong></h1><br></br>
        <div className="wedding-package-cards">
          {packages.map((pkg, index) => (
            <div className="wedding-card" key={index}>
              <h3>{pkg.name}</h3>
              <Slider {...sliderSettings}>
                {pkg.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`Package ${index + 1} - Image ${idx + 1}`} className="wedding-image" />
                  </div>
                ))}
              </Slider>
              <p>{pkg.description}</p><br></br>
              <h1><strong>Price: {pkg.price}</strong></h1><br></br>
              <ul>
                {pkg.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <br></br>
              <button>Learn More & Book</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Wedding;
