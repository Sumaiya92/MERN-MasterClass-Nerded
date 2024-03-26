
const addTask = () => {
    console.log("first")
let name=document.getElementsByClassName("name")[0].value;
let contact = document.getElementById("contact");
const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");

console.log(contact)

// let contactValue = parseInt(contact); 
// console.log(contactValue);
let gender=document.getElementsByClassName("gender");
let selectedgender
let selectedplan
let plan=document.getElementsByClassName("plan") 
let tables = []

// console.log(name)


// console.log(plan)


console.log("tables "+ tables)
for(var i =0; i<gender.length;i++)
{
    if(gender[i].checked)
    {
      selectedgender = gender[i].value
      break
    }
}


for(var i =0; i<plan.length;i++)
{
    if(plan[i].checked)
    {
      selectedplan = plan[i].value
      break
    }
}
console.log(contact.value)

// console.log(selectedgender)
    // Get the values from the form
    let task = {
        name: name,
        number: contact.value,
        gender: selectedgender,
        membership: selectedplan
     }

     tbodyEl.innerHTML += `
<tr>
    <td>${name}</td>
    <td>${contact.value}</td>
    <td>${selectedgender}</td>
    <td>${plan.value}</td>
    <td><button class="deleteBtn">Delete</button></td>
</tr>
`;

      console.log("task " + task)

      function onDeleteRow(e) {
        if (!e.target.classList.contains("deleteBtn")) {
          return;
        }

        const btn = e.target;
        btn.closest("tr").remove();
      }

      formEl.addEventListener("submit",addTask);
      tableEl.addEventListener("click", onDeleteRow);

    

//      tables=[...tables,task]
//      console.log("tables added "+ tables)

//      tables.forEach((row)=>{
//         console.log(row)
//      })
//  
}
