const countButton = document.querySelector("#count");

countButton.addEventListener("click", (e) => {
  e.preventDefault();
  const currencyName = document.querySelector("#selectCurrency").value;
  const currencyAmount = document.querySelector("#amount").value;
  if (!currencyAmount) {
    document.querySelector(".error").textContent = "Wartość nie może być pusta";
  } else {
    document.querySelector(".error").textContent = " ";
    fetch(`https://api.nbp.pl/api/exchangerates/rates/a/${currencyName}`)
      .then((response) => response.json())
      .then((data) => {
        document.querySelector("#total").innerHTML =
          "To" +
          " " +
          (data.rates[0].mid * currencyAmount).toFixed(2) +
          " " +
          "PLN";
      })
      .catch((error) => {
        document.querySelector(".error").textContent =
          "Pobieranie danych nie powiodło się";
      });
  }
});
