import React from 'react';
import Slider from 'react-slick';
import './mile.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Milestone = () => {
  const packages = [
    {
      name: 'Basic Milestone Package',
      description: 'Ideal for intimate milestone celebrations, includes venue, basic decorations, and catering.',
      price: 'Rs.3 Lakhs',
      images: [
        'milestonebasicfood2.jpg',
        'milestonebasicfood.jpg',
        'milestonepremium.jpg'
      ],
      features: [
        'Max. 50 Guests',
        'Catering included',
        'Basic Decorations',
        'cake included'
        
      ],
    },
    {
      name: 'Standard Milestone Package',
      description: 'Perfect for medium-sized milestone events, includes venue, enhanced decorations, catering, and entertainment.',
      price: 'Rs.7 Lakhs',
      images: [
        'standardmilestone.jpg',
        'milestonestandardfood.jpg',
        'milestonestandard.jpg'
      ],
      features: [
        'Max. 150 Guests',
        'Catering included',
        'Enhanced Decorations',
        'Sound System and Lighting',
        'Event coordination support',
        'Photography and Videography',
        'Live Entertainment'
      ],
    },
    {
      name: 'Premium Milestone Package',
      description: 'Best for grand milestone events, includes premium venue, deluxe decorations, full catering, and complete event management.',
      price: 'Rs.15 Lakhs',
      images: [
        'premiummilestone.jpg',
        'premiummilestonefood.jpg',
        'premiummilestonedecor.jpg',
        
      ],
      features: [
        'Max. 300 Guests',
        'Full Catering included',
        'Deluxe Decorations',
        'Sound System, Lighting','Stage Setup',
        'Event planning and management',
        'Photography and Videography',
        'Luxury Transportation included',
        'Customized Invitations',
        'Special Commemorative Gifts'
      ],
    },
  ];

  const events = [
    {
      title: 'Anniversary Celebrations',
      description: 'Celebrate your company’s or personal milestones with our packages that include venue, catering, and decorations.',
    },
    {
      title: 'Retirement Parties',
      description: 'Honor the careers and contributions with a retirement party package that includes everything from catering to entertainment.',
    },
    {
      title: 'Achievement Celebrations',
      description: 'Mark significant achievements with our packages designed to provide a memorable event with full planning support.',
    },
    {
      title: 'Birthday Parties',
      description: 'Celebrate your birthday with our packages, including decorations, catering, and more.',
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
    <div className="m">
      <header>
        <h1>Milestone Events</h1>
        <p>Explore our exclusive packages tailored for your milestone celebrations.</p>
      </header>

      <div className="m-events-section">
        <div className="m-event-cards">
          {events.map((event, index) => (
            <div key={index} className="m-event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="m-Package"><br></br>
        <h1><strong><br></br>Our Milestone Packages</strong></h1><br></br>
        <div className="m-package-cards">
          {packages.map((pkg, index) => (
            <div className="m-card" key={index}>
              <h3>{pkg.name}</h3>
              <Slider {...sliderSettings}>
                {pkg.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`Package ${index + 1} - Image ${idx + 1}`} className="m-image" />
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

export default Milestone;
