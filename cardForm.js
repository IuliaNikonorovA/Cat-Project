const myForm = document.forms.my;
console.log(myForm)
const peopleobj=JSON.parse(people)
const body = {};
  
function cardAdd(){
 for (let i = 0; i < myForm.elements.length; i++) {
    const inp = myForm.elements[i];
   console.log(inp);
//     // на сервер отправляются name=value
//     console.log(inp.name);
//     console.log(inp.value);
    if (inp.name) { // элемент формы имеет атрибут name (не является кнопкой)
        if (inp.type === "checkbox") {
            body[inp.name] = inp.checked;
        } else {
            // body[inp.name] = !isNaN(inp.value) ? +inp.value : inp.value;
            body[inp.name] = inp.value;
        }
    }  }
}
    box.append(myForm)
 //const a = localStorage.getItem("people-data")



function cardUpd(a){
    // for(let key in peopleobj){
    //     if(key.id===a){
    //         console.log(peopleobj[key].id)
    //      b= peopleobj[key];}}
       myForm[0].placeholder=peopleobj[`${a-1}`].name;
       myForm[1].placeholder=peopleobj[`${a-1}`].username;
       myForm[2].placeholder=peopleobj[`${a-1}`].email;
       myForm[3].placeholder=peopleobj[`${a-1}`].id;
       myForm[4].placeholder=peopleobj[`${a-1}`].phone;
}
function closeForm(){
    document.querySelector(".form-container").style.display="none"
    myForm[0].placeholder="name";
    myForm[1].placeholder="username";
    myForm[2].placeholder="email";
    myForm[3].placeholder="id";
    myForm[4].placeholder="phone";
}
