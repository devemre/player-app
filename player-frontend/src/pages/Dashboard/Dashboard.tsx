import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import http from "../../http";
import { Table } from "../../components";

const Dashboard = () => {
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
};

export default Dashboard;
