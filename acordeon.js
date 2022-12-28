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