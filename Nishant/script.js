// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Get the current date
    var currentDate = new Date();

    // Format the date (you can customize the format as needed)
    var formattedDate = currentDate.toDateString();

    // Get the element where you want to display the date
    var dateDisplayElement = document.getElementById("dateDisplay");

    // Set the content of the element to the formatted date
    dateDisplayElement.textContent = "Invoice Date: " + formattedDate;
});

// -------------------------------------------------------

var itemsData = [];

function addItem() {
    var itemName = document.getElementById("itemName").value;
    var itemQuantity = document.getElementById("itemQuantity").value;
    var itemPrice = document.getElementById("itemPrice").value;

    if (itemName === "" || itemQuantity === "" || itemPrice === "") {
        alert("Please fill in all fields");
        return;
    }

    var newItem = {
        name: itemName,
        quantity: parseInt(itemQuantity),
        price: parseFloat(itemPrice)
    };

    itemsData.push(newItem);

    document.getElementById("itemName").value = "";
    document.getElementById("itemQuantity").value = "";
    document.getElementById("itemPrice").value = "";

    updateInvoiceList();
    updateTotalPrice();
}

function removeItem(index) {
    itemsData.splice(index, 1);
    updateInvoiceList();
    updateTotalPrice();
}

function updateInvoiceList() {
    var invoiceItemsDiv = document.getElementById("invoiceItems");
    invoiceItemsDiv.innerHTML = "";

    itemsData.forEach(function (item, index) {
        var itemDiv = document.createElement("div");
        itemDiv.innerHTML = `<li>
                          <strong>${item.name}</strong> - Quantity: ${item.quantity}, Price: $${item.price}
                          <button class="removeButton" onclick="removeItem(${index})">Remove</button>
                        </li>`;
        invoiceItemsDiv.appendChild(itemDiv);
    });

    document.getElementById("downloadBtn").style.display = itemsData.length > 0 ? "block" : "none";
}

function updateTotalPrice() {
    var totalAmount = itemsData.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0);

    document.getElementById("totalAmount").textContent = totalAmount.toFixed(2);
}

function downloadInvoice() {
    let element = document.getElementById('all')

    html2pdf().from(element).save();
}

// $("#itemForm").append("<div style='display: none;'>This content is hidden</div>");

function downloadBill() {
    document.getElementById("removeButton").style.display = "none";

    downloadInvoice();
}
