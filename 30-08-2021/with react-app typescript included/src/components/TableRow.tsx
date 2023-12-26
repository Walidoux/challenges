import { FC } from "react";

import { attributesIcons } from "../utils/attributesIcons";

export interface TableRowProps {
  key: number;
  color?: string;
  title: string;
  views: number;
  author: string;
  postDate: string;
  attributes: string[];
  isPinned: boolean;
}

const TableRow: FC<TableRowProps> = (props) => {
  return (
    <tr
      className={`table_body-container ${props.color} ${
        props.isPinned ? "pinned" : ""
      }`}
    >
      <td className="table_body-container--information">{props.title}</td>
      <td className="table_body-container--information">{props.views}</td>
      <td className="table_body-container--information">{props.author}</td>
      <td className="table_body-container--information">{props.postDate}</td>
      <td className="table_body-container--information">
        {props.attributes.map((attribute, index) => {
          const Icon = attributesIcons[attribute];
          if (Icon == null) return null;
          return <Icon key={index} />;
        })}
      </td>
    </tr>
  );
};

export default TableRow;
