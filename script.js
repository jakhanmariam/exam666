const wshop = {
    name: "WMarket",
    phoneNumber: 8777298182,
    products: [
        { name: "memory stick", price: 11000, stock: "5"},
        { name: "macBook air", price: 700000, stock: "9"},
        { name: "mouse", price: 9000, stock: "19"},
        { name: "Iphone 11", price: 800, stock: "2"},
        { name: "setup", price: 1890000, stock: "3"},
    ]
}

console.log(eShop);



function changeShopName(eShop) {
    const newName = prompt("enter new name of the shop");
    if (newName) {
        eShop.name = newName;
        console.log(`new name: ${eShop.name}`);
    } else {
        console.log("name doesnt change");
    }
}


const eShop = { 
    name: "My Store",
    phoneNumber: "8777892891",
    products: [
        { productName: "book", category: "jw", price: 7000, stock: 70},
        { productName: "macBook", category: "fr", price: 30000, stock: 50},
        { productName: "setup", category: "mg", price: 52000, stock: 20},
        { productName: "Smartphone", category: "dr", price: 150000, stock: 18},
        { productName: "machine", category: "sr", price: 200000, stock: 7},
    ]
};

changeShopName(eShop);




function changePhoneNumber(PhoneNumber) {
    const newPhoneNumber = prompt("enter the phone number (new) ", PhoneNumber);
    if (newPhoneNumber === null || newPhoneNumber.trim() === "") {
        return PhoneNumber;
    }
    return newPhoneNumber.trim();
}

let PhoneNumber = "8777230178";
PhoneNumber = changePhoneNumber(PhoneNumber);


function listProductNames() {
    wshop.products.forEach(products => {
        alert(`${products.name}`);
    })
}

console.log(listProductNames());




function addProduct() {
    let productName = prompt("enter products name");
    let productTotal = prompt("enter products total");
    let productCategory = prompt("enter products category");

    
}

console.log(addProduct());


console.log(eShop);


function addProduct(products) {
    const name = prompt("enter products name");
    const price = parseFloat(prompt("enter the total"));
    const quantity = parseInt(prompt("enter the number"), 10);
    const category = prompt("enter the category");
    
    products.push({ name, price, quantity, category });
}

const products = [];
addProduct(products);
console.log(products);


































