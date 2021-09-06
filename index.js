//primer dado izquierdo

let randomNumber1 = Math.floor(Math.random() * 6) + 1; //doy un numero aleatorio dentro del rango

let randomImage1 = "dice" + randomNumber1 + ".png"; // doy una imagen aleatoria de 1 a 6

let randomImageSource = "./images/" + randomImage1; //tendremos /images.dice1.png a dice6.png

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource); //tomo el elemento y cambio el src 


//segundo dado derecho

let randomNumber2 = Math.floor(Math.random() * 6) + 1; //genero un num aleatorio

let randomImage2 = "dice" + randomNumber2 + ".png"; //genero una foto aleatoria en el rango y lo concatenamos 

let randomImageSource2 = "./images/" + randomImage2; //asocio la foto aleatoria a la carpeta images

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); 

//resultado del ganador



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "👏Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!👏"; 
}
else{
    document.querySelector("h1").innerHTML = "This is a tie!👀";
}