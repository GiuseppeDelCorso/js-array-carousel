let immagineCorrente = 0;
const immagini = document.querySelectorAll("#container img");
immagini[immagineCorrente].classList.add("active")


document.getElementById("avanti").addEventListener("click", function(){

 if (immagineCorrente < immagini.length -1 ){
    
    immagini[immagineCorrente].classList.remove("active")
    immagineCorrente++;
    immagini[immagineCorrente].classList.add("active")
 }

});

document.getElementById("indietro").addEventListener("click", function(){

    if (immagineCorrente > 0){

    immagini[immagineCorrente].classList.remove("active")
    immagineCorrente--;
    immagini[immagineCorrente].classList.add("active")

}
});


