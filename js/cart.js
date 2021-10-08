//Pedido de informacion al JSON conteniendo los elementos del carrito precargados.
document.addEventListener("DOMContentLoaded", function(e){
     getJSONData(CART_INFO_URL)
            .then((result) => result.data)
            .then((cartInfo) =>{
                const cartData = cartInfo.articles;
                console.log(cartData);
                appendCartItems(cartData);
});
});



//Almaceno las secciones del HTML destinadas al carrito en variables para appendear contenido. 
let cartItems = document.getElementById('cartItems');
let cartPayment = document.getElementById('cartPayment'); 

function appendCartItems(arr){
    let htmlContentToAppend = '';
    
    for(let i = 0; i < arr.length; i++){
        let cartItem = arr[i];

        htmlContentToAppend += `
        <div class="d-flex justify-content-between align-items-center mt-3 p-2 items rounded">
            <div class="d-flex flex-row"><img class="rounded" src=`+cartItem.src+` width="40">
                <div class="ml-2"><span class="font-weight-bold d-block">`+cartItem.name+`</span></div>
            </div>
                <div class="d-flex flex-row align-items-center"></div><label for="tentacles">Cantidad:</label>
            <input type="number" id="tentacles" name="tentacles" placeholder="`+cartItem.count+`"
            min="0"><span class="d-block ml-5 font-weight-bold">`+cartItem.unitCost+`</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
        </div>
        <hr>
        `

        cartItems.innerHTML = htmlContentToAppend;
    }
}
