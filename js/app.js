const button = document.querySelector('#add-btn');
const bitcoins = document.querySelector('#item-value');
const selected = document.querySelector('.selector');
const totalSpan = document.querySelector('#total-cash');

let total = 0;
button.addEventListener('click', (event) =>{

    const value = selected.options[selected.selectedIndex].value;
    console.log(value);

    let BitcoinsValue = bitcoins.value;

    let url = `https://api.coindesk.com/v1/bpi/currentprice/eur.json`;
    console.log(url);

    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.bpi.EUR);

        /*value = `${code.value}` ;
        total+= `${rate.value}`;
        totalSpan.innerHTML = total;
        let text = `BitCoins: ${BitcoinsValue}; Currency: ${value}; Description: ${description.value}; Rate: ${rate.value}`;
        document.createTextNode(text);*/
    })
    .catch(error => {
        console.log(error);
    });

    event.preventDefault();
});