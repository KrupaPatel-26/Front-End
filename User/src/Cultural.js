import React, { useState } from 'react';
import './cultural.css';

const Cultural = () => {
  const packages = [
    {
      name: 'Basic Package',
      description: 'Ideal for small cultural gatherings, includes venue, basic cultural decorations, and catering.',
      price: 'Rs.2 Lakhs',
      content: 'Max. 50 Guests',
      content1: 'Basic Decorations',
      content2: 'Traditional Music and Sound System included',
      
      
      images: [
        'basicfestival.jpg',
        'basicfestivaldecor.jpg',
        
      ],
    },
    {
      name: 'Standard Package',
      description: 'Perfect for medium-sized cultural events, includes venue, advanced cultural decorations, catering, and entertainment.',
      price: 'Rs.4 Lakhs',
      content: 'Max. 150 Guests',
      content1: 'Catering',
      content2: 'Advanced Cultural Decorations',
      content3: 'Traditional Music and Sound System',
      content4: 'Photography and Videography',
      
      images: [
        
        'standardfestival.jpg',
        'standardfestivaldecor.jpg'
      ],
    },
    {
      name: 'Premium Package',
      description: 'Best for large cultural festivals, includes premium venue, deluxe cultural decorations, full catering, and complete event management.',
      price: 'Rs.6 Lakhs',
      content: 'Max. 300 Guests',
      content1: 'Full Catering',
      content2: 'Deluxe Cultural Decorations',
      content3: 'Traditional Music and Dance Performances',
      content4: 'Event planning and management',
      content5: 'Photography and Videography',
      content6: 'Luxury Transportation',
      content7: 'Customized Invitations',
      content8: 'Fireworks display',
      images: [
        'premiumfestival.jpg',
        'premiumfestivaldecor.jpg',
        
      ],
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

  const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    return (
      <div className="slider">
        <button onClick={prevSlide} className="slider-button">❮</button>
        <img src={images[currentIndex]} alt="Package Slide" className="slider-image" />
        <button onClick={nextSlide} className="slider-button">❯</button>
      </div>
    );
  };

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
              <ImageSlider images={pkg.images} />
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
              <button>Learn More & Book</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Cultural;
