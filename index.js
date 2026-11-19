const cartbutton = document.querySelector("#upper-div button")
let cartactive = false
const cart = document.getElementById("cart")
cartbutton.addEventListener("click",()=>{
    if(!cartactive){
        cartactive = true
        cartbutton.classList.add("active")
        cart.classList.add("active")

    }
    else{
        cartbutton.classList.remove("active")
        cartactive = false
        cart.classList.remove("active")
    }
})

const menu = {
    sandwich :{
        name: "pixl IDIOT Sandwich",
        Price: "300px",
        category: "food",
        discription: "Bread - An Idiot - Bread"
    },
    coffee :{
        name: "Late-Lazy Caffe",
        Price: "500px",
        category: "drink",
        discription: "We are lazy n Will be late, The coffee is good though"
    },
    cookies:{
        name: "Cookies crumbs",
        Price: "50px",
        category: "food",
        discription: "Gaybin ate all the cookies, Only crumbs left"
    },
    choco:{
        name: "Sour Hot Choco",
        Price: "450px",
        category: "drink",
        discription: "Chocolate Hot Milk, Milk got expired"
    },
    gum:{
        name: "Sweeten chewing gums",
        Price: "60px",
        category: "Special",
        discription: "Pre-chewed gums with added sugar"
    },
    pastry:{
        name: "Dental Pastry",
        Price: "300px",
        category: "food",
        discription: "Pastries with Toothpase for frosting, Ricky ate the frosting"
    },

    }
    
const itemcard = document.querySelectorAll("#itemcard")

console.log(itemcard)
itemcard.forEach(item =>{
    const itemid = item.dataset.item
    const items = menu[itemid]
    const itemname = item.querySelector("#itemname")
    const itemdis = item.querySelector("#itemdis")
    const itemimg = item.querySelector("#itemcard img")
    
    itemname.textContent = items.name
    itemdis.textContent = items.discription
    console.log(item)
})
