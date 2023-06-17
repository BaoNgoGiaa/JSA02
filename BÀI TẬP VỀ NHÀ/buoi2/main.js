let cart = ["Grape", 15];

// for (let i = 0; i < cart.length; i++) {
//     console.log(cart[i]);
// }
// cart.push("Banana",15);
// console.log(cart);
// // console.log("I have " + cart[1]+cart[0]);
let i = 1;
// while (i <= cart[1]) { 
//     console.log("Grape " + i);
//     i++;
// };
// do {
//     console.log("Grape " + i);
//     i++;
// } while (i <= cart[1]) 
for (let i = 1;i <= cart[1];i++) {
    console.log("Grape " + i)
}
var mydog = {
    "name":"ngao",
    "leg":4,
    "friend":["everything !"]
}
// mydog.fur = "brown";
// console.log(mydog);
// delete mydog.friend
// console.log(mydog);
// console.log(mydog.friend[0])
let products = {
    data: [
        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3455500959841_f71631b2ce35e8032e4207941a5b602e_9ed5fecfe9b445bca6554bb101274011_master.jpg"
        },

        {
            productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
            price: "34",
            image: "https://product.hstatic.net/1000378196/product/z3455501297595_3f6b310d318f366593980e24ddf77594_24a562f8db3f48bb99f9fe5f04c6455b_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
            price: "35",
            image: "https://product.hstatic.net/1000378196/product/z3466712209076_ae4321ce93b91a2070108a17a0654259__1__7f92c24d6bf748b5b765d90067d3377e_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ BLACK",
            price: "22",
            image: "https://product.hstatic.net/1000378196/product/z3436335150524_9bdd740660202d7d596d0b03e6f4f059_e820e35d18084faa8f779264ab6f2892_master.jpg"
        },

        {
            productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
            price: "38",
            image: "https://product.hstatic.net/1000378196/product/z3436335020793_d8e1fb26890b00d378c4b4d0cf797573_0363c49ecdb641d49ddfa56d65e1ac4f_master.jpg"
        },

        {
            productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
            price: "42",
            image: "https://product.hstatic.net/1000378196/product/z3393718306380_9cb83d1efba39fe0bb0c7e4ba74f9024_e46acded798a4d7b97a0261c1a2048cf_master.jpg"
        }
    ]
}
console.log(products.data[0].image)