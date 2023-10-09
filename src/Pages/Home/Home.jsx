import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Services from "./Services";
import Footer from "./Footer";
import OurAchivement from "./OurAchivement";
import Blog from "./Blog";

import Aos from  'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


const Home = () => {
    const services=useLoaderData();
    console.log(services);
    useEffect(()=>{
        Aos.init({duration:2000});
    },[])
    return (
        <div >
           <div className="max-w-6xl mx-auto mt-4"
           >
           <div data-aos="fade-right">
           <Banner />
           </div>
            <div className="mt-2 mb-2">
                <h2 className="mb-2 text-center text-3xl text-cyan-900 font-semibold">All the services we have</h2>
                <div className="grid md:grid-cols-2 "
                data-aos="fade-right">
                {
                    services.map(service=><Services key={service.id} service={service}></Services>)
                }
                </div>
            </div>
            <div data-aos="fade-left">
                <OurAchivement/>
            </div>
            <div data-aos="fade-right">
                <Blog/>
            </div>
           
           </div>
            <Footer/>
         
            
        </div>
           
    );
};

export default Home;