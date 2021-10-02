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
        <div class="carousel-item active">
                <img class="d-block w-100" src="` + imagepot[1] + `" alt="">
        </div>
        <div class="carousel-item">
                <img class="d-block w-100" src="` + imagepot + `" alt="">
        </div>
        `

        document.getElementById("illustrImages").innerHTML = htmlContentToAppend;
    }
}

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

const relatedProductsData =  async() => {
    const products_info_data = await getJSONData(PRODUCT_INFO_URL);
    const related_products_data = await getJSONData(PRODUCTS_URL);
    console.log(products_info_data),
    console.log(related_products_data);
}

relatedProductsData();