import '../css/style.css'
import selfie from "../img/selfie.jpg"
import githubLogo from "../img/github-original.svg"
import linkedinLogo from "../img/linkedin-plain.svg"
import nycPhoto from "../img/NYC.jpg"
import weatherPhoto from "../img/weather-app.png"
import signupPhoto from "../img/signup-form.png"
import todoPhoto from "../img/todo-list.png"
import adminPhoto from "../img/admin-dashboard.png"
import calculatorPhoto from "../img/calculator.png"
import landingPagePhoto from "../img/landing-page.png"
import openNewLogo from "../img/open-in-new.svg"
import phoneLogo from "../img/phone.svg"
import emailLogo from "../img/email-outline.svg"

let headshot = document.querySelector(".headshot")
let githubIcon = document.querySelectorAll(".github-icon")
let linkedinIcon = document.querySelectorAll(".linkedin-icon")
let nyImage = document.querySelector(".ny-photo")
let weatherImage = document.querySelector(".weather")
let signupImage = document.querySelector(".signup")
let todoImage = document.querySelector(".todo")
let adminImage = document.querySelector(".admin")
let calculatorImage = document.querySelector(".calculator")
let landingImage = document.querySelector(".landing")
let openNewIcon = document.querySelectorAll(".open-new")
let phoneIcon = document.querySelector(".phone")
let emailIcon = document.querySelector(".email")
headshot.src = selfie
nyImage.src = nycPhoto
weatherImage.src = weatherPhoto
signupImage.src = signupPhoto
todoImage.src = todoPhoto
adminImage.src = adminPhoto
calculatorImage.src = calculatorPhoto
landingImage.src = landingPagePhoto
phoneIcon.src = phoneLogo
emailIcon.src = emailLogo

githubIcon.forEach((icon) =>{
    icon.src = githubLogo
})
linkedinIcon.forEach((icon) =>{
    icon.src = linkedinLogo
})
openNewIcon.forEach((icon) =>{
    icon.src = openNewLogo
})

console.log("GitHub Logo Path:", githubLogo);
console.log("LinkedIn Logo Path:", linkedinLogo);