//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL)
            .then((result) => result.data)
            .then((productdata) =>{});

});

/*  <i class="fas fa-star"></i>  */