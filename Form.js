const myForm = document.forms.my;
const formUpd = document.forms.upd;
const body = {};
box.append(myForm)
box.append(formUpd)

function openForm() {
    document.querySelector(".form-container").style.display="block" ;
   } 
const btnAddcat = document.querySelector(".btn-add")
    btnAddcat.addEventListener("click", e => {
    e.preventDefault();
    addCat();
})

function cardUpd(a){
   let cat = cats.filter(c => c.id === a)
     formUpd[0].placeholder=cat.map(e => e.name)
     formUpd[0].value=cat.map(e => e.name)
     formUpd[1].placeholder=cat.map(e => e.id)
     formUpd[1].value=cat.map(e => e.id)
     formUpd[2].placeholder=cat.map(e => e.image)
     formUpd[3].placeholder=cat.map(e => e.age)
     formUpd[4].placeholder=cat.map(e => e.rate)
     formUpd[6].placeholder=cat.map(e => e.description);
     document.querySelector(".form-container-upd").style.display="block";
     const btnUpdcat = document.querySelector(".btn-upd")
     btnUpdcat.addEventListener("click", e => {
     e.preventDefault();
     updCat(a);
})
}

function closeForm(){
    document.querySelector(".form-container").style.display="none"
    document.querySelector(".form-container-upd").style.display="none"
    myForm.reset();
    formUpd.reset()
}
