const markAsRead = document.querySelector(".read-all");
const notificationDivs = document.querySelectorAll(".notification");
const count = document.querySelector(".count")
const paragraph = document.querySelectorAll(".unread")



count.innerHTML = paragraph.length || 0



const handleClick = () => {
    notificationDivs.forEach((div, index) => {
        div.classList.remove("active");
    })
    paragraph.forEach((p, idx) => {
        p.classList.remove("unread");
    })
    count.innerHTML = 0;
}




markAsRead.addEventListener("click", handleClick)