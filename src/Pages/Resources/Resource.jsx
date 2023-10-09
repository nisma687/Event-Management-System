

const Resource = ({resource}) => {
    const{id,title,type,provider,
        topic,link,
        duration,level}=resource;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl col-span-2 ">

        <div className="card-body   text-center">
            <h2 className="card-title">{title}</h2>
          <h2 className="card-title">{topic}</h2>
          <p className="mt-2 mb-2 text-center">Type:{type}</p>
            <p>Provider:{provider}</p>
            <p>Duration:{duration}</p>
            <p>Level:{level}</p>
          <p>Link-{link}</p>
          <div className="card-actions justify-end">
          
          </div>
        </div>
      </div>
    );
};

export default Resource;