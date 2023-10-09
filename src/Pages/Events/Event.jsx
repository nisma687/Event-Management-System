

const Event = ({event}) => {
    const {id,title,description,speaker,image}=event;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl col-span-2">
        <figure><img src={image} alt="Album"/></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <p>Speaker name:{speaker}</p>
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    );
};

export default Event;