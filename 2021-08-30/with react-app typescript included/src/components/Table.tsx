import table from "./../data/table.json";
import TableRow from "./TableRow";

const Table = () => {
  return (
    <table className="table">
      <thead className="table_head">
        <tr>
          <td className="table_head-titles">Titres</td>
          <td className="table_head-titles">Vues</td>
          <td className="table_head-titles">Créateurs</td>
          <td className="table_head-titles">Dates de post</td>
          <td className="table_head-titles">Attributs</td>
        </tr>
      </thead>
      <tbody className="table_body">
        {table
          .sort((item) => (item.isPinned ? -1 : 1))
          .map((dataRow) => {
            return (
              <TableRow
                key={dataRow.id}
                color={dataRow.color}
                title={dataRow.title}
                views={dataRow.views}
                author={dataRow.author}
                postDate={dataRow.postDate}
                attributes={dataRow.attributes}
                isPinned={dataRow.isPinned}
              />
            );
          })}
      </tbody>
    </table>
  );
};

export default Table;
