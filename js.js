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
    //console.log(btn)
    info. style.display = "block";
    btn.innerHTML = 'Закрыть'}
    else {info. style.display = "none";
    btn.innerHTML = 'Посмотреть'
  }

   
  })
  card.append(btn, info)

  
  
  el.append(card)

}
  
 

const url = 'https://jsonplaceholder.typicode.com/users';
const getUsers = async (url) => {
    const response = await fetch(url);
    const answer = await response.json();
    console.log(answer);
  for (let c of answer){
    Card(c,box)
  }
};
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
    document.getElementById("myForm").style.display = "block"; } 
 function closeForm() {
    document.getElementById("myForm").style.display = "none";}