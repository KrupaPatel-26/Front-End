import React from 'react';
import './festival.css';

const Festival = () => {
  const packages = [
    {
      name: 'Basic Festival Package',
      description: 'Ideal for small-scale festivals, includes venue, basic decorations, and catering.',
      price: 'Rs.3 Lakhs',
      content: '100 Guests included',
      content1: 'Catering included',
      content2: 'Festival Decorations',
      content3: 'Sound System included',
      content4: 'Event coordination support',
    },
    {
      name: 'Standard Festival Package',
      description: 'Perfect for medium-sized festivals, includes venue, enhanced decorations, catering, and entertainment.',
      price: 'Rs.7 Lakhs',
      content: '300 Guests included',
      content1: 'Catering included',
      content2: 'Enhanced Festival Decorations',
      content3: 'Sound System and Lighting included',
      content4: 'Event coordination support',
      content5: 'Photography and Videography included',
      content6: 'Live Performances included',
    },
    {
      name: 'Premium Festival Package',
      description: 'Best for large festivals, includes premium venue, deluxe decorations, full catering, and complete event management.',
      price: 'Rs.15 Lakhs',
      content: '500 Guests included',
      content1: 'Full Catering included',
      content2: 'Deluxe Festival Decorations',
      content3: 'Sound System, Lighting, and Stage Setup',
      content4: 'Event planning and management',
      content5: 'Photography and Videography included',
      content6: 'Luxury Transportation included',
      content7: 'Customized Invitations',
      content8: 'Fireworks display included',
    },
  ];

  const events = [
    {
      title: 'Music Festivals',
      description: 'Enjoy a vibrant musical experience with our packages, including sound systems, lighting, and live performances.',
    },
    {
      title: 'Food Festivals',
      description: 'Savor a diverse culinary experience with our packages that include food stalls, catering, and cultural food displays.',
    },
    {
      title: 'Art and Craft Festivals',
      description: 'Celebrate creativity with our art and craft festival packages, offering exhibition spaces, workshops, and more.',
    },
    {
      title: 'Cultural Festivals',
      description: 'Immerse yourself in cultural traditions with our festival packages, including decorations, performances, and catering.',
    },
  ];

  return (
    <div className="fest">
      <header>
        <h1>Festival Events</h1>
        <p>Explore our exclusive packages tailored for your festival celebrations.</p>
      </header>

      <div className="fest-events-section">
        <div className="fest-event-cards">
          {events.map((event, index) => (
            <div key={index} className="fest-event-card">
              <h2>{event.title}</h2>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="fest-Package">
        <h1><strong>Our Festival Packages</strong></h1><br></br>
        <div className="fest-package-cards">
          {packages.map((pkg, index) => (
            <div className="fest-card" key={index}>
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

export default Festival;
