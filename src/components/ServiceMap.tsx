import { useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in Leaflet with Next.js/Webpack
const icon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: #0C4A6E; width: 16px; height: 16px; border-radius: 50%; border: 3px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.4);"></div>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8]
});

export default function ServiceMap() {
    const bocaRatonCoords: [number, number] = [26.3683, -80.1289];
    const radiusInMeters = 15 * 1609.34; // 15 miles in meters

    // Fix for map rendering issues on first load
    useEffect(() => {
        // Dispatch window resize event after short delay to ensure map tiles load completely
        setTimeout(() => {
            window.dispatchEvent(new Event('resize'));
        }, 100);
    }, []);

    return (
        <div className="h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-200 z-0 relative">
            <MapContainer
                center={bocaRatonCoords}
                zoom={10}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%', zIndex: 0 }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                />
                <Circle
                    center={bocaRatonCoords}
                    pathOptions={{
                        fillColor: '#0D9488',
                        fillOpacity: 0.15,
                        color: '#0C4A6E',
                        weight: 2
                    }}
                    radius={radiusInMeters}
                />
                <Marker position={bocaRatonCoords} icon={icon} title="Cleaning Boca Raton Location" alt="Cleaning Boca Raton Location">
                    <Popup>
                        <div className="text-center font-sans">
                            <strong>Cleaning Boca Raton</strong><br />
                            Serving 15-Mile Radius
                        </div>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}
