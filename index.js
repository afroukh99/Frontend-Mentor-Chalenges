
const section = document.querySelectorAll("section")
const icon = document.querySelectorAll(".icon")
const desc = document.querySelectorAll(".desc")

section.forEach((ele, index) => {
    let clicked = true;
    const img = ele.children[0].children[1]
    img.addEventListener("click", () => {
        if (!clicked) {
            img.setAttribute("src", "assets/images/icon-plus.svg")
            clicked = true
        } else {
            img.setAttribute("src", "assets/images/icon-minus.svg")
            clicked = false
        }
        ele.lastElementChild.classList.toggle('disabled')
    })
})



