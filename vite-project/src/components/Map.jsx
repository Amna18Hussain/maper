// // import { useEffect, useRef } from "react";
// // import leaflet from "leaflet";
// // import useLocationStorage from "../hooks/useLocationStorage";
// // import useGeolocation from "../hooks/useGeolocation";

// // export default function Map() {
// //   const mapRef = useRef();
// //   const userMarkerRef = useRef();

// //   const [userPosition, setUserPosition] = useLocationStorage("USER_MARKER", {
// //     latitude: 0,
// //     longitude: 0,
// //   });

// //   const [nearbyMarkers, setNearbyMarkers] = useLocationStorage(
// //     "NEARBY_MARKERS",
// //     []
// //   );

// //   const location = useGeolocation();

// //   useEffect(() => {
// //     mapRef.current = leaflet
// //       .map("map")
// //       .setView([userPosition.latitude, userPosition.longitude], 13);

// //     leaflet
// //       .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
// //         maxZoom: 19,
// //         attribution:
// //           '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
// //       })
// //       .addTo(mapRef.current);

// //     nearbyMarkers.forEach(({ latitude, longitude }) => {
// //       leaflet
// //         .marker([latitude, longitude])
// //         .addTo(mapRef.current)
// //         .bindPopup(
// //           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
// //         );
// //     });

// //     mapRef.current.addEventListener("click", (e) => {
// //       const { lat: latitude, lng: longitude } = e.latlng;
// //       leaflet
// //         .marker([latitude, longitude])
// //         .addTo(mapRef.current)
// //         .bindPopup(
// //           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
// //         );

// //       setNearbyMarkers((prevMarkers) => [
// //         ...prevMarkers,
// //         { latitude, longitude },
// //       ]);
// //     });
// //   }, []);

// //   useEffect(() => {
// //     setUserPosition({ ...userPosition });

// //     if (userMarkerRef.current) {
// //       mapRef.current.removeLayer(userMarkerRef.current);
// //     }

// //     userMarkerRef.current = leaflet
// //       .marker([location.latitude, location.longitude])
// //       .addTo(mapRef.current)
// //       .bindPopup("User");

// //     const el = userMarkerRef.current.getElement();
// //     if (el) {
// //       el.style.filter = "hue-rotate(120deg)";
// //     }

// //     mapRef.current.setView([location.latitude, location.longitude]);
// //   }, [location, userPosition.latitude, userPosition.longitude]);
// //   return <div id="map" ref={mapRef}></div>;
// // }






// import { useEffect, useRef } from "react";
// import leaflet from "leaflet";
// import useLocationStorage from "../hooks/useLocationStorage";
// import useGeolocation from "../hooks/useGeolocation";

// export default function Map() {
//   const mapRef = useRef(null);
//   const userMarkerRef = useRef(null);

//   const [userPosition, setUserPosition] = useLocationStorage("USER_MARKER", {
//     latitude: 0,
//     longitude: 0,
//   });

//   const [nearbyMarkers, setNearbyMarkers] = useLocationStorage(
//     "NEARBY_MARKERS",
//     []
//   );

//   const location = useGeolocation();

//   // Initialize the map only once
//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = leaflet
//         .map("map")
//         .setView([userPosition.latitude, userPosition.longitude], 13);

//       leaflet
//         .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           maxZoom: 19,
//           attribution:
//             '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         })
//         .addTo(mapRef.current);
//     }

//     // Add nearby markers
//     nearbyMarkers.forEach(({ latitude, longitude }) => {
//       leaflet
//         .marker([latitude, longitude])
//         .addTo(mapRef.current)
//         .bindPopup(
//           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
//         );
//     });

//     // Event listener for map clicks to add markers
//     const onClick = (e) => {
//       const { lat: latitude, lng: longitude } = e.latlng;
//       leaflet
//         .marker([latitude, longitude])
//         .addTo(mapRef.current)
//         .bindPopup(
//           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
//         );

//       setNearbyMarkers((prevMarkers) => [
//         ...prevMarkers,
//         { latitude, longitude },
//       ]);
//     };

//     mapRef.current.on("click", onClick);

//     // Cleanup event listener on component unmount
//     return () => {
//       mapRef.current.off("click", onClick);
//     };
//   }, [nearbyMarkers, setNearbyMarkers, userPosition]);

//   // Handle user location updates
//   useEffect(() => {
//     if (location && location.latitude && location.longitude) {
//       setUserPosition({ latitude: location.latitude, longitude: location.longitude });

//       // Remove previous user marker
//       if (userMarkerRef.current) {
//         mapRef.current.removeLayer(userMarkerRef.current);
//       }

//       // Add new user marker
//       userMarkerRef.current = leaflet
//         .marker([location.latitude, location.longitude])
//         .addTo(mapRef.current)
//         .bindPopup("User");

//       // Add some styling to the user marker
//       const el = userMarkerRef.current.getElement();
//       if (el) {
//         el.style.filter = "hue-rotate(120deg)";
//       }

//       // Update map view to the user's current location
//       mapRef.current.setView([location.latitude, location.longitude]);
//     }
//   }, [location, setUserPosition]);

//   return <div id="map" style={{ height: "500px", width: "100%" }}></div>;
// }




// import React, { useEffect, useRef } from "react"; // Fix here
// import leaflet from "leaflet";
// import useLocationStorage from "../hooks/useLocationStorage";
// import useGeolocation from "../hooks/useGeolocation";

// export default function Map() {
//   const mapRef = useRef(null); // Initializes the map reference
//   const userMarkerRef = useRef(null); // Initializes the user marker reference

//   const [userPosition, setUserPosition] = useLocationStorage("USER_MARKER", {
//     latitude: 0,
//     longitude: 0,
//   });

//   const [nearbyMarkers, setNearbyMarkers] = useLocationStorage(
//     "NEARBY_MARKERS",
//     []
//   );

//   const location = useGeolocation();

//   // Initialize the map only once
//   useEffect(() => {
//     if (!mapRef.current) {
//       mapRef.current = leaflet
//         .map("map")
//         .setView([userPosition.latitude, userPosition.longitude], 13);

//       leaflet
//         .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
//           maxZoom: 19,
//           attribution:
//             '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//         })
//         .addTo(mapRef.current);
//     }

//     // Add nearby markers
//     nearbyMarkers.forEach(({ latitude, longitude }) => {
//       leaflet
//         .marker([latitude, longitude])
//         .addTo(mapRef.current)
//         .bindPopup(
//           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
//         );
//     });

//     // Event listener for map clicks to add markers
//     const onClick = (e) => {
//       const { lat: latitude, lng: longitude } = e.latlng;
//       leaflet
//         .marker([latitude, longitude])
//         .addTo(mapRef.current)
//         .bindPopup(
//           `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
//         );

//       setNearbyMarkers((prevMarkers) => [
//         ...prevMarkers,
//         { latitude, longitude },
//       ]);
//     };

//     mapRef.current.on("click", onClick);

//     // Cleanup event listener on component unmount
//     return () => {
//       mapRef.current.off("click", onClick);
//     };
//   }, [nearbyMarkers, setNearbyMarkers, userPosition]);

//   // Handle user location updates
//   useEffect(() => {
//     if (location && location.latitude && location.longitude) {
//       setUserPosition({ latitude: location.latitude, longitude: location.longitude });

//       // Remove previous user marker
//       if (userMarkerRef.current) {
//         mapRef.current.removeLayer(userMarkerRef.current);
//       }

//       // Add new user marker
//       userMarkerRef.current = leaflet
//         .marker([location.latitude, location.longitude])
//         .addTo(mapRef.current)
//         .bindPopup("User");

//       // Add some styling to the user marker
//       const el = userMarkerRef.current.getElement();
//       if (el) {
//         el.style.filter = "hue-rotate(120deg)";
//       }

//       // Update map view to the user's current location
//       mapRef.current.setView([location.latitude, location.longitude]);
//     }
//   }, [location, setUserPosition]);

//   return (
//     <div id="map-container" style={{ height: "100vh", width: "100%" }}>
//       <div id="map" style={{ height: "100%", width: "100%" }}></div>
//     </div>
//   );
// }



// import React, { useState, useRef } from "react";
// import cities from '../assets/cities.png'

// export default function Map() {
//   const [markers, setMarkers] = useState([]);
//   const mapRef = useRef(null);

//   // Handle image click to add markers
//   const handleImageClick = (e) => {
//     if (mapRef.current) {
//       const rect = mapRef.current.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;

//       setMarkers((prevMarkers) => [
//         ...prevMarkers,
//         { x, y }
//       ]);
//     }
//   };

//   return (
//     <div
//       id="map-container"
//       style={{ height: "100vh", width: "100%", position: "relative" }}
//     >
//       <img
//         ref={mapRef}
//         src={cities} // Replace with your image URL
//         alt="Static Map"
//         style={{ height: "100%", width: "100%", cursor: "pointer" }}
//         onClick={handleImageClick}
//       />
//       {markers.map((marker, index) => (
//         <div
//           key={index}
//           style={{
//             position: "absolute",
//             left: marker.x - 10,
//             top: marker.y - 10,
//             width: "20px",
//             height: "20px",
//             backgroundColor: "red",
//             clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" // Makes a triangle
//           }}
//         ></div>
//       ))}
//     </div>
//   );
// }




import React, { useState, useRef } from "react";
import cities from '../assets/cities.png'; // Ensure the image path is correct

export default function Map() {
  const [markers, setMarkers] = useState([]);
  const [markerSize, setMarkerSize] = useState(20); // Default size
  const mapRef = useRef(null);

  // Handle image click to add markers
  const handleImageClick = (e) => {
    if (mapRef.current) {
      const rect = mapRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setMarkers((prevMarkers) => [
        ...prevMarkers,
        { x, y }
      ]);
    }
  };

  // Handle marker size change
  const handleSizeChange = (e) => {
    setMarkerSize(Number(e.target.value));
  };

  return (
    <div
      id="map-container"
      style={{ height: "100vh", width: "100%", position: "relative", display: "flex" }}
    >
      <div
        id="controls"
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          padding: "10px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: "5px"
        }}
      >
        <label htmlFor="size-slider">Marker Size:</label>
        <input
          id="size-slider"
          type="range"
          min="10"
          max="50"
          value={markerSize}
          onChange={handleSizeChange}
          style={{ width: "100%" }}
        />
        <div style={{ marginTop: "10px" }}>Size: {markerSize}px</div>
      </div>
      <img
        ref={mapRef}
        src={cities} // Use the image file
        alt="Static Map"
        style={{ height: "100%", width: "100%", cursor: "pointer" }}
        onClick={handleImageClick}
      />
      {markers.map((marker, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: marker.x - markerSize / 2,
            top: marker.y - markerSize / 2,
            width: markerSize,
            height: markerSize,
            backgroundColor: "white",
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)" // Makes a triangle
          }}
        ></div>
      ))}
    </div>
  );
}
