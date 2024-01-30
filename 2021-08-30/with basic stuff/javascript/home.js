// Generating Rows in a Table with Fetch API (Home Page)
const tableBody = document.getElementById("tableBody");

fetch("./data/table.json")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    generateTableRow(data);
  });

const attributesIcons = {
  password: '<i class="fas fa-lock"></i>',
  comment: '<i class="fas fa-comment-dots"></i>',
  test: '<i class="fas fa-box-open"></i>',
};

const generateTableRow = (tableElement) => {
  tableElement
    .sort((item) => (item.isPinned ? -1 : 1))
    .map((tableRow) => {
      const row = document.createElement("tr");
      row.classList.add("table_body-container");
      row.classList.add(`${tableRow.color}`);
      row.classList.add(`${tableRow.isPinned ? "pinned" : "notpinned"}`);
      row.innerHTML = `
        <td class="table_body-container--information ${tableRow.role}">${
        tableRow.title
      }</td>
        <td class="table_body-container--information">${tableRow.views}</td>
        <td class="table_body-container--information">${tableRow.author}</td>
        <td class="table_body-container--information">${tableRow.postDate}</td>
        <td class="table_body-container--information">${tableRow.attributes
          .map((attribute) => {
            const Icon = attributesIcons[attribute];
            if (Icon == null) return null;
            return Icon;
          })
          .toString()
          .split(",")
          .join(" ")}</td>
      `;
      tableBody.append(row);
    });
};
