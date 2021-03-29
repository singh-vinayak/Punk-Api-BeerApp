// variables
const urlBase = "https://api.punkapi.com/v2/beers";

async function getBeers() {
    // fetch
    const beerPromise = await fetch(urlBase);
    const beers = await beerPromise.json();
    // console.log(beers[0])
    // render data
    const beersDiv = document.querySelector('.beers');

    let beerHtml = "";

    // Add the rest of the beer data to the HTML template.

    beers.forEach(beer => {
        beerHtml += `
        <div class='beer-wrapper card'>
            <div class='beer'>
                <img class='beer__img' src="${beer.image_url}">
                <h3>${beer.name}</h3>
                <span class='beer__info'>
                    <span>ABV: ${beer.abv}%</span>
                    <span>IBU: ${beer.ibu}</span>
                </span>
            </div>
        </div>
       `;
    });

    beersDiv.innerHTML = beerHtml;
}

// initial get
getBeers();