'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

////////////////////////////////////////////////////////////////
//  Old Version of AJAX calls ---> XML HTTP request
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/portugal');
// request.send();
// console.log(request.responseText);  
 
request.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html =`
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000 ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages.value}</p>
            <p class="country__row"><span>💰</span>${data.currencies.Euro.name}</p>
        </div>
    </article>
    `

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.getElementsByClassName.opaciity = 1;
})

// const request = new XMLHttpRequest();
// request.open('GET', 'https://sample.com/source/pathe/here');
// request.send();
// console.log(request.responseText); // Will output a lot of data 

// request.addEventListener('load', function(){
//     console.log(this.responseText);
    
//     const data = JSON.parse(thi.responseText); // JSOn is basically just a big string of text. so we need to cnvert that to object
// })
     

// const getCountryData = function(country){
//     fetch(`https://sample.com/source/pathe/here/${country}`)
//         .then(response =>  response.json())
//         .then(data => renderCountry(data[0]));
// };

// getCountryData('portugal');

// +++++++++++++++++++++++++++Chaining promises++++++++++++++++++++++++++ 

const getCountryData = function(country){
    // Country 1
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
        .then(response =>  response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbour = data[0].borders[0]

            if(!neighbour) return;

            // Country 2
            return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
        })
        .then(response => response.json())
        .then(data => renderCountry(data,'neighbour')) 
};
 
getCountryData('portugal');