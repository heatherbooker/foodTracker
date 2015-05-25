var myOrder = [];

function Food(itemName, itemPrice) {
    this.item = itemName;
    this.price = itemPrice;
}

var aFood = new Food('grapes', 10)
console.log(aFood);
myOrder.push(aFood);
console.log(myOrder);


$(document).ready(function() {

    $('.saladMenu').click(function() {
        var aSalad = new Food('salad', 4);
        console.log(aSalad);
        $('#saladMenu').show();
    });

    $('.sandwichMenu').click(function() {
        var aSammie = new Food('sandwich', 4);
        $('#sandwichMenu').show();
    });

    $('.soupMenu').click(function() {
        var aSoup = new Food('soup', 3);
        $('#soupMenu').show();
    });

    $('.sweetMenu').click(function() {
        var aSweet = new Food('sweet', 4);
        $('#sweetMenu').show();
    });

    $('.steakMenu').click(function() {
        var aSteak = new Food('steak', 4);
        $('#steakMenu').show();
    });

    $('.stewMenu').click(function() {
        var aStew = new Food('stew', 4);
        $('#stewMenu').show();
    });

});