import { useEffect, useState } from "react";

const PlacesInfo = () => {
    const [places, setPlaces] = useState([]);
    useEffect(() => {
        fetch("places.json")
        .then(res => res.json())
        .then(data => setPlaces(data))
    }, [])
    return [places, setPlaces]
};

export default PlacesInfo;