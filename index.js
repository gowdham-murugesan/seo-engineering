// Switch FROM and TO city

function switchText() {
    var obj1 = document.getElementById('fromCity').value;
    var obj2 = document.getElementById('toCity').value;

    var temp = obj1;
    obj1 = obj2;
    obj2 = temp;
    
    document.getElementById('fromCity').value = obj1;
    document.getElementById('toCity').value = obj2;
  }

// Airport

// var data = {
//   "MAA": "Chennai",
//   "BLR": "Bangalore",
//   "BWI": "Baltimore",
//   "IAD": "Dulles",
//   "HEF": "Manassas",
//   "AGR": "Agra",
//   "BEP": "Bellary",
//   "CCJ": "Calicut",
//   "IXC": "Chandigarh",
//   "BOM": "Mumbai",
//   "COK": "Cochin",
//   "CJB": "Coimbatore",
//   "DEL": "Delhi",
//   "IXM": "Madurai",
//   "IXE": "Mangalore",
//   "PNY": "Pondicherry",
//   "TRZ": "Tiruchirapalli",
//   "VGA": "Vijayawada",
//   "SXV": "Salem"
// };

// function getAirports() {
//   var arr = [];
//   for (var airport in data) {
//       if (data.hasOwnProperty(airport)) {
//           arr.push(airport + " - " + data[airport]);
//       }
//   }
//   return arr;
// }

function getAirports() {
  var arr = [];
  for (var temp in airports) {
      if (airports.hasOwnProperty(temp)) {
          arr.push(airports[temp].iata + " - " + airports[temp].name);
      }
  }
  return arr;
}

$("#fromCity, #toCity").autocomplete({
  source: getAirports()
});

// Redirecting URL

function redirectURL() {

  var fromname = document.getElementById('fromCity').value;
  var fromCityName = fromname.split("- ")[1];

  let result1 = airports.filter(obj => {
    return obj.name === fromCityName;
  })
  var fromCityCountry = result1[0].country;
  fromCityName = fromCityName.toLowerCase();
  fromCityName = fromCityName.replaceAll(' ','-');


  var toname = document.getElementById('toCity').value;
  var toCityName = toname.split("- ")[1];

  let result2 = airports.filter(obj => {
    return obj.name === toCityName;
  })
  var toCityCountry = result2[0].country;
  toCityName = toCityName.toLowerCase();
  toCityName = toCityName.replaceAll(' ','-');


  if (fromCityCountry == toCityCountry) {
    console.log("domestic");
    var countryLocation = "domestic";
  }
  else {
    console.log("international");
    var countryLocation = "international";
  }


  var trip = document.getElementById('trip').value;
  var fromdate = document.getElementById('datetoday').value;
  var todate = document.getElementById('toDate').value;
  var traveller = document.getElementById('traveller').value;

  console.log(trip);
  console.log(fromdate);
  console.log(todate);
  console.log(traveller);

  location.href = "flights/" + countryLocation + "/" + 'results?' + 'trip=' + trip + '&sourceCity=' + fromCityName + '&destinationCity=' + toCityName + '&fromDate=' + fromdate + '&toDate=' + todate + '&travellers=' + traveller;

  return false;

}

// From date

document.getElementById('datetoday').valueAsDate = new Date();

//Trip change

function ToCity(){

  var trip = document.getElementById('trip').value;

  if(trip == "OneWay") {
    document.getElementById("toDate").style.display = "none";
  }

  if(trip == "RoundTrip") {
    document.getElementById("toDate").style.display = "block";
  }

  if(trip == "MultiCity") {
    document.getElementById("toDate").style.display = "block";
  }
}


// Backup code

// var data = {
//   "MAA": { "city": "Chennai" },
//   "BLR": { "city": "Bangalore" },
//   "BWI": { "city": "Baltimore" },
//   "IAD": { "city": "Dulles" },
//   "HEF": { "city": "Manassas" },
//   "AGR": { "city": "Agra" },
//   "BEP": { "city": "Bellary" },
//   "CCJ": { "city": "Calicut" },
//   "IXC": { "city": "Chandigarh" },
//   "BOM": { "city": "Mumbai" },
//   "COK": { "city": "Cochin" },
//   "CJB": { "city": "Coimbatore" },
//   "DEL": { "city": "Delhi" },
//   "IXM": { "city": "Madurai" },
//   "IXE": { "city": "Mangalore" },
//   "PNY": { "city": "Pondicherry" },
//   "TRZ": { "city": "Tiruchirapalli" },
//   "VGA": { "city": "Vijayawada" },
//   "SXV": { "city": "Salem" }
// };

// function getAirports() {
//   var arr = [];
//   for (var airport in data) {
//       if (data.hasOwnProperty(airport)) {
//           arr.push(airport + " - " + data[airport].city);
//       }
//   }
//   return arr;
// }
