fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
const countryContainer = document.getElementById('country-container');
const displayCountry = country =>
{
    country.forEach(country =>
    {
        const countryName = country.name;
        const capitalName = country.capital;
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        const countryShortInfo = `
        <h1>${ countryName }</h1>
        <p>${ capitalName }</p>
        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop" id="detail-info" onclick="getInfo('${ countryName }')">Show More</button>
        `;
        countryDiv.innerHTML = countryShortInfo;
        countryContainer.appendChild(countryDiv);
    });
}

const getInfo = country =>
{
    const url = `https://restcountries.eu/rest/v2/name/${ country }`
    fetch(url)
        .then(res => res.json())
        .then(data => showInfo(data[0]))
}

const showInfo = country =>
{
    const moreDetailDiv = document.getElementById('more-detail')
    const modalTitle = document.querySelector('.modal-title');
    modalTitle.innerHTML = country.name;
    const countryBriefInfo = `
    <img src="${ country.flag }" alt="">
    <p>Capital: ${ country.capital }</p>
    <p>Region: ${ country.region }</p>
    <p>Population: ${ country.population }</p>
    <p>Language: ${ country.languages[0].name }</p>
    `;
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = countryBriefInfo;

}

