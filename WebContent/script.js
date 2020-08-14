alert("javais working");
let nArr = [];
let pArr = [];
var btns = document.getElementsByClassName('addtocart');
let total = 0
let tax = 0;
let totalPlusTax = 0;
let items = pArr.length;



function addToCart(name, price) {
	nArr.push(name);
	pArr.push(price);
	console.log("add to cart works");
	console.log(nArr, pArr);
	printCart();
	createTableData(name);
}

function printCart() {
	total = 0
	tax = 0;
	totalPlusTax = 0;
	items = pArr.length;
	for (i = 0; i < pArr.length; i++) {
		total += pArr[i];
		tax += pArr[i] * .06;
		totalPlusTax = total + tax;

		console.log(total)
	}
	let finalCartItemsQuantity = document.getElementById("itemsQuantity");
	let finalCartTotal = document.getElementById("total");
	let finalCartTax = document.getElementById("tax");
	let finalCartTotalPlusTax = document.getElementById("totalPlusTax");

	finalCartItemsQuantity.innerHTML = items;
	finalCartTotal.innerHTML = total;
	finalCartTax.innerHTML = tax.toFixed(2);
	finalCartTotalPlusTax.innerHTML = totalPlusTax.toFixed(2);

}
function checkOutAlert() {
	let finaltotalPlusTax = document.getElementById("totalPlusTax");
	finaltotalPlusTax.innerHTML = totalPlusTax;
	console.log(totalPlusTax)
	alert("your total is: " + totalPlusTax.toFixed(2));
	cashOrCard();
}

function createTableData(productName) {
	let newPElement = document.createElement("p");
	let textnode = document.createTextNode(productName);
	newPElement.appendChild(textnode);
	document.getElementById("displayLocation").appendChild(newPElement)

}
function cashOrCard() {
	let payOption = prompt("Cash or card?").toLowerCase;
	if (payOption === "card") {
		let cardChoice = prompt('enter card number')
	}
	else {
		alert(`your total is ${totalPlusTax}`)
		let cashChoice = prompt("how much?");
		let bankRoll = parseInt(cashChoice);
		let change = bankRoll - totalPlusTax;
		alert("Your change is " + change.toFixed(2));



	}





}



