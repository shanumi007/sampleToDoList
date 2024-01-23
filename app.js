let ipt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = ipt.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(ipt.value);
    ipt.value = "";
});
/*
let delBtns = document.querySelectorAll(".delete");
for(let delBtn of delBtns) {
    delBtn.addEventListener("click", function() {
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
}
*/
/* Since, the above process doesn`t delete newly added list items because eventListeners only listens for items
already present and doesn`t listen for newly added items. So, we use Event Delegation in which eventListeners 
are active for parentElement and thus are active for newly added list items also.
*/
ul.addEventListener("click", function (event) {
    if(event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("deleted");
    }
});
