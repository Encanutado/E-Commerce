//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL)
            .then((result) => result.data)
            .then((productinfodata) =>{
                showImages(productinfodata.images)


});
});

function showImages(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imagepot = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imagepot + `" alt="">
            </div>
        </div>
        `

        document.getElementById("illustrImages").innerHTML = htmlContentToAppend;
    }
}


/*  <i class="fas fa-star"></i>  */