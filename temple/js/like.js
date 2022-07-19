const initApp = async () => {
    const temple = await getDataFromDB();
    renderTemples(temples);
    listenForLikes();
};

document.addEventListener("DOMContentLoaded" ,initApp);

const getDataFromDB = async () => {
    const temple =await fetch(
       json/temple.json
    );
    const jsonData = await temple.json();
    return jsonData.data;
};

const renderTemples = (temples => {
    const like = document.querySelector("like");
    const cardsArray = [];

    temples.forEach(temple => {
        const elemObj =createCardElements();
        const card = createTempleCard(elemObj, temple);
        cardsArray.push(card);
    });

    cardsArray.forEach(card => {
        like.appendChild(card);
    });
};


const createCardElements = () => {
    const article = document.createElement("article");
    const img = document.createElement("imageurl");
    const details = document.createElement("div");
    const like = document.createElement("div");
    const name = document.createElement("h2");
    return { article, img, details, like, name };
};

const createTempleCard = (elemObj, person) => {
    const { article, img, details, like, name } = elemObject;

    details.className = "details";
    like.classList.add("like", "like-no");

    name.textContent = `${temple.name}`;
    img.src = temple.imageurl;

    article.appendChild(img);
    details.appendChild(name);
    article.appendChild(details);
    article.appendChild(like);
    return article;
};

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
