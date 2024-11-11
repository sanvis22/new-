import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Home Section */}
      <div
        className='flex flex-col min-h-screen'
        style={{
          backgroundImage: 'url(https://i.pinimg.com/474x/40/64/e2/4064e2e6405898620353f6e78fdaf3d5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Main Content */}
        <div className='flex flex-col md:flex-row items-center justify-center flex-1 p-4'>
          {/* Left Side - Circle Image */}
          <div className='flex-1 flex items-center justify-center'>
            <img
              src='https://i.pinimg.com/736x/88/b8/86/88b8861dbf969234411f7a9d0837ed26.jpg'
              alt='Profile'
              className='w-64 h-64 rounded-full object-cover border-4 border-white'
            />
          </div>

          {/* Right Side - Text */}
          <div className='flex-1 flex flex-col items-center md:items-start text-center md:text-left p-4'>
            <h1 className='text-4xl font-bold text-white mb-4'>
              Welcome Event Organizers
            </h1>
            <div className='bg-white bg-opacity-50 p-4 rounded-lg shadow-lg mb-4'>
              <p className='text-lg text-gray-900 mb-2 italic'>
                "The success of your event starts with the meticulous planning of the organizer."
              </p>
              <p className='text-lg text-gray-900 mb-2 italic'>
                "An event is not over until everyone is tired of talking about it."
              </p>
              <p className='text-lg text-gray-900 italic'>
                "Good fortune is what happens when opportunity meets with planning."
              </p>
            </div>
            <Link to="/get-started">
              <button className='px-6 py-3 bg-pink-200 text-white rounded-lg hover:bg-pink-400 transition duration-200'>
                
                <Link to="/register">Get Started</Link>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Second Page Content */}
      <div
        className='flex flex-col min-h-screen'
        style={{
          backgroundColor: '#f7f7f7', // Same background color as the home section
        }}
      >
        <div className='flex flex-col items-center justify-center py-8'>
          <h2 className='text-3xl font-bold text-black mb-6'>
            Explore Our Events
          </h2>
          <div className='flex flex-col md:flex-row justify-around items-center'>
            <div className='flex-1 flex justify-center items-center p-4'>
              <img
                src='https://i.pinimg.com/474x/e9/b6/1e/e9b61e6b450c998a80349828e2bdb04b.jpg'
                alt='Event 1'
                className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
              />
            </div>
            <div className='flex-1 flex justify-center items-center p-4'>
              <img
                src='https://i.pinimg.com/564x/03/10/62/03106271e59d936fdf28e3252e8eb541.jpg'
                alt='Event 2'
                className='w-full max-w-md rounded-lg shadow-lg border-4 border-white'
              />
            </div>
          </div>
          <div className='text-center text-black mt-4'>
            <p className='text-lg'>
              Discover how our events bring people together and create unforgettable memories.
            </p>
            <p className='text-lg'>
              Each event is meticulously planned to ensure a seamless experience from start to finish.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-4'>
        <div className='container mx-auto text-center'>
          <p className='text-sm'>
            © {new Date().getFullYear()} Your Company Name. All rights reserved.
          </p>
          <p className='text-sm mt-2'>
            <a href="/privacy-policy" className='hover:underline'>Privacy Policy</a> | <a href="/terms-of-service" className='hover:underline'>Terms of Service</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;