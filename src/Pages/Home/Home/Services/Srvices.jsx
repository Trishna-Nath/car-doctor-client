import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Srvices = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="mt-4">
            <div className="text-center">
                <h4 className="text-3xl font-bold text-orange-400">Our Services</h4>
                <h2 className="text-2xl font-bold">Our Services Area</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quam veritatis at aut sapiente <br /> eligendi eius facere tempora repudiandae aliquam.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                   {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service={service}
                    ></ServiceCard> )
                   }
            </div>
        </div>
    );
};

export default Srvices;