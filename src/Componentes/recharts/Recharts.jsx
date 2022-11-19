import React, { useState } from "react";
import { read, utils, writeFile } from "xlsx";

import {
  LineChart,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./Recharts.css";

function Recharts() {
  const [dados, setDados] = useState([]);

  const handleImport = ($event) => {
    const files = $event.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          setDados(rows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };
  console.log(dados);

  const handleExport = () => {
    //const headings = [["hora", "ocorrencia", "latitude", "longitude"]];
    const wb = utils.book_new();
    const ws = utils.json_to_sheet([]);
    //utils.sheet_add_aoa(ws, headings);
    utils.sheet_add_json(ws, dados, { origin: "A1", skipHeader: false });
    utils.book_append_sheet(wb, ws, "Report");
    writeFile(wb, "Relatório.xlsx");
  };

  return (
    <>
      <div className="custom-file">
        <input
          type="file"
          name="file"
          className="data_import"
          id="inputFile"
          required
          onChange={handleImport}
          accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
      <div className="col">
        <button onClick={handleExport} className="data_export">
          Export
        </button>
      </div>

      <h1 className="graphic_title">Movimentação por horário</h1>
      <ResponsiveContainer className={"graphic_container"} aspect={5}>
        <LineChart data={dados} className={"graphic_area"}>
          <CartesianGrid />
          <XAxis dataKey="hora" interval={"preserveStartEnd"} />
          <YAxis></YAxis>
          <Legend />
          <Tooltip />
          <Line dataKey="ocorrencia" stroke="black" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}

export default Recharts;
