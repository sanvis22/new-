import React from 'react';
import { Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const service = () => {
  const navigate = useNavigate();

  const eventTypes = [
    {
      title: "Wedding",
      image: "https://i.pinimg.com/564x/58/56/06/58560613be999372ac6a4c18cba3f320.jpg",
      alt: "People at a fundraising event"
    },
    {
      title: "Conferences",
      image: "https://i.pinimg.com/736x/48/29/a7/4829a72d9aa4970910bcdff0513ab626.jpg",
      alt: "Conference audience"
    },
    {
      title: "Birthday",
      image: "https://i.pinimg.com/564x/28/b9/1e/28b91e7bca724b2fc85df8f53f73d2be.jpg",
      alt: "People at an annual celebration"
    }
  ];
  const handleConsultClick = () => {
    navigate('/consult');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Image */}
      <div className="w-full h-64 mb-12 overflow-hidden rounded-lg">
        <img 
          src="https://i.pinimg.com/564x/0b/ab/e8/0babe8db7b23bd80a3280a712f0529b4.jpg" 
          alt="Coffee meeting setup" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* What We Do Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif mb-6">What We Do</h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At Spark Events, we pride ourselves in being an extension of your organization. 
          Our team of experts service a wide variety of events. Let us help you plan, design, 
          and produce your next gathering.
        </p>
      </div>

      {/* Event Specialties */}
      <div className="mb-16">
        <h3 className="text-2xl font-serif text-center mb-12">
          Our Cream & Sugar
          <br />
          <span className="text-gray-600">(Event Specialties)</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventTypes.map((event, index) => (
            <div key={index} className="group relative overflow-hidden">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg">
                <img
                  src={event.image}
                  alt={event.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h4 className="text-white text-2xl font-serif tracking-wider">
                    {event.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Consultation Button */}
      <div className="text-center">
      <button 
          onClick={handleConsultClick}
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full 
                     hover:bg-blue-700 transition-colors duration-300 font-medium text-lg
                     shadow-lg hover:shadow-xl"
        >
          <Calendar className="w-5 h-5" />
          Book a Consultation
        </button>
      </div>
    </div>
  );
};

export default service;