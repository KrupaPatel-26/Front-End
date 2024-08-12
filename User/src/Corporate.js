import React from 'react';
import './corporate.css';

const Corporate = () => {
  const packages = [
    {
      name: 'Basic Package',
      description: 'Ideal for small teams, includes venue, basic amenities, and refreshments.',
      price: 'Rs.3 Lakhs',
      content: '50 Peoples included',
      content1:'Lunch included',
      content2:'Breakout Sessions',
      content3:'Audio-Video Facilities included',
      content4:'Main stage itinerary planning',
    },
    {
      name: 'Standard Package',
      description: 'Perfect for medium-sized groups, includes venue, standard amenities, catering, and AV equipment.',
      price: 'Rs.7 Lakhs',
      content: '250 Peoples included',
      content1:'Lunch included',
      content2:'Breakout Sessions',
      content3:'Audio-Video Facilities included',
      content4:'Main stage itinerary planning',
      content5:'Hotel Accomodation facility included',
      content6:'Pre , Post event orentation included',
    },
    {
      name: 'Premium Package',
      description: 'Best for large teams, includes venue, premium amenities, catering, AV equipment, and event management services.',
      price: 'Rs.13 Lakhs',
      content: '500 Peoples included',
      content1:'Lunch included',
      content2:'Breakout Sessions',
      content3:'Audio-Video Facilities included',
      content4:'Main stage itinerary planning',
      content5:'Hotel Accomodation and Transporation facility included',
      content6:'Pre , Post event orentation included',
      content7:'staffing provided',
      content8:'E-invites with scanners available',
    },
  ];

  const events = [
    {
      title: 'Conferences',
      description: 'Host professional conferences with our full-service packages, including AV support, catering, and accommodation options.',
    },
    {
      title: 'Team Building',
      description: 'Boost team morale with our fun and engaging team-building activities, customized to meet your organization’s goals.',
    },
    {
      title: 'Corporate Parties',
      description: 'Celebrate your company’s milestones with our event planning services, ensuring a memorable and enjoyable experience.',
    },
    {
      title: 'Workshops',
      description: 'Organize educational workshops with our specialized packages, providing all necessary materials and support.',
    },
  ];

  return (
    <div className="Corporate">
      <header>
        <h1>Corporate Events</h1>
        <p>Explore our exclusive packages tailored for your corporate needs.</p>
      </header>

      <div className="events-section">
      
      <div className="event-cards">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        ))}
    </div>
</div>
      <section className="Package">
        <h1><strong>Our Packages</strong></h1><br></br>
        <div className="package-cards">
          {packages.map((pkg, index) => (
            <div className="card" key={index}>
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

export default Corporate;
