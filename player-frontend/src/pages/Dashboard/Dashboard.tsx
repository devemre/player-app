import { useEffect, useState } from "react";
import { Player } from "../../types/Player";
import http from "../../http";
import { Table } from "../../components";

const Dashboard = () => {
  const [players, setPlayers] = useState<Player[]>([]);

  useEffect(() => {
    http.get("/api/v1/players").then((response) => {
      setPlayers(response.data);
    });
  }, []);

  return (
    <div className="p-10">
      <Table
        title="Players"
        columns={["Username", "Race", "Class", "Level", "Action"]}
        data={[]}
      />
    </div>
  );
};

export default Dashboard;
