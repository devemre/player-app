import { Table } from "./components";
import http from "./http";

function App() {
  console.log(http);
  console.log("hello");
  http.get("/api/v1/players");
  return (
    <div className="p-10">
      <Table
        title="Players"
        columns={["Username", "Race", "Class", "Level"]}
        data={[
          { id: 1, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          { id: 2, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          { id: 3, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          { id: 4, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          { id: 5, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          { id: 6, username: "emre", race: "Elf", class: "Assassin", level: 1 },
          {
            id: 7,
            username: "aydın",
            race: "Elf",
            class: "Assassin",
            level: 1,
          },
        ]}
      />
    </div>
  );
}

export default App;
