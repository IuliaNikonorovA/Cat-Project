const author = "julianikonorova";
const path = `https://cats.petiteweb.dev/api/single/${author}`

let user = localStorage.getItem("cat_12");

// if (!user){
//     user = prompt("Ваше имя: ", "julianikonorova");
//     localStorage.setItem("cat_12", user);
// }

let cats = localStorage.getItem("cats-data");

if(cats){
    try{
        cats = JSON.parse(cats);
        for(let cat of cats){
        Card(cat, box);
        }
    } catch(err) {
        if(err){
        cats = null;
    }
    } 
    }else{
        showCat()}

function showCat(){
    fetch(path + "/show")
           .then(function(res) {
               if (res.statusText === "OK") {
                   return res.json();
               }
           })
           .then(function(data) {
               if (!data.length) {
                   box.innerHTML = "<div class=\"empty\">У вас пока еще нет питомцев</div>"
               } else {
                   cats = [...data];
                   localStorage.setItem("cats-data", JSON.stringify(data));
                   for (let c of data) {
                       Card(c, box);
                   }
               }
           })
       };


function addCat() {
    for (let i = 0; i < myForm.elements.length; i++) {
        const inp = myForm.elements[i];
        if (inp.name) { // элемент формы имеет атрибут name (не является кнопкой)
            if (inp.type === "checkbox") {
                body[inp.name] = inp.checked;
            } else {
                // body[inp.name] = !isNaN(inp.value) ? +inp.value : inp.value;
                body[inp.name] = inp.value;
            }
        }  }
    fetch(path + "/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
    .then(res => {
        if (res.ok) {
            myForm.reset();
            Card(body, box);
            cats.push(body);
         //   console.log(cats)
            localStorage.setItem("cats-data", JSON.stringify(cats));
        } else {
            return res.json();
        }
    })
    .then(err => {
        if (err && err.message) {
            alert(err.message);
        }
    });
    document.querySelector(".form-container").style.display="none"
   // location.reload()
};


function deleteCard(id, box) {
        if (id) {
            fetch(`${path}/delete/${id}`, {
                method: "delete"
            })
                .then(res => {
                    if (res.status === 200) {
                        box.remove();
                        //box.innerHTML = "";
                        console.log(cats)
                        cats = cats.filter(c => c.id !== `${id}`) 
                        console.log(cats)
                      
                       // cats.forEach(cat => {
                         //Card(cat, box)})
                        localStorage.setItem("cats-data", JSON.stringify(cats));
                        
                        }
                })
        }
    }
    
function updCat(id, el) {
        if(id) {
            for (let i = 0; i < formUpd.elements.length; i++) {
                const inp = formUpd.elements[i];
                if (inp.name) { 
                    if (inp.type === "checkbox") {
                        body[inp.name] = inp.checked;
                    } else {
                        body[inp.name] = inp.value;
                    }
                }  }
               }
        fetch(`${path}/update/${id}`, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            formUpd.reset();
            cats = cats.filter(c => c.id !== `${id}`) 
            cats.push(body)
            console.log(cats)
            box.innerHTML = "";
            cats.forEach(cat => {
             Card(cat, box)})
                console.log(cats)
            localStorage.setItem("cats-data", JSON.stringify(cats))
            })
    .then(err => {
        if (err && err.message) {
            alert(err.message);
        }
    });
    document.querySelector(".form-container-upd").style.display="none"
};


// function Like(id, like){
// if (id) {
//     fetch(`${path}/update/${id}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({favorite: !favorite})
//     })
//     .then(res => {
//         if (res.status === 200) {
//             like.classList.toggle("fa-solid");
//             like.classList.toggle("fa-regular");
//         //    cats = cats.localeCompare(c => {
//           //      if (c.id === cat.id) {
//            //         c.favorite = !cat.favorite;
//                    // localStorage.setItem("cats-data", JSON.stringify(cats));
//                    cats = cats.filter(c => c.id !== cat.id)
//                    c.favorite = !cat.favorite;
//                    console.log(cats)
                 
//                    localStorage.setItem("cats-data", JSON.stringify(cats));
//                 }
//                 return c;
//             })
//         }
//     }


