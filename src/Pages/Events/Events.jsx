import { useEffect, useState } from "react";
import Event from "./Event";


const Events = () => {
    const [events,setEvents]=useState([]);
    useEffect(()=>{
        fetch('event.json')
        .then(res=>res.json())
        .then(data=>{
            setEvents(data);
        })

    },[])
    console.log(events);
    return (
        <div>
            <h2 className="text-3xl text-blue-600 text-center font-semibold">All the Upcoming Events</h2>
       <div className="grid md:grid-cols-2 gap-3 m-4 p-3">
         
       {
            events?.map(event=><Event key={event.id} event={event}></Event>)
        }
       </div>
        
        
        </div>
    );
};

export default Events;