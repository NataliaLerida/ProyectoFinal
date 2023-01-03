let elementosAcordeon = document.getElementsByClassName("acordeon");
            
            for (let i = 0; i< elementosAcordeon.length; i++){
                elementosAcordeon[i].addEventListener("click",function(){
                this.classList.toggle("active");
                let contenidotextos = this.nextElementSibling;
                if (contenidotextos.style.display =="block"){
                    contenidotextos.style.display = "none";
                } else{
                    contenidotextos.style.display = "block";
                }
                });
            }


window.addEventListener('load', ()=>{

    const form = document.getElementById('formulario')
    const nombre = document.getElementById('nombre')
    const apellidos = document.getElementById('apellidos')
    const descripcion = document.getElementById('descripcion')
    const email = document.getElementById('correo electronico')
    const telefono = document.getElementById('telefono')
    const enviar = document.getElementById('enviar')

    form.addEventListener('submit',(e) =>{
      e.preventDefault()  
      validaCampos()

    })
    
    const validaCampos = ()=> {
        //Introducir los valores que ingresa el usuario

        const nombreValor = nombre.value.trim()
        const apellidosValor = apellidos.value.trim()
        const descripcionValor = descripcion.value.trim()
        const emailValor = email.value.trim()
        const telefonoValor = telefono.value.trim()
        
        if(nombreValor === ''){
            console.log ('campo vacio')
            validaFalla(nombre, 'Campo vacio')

        }else {
            console.log(nombreValor)
            validaOk(nombre)
        }

        //validamos campo email
        if(!emailValor){
            validaFalla(email, 'campo vacio')

        }else if(!validaEmail(emailValor)){
            validaFalla(email, 'Email no es valido')
        }else {
            validaOk(email)
        }
    }

    const validaFalla =(input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector ('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'

    }

    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email)=> {
       
    }

})
    