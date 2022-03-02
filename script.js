const socials = document.querySelector(".open-share")
const shareBtn = document.getElementById("share")
const triangle=document.querySelector(".triangle-down")

shareBtn.addEventListener("click", () => {
    socials.classList.toggle("clicked")
    triangle.classList.toggle("clicked")
})
