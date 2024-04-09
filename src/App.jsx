import GoogleMap from "./components/GoogleMap";
import MapContainer from "./components/MapComponent";

function App() {
  return (
    <div className="w-full h-screen bg-purple-600 flex  gap-24 items-center justify-center">
      {/* <MapContainer /> */}
      <GoogleMap />
    </div>
  );
}

export default App;
