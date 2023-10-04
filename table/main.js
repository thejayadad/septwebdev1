const data = [
    { Name: "Jace", Age: 16, Grade: 10 },
    { Name: "Jazz", Age: 13, Grade: 8 },
    { Name: "Jada", Age: 13, Grade: 8 },
    { Name: "Jack", Age: 10, Grade: 5 }

];

const table = document.getElementById('myTable')
const tbody = table.getElementsByTagName("tbody")[0]
data.forEach(item => {
    const row = tbody.insertRow()
    Object.values(item).forEach(value => {
        const cell = row.insertCell();
        cell.appendChild(document.createTextNode(value))
    })
})