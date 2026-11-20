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
        category: "Foods",
        discription: "Bread - An Idiot - Bread"
    },
    coffee :{
        name: "Late-Lazy Caffe",
        Price: "500px",
        category: "Drinks",
        discription: "We are lazy n Will be late, The coffee is good though"
    },
    cookies:{
        name: "Cookies crumbs",
        Price: "50px",
        category: "Foods",
        discription: "Gaybin ate all the cookies, Only crumbs left"
    },
    choco:{
        name: "Sour Hot Choco",
        Price: "450px",
        category: "Drinks",
        discription: "Chocolate Hot Milk, Milk got expired"
    },
    gum:{
        name: "Sweeten chewing gums",
        Price: "60px",
        category: "Specials",
        discription: "Pre-chewed gums with added sugar"
    },
    pastry:{
        name: "Dental Pastry",
        Price: "300px",
        category: "Foods",
        discription: "Pastries with Toothpase for frosting, Ricky ate the frosting"
    },

    }
    
const itemcard = document.querySelectorAll("#itemcard")
var itemcate = null
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
var activebutton = null
const catobutton = document.querySelectorAll("#control button")
catobutton.forEach(button =>{
    button.addEventListener("click",()=>{
        itemcard.forEach(card =>{
            const itemid = card.dataset.item
            const items = menu[itemid]
            if(button.textContent === items.category){
                card.classList.remove("vanish")
            
            }
            else{
                card.classList.add("vanish")
            }
            if(button.textContent === "All"){
                card.classList.remove("vanish")
            }
        })
        if(activebutton){
            activebutton.classList.remove("active")
        }
        activebutton = button
        activebutton.classList.add("active")
    })
})