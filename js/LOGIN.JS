function validainputs(){
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let ingreso=document.getElementById("login");
    let emailval= email.value.trim();//ELIMINA ESPACIOS
    let passwordval=password.value.trim();
    let passwordok="0000";

    //SECCION DE VALIDA DE CAMPOS FORMULARIO CAMPO
    var errorf=0; //SI NO SALE EVENTO ERROR

    //EMAIL
    if (emailval===""){
        ocErrorform(email,"por favor ingrese su correo");
        errorf=1;
    }else if (!valEmail(emailval)){
        ocErrorform(email,"email no valido ");
        errorf=1;
    }else{
        exitosform(email);
    }

    //CONTRASEÑA INGRESADA NESECITA VALIDAR 
    if (passwordval===""){
        ocErrorform(password,"por favor ingrese su contraseña");
        errorf=1;
    }else if(passwordval!=passwordok){
        ocErrorform(password,"Contraseña no valida");
        errorf=1;
    }else{
        exitosform(password);
    }


    //INGRESO EXITOSO
if (errorf==1){
    ingreso.addEventListener("click",function(){
        swal("ACCESO DENEGADO !!", "Click OK para continuar", "success");
    })
}
return false;

// función para validar errores en formularios
function ocErrorform (input, message){
    let formControl=input.parentElement;
    let small=formControl.querySelector("small");
    formControl.className="form-control error";
    small.innerText =message; 
}
 // función para ingreso exitoso en formularios
    function exitosform (input){
        let formControl=input.parentElement;
        formControl.className="form-control success";
    }
function valEmail(email){
return /^[a-z0-9_\.-]+@[a-z\.-]+\.[a-z\.]{2,6}$/.test(email);
}


}