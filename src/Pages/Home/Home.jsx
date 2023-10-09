import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";


const Home = () => {
    const services=useLoaderData();
    console.log(services);
    return (
        <div className="max-w-6xl mx-auto mt-4">
            <Banner/>
            <div className="mt-2 mb-2">
                <h2 className="mb-2 text-center text-3xl text-cyan-900 font-semibold">All the services we have</h2>
                <div className="grid md:grid-cols-2">
                {
                    services.map(service=><Services key={service.id} service={service}></Services>)
                }
                </div>
            </div>
            
        </div>
    );
};

export default Home;