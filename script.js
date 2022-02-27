const socials = document.querySelector(".open-share")
const shareBtn = document.getElementById("share")
const unclick= document.getElementById("unclick")

shareBtn.addEventListener("click", () => {
    socials.classList.toggle("clicked")
})

unclick.addEventListener("click", () => {
    socials.classList.remove("clicked")
})

