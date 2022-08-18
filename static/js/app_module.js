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
};

function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    buildTable(filteredData);
};

// call handleClick when a button is clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// build default table
buildTable(tableData);