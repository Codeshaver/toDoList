let form = document.getElementById("addForm");
let submit = document.getElementById("add");
let itemList = document.getElementById("items");


form.addEventListener('submit', addItem);


itemList.addEventListener("click", removeItem);

function removeItem(e) {

    if (e.target.classList.contains("del")) {
        if(confirm("Are you sure you want to delete permanently?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }

}


function addItem(e){
    e.preventDefault();

let newItem = document.getElementById("item").value;
let li = document.createElement("li");
li.className = "list-group-item";
li.appendChild(document.createTextNode(newItem));

//attach new data to li

itemList.appendChild(li);

// add delete button
let deleteBtn = document.createElement("button") // skipped classes adding 09:00 mark on DOM 4
deleteBtn.className = "del";

deleteBtn.appendChild(document.createTextNode("X"));

li.appendChild(deleteBtn);



//add strikethrough button
let crossBtn = document.createElement("input")
crossBtn.setAttribute("type", "checkbox"); 
crossBtn.className = "cross";

crossBtn.appendChild(document.createTextNode("Complete"));

// adds line-through button to new li elements

li.appendChild(crossBtn);

// added the line-through function when checkbox input changes, not sure about the e.target protocol still

crossBtn.addEventListener("change", strikeThrough);

function strikeThrough(e){
    const chore = e.target.parentElement;
    if(e.target.checked){
      chore.style.textDecoration = "line-through";
    }else {
      chore.style.textDecoration = "none";
    }
  }

}











