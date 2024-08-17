import React from 'react';
import Slider from 'react-slick';
import './corporate.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Corporate = () => {
  const packages = [
    {
      name: 'Basic Package',
      description: 'Ideal for small teams, includes venue, basic amenities, and refreshments.',
      price: 'Rs.3 Lakhs',
      images: [
        'basiccorporatedecor.jpg', // Replace with the actual image paths
        'basiccorporate.jpg',
       
      ],
      features: [
        'Max. 50 People',
        'Lunch included',
        'Breakout Sessions',
        'Audio-Video Facilities',
        'Main stage itinerary planning',
      ],
    },
    {
      name: 'Standard Package',
      description: 'Perfect for medium-sized groups, includes venue, standard amenities, catering, and AV equipment.',
      price: 'Rs.7 Lakhs',
      images: [
        'standardcorporate.jpg', // Replace with the actual image paths
        'standardcorporateevent.jpg',
        
      ],
      features: [
        'Max. 250 People',
        'Lunch included',
        'Breakout Sessions',
        'Audio-Video Facilities included',
        'Main stage itinerary planning',
        'Hotel Accommodation facility',
        'Pre, Post event orientation',
      ],
    },
    {
      name: 'Premium Package',
      description: 'Best for large teams, includes venue, premium amenities, catering, AV equipment, and event management services.',
      price: 'Rs.13 Lakhs',
      images: [
        'corporatepremium.jpg', // Replace with the actual image paths
        'premiumcorporate.jpg',
        
      ],
      features: [
        'Max. 500 People',
        'Lunch included',
        'Breakout Sessions',
        'Audio-Video Facilities',
        'Main stage itinerary planning',
        'Hotel Accommodation and Transportation facility',
        'Pre, Post event orientation',
        'Staffing provided',
        'E-invites with scanners available',
      ],
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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

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
              <Slider {...sliderSettings}>
                {pkg.images.map((image, idx) => (
                  <div key={idx}>
                    <img src={image} alt={`Package ${index + 1} - Image ${idx + 1}`} className="corp-image" />
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

export default Corporate;
