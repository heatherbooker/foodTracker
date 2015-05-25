var myOrder = [];

function Food(itemName, itemPrice) {
    this.item = itemName;
    this.price = itemPrice;
}

var aFood = new Food('grapes', 10)
console.log(aFood);
myOrder.push(aFood);
console.log(myOrder);

function getInfo() {
    var name = document.getElementById('foodName').value;
    var cost = document.getElementById('foodPrice').value;
    console.log(name, cost);
}