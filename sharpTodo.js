var form = document.getElementById("addForm");
var itemList = document.getElementById('items');

// form submit event 
form.addEventListener('submit', addItem);

// delete event 
itemList.addEventListener('click', removeItem);

// add item 
function addItem(e){
    e.preventDefault();
    // give input value 
    var newItem = document.getElementById('item').value;
    // create new li element 
    var li = document.createElement('li');
    // Add class 
    li.className = 'col-4 mx-3 list-group-item';
    // Add text node with input value 
    li.appendChild(document.createTextNode(newItem));
    // create del button element 
    var deleteBtn = document.createElement("button");
    // add class to del button 
    deleteBtn.className = "col-4 mx-3 btn btn-danger btn-sm float-right delete";
    // append text Node 
    deleteBtn.appendChild(document.createTextNode("X"));
    // append button to li 
    li.appendChild(deleteBtn);
    // append li to list 
    itemList.appendChild(li);
    // create edit button 
    var editBtn = document.createElement("button");
    // add class to edit button 
    editBtn.className = "col-4 btn btn-success btn-sm float-right edit";
    editBtn.appendChild(document.createTextNode("Edit"));
    li.appendChild(editBtn);
}   

// remove item 
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}