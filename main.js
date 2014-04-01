var menu = {
	total: 0,
	
	order: function(price){
		this.total += price;
	},
	ordering: function(item, quantity) {
        switch(item) {
            case "1":
                this.order(4.99 * quantity);
				this.lastOrder = quantity.toString() + " Hamburger(s)- $" + 4.99 * quantity;
				break;
            case "2":
                this.order(0.93 * quantity);
				this.lastOrder = quantity.toString() + " French Fries- $" + 0.93 * quantity;
                break;
            default:
                alert("Sorry, this is not an item.");
                break;
        }
	}
	
};

//Reciept
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
m=checkTime(m);
s=checkTime(s);
function checkTime(i){
if (i<10){
  i="0" + i;
}
return i;
}

document.write("Reciept - Hotshot Shack" + "<br/>" + "<br/>" + "Time: " + h + ":" + m + ":" + s);
/*
function startOrder() {
var item = prompt("What do you want to order?");

var quantity = prompt("How many?");

menu.ordering(item, quantity);
}

startOrder();

while (menu.lastOrder === undefined) {
    alert("Please try again.");
    var item = prompt("What do you want to order?");

    var quantity = prompt("How many?");

    menu.ordering(item, quantity);
}

var confirmation = confirm("Anything else?");

while(menu.confirm === true) {
    startOrder();
    confirmation = confirm("Anything else?");
}
*/
document.write("<br/>Orders:<br/>");
document.write(menu.lastOrder + "<br/><br/>");

var tax = menu.total * (8/100);

var newTax = tax.toString();
tax = newTax.substr(0,4);
tax = parseFloat(tax);

document.write("Tax: 8%: $" + tax);

menu.total = menu.total + tax;
document.write("<br />" + "Total: $" + menu.total);
