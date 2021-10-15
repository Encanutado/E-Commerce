//Pedido de informacion al JSON conteniendo los elementos del carrito precargados.
document.addEventListener("DOMContentLoaded", function(e){
    
    cartData();
})

let cartList;

const cartData =  async() => {
    const cartInfo = await getJSONData(CART_Desafiate);
    const cartInfoData = cartInfo.data;
    const manejable = cartInfoData.articles;
    appendCartItems(manejable);
    cartList = manejable;
}









//Almaceno las secciones del HTML destinadas al carrito en variables para appendear contenido. 
let cartItems = document.getElementById('cartItems');
let cartPayment = document.getElementById('cartPayment'); 
let total;
let subtotal = manejable.unitCost;

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
            <input class="cartero" data-index-number="`+i+`" type="number" placeholder="`+cartItem.count+`"
            min="0"><span class="d-block ml-5 font-weight-bold">`+cartItem.unitCost+`</span><i class="fa fa-trash-o ml-3 text-black-50"></i></div>
        </div>
        <hr>
        <p>Total:`+total+`</p>
        `

        cartItems.innerHTML = htmlContentToAppend;
    }
    let quantity  = document.querySelectorAll('input.cartero');
        for (cant of quantity){
            cant.addEventListener("input",function(e){
            let input = e.target
            let actualValue = input.value;
            let dataquantity = input.dataset.indexNumber;
            cartList[dataquantity].count = +actualValue; 
})
}}
