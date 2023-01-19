const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calculate');
const outputNewPrice = document.querySelector('#newPrice');

btn.addEventListener('click', calculatePriceWithDiscount);

const couponsObj = {
    'CUPON1': 30,
    'CUPON2': 25,
    'CUPON3': 15,
}



function calculatePriceWithDiscount() {
    // (P * (100 - D)) / 100

    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value.toUpperCase();

    if (!price || !coupon) {
        outputNewPrice.innerText = `Please type the values for calculation`;
        return;
    }

    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        outputNewPrice.innerText = 'The coupon is not valid';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    outputNewPrice.innerText = "The new price with discount is $" + newPrice;
}
