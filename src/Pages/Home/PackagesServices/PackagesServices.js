import React from 'react';

const PackagesServices = ({ place }) => {
    const { name, img, description } = place;
    return (
        <div>
            <div className="card-group">
                <div className='card'>
                    <img src={img} alt="" />
                    <h2>{name}</h2>
                    <p>{description.length > 50? description.slice(0, 110) + ".." : description }</p>
                </div>
            </div>
        </div>
    );
};

export default PackagesServices;



