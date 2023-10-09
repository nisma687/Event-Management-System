import { useLoaderData, useParams } from "react-router-dom";



const Service = () => {
    const {id}=useParams();
    console.log(id);
    const serviceData=useLoaderData();
    return (
        serviceData.map(service=>service.id==id && <div 
        key={service.id}
        className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={service.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
                {service.title}
            </h1>
            <p className="py-6">{service.shortDescription}</p>
            <p className="py-6">{service.price}</p>
            
          </div>
        </div>
      </div>))
};


export default Service;