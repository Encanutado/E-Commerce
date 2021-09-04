//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.


document.addEventListener("DOMContentLoaded", function (e) {
     getJSONData(PRODUCTS_URL)
    .then((result) => result.data)
    .then((productdata) => mostrarProductos(productdata));
});



function mostrarProductos(arrprod){

    let productosAppend = '';

for(let i = 0; i < arrprod.length; i++){
        let producto = arrprod[i];

        productosAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    <div class="col-3">
                        <img src="` + producto.imgSrc + `" alt="` + producto.description + `" class="img-thumbnail">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ producto.name +`</h4>
                            <small class="text-muted">` + producto.soldCount + ` artículos</small>
                        </div>
                            <small class="text-muted">` + producto.cost + " " + producto.currency + ` </small>
                        <p class="mb-1">` + producto.description + `</p>
                        
                    </div>
                </div>
            </a>
            `
}
    document.getElementById("produto").innerHTML = productosAppend;
}

function ordmenorPrecio(arrprod) {
    arr = arrprod.sort(function (a,b){
    let precioa = parseInt(a.cost)
    let preciob = parseInt(b.cost)

    return precioa-preciob;
})
}

function ordmenorPrecio(arrprod) {
    arr = arrprod.sort(function (a,b){
    let precioa = parseInt(a.cost)
    let preciob = parseInt(b.cost)

    return preciob-precioa;
})
}

mostrarProductos(productdata);

document.addEventListener("DOMContentLoaded", function (e) {
    document.getElementById("sortAsc").addEventListener("click", function(){
        mostrarProductos(ordmenorPrecio(productdata));
    });
})

