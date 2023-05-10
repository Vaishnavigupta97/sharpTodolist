var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filters = document.getElementById("filter");

// form submit event 
form.addEventListener('submit', addItem);

// delete event 
itemList.addEventListener('click', removeItem);

// filterEvent
filters.addEventListener('keyup', filterItems);

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

// filterItem 
function filterItems(e){
   var text = e.target.value.toLowerCase();
//    var items 
   var items = itemList.getElementsByTagName('li');
//    convert to an array 
   Array.from(items).forEach(function(element){
    var itemName = element.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    }
   });
}


// store input value in local storage 
form.addEventListener("click", storeInput);
function storeInput(e){
e.preventDefault();    
var item = document.getElementById("item").value;
localStorage.setItem('show', `${item}`);
}





// window.onload = function() {

//     // Check for LocalStorage support.
//     if (localStorage) {
  
//       // Add an event listener for form submissions
//       document.getElementById('addForm').addEventListener('submit', function() {
//         // Get the value of the name field.
//         var name = document.getElementById('item').value;
  
//         // Save the name in localStorage.
//         localStorage.setItem('name', name);
//       });
  
//     }
  
//   }
