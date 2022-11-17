import Leaflet from "../leaflet/Leaflet";
import Recharts from "../recharts/Recharts";

function Home (){
    return(
        <>
        <h1>App Graphic</h1>
        <Recharts/>
        <h1>Fortaleza</h1>
        <Leaflet/>
        </>
    );
}

export default Home;