const requestURL= "https://hulett5757.github.io/wdd230/chamber/Json/data.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    const homearray= getRandomItem(business);
    const membership = jsonObject[`business.membership`]
    homearray.forEach(displayBusiness);
  });

  function getRandomItem(arr) {

    var gold = [];
    var member = [];
    // get random index value
   
   for(let x =0; x<arr.length; x++) {
        const y = arr[x]
        if (y.membership !== "Bronze"){
            gold.push(y)
        }
   }
    // get random item
    
    let i = 0
    while (i<3)  {
        const randomIndex = Math.floor(Math.random() * gold.length);
        const item = gold[randomIndex];
        i++;
        member.push(item)
    } 
   
    return (member);
}



  function displayBusiness(business) {
    // Create elements to add to the document
    if (business.membership == "Bronze") {
        return;
    }
    else {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let icon = document.createElement('img');
    let h6 = document.createElement('h6');
  
    // Change the textContent property of the h2 element to contain the business name
    h2.textContent = `${business.name}`

    //Change the textContent property of the h3 element to contain the business address
    h3.textContent = `${business.address}`

    //Change the textContent property of the h3 element to contain the business phone
    h4.textContent = `${business.phone}`

    //Change the textContent property of the h3 element to contain the business email
    h5.textContent = `${business.email}`

    //Change the textContent property of the h3 element to contain the business membership
    h6.textContent = `${business.membership}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    icon.setAttribute('src', business.imageurl);
    icon.setAttribute('alt', `Icon for ${business.name}`);
  
    // Add/append the section(card) with the various elements 
    card.appendChild(icon);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    card.classList.add("sectionbus")
    card.classList.add("imgbus")
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }
}