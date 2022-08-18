// import
const tableData = data;

// reference html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // clear html
    tbody.html("");

    // loop through each data object
    data.forEach((dataRow) => {
        let row = tbody.append("tr");

        // loop through each data value in data object
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}