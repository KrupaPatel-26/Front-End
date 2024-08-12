import React from 'react';
import './mile.css';

const Milestone = () => {
  const packages = [
    {
      name: 'Basic Milestone Package',
      description: 'Ideal for intimate milestone celebrations, includes venue, basic decorations, and catering.',
      price: 'Rs.3 Lakhs',
      content: '50 Guests included',
      content1: 'Catering included',
      content2: 'Basic Decorations',
      content3: 'Sound System included',
      content4: 'Event coordination support',
    },
    {
      name: 'Standard Milestone Package',
      description: 'Perfect for medium-sized milestone events, includes venue, enhanced decorations, catering, and entertainment.',
      price: 'Rs.7 Lakhs',
      content: '150 Guests included',
      content1: 'Catering included',
      content2: 'Enhanced Decorations',
      content3: 'Sound System and Lighting included',
      content4: 'Event coordination support',
      content5: 'Photography and Videography included',
      content6: 'Live Entertainment included',
    },
    {
      name: 'Premium Milestone Package',
      description: 'Best for grand milestone events, includes premium venue, deluxe decorations, full catering, and complete event management.',
      price: 'Rs.15 Lakhs',
      content: '300 Guests included',
      content1: 'Full Catering included',
      content2: 'Deluxe Decorations',
      content3: 'Sound System, Lighting, and Stage Setup',
      content4: 'Event planning and management',
      content5: 'Photography and Videography included',
      content6: 'Luxury Transportation included',
      content7: 'Customized Invitations',
      content8: 'Special Commemorative Gifts',
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
      title: 'Company Milestones',
      description: 'Celebrate your company’s growth and success with our milestone event packages, including decorations, catering, and more.',
    },
  ];

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
              <p>{pkg.description}</p><br></br>
              <h1><strong>Price: {pkg.price}</strong></h1><br></br>
              <p>{pkg.content}</p>
              <p>{pkg.content1}</p>
              <p>{pkg.content2}</p>
              <p>{pkg.content3}</p>
              <p>{pkg.content4}</p>
              <p>{pkg.content5}</p>
              <p>{pkg.content6}</p>
              <p>{pkg.content7}</p>
              <p>{pkg.content8}</p>
              <br></br>
              <button>Learn More</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Milestone;
