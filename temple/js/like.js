const initApp = async () => {
    listenForLikes();
};

document.addEventListener("DOMContentLoaded" ,initApp);


const listenForLikes = () => {
    const likes = document.querySelectorAll(".like");
    likes.forEach(like => {
        like.addEventListener("click", (event) =>{
            event.target.classList.toggle("like-no");
            event.target.classList.toggle("like-yes");
            if (event.target.classList.contains("like-yes")) {
                console.log("Saving Favorite...");
                getFaveData(event.target);
                console.log("Removing Favorite...");
                getFaveData(event.target);
            }
        })
    })
}

const getFaveData = (elem) => {
    const parent = elem.parentElement;
    const img = parent.querySelector("img").src;
    const headng = parent.querySelector("h2").textContent;
    const name = parent.querySelector("name").textContent;
    const faveObj = {img, name};
    console.log(faveObj);
}
