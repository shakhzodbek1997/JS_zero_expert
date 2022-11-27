'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');


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



const renderError = function(msg){
    countriesContainer.insertAdjacentText('beforeend', msg);
    countriesContainer.style.opacity = 1;
}

const getJSON = function(url, errorMsg = 'Something Went Wrong!'){
    return fetch(url).then(response => {
        if(!response.ok) throw new Error(`${errorMsg} (${response.status})`);

        return response.json();
    });
}

const get3Countries = async function(c1, c2, c3){
    try{
        const [data1] = await getJSON(`https://restcountries.eu/rest/v2/name/${c1}`);
        const [data2] = await getJSON(`https://restcountries.eu/rest/v2/name/${c2}`);
        const [data3] = await getJSON(`https://restcountries.eu/rest/v2/name/${c3}`);

        console.log([data1.capital, data2.capital, data3.capital])

    }catch(err){
        console.log(err)
    }
};

get3Countries('portugal', 'canada', 'germany')