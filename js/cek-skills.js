
const cek = document.createElement("div");
cek.setAttribute("id","cek");

const cancel = document.createElement("div");
cancel.setAttribute("class","cancel");
const imageCancel = document.createElement("img");
imageCancel.setAttribute("src","../assets/image/cancel.gif");
cancel.appendChild(imageCancel);
imageCancel.style.cursor="pointer"

const profile = document.createElement("div");
profile.setAttribute("class","image");
const imageProf = document.createElement("img");
imageProf.setAttribute("src","../assets/image/profile.jpeg");
profile.appendChild(imageProf);


avatar.addEventListener("click",()=>{
    cek.appendChild(cancel);
    cek.appendChild(profile)
    document.querySelector("#main").appendChild(cek);
    document.querySelector(".container").style.filter="blur(50px)";
})
imageCancel.addEventListener("click",()=>{
    cek.remove(cek);
    document.querySelector(".container").style.filter="blur(0px)";
})
