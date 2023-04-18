const input = document.getElementById("inputId")


const itens = document.querySelectorAll("#listId li")

input.addEventListener("keyup", function() {

  let inputValue = this.value.toLocaleLowerCase();

        for(item of itens) {
            let itemMinusculas = item.innerHTML.toLowerCase();
            
            if(itemMinusculas.indexOf(inputValue) === -1) {
               item.classList.add("oculto");
            } else{
                item.classList.remove("oculto");
            }

        }
    });

