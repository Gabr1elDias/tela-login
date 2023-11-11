var btnLogin = document.querySelector('#btn-login');
var btnCadastro = document.querySelector('#btn-cadastro');
var validacao = document.querySelectorAll('[required]')


            // VERIFICA SE OS CAMPOS ESTÃO PREENCHIDOS 

function Validar(event){
    const field = event.target

    function verifyError(){
        let foundError = false;

        for(let error in field.validity){

            if(error != 'customError' && field.validity[error]){
                foundError = error
            }
        }     
        return foundError;
    }

    const error = verifyError();
    console.log("Error Exists: ", error)

    if(error){
        field.setCustomValidity("Este campo é obrigatório")
    } else {
        field.setCustomValidity("")
    } 
}

for(field of validacao){
    field.addEventListener("invalid", Validar)
}



            // ALTERNA ENTRE O LOGIN E O CADASTRO


var body = document.querySelector('body');


btnLogin.addEventListener('click',function(){
    body.className = "login-js";
});

btnCadastro.addEventListener('click', function(){
    body.className = "cadastro-js";
});

