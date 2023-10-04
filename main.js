// Q1:
// Use the array of shop items provided and present the the information in the following format

const shopItems=[{
    id:1,
    name:"Air Max 97",
    price:130.00,
    desc:"The design of the shoe is commonly thought to be inspired by the bullet trains of Japan, but the design was inspired by mountain bikes. ",
    category:"shoes"
},{
    id:2,
    name:"Adidas NMD R1",
    price:128,
    desc:"New-wave classics, with a timeless vintage design: men's NMD R1 gear is the ultimate go-anywhere shoe. Vibrant styles and soft cushioning will have you gliding through life, wherever it may take you.",
    category:"shoes"
},{
    id:3,
    name:"Gucci Oversize T-shirt with Interlocking G",
    price:580,
    desc:"The now recognizable oversize Gucci T-shirt continues to evolve with each new collection, the Interlocking G print is influenced by an '80s design from the archives. Streetwear continues to be a defining feature of Gucci's collections and is often juxtaposed by tailored separates.",
    category:"shirts"
},{
    id:4,
    name:"Nike Sportswear Club",
    price:18.97,
    desc:"The Nike Sportswear Club T-Shirt is made with our everyday cotton fabric and a classic fit for a familiar feel right out of the bag. An embroidered Futura logo on the chest provides a signature Nike look.",
    category:"shirts"
},{
    id:5,
    name:"Spanx Flare Jeans, Vintage Indigo",
    price:148,
    desc:"These 70s inspired flare jeans are the perfect wear everywhere with anything style. Designed with premium stretch denim, high-rise coverage and hidden core shaping technology, this jean puts a new twist on a retro silhouette.",
    category:"pants"
},{
    id:6,
    name:"Bonobos Premium Stretch Jeans",
    price:69,
    desc:"Resilient stretch denim made incredibly soft. Yes, jeans can be unbelievably comfortable.",
    category:"pants"
}]
// ======================================================================
function displayItems(shopItems) {
    shopItems.forEach(item => {
        console.log(`Name: ${item.name}
Price: $${item.price}
About: ${item.desc}
Category: ${item.category}
        `)
    });
}
displayItems(shopItems)

// ======================================================================
// ======================================================================
// ======================================================================
// Question 2:
// Write a function that parses through the below object and displays all of their
// favorite food dishes as shown:

// Note:  The solution should work on any object with values of strings, numbers, objects, and arrays not just this specific object

const hwPerson = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

// // ======================================================================
console.log()

function displayFoods(food) {
  for (const k in food) {
    if (Array.isArray(food[k])) {
      console.log(`${k} contains:`);
      food[k].forEach((v) => {
        console.log(`${v}`);
      });
    } else if (typeof food[k] === "object") {
      displayFoods(food[k], `${k} contains:\n`);
    } else {
      console.log(`${k} contains:\n${food[k]}`);
    }
  }
}

displayFoods(hwPerson);


// ```
// pizza contains:
// Deep Dish
// South Side Thin Crust
// tacos contains:
// Anything not from Taco bell
// burgers contains:
// Portillos Burgers
// ice_cream contains:
// Chocolate
// Vanilla
// Oreo
// shakes contains:
// oberwise contains:
// Chocolate
// dunkin contains:
// Vanilla
// culvers contains:
// All of them
// mcDonalds contains:
// Sham-rock-shake
// cupids_candies contains:
// Chocolate Malt
// ```

// ======================================================================
// ======================================================================
// ======================================================================
// Question 3
// 1:
// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
console.log()

function makeNegative(num) {
    if (num <= 0) {
        return num
    }
    else {
        return num * -1
    }
}

console.log(makeNegative(42))
console.log(makeNegative(0))
console.log(makeNegative(-42))

// 2:
// https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript
console.log()

function greet(name) {
    if(name === "Johnny") {
        return "Hello, my love!";
}   else {
        return "Hello, " + name + "!";
}
}

console.log(greet("Johnny"))
console.log(greet("Tommy"))

// 3:
// https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript
console.log()

function likes(names) {
    if (names.length === 0) {
        return "no one likes this"
    }
    else if (names.length === 1) {
        return `${names[0]} likes this`
    }
    else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    }
    else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
  }

console.log(likes(['Alex']))
console.log(likes(['Alex', 'Jacob']))
console.log(likes(['Alex', 'Jacob', 'Mark']))
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']))