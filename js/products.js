//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.



function mostrarProductos(arr){

    let productosAppend = '';

for(let i = 0; i < arr.length; i++){
        let producto = arr[i];

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

function ordmayorPrecio(arrprod) {
    return arrprod.sort((a, b) => a.cost - b.cost)
    }

function ordmenorPrecio(arrprod) {
    return arrprod.sort((a, b) => b.cost - a.cost)
    }

function ordenarRelevancia(arrprod){
    return( arrprod.sort((a, b) => b.soldCount- a.soldCount))}

function rangoPrecio(arrprod){
    let precio1 = document.getElementById('minPrecio').value;
    let precio2 = document.getElementById('maxPrecio').value;
    return arrprod.filter(costo => (costo.cost > precio1) && (costo.cost < precio2));
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

        })
        
});