import '../css/style.css'
import selfie from "../img/selfie.jpg"
import githubLogo from "../img/github-original.svg"
import linkedinLogo from "../img/linkedin-plain.svg"
import nycPhoto from "../img/NYC.jpg"

let headshot = document.querySelector(".headshot")
let githubIcon = document.querySelectorAll(".github-icon")
let linkedinIcon = document.querySelectorAll(".linkedin-icon")
let nyImage = document.querySelector(".ny-photo")
headshot.src = selfie
nyImage.src = nycPhoto

githubIcon.forEach((icon) =>{
    icon.src = githubLogo
})
linkedinIcon.forEach((icon) =>{
    icon.src = linkedinLogo
})