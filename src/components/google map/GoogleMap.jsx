
import { Map, Marker } from "pigeon-maps"
const GoogleMap = () => {
    return (
        <div>
            <Map height={500} defaultCenter={[24.6119, 90.0315]} defaultZoom={11}>
                <Marker width={50} anchor={[24.6119, 90.0315]} />
            </Map>
        </div>
    );
};

export default GoogleMap;