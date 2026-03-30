import { useEffect, useState } from "react";
import "@ui5/webcomponents/dist/Assets.js";
import { Button } from "@ui5/webcomponents-react/Button";

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch("/catalog/Clientes")
      .then((res) => res.json())
      .then((data) => {
        setClientes(data.value || []);
      })
      .catch((error) => {
        console.error("Error cargando clientes:", error);
      });
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Mi primera app SAP UI5 con React</h1>
      <Button>Botón SAP</Button>

      <h2>Clientes</h2>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.ID}>
            {cliente.nombre} - {cliente.email} - {cliente.ciudad}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
