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