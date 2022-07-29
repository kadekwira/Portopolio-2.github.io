const medsos = document.querySelector(".medsos");
const link = medsos.querySelectorAll("a")
const ig = medsos.querySelector(".igApp")
const git = medsos.querySelector(".gitApp")
const email = medsos.querySelector(".emailApp")


ig.addEventListener("mouseover",function() {
    ig.setAttribute("class","igHover")
    ig.src="../assets/image/ig-white.png";
})
ig.addEventListener("mouseout",function() {
    ig.removeAttribute("class","igHover");
    ig.setAttribute("class","igApp")
    ig.src="../assets/image/ig-pink.png";
})

git.addEventListener("mouseover",function() {
    git.setAttribute("class","gitHover")
    git.src="../assets/image/github-white.png";
})
git.addEventListener("mouseout",function() {
    git.removeAttribute("class","gitHover");
    git.setAttribute("class","gitApp")
    git.src="../assets/image/github-blue.png";
})

email.addEventListener("mouseover",function() {
    email.setAttribute("class","emailHover")
    email.src="../assets/image/email-white.png";
})
email.addEventListener("mouseout",function() {
    email.removeAttribute("class","emailHover");
    email.setAttribute("class","emailApp")
    email.src="../assets/image/email-orange.png";
})


