import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "90vh",
};

const center = {
  lat: 47.0,  // You can use any default center
  lng: -114.0,
};

export default function Dashboard() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <div>
      <h1>Radon Dashboard</h1>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={8}
        center={center}
      >
        {/* Future: Markers, forms, etc */}
      </GoogleMap>
    </div>
  );
}