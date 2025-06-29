let quoationData = [];

function addItem() {
    const d = $("#newItemDescription").val();
    const u = $("#newItemPPU").val();
    const q = $("#newItemQty").val();
    quoationData.push({
        description: d,
        quantity: parseFloat(q),
        unitPrice: parseFloat(u)
    });
    $('#exampleModal').modal('hide');
    renderTable();
}

function renderTable() {
    const data = quoationData;
    let subTotal = 0;
    data.forEach(item => {
        subTotal += item.unitPrice * item.quantity;
    });
    const vat = (subTotal * 0.07).toFixed(2);
    const total = (subTotal * 1.07).toFixed(2);

    $('#subTotal').html(subTotal.toFixed(2));
    $('#vat').html(vat);
    $('#total').html(total);

    $('.data-row').remove();
    const rows = data.map((item, i) => {
        const amount = item.unitPrice * item.quantity;
        return `<tr class="data-row">
                    <td class="text-center">${item.quantity}</td>
                    <td class="data">
                        <button onclick="deleteItem(${i})">❌</button>
                        ${item.description}
                    </td>
                    <td class="text-right">${item.unitPrice.toFixed(2)}</td>
                    <td class="text-right">${amount.toFixed(2)}</td>
                </tr>`;
    });
    $('#quotationTable tbody').append(rows.join(''));
}

function deleteItem(i) {
    quoationData.splice(i, 1);
    renderTable();
}

$(document).ready(function () {
    const today = new Date().toDateString();
    $('#quotationDate').text(today);
});
