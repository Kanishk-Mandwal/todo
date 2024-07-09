// let todo =[];

// let req = prompt("please enter your request");

//  while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }
//     if(req == "list"){
//         for(let i=0;i<=todo.length;i++){
//             console.log( i ,todo[i]); 
//         }
//     }
//     else if (req == "add"){
//          let task = prompt("please enter the task you want to add");
//          todo.push(task);
//          console.log("task added");
//     }
//     else if(req == "delete"){
//       let index = prompt("plese enter the index of task you want to delete");
//         todo.splice(index,1);
//         console.log("task deleted");
//     }
//     else{
//         console.log("wrong request,please retry ");
//     }

    
//     req = prompt("please enter your request");

//  }
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
     let item = document.createElement("li");
     item.innerText = inp.value;

     let delbtn = document.createElement("button");
     delbtn.innerText = "Remove";
     delbtn.classList.add("delete");

     ul.appendChild(item);
     item.appendChild(delbtn);
    inp.value="";

});

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("clck",function(){
        let par = this.parentElement;
             par.remove();
                })
}
