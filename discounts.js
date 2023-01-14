const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculate');
const pNewPrice = document.querySelector('#newPrice');

btn.addEventListener('click', calculatePriceWithDiscount);

function calculatePriceWithDiscount() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if (!price || !discount) {
        pNewPrice.innerText = `Please type the values for calculation`;
        return;
    }

    if (discount >= 100) {
        pNewPrice.innerText = `We never lose money!!!, try again`;
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pNewPrice.innerText = `The price is ${price} with discount of ${discount},\
    the new price is ${newPrice}`;
}
