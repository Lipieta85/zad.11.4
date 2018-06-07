function Phone(brand, price, color, model) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.model = model;
    
}

Phone.prototype.printInfo = function() {
    console.log("The phone brand is " + this.brand + ", model is " + this.model + ", color is " + this.color + " and the price is " + this.price + ".")
};


var SamsungGalaxyS6 = new Phone("Samsung", 2000, "black", "Galaxy S6")
var iPhone6S = new Phone("Apple", 2250, "silver", "iPhone6S");
var OnePlusOne = new Phone("OnePlus", 1500, "blue", "One");


SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();
