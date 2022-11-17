import Leaflet from "../leaflet/Leaflet";
import Recharts from "../recharts/Recharts";
import './Home.css';

function Home() {
    return (
        <>
            <h1 className="title">App Graphic</h1>
            <Recharts />
            <h1>Fortaleza</h1>
            <Leaflet />
        </>
    );
}

export default Home;