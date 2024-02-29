const emailInput = document.querySelector("input")
const subscribeButton = document.querySelector("button")
const errorMsg = document.querySelector(".error-msg")
const rightDiv = document.querySelector(".right")
const formArticle = document.querySelector(".form-article")
const messageArticle = document.querySelector(".message-article")
const validEmail = document.querySelector("b")
const dismissButton = document.querySelector(".dismiss")


const emailPattern = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)

subscribeButton.addEventListener("click", () => {

    if (emailInput.value.length === 0) {
        emailInput.classList.add("active")
        errorMsg.classList.add("active")
        errorMsg.innerHTML = "Field is required"
    }
    else if (!emailPattern.test(emailInput.value)) {
        emailInput.classList.add("active")
        errorMsg.classList.add("active")
        errorMsg.innerHTML ="Valid email required"
    } else {
        emailInput.classList.remove("active")
        errorMsg.classList.remove("active")
        formArticle.classList.add("disabled")
        messageArticle.classList.remove("disabled")  
        validEmail.innerHTML =emailInput.value
    }

})


dismissButton.addEventListener("click", ()=> {
    formArticle.classList.remove("disabled")
    messageArticle.classList.add("disabled")  
    emailInput.value = ""
})