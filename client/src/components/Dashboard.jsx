import { useRef, useEffect } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

// Define the styling for the map container
const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};

// Define the default center location for the map
const center = {
  lat: 47.0,
  lng: -114.0,
};

export default function Dashboard() {
  // Load the Google Maps script and the Places library
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  // Reference to the Google Map instance and the input field
  const mapRef = useRef(null);
  const inputRef = useRef(null);

  // Setup autocomplete behavior when map and input are ready
  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    // Create a new Google Places Autocomplete instance
    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        fields: ["geometry", "name"],
      });
    

    // Add listener to update map position when a place is selected
    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log("Selected place:", place);
      if (place.geometry && mapRef.current) {
        mapRef.current.panTo(place.geometry.location);
        mapRef.current.setZoom(15);
      }
    });
  }, [isLoaded]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      <h1>Radon Dashboard</h1>

      {/* Address Search Input */}
      <input
        ref={inputRef}
        id="autocomplete"
        type="text"
        placeholder="Search for an address"
        style={{
          width: "60%",
          height: "40px",
          fontSize: "16px",
          padding: "10px",
          margin: "10px 0",
        }}
      />

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
        onLoad={(map) => (mapRef.current = map)} // Save the map reference
      >
        {/* Future: Add markers, forms, etc */}
      </GoogleMap>
    </div>
  );
}