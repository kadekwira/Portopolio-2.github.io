
// DOM JS SKILLS
const container = document.querySelector(".container");
const jumbo = document.createElement("div");
jumbo.setAttribute("class","jumbo")
const span = document.createElement("span");
span.setAttribute("class","")
const imageJumbo = document.createElement("img");
const button = document.createElement("from");
button.setAttribute("action","");
button.setAttribute("target","_blank");
button.setAttribute("class","button");
const input = document.createElement("input");
input.setAttribute("type","submit");
input.setAttribute("value","Penjelasan...")
input.setAttribute("class","input");
button.appendChild(input);

imageJumbo.setAttribute("class","mainImg");
imageJumbo.setAttribute("src","");
jumbo.appendChild(span);
jumbo.appendChild(imageJumbo);
jumbo.appendChild(button);


const jumboSty= container.querySelector(".jumbo");

const cards = container.querySelector(".cards")
const card = container.querySelectorAll(".card")
const juduls =cards.querySelectorAll(".judul")
const image = cards.querySelectorAll(".image .img");
const from = cards.querySelectorAll(".tombol")





container.addEventListener("click",function(e){
    if(e.target.classList=="img"){
        document.querySelector(".container").insertBefore(jumbo,cards);
        imageJumbo.src=e.target.src

        span.classList=e.target.parentElement.previousElementSibling.classList
        const text =e.target.parentElement.previousElementSibling.innerHTML
        span.innerHTML=text;
        jumbo.querySelector(".judul").style.display="flex";
        const link = e.target.parentElement.nextElementSibling.action
        button.action=link;
    }

    else if(e.target.classList=="button"||e.target.classList=="input"){
        if(e.target.classList=="button"){
            var x = window.open(button.action,'_blank');
            x.focus();
        }
        else if(e.target.classList=="input"){
            const button = e.target.parentElement.action
            var x = window.open(button,'_blank');
            x.focus();
        }
    }
})



 