//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



function mostrarProductos(arr){

    let productosAppend = '';

for(let i = 0; i < arr.length; i++){
        let producto = arr[i];

        productosAppend += `
        <div class="card" style="width: 18rem;">
        <img src="`+producto.imgSrc+`" class="card-img-top" alt="Product photo">
        <div class="card-body">
          <h5 class="card-title">`+producto.name+`</h5>
          <p class="card-text">` + producto.description + `</p>
          <small class="text-muted">` + producto.soldCount + ` artículos vendidos</small>
          <small class="text-muted">` + producto.cost + " " + producto.currency + ` </small>
          <a href="/product-info.html" class="btn btn-primary">Ver productos.</a>
        </div>
      </div>

        `
}
    document.getElementById("produto").innerHTML = productosAppend;
}



function ordmayorPrecio(arrprod) {
    return arrprod.sort((a, b) => b.cost - a.cost)
    }

function ordmenorPrecio(arrprod) {
    return arrprod.sort((a, b) => a.cost - b.cost)
    }

function ordenarRelevancia(arrprod){
    return( arrprod.sort((a, b) => b.soldCount- a.soldCount))}

function rangoPrecio(arrprod){
    let precio1 = document.getElementById('minPrecio').value;
    let precio2 = document.getElementById('maxPrecio').value;

    if((precio2 === "")||(precio2 === undefined)){
    alert("Debe ingresar un precio para poder filtrar los productos.");
} else {
    return arrprod.filter(costo => (costo.cost > precio1) && (costo.cost < precio2));
}}

function limpiar(productdata){
    document.getElementById('minPrecio').value = "";
    document.getElementById('maxPrecio').value = "";
    mostrarProductos(productdata);
}

document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(PRODUCTS_URL)
        .then((result) => result.data)
        .then((productdata) => {
            mostrarProductos(productdata);
            document.getElementById("sortDescPrice").addEventListener("click", function () {
                mostrarProductos(ordmenorPrecio(productdata));
            });
            document.getElementById("sortAscPrice").addEventListener("click", function () {
                mostrarProductos(ordmayorPrecio(productdata));
            })
            document.getElementById('sortByRelevance').addEventListener("click", function (){
                mostrarProductos(ordenarRelevancia(productdata))
})
            document.getElementById('btnFilter').addEventListener("click", function (){
                mostrarProductos(rangoPrecio(productdata))
})
             document.getElementById('btnClear').addEventListener("click", function (){
                mostrarProductos(limpiar(productdata));
})
            document.getElementById('search').addEventListener('keyup', function(){
                mostrarProductos(busqueda(productdata));
                
})

        })
        
});


