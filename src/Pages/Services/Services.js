import { useNavigate } from "react-router-dom";

const Services = ({place}) => {
    const {name, img, pirce, duration} = place;

    const navigate = useNavigate();
    return (
        <div className='service'>
          <div className="service-img">
          <img src={img} alt="" />
          </div>
          <div className="service-details">
          <h4>{name}</h4>
           <p>{duration}</p>
           <p><span>{pirce}</span></p>
           <button onClick={() => navigate("/checkout")} className= "service-btn">Book Now</button>
          </div>
        </div>
    );
};

export default Services;