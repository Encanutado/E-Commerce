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


/*  <i class="fas fa-star"></i>  */