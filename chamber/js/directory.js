const jsonData= require('./json/directory.json');
const cards = document.querySelector('.cards');

fetch(jsonData)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const business = jsonObject['business'];
    business.forEach(displayBusiness);
  });

  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement('section.b');
    let h2 = document.createElement('h2');
    let h3 = document.createElement('h3');
    let h4 = document.createElement('h4');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${business.name}`

    //Change the textContent property of the h3 element to contain the prophets birthdate
    h3.textContent = `${business.address}`

    //Change the textContent property of the h3 element to contain the prophets birthplace
    h4.textContent = `${business.phone}`
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order} Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(h3);
    card.appendChild(h4);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
  }