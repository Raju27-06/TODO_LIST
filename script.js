const inputBox = document.getElementById("input-box");
const  listContainer= document.getElementById("list-container");
let btn = document.getElementsByTagName("button")[0];
btn.addEventListener("click",()=>{
    if(inputBox.value===''){
     alert("You must write something");
    }
    else{
     let li = document.createElement("li");
     li.textContent = inputBox.value;
     console.log(li);
     listContainer.appendChild(li);
     let span = document.createElement("span");
     span.textContent = "\u00d7";
     li.appendChild(span);
    }
    inputBox.value="";
    saveData();
})

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==='LI')
    {
        e.target.classList.toggle("checked");
        saveData()
    }
else if(e.target.tagName==='SPAN')
{
    e.target.parentElement.remove();
    saveData()
}


},false)

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();