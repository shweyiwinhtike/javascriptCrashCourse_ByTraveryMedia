/*//console.log(window);

//single element
const form = document.getElementById("my-form");
console.log(form);

console.log(document.querySelector(".container"));
console.log(document.querySelector("h1"));

//multiple element
console.log(document.querySelectorAll(".item"));
console.log(document.getElementByClassName(".item"));
console.log(document.getElementByTagName("li"));

const items = document.querySelectorAll(".items");

items.forEach((item) => console.log(item));

const ul = document.querySelector(".items");

//ul.remove();
//ul.lastElementChild.remove();
ul.firstElementChild.textContent = "hello";
ul.children[1].innerText = "hi";
ul.lastElementChild.innerHTML = "<i>hola</i>";

const btn = document.querySelector(".btn");
//btn.style.background = "red";
btn.addEventListener("click", (e) => {
  //click,mouseover.mouseout
  e.preventDefault();
  console.log("click");
  console.log(e.target.className);
  console.log(e.target.id);
  document.querySelector("#my-form").style.background = "#ccc";
  document.querySelector("body").classList.add("bg-dark");
  document.querySelector(".items").lastElementChild.innerHTML =
    "<h1>hello world</h1>";
});*/

const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector("#msg");
const userlist = document.querySelector("#users");

myForm.addEventListener("submit", onSubmit);
function onSubmit(e) {
  e.preventDefault();
  //console.log(nameInput.value);
  if (nameInput.value === "" || emailInput.value === "") {
    /*msg.classList.add("error");
    msg.innerHTML = "<h1>pls enter all fields</h1>";
    setTimeout(() => msg.remove(), 3000);*/
    alert("please fill out the field");
  } else {
    console.log("success");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    );
    userlist.appendChild(li);
    //clear field
    nameInput.value = "";
    emailInput.value = "";
  }
}
