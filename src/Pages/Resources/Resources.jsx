import { useEffect, useState } from "react";
import Resource from "./Resource";


const Resources = () => {
    const [resources,setResources]=useState([]);
    useEffect(()=>{
        fetch('resources.json')
        .then(res=>res.json())
        .then(data=>{
            setResources(data);
        })

    },[])
    return (
        <div>
        <h2 className="text-3xl text-blue-600 text-center font-semibold">All the Resources</h2>
   <div className="grid md:grid-cols-4 gap-3 m-4 p-3 bg-slate-400">
     
   {
        resources?.map(resource=><Resource resource={resource} key={resource.id}></Resource>)
    }
   </div>
    
    
    </div>
    );
};

export default Resources;