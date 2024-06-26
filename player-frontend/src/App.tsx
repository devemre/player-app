import { useEffect, useState } from "react";
import { Table } from "./components";
import http from "./http";
import { Player } from "./types/Player";

function App() {
  const [data, setData] = useState<Player[]>([]);

  useEffect(() => {
    http.get("/api/v1/players").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="p-10">
      <Table
        title="Players"
        columns={["Username", "Race", "Class", "Level"]}
        data={data}
      />
    </div>
  );
}

export default App;
