//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
     getJSONData(PRODUCTS_URL)
    .then((result) => result.data)
    .then((productdata) => mostrarProductos(productdata));
});

var actualListadoProductos = [];
var criterioActual = [];

function mostrarProductos(productdata){

    let productosAMostrar = "";

for(let i = 0; i < productdata.length; i++){
        let producto = productdata[i];

productosAMostrar += `
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
document.getElementById("produto").innerHTML = productosAMostrar;
}

`/* Ejemplo de filtrado para usar luego: data.filter(function(x){ return x.Price >= 250 && x.Price <= 800}); */`

function rangoDePrecio(minRango, maxRango){
    minRango = document.getElementById("minPrecio").value;
    maxRango = document.getElementById("maxPrecio").value;
    actualListadoProductos = productdata
    arr = actualListadoProductos;
    arr.filter(arr => minRango < arr.cost < maxRango);
    console.log(arr);
}

