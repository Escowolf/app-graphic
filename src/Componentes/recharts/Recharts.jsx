import {
  LineChart, ResponsiveContainer, Legend, Tooltip, Line, XAxis, YAxis,
  CartesianGrid
} from 'recharts';
import './Recharts.css';

const pdata = [
  { hora: '10h', ocorrencias: 11 },
  { hora: '11h', ocorrencias: 15 },
  { hora: '12h', ocorrencias: 5 },
  { hora: '13h', ocorrencias: 10 },
  { hora: '14h', ocorrencias: 9 },
  { hora: '15h', ocorrencias: 10 },
];

function Recharts() {

  return (
    <>
      <h1 className="graphic_title">
        Movimentação por horário
      </h1>
      <ResponsiveContainer className={"graphic_container"} aspect={3}>
        <LineChart data={pdata} className={"graphic_area"}>
          <CartesianGrid />
          <XAxis dataKey="hora"
            interval={'preserveStartEnd'} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="ocorrencias"
            stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Recharts;