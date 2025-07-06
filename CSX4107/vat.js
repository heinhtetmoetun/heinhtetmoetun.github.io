function calculateVat() {
    const base_price = $("#base_price").val();
    const vatRate = 7;
    // Validate input
    const vat = (base_price * vatRate) / 100;
    console.log(base_price,vatRate,vat);
    // Display the result in the HTML element with id "result"
    $("#result").html(
        `<p>Base Price: ${base_price}</p>
         <p>VAT Rate: ${vatRate}%</p>
         <p>VAT Amount: ${vat.toFixed(2)}</p>
         <p>Total Price: ${(parseFloat(base_price) + vat).toFixed(2)}</p>`
    )
}

function reverseVat() {
    const total_price = $("#total_price").val();
    const vatRate = 7;

    const base_price = (total_price * 100) / (100 + vatRate);
    const vat = total_price - base_price;
    console.log(total_price, vatRate, base_price, vat);

    $("#re").html(
        `<p>Total Price: ${total_price}</p>
         <p>VAT Rate: ${vatRate}%</p>
         <p>Base Price: ${base_price.toFixed(2)}</p>
         <p>VAT Amount: ${vat.toFixed(2)}</p>`
    )
}

//Arjam method
function calculateReverseVat() {
    const pv = $("#priceWithVat").val();
    const vatRate = 7;
    const basePrice = pv / (1 + (vatRate / 100));
    const vat = pv - basePrice;
    console.log(pv, vatRate, basePrice, vat);
    $("#reverseResult").html(
        `<p>Total Price: ${pv}</p>
         <p>VAT Rate: ${vatRate}%</p>
         <p>Base Price: ${basePrice.toFixed(2)}</p>
         <p>VAT Amount: ${vat.toFixed(2)}</p>`
    )
}