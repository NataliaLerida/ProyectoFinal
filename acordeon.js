//quienes somos

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

//servicios

let slideIndex = 1;
            showSlides(slideIndex);
            
            // Next/previous controls
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            // Thumbnail image controls
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";
              dots[slideIndex-1].className += " active";
            }
            

//formulario

//nombre 
if (document.formulario_prueba.nombre.value =='' || document.formulario_prueba.nombre.value.length <= 4){

  alert('No has rellenado el campo nombre');

} else {
  
}

//apellido
if (document.formulario_prueba.apellido.value =='' || document.formulario_prueba.apellido.value.length <= 4){

  alert('No has rellenado el campo apellido');

} else {
 
}

//sugerencias
if(document.formulario_prueba.comentario.value==""){
  
  alert("No has rellenado el campo sugerencias");

  } else{
    if(document.formulario_prueba.comentario.value.length <=400);  
  }

 //Email
  if (document.formulario_prueba.email =='') {
   alert('No has rellenado el campo email');

  }else{
   var email=document.formulario_prueba.email.value;
   var expreg=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

   if (!(expreg.test(email))) {
   alert("El email es incorrecto");

  }else{
    
  }

 } 

//telefono
if(document.getElementById('telefono').value==""){

  alert("No has rellenado el campo teléfono");

  } else{
  }

if(document.formulario_prueba.submit==""){
  alert("Tienes que rellenar todos  los campos");
  }
                      




  
 
           