let regularHeart=document.getElementById("regularHeart");
let solidHeart = document.getElementById("solidHeart")


regularHeart.addEventListener('click',()=>{
       
         regularHeart.classList.remove("active")
         regularHeart.classList.add("hidden")
         solidHeart.classList.remove("hidden")
         solidHeart.classList.add("active")
              
})


solidHeart.addEventListener('click',()=>{
       
    regularHeart.classList.remove("hidden")
    regularHeart.classList.add("active")
    solidHeart.classList.remove("active")
    solidHeart.classList.add("hidden")
         
})

let addCart = document.getElementById("addtoCart")
let removeCart = document.getElementById("RemoveCart")

addCart.addEventListener('click',()=>{
    addCart.classList.remove("active")
    addCart.classList.add("hidden")
    removeCart.classList.remove("hidden")
    removeCart.classList.add("active")
})

removeCart.addEventListener('click',()=>{
    addCart.classList.remove("hidden")
    addCart.classList.add("active")
    removeCart.classList.remove("active")
    removeCart.classList.add("hidden")
})