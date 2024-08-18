const input_box=document.getElementById("input-box");
const list=document.getElementById("list");
function add_task(){
  if(input_box.value===''){
    alert("You have to type something!");
  }  
  else{
    let li =document.createElement("li");
    li.innerHTML=input_box.value;
    list.appendChild(li);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
  }
  input_box.value=" ";
  save_data();
}
list.addEventListener("click",function(e){
 if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    save_data();
 }
 else if(e.target.tagName==="SPAN"){
    e.target.parentElement.remove();
    save_data();
 }
},false);
function save_data(){
    localStorage.setItem("data",list.innerHTML);
}
function showTask(){
    list.innerHTML=localStorage.getItem("data");
}
showTask();