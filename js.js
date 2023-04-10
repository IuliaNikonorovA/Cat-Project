const box = document.querySelector(".container");

function Card(cat, el=box){
const card = document.createElement("div");
  card.className = "card"

  const name = document.createElement("h3");
  name.innerText = cat.name + " / " + cat.username 
  card.append(name)
 
  const email = document.createElement("p");
  email.innerText = "Е-мейл: " + cat.email
  card.append(email)
 
  const city = document.createElement("p");
  city.innerText = "Город : " + cat.address.city
  card.append(city)
 
  const phone = document.createElement("p");
  phone.innerText = "Телефон : " + cat.phone
  card.append(phone)

  const info = document.createElement("div")
  info.className = "info"
   const pinfo = document.createElement("p")
   pinfo.innerText = cat.name + "/" + cat.address.city + "/" + cat.website 
   info.append(pinfo)
   


  // let form = document.forms["my"]
  // console.log(form)
 

  const btn = document.createElement("button")
  btn.innerHTML = 'Посмотреть';

  btn.addEventListener("click", e => {
  if (btn.innerHTML === 'Посмотреть'){
    info. style.display = "block";
    btn.innerHTML = 'Закрыть'}
    else {info. style.display = "none";
    btn.innerHTML = 'Посмотреть'
  }})



  const btn2 = document.createElement("button")
  btn2.innerHTML = 'Изменить';
  btn2.value = cat.id;
  btn2.addEventListener("click", e => {
  if (btn2.innerHTML === 'Изменить'){
    console.log(cat.id)

    cardUpd(cat.id)
   document.querySelector(".form-container").style.display="block"
 }
  //   else{
  //     document.querySelector(".form-container").style.display="none"
  //   btn2.innerHTML = 'Изменить'
  // }
  })
  card.append(btn, btn2, info)

  
  
  el.append(card)

}
  
let user = localStorage.getItem("people"); // имя пользователя, добавили хранилище
if (!user) {
    user = prompt("Ваше уникальное имя: ", "JN");
    localStorage.setItem("people", user);
}
let people = localStorage.getItem("people-data")

const url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = async (url) => {
    const response = await fetch(url);
    const answer = await response.json();
   // console.log(answer);
  for (let c of answer){
    Card(c,box)
  }
  
    localStorage.setItem("people-data", JSON.stringify(answer));

  }
  //localStorage.setItem('c', 'значение')

getUsers(url)
//function Add(data){
 // for(let c of data){
 //   Card(c,box)
 // }}
  

//const btn = document.querySelector('#btn');
//const url = 'https://jsonplaceholder.typicode.com/users';

//const getUsers = async (url) => /{
 //   const response = await fetch(url)
 //   const answer = await response.json()
 //   console.log(answer);
//}

   //    btn.addEventListener('click', getUsers(url))

 function openForm() {
   document.querySelector(".form-container").style.display="block" } 
 function closeForm() {
   document.querySelector(".form-container").style.display="none" }
  
  
const a  = localStorage.getItem("people-data")[/"name"/]
//console.log(a)
let keys = Object.keys(localStorage);
for(let key of keys) {
  alert(`${key}: ${localStorage.getItem(key)}`);
}

document.querySelector(".add-button").addEventListener("clicl", e => {
  e.stopPropagation;
document.querySelector(".form-container").style.display="block"})