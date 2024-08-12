import React from 'react';
import './cultural.css';

const Cultural = () => {
  const packages = [
    {
      name: 'Basic Package',
      description: 'Ideal for small cultural gatherings, includes venue, basic cultural decorations, and catering.',
      price: 'Rs.2 Lakhs',
      content: '50 Guests included',
      content1: 'Catering included',
      content2: 'Basic Cultural Decorations',
      content3: 'Traditional Music and Sound System included',
      content4: 'Event planning support',
    },
    {
      name: 'Standard Package',
      description: 'Perfect for medium-sized cultural events, includes venue, advanced cultural decorations, catering, and entertainment.',
      price: 'Rs.5 Lakhs',
      content: '150 Guests included',
      content1: 'Catering included',
      content2: 'Advanced Cultural Decorations',
      content3: 'Traditional Music and Sound System included',
      content4: 'Event planning support',
      content5: 'Photography and Videography included',
      content6: 'Cultural Performances included',
    },
    {
      name: 'Premium Package',
      description: 'Best for large cultural festivals, includes premium venue, deluxe cultural decorations, full catering, and complete event management.',
      price: 'Rs.10 Lakhs',
      content: '300 Guests included',
      content1: 'Full Catering included',
      content2: 'Deluxe Cultural Decorations',
      content3: 'Traditional Music and Dance Performances',
      content4: 'Event planning and management',
      content5: 'Photography and Videography included',
      content6: 'Luxury Transportation included',
      content7: 'Customized Invitations',
      content8: 'Fireworks display included',
    },
  ];

  const events = [
    {
      title: 'Cultural Festivals',
      description: 'Celebrate cultural diversity with our festival packages, including traditional music, dance, and decorations.',
    },
    {
      title: 'Folk Music Nights',
      description: 'Experience the essence of folk traditions with our packages that offer authentic folk music performances and cultural settings.',
    },
    {
      title: 'Art Exhibitions',
      description: 'Showcase local and traditional art with our custom exhibition setups, including gallery space, lighting, and promotion.',
    },
    {
      title: 'Cultural Workshops',
      description: 'Engage in hands-on cultural experiences with our workshop packages, offering materials, instruction, and cultural immersion.',
    },
  ];

  return (
    <div className="cult">
      <header>
        <h1>Cultural Events</h1>
        <p>Explore our exclusive packages tailored for your cultural events.</p>
      </header>

      <div className="cultural-events-section">
        <div className="cult-event-cards">
          {events.map((event, index) => (
            <div key={index} className="cult-event-card">
              <h2>{event.title}</h2><br></br>
              <p>{event.description}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="cult-Package">
        <h1><strong><br></br>Our Packages</strong></h1><br></br>
        <div className="cult-package-cards">
          {packages.map((pkg, index) => (
            <div className="cult-card" key={index}>
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

export default Cultural;
