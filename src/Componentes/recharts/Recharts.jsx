import {
  LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis,
  CartesianGrid } from 'recharts';
import './Recharts.css';

//TODO converter csv para array e utilizar os dados;
const pdata = [
  { hora: '10h', ocorrencia: 11},
  { hora: '11h', ocorrencia: 15},
  { hora: '12h', ocorrencia: 5},
  { hora: '13h', ocorrencia: 10},
  { hora: '14h', ocorrencia: 9},
  { hora: '15h', ocorrencia: 10},
];

function Recharts() {
  return (
    <>
      <h1 className="graphic_title">
        Gráfico de linhas
      </h1>
      <ResponsiveContainer className={"graphic_container"} aspect={3}>
        <LineChart data={pdata} className={"graphic_area"}>
          <CartesianGrid />
          <XAxis dataKey="hora"
            interval={'preserveStartEnd'} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="ocorrencia"
            stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Recharts;