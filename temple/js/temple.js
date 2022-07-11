const requestURL= "https://hulett5757.github.io/wdd230/temple/json/temple.json";
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['temple'];
    business.forEach(displayTemple);
  });

  function displayTemple(temple) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let h5 = document.createElement('h5');
    let image = document.createElement('img');
    let h6 = document.createElement('h6');
  
    // Change the textContent property of the h2 element to contain the business name
    h2.textContent = `${temple.name}`

    //Change the textContent property of the h3 element to contain the business address
    h3.textContent = `${temple.address}`

    //Change the textContent property of the h3 element to contain the business phone
    h4.textContent = `${temple.phone}`

    //Change the textContent property of the h3 element to contain the business email
    h5.textContent = `${temple.email}`

    //Change the textContent property of the h3 element to contain the business membership
    h6.textContent = `${temple.services}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    image.setAttribute('src', temple.imageurl);
    image.setAttribute('alt', `Image for ${temple.name}`);
  
    // Add/append the section(card) with the various elements 
    card.appendChild(image);
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(h5);
    card.appendChild(h6);
    /*card.classList.add("sectionbus")
    card.classList.add("imgbus")*/
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }