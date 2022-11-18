import Leaflet from "../leaflet/Leaflet";
import Recharts from "../recharts/Recharts";
import Teste from "../Teste/Teste";
import './Home.css';

function Home() {
function exportData() {
        
}
    return (
        <>
            <h1 className="title">App Graphic</h1>
            <button className="data_export" onClick={exportData}>Exportar dados</button>
            <Teste />
            <Recharts />
            <h1>Fortaleza</h1>
            <Leaflet />
        </>
    );
}

export default Home;

