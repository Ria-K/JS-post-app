
var message = document.getElementById("message"); // textarea id where post is written
var form = document.getElementById("form-submit"); //form id to do form validation
var s = document.getElementById("status"); //div id status, to let user know if the textarea is blank
var posts = document.getElementById("posts"); //div id for adding new posts

form.addEventListener("submit", (T)=>{
    T.preventDefault();
    checkStatus();

})


// checks if the message textarea is empty or not when the user submits the form
function checkStatus (){
    
    if(message.value==""){
        console.log("it's empty");
        s.innerHTML = "Error- Blank item cannot be added";
        s.style.color = "red";
        s.style.fontWeight = "bolder";        
        s.style.fontStyle = "italic";
    }

    else{
        s.innerHTML = "Item added";
        s.style.color = "green";
        s.style.fontWeight = "bolder";
        s.style.fontStyle = "italic";
        //CSS styling to message
        
        addItem(); //adds item to right div
    }
 }

var data = ["text"];
console.log(data);

 //adding Item to the post lists.
 function addItem(){

    data = [message.value];
    console.log(data);

    posts.innerHTML += `
    <div>
        <p> ${data} </p>
        <span class ="option">
        <i class ="edit" onclick = "editPost(this)"> Edit</i>
        <i class= "delete" onclick = "deletePost(this)"> Delete </i>
    </span>
    </div>
    `

    message.value = "";

 };


 function editPost(e){
    message.value = e.parentElement.previousElementSibling.innerHTML;
    
  e.parentElement.parentElement.remove();
 }


 

 function deletePost(e){
    console.log("deleting");
    e.parentElement.parentElement.remove();
 }
