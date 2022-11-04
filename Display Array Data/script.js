let employees = [
    {id:101 , name:"Rahul", sal:50000},
    {id:102 , name:"Ravi",  sal:55000},
    {id:103 , name:"Satya", sal:65000},
    {id:104 , name:"Sagar", sal:50000}
];

function display(){
    let tbody = document.getElementById("abc")
    let rows = "";
        for (emp of employees) {
            rows = 
              rows +
                `<tr> 
                    <td> ${emp.id}</td>
                    <td> ${emp.name}</td>
                    <td> ${emp.sal}</td>
                 </tr>` ;  
        
        }
        tbody.innerHTML = rows;

}