import React from 'react';
import './Contact-CSS/maps.css';

const Maps = () =>{
  return (
    <div>
    <h1 style={{textAlign:'center', marginBottom:'25px'}}>Locations We Serves</h1>
    <div className="maps-container">
      <div className='map-box'>
        <div className="map-heading">
            <h3>Rohini</h3>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d449068.81226465234!2d76.747151!3d28.438861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d015ab841a019%3A0xa4f57e1f9b3ae178!2sHearing%20Hope%20(A%20unit%20of%20Hope%20Enterprises)!5e0!3m2!1sen!2sin!4v1704545650910!5m2!1sen!2sin" width="400" height="250" style={{border:'none', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom:'15px'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div>
        <div className="map-heading">
            <h3>Safdarjung Enclave</h3>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448558.78125473665!2d77.199104!3d28.558786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35be9d5c5bb%3A0x456863c709ee7d9b!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545666723!5m2!1sen!2sin" width="400" height="250" style={{border:'none', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom:'15px'}}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div>
        <div className="map-heading">
            <h3>Ghaziabad</h3>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28001.035077077002!2d77.452379!3d28.685776!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bf628a0e2d%3A0x1d40314174f98905!2sHearing%20Hope!5e0!3m2!1sen!2sin!4v1704545684238!5m2!1sen!2sin" width="400" height="250" style={{border:'none', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom:'15px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div>
        <div className="map-heading">
            <h3>Rajinder Nagar</h3>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448223.54261518887!2d77.15722!3d28.637361000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03afcda69c97%3A0xcd20054e89b44253!2sHearing%20Hope!5e0!3m2!1sen!2sus!4v1704545698710!5m2!1sen!2sus" width="600" height="300" style={{border:'none', boxShadow:'0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom:'15px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>

      <div>
        <div className="map-heading">
            <h3>Vaishali</h3>
        </div>
        <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d448223.15387671156!2d77.333856!3d28.637452!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2e2c4ee993%3A0x8ccf74c5e1591fe3!2sHearing%20Hope!5e0!3m2!1sen!2sus!4v1704545711947!5m2!1sen!2sus" width="600" height="300" style={{border:'none', boxShadow:'0 10px 12px rgba(0, 0, 0, 0.1)', marginBottom:'15px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Maps;
