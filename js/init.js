const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

function busqueda (arrprod){
  let busq = document.getElementById("search").value;
   return arrprod.filter(prod => prod.name.toLowerCase().indexOf(busq.toLowerCase()) > -1 );
  }



document.addEventListener("DOMContentLoaded", function(e){
var logeado = localStorage.getItem("nombre");
              if (logeado === "" || logeado === null){
            window.location.href = "login.html";
              }
 

//Elementos de la barra de navegacion.

let navbar = document.getElementsByClassName("container d-flex flex-column flex-md-row justify-content-between");
let nav = navbar[0];

nav.innerHTML += `<label for="site-search" class="py-2 d-none d-md-inline-block" id="labelbuscar">Buscar:</label>
                  <input type="search" id="search" name="q" class="py-2 d-none d-md-inline-block">
                  <div class="btn-group">
                  <a type="button" class="btn btn-primary" id="usuarioLogeado" href="my-profile.html">`+logeado+`</a>
                  <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span class="sr-only">Toggle Dropdown</span>
                  </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="cart.html">Mi Carrito</a>
                  <a class="dropdown-item" href="my-profile.html">Mi perfil</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" id="cerrar" href="index.html" onclick="cerrarSesion()">Cerrar sesión</a>
                  </div>
                </div>`
});

function cerrarSesion(){
    localStorage.removeItem("nombre")
}
