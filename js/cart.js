//Pedido de informacion al JSON conteniendo los elementos del carrito precargados.
document.addEventListener("DOMContentLoaded", function(e){
    cartData();
})

let cartList;
let subTotal;


const cartData =  async() => {
    const cartInfo = await getJSONData(CART_Desafiate);
    const cartInfoData = cartInfo.data;
    const manejable = cartInfoData.articles;
    cartList = manejable;
    appendCartItems(manejable);
}



//Almaceno las secciones del HTML destinadas al carrito en variables para appendear contenido.
let cartItems = document.getElementById('cartItems');
let cartPayment = document.getElementById('cartPayment');
let total;

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
            <input class="cartero" id=`+i+` data-index-number="`+i+`" type="number" placeholder="`+cartItem.count+`"
            min="0"><span class="d-block ml-5 font-weight-bold">`+cartItem.unitCost+`</span><span id="subTotal" class="d-block ml-5 font-weight-bold">Subtotal: `+subTotal+`</span></div>
        </div>
        <hr>
        <span id="total" class="d-block ml-5 font-weight-bold"></span>
        `

        cartItems.innerHTML = htmlContentToAppend;
    }

    quantityFunctionalities();
    

}




//Ahora tengo que hacer las funcionalidades para que se sume al total segun la cantidad.

function quantityFunctionalities(){
    let quantity  = document.querySelectorAll('input.cartero');
            for (cant of quantity){
                cant.addEventListener("input",function(e){
    //Inicializo las variables que voy a necesitar:
                let input = e.target
                let actualValue = input.value;
                let dataquantity = input.dataset.indexNumber;
    //Funcionalidades:
                cartList[dataquantity].count = +actualValue;
})}

const priceArr = Array.from(quantity).map(item => parseInt(item.value));
console.log(priceArr);
}

let quantity  = document.querySelectorAll('input.cartero');
const priceArr = Array.from(quantity).map(item => parseInt(item.value));
console.log(priceArr);