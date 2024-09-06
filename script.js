let btn=document.getElementById("submit");
let userinput=document.getElementById("username");
let userpass=document.getElementById("password");
let checkbox=document.getElementById("checkbox");
let userdata={};
let existing=false;

btn.addEventListener("click",(e)=>{
  e.preventDefault();
  if(checkbox.checked && userinput.value !== "" && userpass.value !== ""){
    existing=true;
    userdata={
      username:userinput.value,
      password:userpass.value
    }
    localStorage.setItem("userdata",JSON.stringify(userdata));
    
    alert("Logged in as")
   }
   if(existing){
    let btn2=document.createElement("button");
    btn2.id="existing";
    btn2.innerText="Login as existing user.";
    document.body.appendChild(btn2)
    btn2.addEventListener("click",()=>{
       alert("Logged in as" )
    })
  }
   
})



