import { Player } from "../../types/Player";

type TableProps = {
  title?: string;
  columns: Array<string>;
  data: Array<Player>;
  onRowClick: () => void;
};

const Table = (props: TableProps) => {
  return (
    <div className="w-full border border-gray-300 rounded-md p-0">
      <table className="table-fixed w-full border-t border-gray-300 m-0">
        {props.title && (
          <caption className="caption-top bg-slate-100 rounded-t-md">
            {props.title}
          </caption>
        )}
        <thead className="border-b border-gray-300 bg-slate-100">
          <tr>
            {props.columns.map((column) => (
              <th
                key={column}
                className="border-r last:border-r-0 border-gray-300"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data.map((element) => (
            <tr
              key={element.id}
              className="border-b last:border-none hover:bg-slate-100"
            >
              <td className="border-r border-gray-300 p-1">
                {element.username}
              </td>
              <td className="border-r border-gray-300 p-1">
                {element.characterRace}
              </td>
              <td className="border-r border-gray-300 p-1">
                {element.characterClass}
              </td>
              <td className="border-gray-300 p-1">{element.level}</td>
              <td className="border-gray-300 p-1">
                <button onClick={props.onRowClick} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
