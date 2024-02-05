
const section = document.querySelectorAll("section")
const icon = document.querySelectorAll(".icon")
const desc = document.querySelectorAll(".desc")




section.forEach((ele, index) => {
    let clicked = true;
    const header = ele.children[0]
    const img = header.children[1]
    header.addEventListener("click", () => {
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



