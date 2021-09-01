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

var data = {
  "MAA": "Chennai",
  "BLR": "Bangalore",
  "BWI": "Baltimore",
  "IAD": "Dulles",
  "HEF": "Manassas",
  "AGR": "Agra",
  "BEP": "Bellary",
  "CCJ": "Calicut",
  "IXC": "Chandigarh",
  "BOM": "Mumbai",
  "COK": "Cochin",
  "CJB": "Coimbatore",
  "DEL": "Delhi",
  "IXM": "Madurai",
  "IXE": "Mangalore",
  "PNY": "Pondicherry",
  "TRZ": "Tiruchirapalli",
  "VGA": "Vijayawada",
  "SXV": "Salem"
};

function getAirports() {
  var arr = [];
  for (var airport in data) {
      if (data.hasOwnProperty(airport)) {
          arr.push(airport + " - " + data[airport]);
      }
  }
  return arr;
}

$("#fromCity, #toCity").autocomplete({
  source: getAirports()
});

// Redirecting URL

function redirectURL() {

  var from = document.getElementById('fromCity').value;
  var fromCity = from.split("- ")[1];
  fromCity = fromCity.toLowerCase();
  fromCity = escape(fromCity);

  var to = document.getElementById('toCity').value;
  var toCity = to.split("- ")[1];
  toCity = toCity.toLowerCase();
  toCity = escape(toCity);

  location.href = fromCity + '-' + toCity + '-flights.html';

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


//Another backup code

// function getAirports() {
//   var arr = [];
//   for (var temp in airports) {
//       if (airports.hasOwnProperty(temp)) {
//           arr.push(airports[temp].iata + " - " + airports[temp].name);
//       }
//   }
//   return arr;
// }
