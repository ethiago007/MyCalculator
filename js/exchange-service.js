// let myHeaders = new Headers();
// myHeaders.append("apikey", "vRImlXyTC4RP1c0TBix7X3uSrFkIv5FK");

// let requestOptions = {
//   method: 'GET',
//   redirect: 'follow',
//   headers: myHeaders
// };

// fetch("https://api.apilayer.com/exchangerates_data/convert?to=&from=&amount=", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));
function callApi() {
  let currency1 = $("select#currencyselection1").val();
  let currency2 = $("select#currencyselection2").val();
  let amount = $("input#exchangeamount").val();

  let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/5fa2b59917be2c3fd304a52e/pair/${currency1}/${currency2}/${amount}`;

    request.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
      }
    };

    request.open("GET", url, true);
    request.send();

   function getElements(response) {
    if(amount === ""){
      $('#currency7').text(" ");
    } else {
      $('#currency7').text(` ${response.conversion_result}`);
    }
    };
  };

  // class ExchangeService {  
  //   static getRates(amount,currency1,currency2) {
  //     return fetch(`https://v6.exchangerate-api.com/v6/${process.env.API-KEY}/pair/${currency1}/${currency2}/${amount}`)
  //       .then(function(response) {
  //         if (!response.ok) {
  //           throw Error(response.statusText);
  //         }
  //         return response.json();
  //       })
  //       .catch(function(error) {
  //         return error;
  //       })
  //   }
  //   }


  // // http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=[YOUR-API-KEY-HERE]