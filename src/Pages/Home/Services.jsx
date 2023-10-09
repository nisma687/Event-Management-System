
import PropTypes from 'prop-types';

const Services = ({service}) => {
    const {id,title,price,description,image}=service;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>Price:{price}</p>
          <div className="card-actions justify-end">
            <button
             className="btn btn-primary">
                <a href={`/services/${id}`}>More Info
                </a>
             </button>
          </div>
        </div>
      </div>
    );
};

export default Services;
Services.propTypes = {
    service:PropTypes.object
}