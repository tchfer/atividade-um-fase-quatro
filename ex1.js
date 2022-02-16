const myString =
  `<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br> </body> </html>`;

function findRatedCities(myString) {
  let ratedCities = [];
  let firstOccurrence = true;
  let firstCharacter = 0;
  for (var i = 0; i < myString.length; i++) {
    if (myString[i] === "*" && firstOccurrence) {
      firstOccurrence = false;
      firstCharacter = i + 1;
    } else if (myString[i] === "*" && firstOccurrence === false) {
      ratedCities.push(myString.substring(firstCharacter, i));
      firstOccurrence = true;
      firstCharacter = 0;
    }
  }
  console.log(ratedCities);
}

function findItineraryAItems(myString, show = true) {
  let itineraryA = [];
  let firstOccurrence = true;
  let firstCharacter = 0;
  for (var i = 0; i < myString.length; i++) {
    if (myString[i] === "#" && myString[i + 9] === "A") {
      firstOccurrence = false;
      firstCharacter = i;
    } else if (myString[i] === "#" && firstOccurrence === false) {
      itineraryA.push(myString.substring(firstCharacter, i));
      firstOccurrence = true;
      firstCharacter = 0;
    }
  }

  let itineraryAQuantity = [];
  for (var j in itineraryA) {
    let placesArray = [];
    placesArray.push(itineraryA[j]);
    let placesInItineraryA = [];
    let placesString = placesArray.toString().trim();
    let mySubstring = placesString.split("<br>");
    placesInItineraryA.push(mySubstring[1]);
    let placesInItineraryAString = placesInItineraryA.toString();
    let finalPlaces = placesInItineraryAString.replaceAll(";", ",").trim();
    if (show) console.log(finalPlaces);
    itineraryAQuantity.push(finalPlaces.split(","));
  }
  return itineraryAQuantity;
}

function findItineraryAItemsQuantity() {
  let itineraryQuantity = [];
  findItineraryAItems(myString, false).forEach((itineraryAQuantity, index) => {
    switch (index) {
      case 0:
        let saoPaulo = {
          name: "São Paulo",
          quantity: itineraryAQuantity.length,
        };
        itineraryQuantity.push(saoPaulo);
        break;
      case 1:
        let lasVegas = {
          name: "Las Vegas",
          quantity: itineraryAQuantity.length,
        };
        itineraryQuantity.push(lasVegas);
        break;
      default:
        let moscou = {
          name: "Moscou",
          quantity: itineraryAQuantity.length,
        };
        itineraryQuantity.push(moscou);
        break;
    }
  });
  console.log(itineraryQuantity);
}

function findItineraryCenter(myString) {
  let citiesInTheCenter = [];
  findItineraryAItems(myString, false).forEach((value, index) => {
    if (index == 0) {
      let city = {
        name: "São Paulo",
        places: value.join(","),
      };
      citiesInTheCenter.push(city);
    } else if (index == 1) {
      let city = {
        name: "Las Vegas",
        places: value.join(","),
      };
      citiesInTheCenter.push(city);
    }
  });
  console.log(citiesInTheCenter);
}
