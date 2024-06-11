import { Table } from "./components";

function App() {
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
          { id: 7, username: "emre", race: "Elf", class: "Assassin", level: 1 },
        ]}
      />
    </div>
  );
}

export default App;
