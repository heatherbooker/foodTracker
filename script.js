var myOrder = [];

function Food(itemName, itemPrice) {
    this.item = itemName;
    this.price = itemPrice;
}

var aFood = new Food('grapes', 10)
myOrder.push(aFood);


$(document).ready(function() {

    var hasSalad = false;
    var hasSandwich = false;
    var hasSoup = false;
    var hasSweet = false;
    var hasSteak = false;
    var hasStew = false;

    $('#salad').click(function() {
        var aSalad = new Food('salad', 4);
        $('.saladBar').show();
        hasSalad = true;
    });

    $('#sandwich').click(function() {
        var aSammie = new Food('sandwich', 4);
        $('.sandwichBar').show();
        hasSandwich = true;
    });

    $('#soup').click(function() {
        var aSoup = new Food('soup', 3);
        $('.soupBar').show();
        hasSoup = true;
    });

    $('#sweet').click(function() {
        var aSweet = new Food('sweet', 4);
        $('.sweetBar').show();
        hasSweet = true;
    });

    $('#steak').click(function() {
        var aSteak = new Food('steak', 4);
        $('.steakBar').show();
        hasSteak = true;
    });

    $('#stew').click(function() {
        var aStew = new Food('stew', 4);
        $('.stewBar').show();
        hasStew = true;
    });

    $('#submit').click(function() {

        $('#receipt').show();

        if (hasSalad) {
            $(addFoodCategory('Salad:'));
            var saladChoices = $('#SALAD').val();
            $(makeFoodList(saladChoices));
        };
        if (hasSteak) {
            $(addFoodCategory('Steak:'));
            var steakChoices = $('#STEAK').val();
            $(makeFoodList(steakChoices));
        };
        if (hasSandwich) {
            $('#receipt').css('height', '400px');
            $(addFoodCategory('Sandwich:'));
            var sandwichChoices = $('#SANDWICH').val();
            $(makeFoodList(sandwichChoices));
        };
        if (hasSoup) {
            $('#receipt').css('height', '530px');
            $(addFoodCategory('Soup:'));
            var soupChoices = $('#SOUP').val();
            $(makeFoodList(soupChoices));
        };
        if (hasStew) {
            $('#receipt').css('height', '700px');
            $(addFoodCategory('Stew:'));
            var stewChoices = $('#STEW').val();
            $(makeFoodList(stewChoices));
        };
        if (hasSweet) {
            $('#receipt').css('height', '620px');
            $(addFoodCategory('Sweet:'));
            var sweetChoices = $('#SWEET').val();
            $(makeFoodList(sweetChoices));
        };
        $(printReceipt);
    });

});

var foodList = "";

function addFoodCategory(category) {
    if (foodList === "") {
        foodList = '<strong>' + category + '</strong><br>';
    } else {
        foodList += '<br><strong>' + category + '</strong><br>';
    }
}

function makeFoodList(arrayOfFoods) {
    var foodChoices = arrayOfFoods.join('<br>');
    foodList += foodChoices;
    console.log(foodList);
}

function printReceipt() {
    document.getElementById('receipt').innerHTML = foodList;
}