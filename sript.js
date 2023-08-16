let form = document.querySelector('form')
let username = document.querySelector("#username")
let email = document.querySelector("#email")
let senha = document.querySelector("#senha")
let corfimarSenha = document.querySelector("#confirmacao-senha")

form.addEventListener("submit", (e) =>{
    e.preventDefault()

    checkInput()
})

function checkInput(){
    const usernameValue = username.value
    const emailValue = email.value
    const senhaValue = senha.value
    const corfimarSenhaValue = corfimarSenha.value

    if(usernameValue === ""){
        error(username, "O campo usuário é obrigatorio!")
    }
    else{
        success(username)
    }

    if(emailValue === ""){
        error(email, "O campo email é obrigatorio!")
    }
    else if(!checkEmail(emailValue)){
        error(email, "O email não é valido!")
    }
    else{
        success(email)
    }

    if(senhaValue === ""){
        error(senha, "O campo senha é obrigatorio!")
    }
    else if(senhaValue.length < 8){
        error(senha, "A senha deve ter no mínimo 8 caracteres!")
    }
    else{
        success(senha)
    }

    if(corfimarSenhaValue === ""){
        error(corfimarSenha, "O campo confirmação de senha é obrigatorio!")
    }
    else if(corfimarSenhaValue !== senhaValue){
        error(corfimarSenha, "As senhas não conferem!")
    }
    else{
        success(corfimarSenha)
    }

    const formControls = form.querySelectorAll(".form-control")
    const formIsValid = [...formControls].every((formControl) =>{
        return (formControl.className === "form-control success")
    })

    if(formIsValid){
        alert("Formulário enviado com sucesso!")
    }
}

function error(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector("small")

    //mensagem de texto
    small.innerText = message

    //classe error
    formControl.className = "form-control error"
}

function success(input){
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }