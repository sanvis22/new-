import React from 'react';

const about = () => {
  return (
    <section style={{ padding: '50px', textAlign: 'center', fontFamily: 'cursive' }}>
      <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Organization, Details, Logistics</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto' }}>
        At Spark Events, we help manage your big ideas and your smallest concerns to ensure you are stress-free and enjoying every moment.
        For more than a decade, we’ve been working with clients to create exceptional experiences for their nonprofit fundraiser or social gathering.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '800px', margin: '20px auto' }}>
        As a boutique company, we’re driven by a childlike excitement for what we do and a love of collaboration with our clients.
        It’s our goal to leave you and your guests with an event that exceeds expectations and lasts in your memories long after the last toast.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 0' }}>
        <img
          src="https://i.pinimg.com/564x/ec/4b/ae/ec4bae9418d0f101d15495f6dfa302f2.jpg"
          alt="Event Image Left"
          style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
        />
        <img
          src="https://i.pinimg.com/564x/81/c5/6f/81c56f566d15f050831463be2148c64b.jpg"
          alt="Event Image Right"
          style={{ width: '200px', height: 'auto', borderRadius: '8px' }}
        />
      </div>


      <button
        style={{
          backgroundColor: '#91ACA4',
          color: 'white',
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
      >
        Book a Consultation
      </button>
    </section>
  );
};

export default about;
