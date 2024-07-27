import { useEffect, useState } from "react";
import axios from "axios";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  useEffect(() => {
    axios.get('http://localhost:4000/places')  
      .then(response => {
        setPlaces(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Loading feedback
  }

  if (error) {
    return <div>Error: {error}</div>;  // Error feedback
  }

  return (
    <div>
      {places.length > 0 ? places.map(place => (
        <div key={place._id}>  {/* Unique key */}
          {place.title}
        </div>
      )) : <div>No places found</div>}  // No data feedback
    </div>
  );
}