import React, { useState, useEffect } from "react";
import { read, utils, writeFile } from "xlsx";

const Export = () => {
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
    </>
  );
};

export default Export;
