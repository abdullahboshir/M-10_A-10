// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const Services = ({place, handleBookNow}) => {
    const {name, img, pirce, duration, id} = place;


    // const navigate = useNavigate();
    return (
        <div className='service'>
          <div className="service-img">
          <img src={img} alt="" />
          </div>
          <div className="service-details">
          <h4>{name}</h4>
           <p>{duration}</p>
           <p><span>{pirce}</span></p>
          <Link to="/chekcout">
          <button onClick={() => handleBookNow(id)} className= "service-btn">Book Now</button>
          </Link>
          </div>
        </div>
    );
};

export default Services;