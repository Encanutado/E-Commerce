//Funcionalidades para mostrar la información de los productos de manera dinámica. (Nombre, descripción, precio, categoría, e imágenes.)

let productInformation = {}

document.addEventListener("DOMContentLoaded", function(e){
        getJSONData(PRODUCT_INFO_URL)
            .then((result) => result.data)
            .then((productInfoData) =>{

                productInformation = productInfoData.data
                showImages(productInfoData.images)

                productName.innerHTML = productInfoData.name;
                productDescr.innerHTML = productInfoData.description;
                productCost.innerHTML = (productInfoData.cost + productInfoData.currency);
                productSoldCount.innerHTML = productInfoData.soldCount;
                productCategory.innerHTML = productInfoData.category;
                relatedProduct.innerHTML = productInfoData.relatedProducts;


});
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL)
        .then((result) => result.data)
        .then((productComments) =>{

            showComments(productComments);
        });
});


let productName = document.getElementById("productName");
let productDescr = document.getElementById("productDescription");
let productCost = document.getElementById("costo");
let productSoldCount = document.getElementById("cantidadVendidos");
let productCategory = document.getElementById("productCategory");
let relatedProduct = document.getElementById("relatedProducts");


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

//Sección dedicada a mostrar los comentarios y la puntuación como estrellas.

function showComments(arr){
    let htmlContentToAppend ="";

    for(let i=0; i < arr.length; i++){
        let comment = arr[i];

        htmlContentToAppend += `
        <div class="container">
    <div class="row">
        <div class="col-8">
            <div class="card card-white post">
                <div class="post-heading">
                    <div class="float-left meta">
                        <div class="title h5">
                            <p id="usuario"><b>+`+ comment.user +`+</b></p>
                        </div>
                        <h6 class="text-muted time">`+comment.dateTime +`</h6>
                    </div>
                </div>
                <div class="post-description">
                    <p>`+comment.description+`</p>
                    <label for="score" class="btn">Puntaje
                    <input type="range" min="0" max="5" id="score">
                    </label>
                    <p class="score">Puntuación: `+showStars(comment.score)+ blockStars(5-comment.score)+`</p>
                </div>
            </div>
        </div>

    </div>
</div>`
    }
    document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}


function blockStars(stars){
    let res = "";
    for (i=0; i < stars; i++){
 res += `<span class="fa fa-star"></span>`}
return res;
}

function showStars(stars){
    let res = "";
    for (i=0; i < stars; i++){
 res += `<span class="fa fa-star checked"></span>`}
return res;
}



//Funciones dedicadas a mostrar los productos relacionados enlazando los dos arrays.



document.addEventListener("DOMContentLoaded", function(e){
const relatedProductsData =  async() => {
    const products_info_data = await getJSONData(PRODUCT_INFO_URL);
    const products_data = await getJSONData(PRODUCTS_URL);
    const products_info_result = products_info_data.data;
    const products_result = products_data.data;
    let   related_products = products_info_result.relatedProducts;


    console.log(products_info_result);
    console.log(products_result);
    console.log(related_products);
    
    //Filtro el array de productos en base a los productos relacionados con la funcion declarada mas abajo.

    let result = filterRelatedProducts(products_result, related_products)
    console.log(result);
    
    
}
relatedProductsData();
});

function filterRelatedProducts(arr1, arr2){
    let result = arr2.map((item) => arr1[item]);
    return result;
}
