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
    return arrprod.sort(function (a, b) {
        let precioa = parseInt(a.cost)
        let preciob = parseInt(b.cost)
        return preciob - precioa;
    })
}
function ordmenorPrecio(arrprod) {
    return arrprod.sort(function (a, b) {
        let precioa = parseInt(a.cost)
        let preciob = parseInt(b.cost)
        return precioa - preciob;
    })
}

function ordenarRelevancia(arrprod){
    return( arrprod.sort(function(a, b) {
            let aRel = parseInt(a.soldCount);
            let bRel = parseInt(b.soldCount);

            if ( aRel > bRel ){ return -1; }
            if ( aRel < bRel ){ return 1; }
            return 0;
        }))
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
        })
        .catch(handleErrors);
});