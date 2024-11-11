import React, { useState } from 'react';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const Consult = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    eventType: '',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Header Section */}
      <div className="border-b pb-4 mb-6">
        <button className="text-blue-500 mb-4 flex items-center gap-2">
          <ArrowLeft size={24} />
        </button>
        
       

        <div className="mb-6">
        
          <h1 className="text-2xl font-bold">Consultation</h1>
          
          <div className="flex items-center gap-2 text-gray-600 mt-4">
            <Clock size={20} />
            <span>30 min</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600 mt-2">
            <Calendar size={20} />
            <span>8:00pm - 8:30pm</span>
          </div>
          
          <div className="text-gray-600 mt-2">
            India Standard Time
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div>
        <h2 className="text-xl font-semibold mb-6">Enter Details</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">
              Name <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Email <span className="text-blue-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <button 
            type="button"
            className="text-blue-500 font-medium"
          >
            Add Guests
          </button>

          <div>
            <label className="block text-sm font-medium mb-2">
              Event Date <span className="text-blue-500">*</span>
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Event Type <span className="text-blue-500">*</span>
            </label>
            <input
              type="text"
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Please share anything that will help prepare for our meeting. <span className="text-blue-500">*</span>
            </label>
            <textarea
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleChange}
              required
              rows={4}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />
          </div>

          <div className="text-sm text-gray-600">
            By proceeding, you confirm that you have read and agree to{' '}
            <a href="#" className="text-blue-500">Calendly's Terms of Use</a>
            {' '}and{' '}
            <a href="#" className="text-blue-500">Privacy Notice</a>.
          </div>

          <button
          
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Schedule Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default Consult;
