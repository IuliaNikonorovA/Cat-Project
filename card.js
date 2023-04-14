const box = document.querySelector(".container");


function Card(cat, el=box){
const card = document.createElement("div");
   card.className = "card"

  const divnamelike = document.createElement("div")
    divnamelike.className = "divnamelike"

    const name = document.createElement("h3");
    name.innerText = cat.name 

    const like = document.createElement("i");
    like.className = "fa-heart card__like";
    like.classList.add(cat.favorite ? "fa-solid" : "fa-regular");

   divnamelike.append(name, like)
   card.append(divnamelike)

  const divimage = document.createElement("div");
    divimage.className = "divimage";
    if (!cat.image) {
      const imgdefault = document.createElement("img");
      imgdefault.src = "/images/default.jpeg";
      imgdefault.className = "imgdefault";
      divimage.append(imgdefault);
     }   else {
      divimage.style.backgroundImage = `url(${cat.image})`}
    card.append(divimage)

  const info = document.createElement("div")
    info.className = "info"

   info.addEventListener("click", e => {
    info. style.display = "none"
   })

   if(cat.rate>0){
    for(let i=1;i<=cat.rate;i++){
        const rate = document.createElement("i");
        rate.className = "fa-regular fa-star";
        info.append(rate)}}

   const pinfoname = document.createElement("p")
     pinfoname.innerText = "Имя: " + cat.name;
   info.append(pinfoname)

   if (cat.age) {
    const pinfoage = document.createElement("p")
    pinfoage.innerText = "Возраст: " +cat.age
    info.append(pinfoage)}

   const pinfodescription = document.createElement("p")
    pinfodescription.innerText = cat.description
  
   info.append(pinfodescription)
   
  const btnInfo = document.createElement("i")
    btnInfo.className = "fa-solid fa-circle-info card-info";

   const divBtn = document.createElement("div");
    divBtn.className = "divBtn";

    btnInfo.addEventListener("click", e => {
    info. style.display = "block";})
 
  const btnUpd = document.createElement("i")
   btnUpd.className = "fa-solid fa-pen-to-square btn-Upd"
   btnUpd.value = cat.id;
  
   btnUpd.addEventListener("click", e => {
   e.stopPropagation;
   cardUpd(btnUpd.value);})
 
  const trash = document.createElement("i");
   trash.className = "fa-solid fa-trash-can card_trash";
   trash.addEventListener("click", e => {
    e.stopPropagation();
    deleteCard(cat.id, card);
  })

  divBtn.append(btnInfo,btnUpd, trash)
  card.append(divBtn, info)

  el.append(card)
  box.append(card)
}




