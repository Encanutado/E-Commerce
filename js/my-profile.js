//Inicializo las variables que voy a necesitar.

let htmlPiece = document.getElementById('editProfile');
let usersSessionList = [];

document.addEventListener("DOMContentLoaded", function (e) {

});


function deleteProfile(){
    var respuesta = confirm('Esta seguro que desea eliminar su perfil?');
    if (respuesta){
    localStorage.removeItem('formData');
    window.location.href='my-profile.html';
    }
    else{
        alert('Usted ha decidido no eliminar su perfil.')
    }
}

function appendEditProfile(){
    let htmlContentToAppend = `<div class="wrapper fadeInDown">
    <div id="formContent">
        <div class="fadeIn first">
            <h1>Edita tu perfil</h1>
        </div>
        <form role="form" onsubmit="">
            <input type="text"
                   id="fname"
                   class="fadeIn second"
                   name="firstName"
                   placeholder="Tu Nombre">
            <input type="text"
                   id="lname"
                   class="fadeIn third"
                   name="lastName"
                   placeholder="Tu apellido.">
            <input type="text"
                   id="email"
                   class="fadeIn third"
                   name="usrMail"
                   placeholder="Tu Email.">
            <input type="text"
                   id="usrTel"
                   class="fadeIn third"
                   name="usrTel"
                   placeholder="Un teléfono de contacto.">
            
            <input id="formProfile" onclick="saveProfile(event)" type="submit" class="fadeIn fourth" value="Guardar Datos.">
        </form>
        </div></div>
`;

    htmlPiece.innerHTML = htmlContentToAppend;

}

function deleteProfileEdition(){
    htmlContentToAppend = ""
    htmlPiece.innerHTML = htmlContentToAppend;
}

function saveProfile(e){
    console.log('Lo hizo');

    let formData = {
        fname: document.getElementById('fname').value,
        lname: document.getElementById('lname').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('usrTel').value,

    }

    localStorage.setItem('formData', JSON.stringify(formData));
    let usrData = localStorage.getItem('formData');
    console.log(usrData);
    e.preventDefault();

    
    deleteProfileEdition();

    window.location.href="my-profile.html"
 
}

function dispData(){
    if(localStorage.getItem('formData')){
    let displayData = JSON.parse(localStorage.getItem('formData'));
    let output1 = document.getElementById('output1');
    let output2 = document.getElementById('output2');
    let output3 = document.getElementById('output3');
    let output4 = document.getElementById('output4');
    let {fname, lname, email, tel} = displayData;
    output1.innerHTML= fname;
    output2.innerHTML= lname;
    output3.innerHTML= email;
    output4.innerHTML= tel ;
    
    console.log(displayData)
}    
}

dispData();