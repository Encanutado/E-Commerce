//Pedido de informacion al JSON conteniendo los elementos del carrito precargados.
document.addEventListener("DOMContentLoaded", function(e){
    cartData();
    formData();

})


//Inicializo las variables que voy a necesitar:

let cuenta = document.getElementById('cuenta');

//regex para la validación:
let regexCard = '^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$';
let regexName = '';

//Form de Pago con Tarjeta:
let cardName = document.getElementById('cardName').value;
let cardNumber = document.getElementById('cardNumber').value;
let cardDate = document.getElementById('cardDate').value;

let cardPremium = document.getElementById('premiumCard').value;
let cardExpress = document.getElementById('expressCard').value;
let cardStandard = document.getElementById('standardCard').value;

//Form de pago con cuenta Bancaria:

let accountName = document.getElementById('accountName').value;
let accountNumber = document.getElementById('accountNumber').value;
let accountEmail = document.getElementById('accountEmail').value;


let cartList;


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
            min="0"><span class="d-block ml-5 font-weight-bold">`+cartItem.unitCost+`</span><span id="subTotal`+i+`" class="d-block ml-5 font-weight-bold"></span></div>
        </div>
        <hr>
        
        `

        cartItems.innerHTML = htmlContentToAppend;
    }

    quantityFunctionalities();
    
}




//Ahora tengo que hacer las funcionalidades para que se sume al total segun la cantidad.

function quantityFunctionalities(){
    let quantity  = document.querySelectorAll('input.cartero');
    let total = 0;
    let subTotal1 = 0;
    let subTotal2 = 0;

            for (cant of quantity){
                cant.addEventListener("input",function(e){
    //Inicializo las variables que voy a necesitar:
                let input = e.target
                let actualValue = input.value;
                let dataquantity = input.dataset.indexNumber;
                let htmlSub = document.getElementById(`subTotal`+dataquantity+``);
                let htmlTot = document.getElementById('total');
                let htmlSubToAppend = '';
                /* let premiumDelivery = (subTotal * 0.15);
                let expressDelivery = (subTotal * 0.7);
                let standardDelivery = (subTotal * 0.5); 
                let radioPremium = document.getElementById('premium');
                let radioExpress = document.getElementById('express'); */
                
    //Funcionalidades:
                cartList[dataquantity].count = +actualValue;
                
                if (dataquantity === '1'){
                    subTotal2= (actualValue * (cartList[dataquantity].unitCost * 40))
                    htmlSubToAppend += `Subtotal: UYU$ `+subTotal2+``;
                }else {
                    subTotal1 = (actualValue * cartList[dataquantity].unitCost);
                    htmlSubToAppend += `Subtotal: UYU$ `+subTotal1+``;                    
                }

                total = subTotal2+ subTotal1;

                    
    //Mostrar en pantalla:
                
                htmlTot.innerHTML = `Total: UYU$ `+total+``
                htmlSub.innerHTML = htmlSubToAppend;

                
})}
}

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
} 
